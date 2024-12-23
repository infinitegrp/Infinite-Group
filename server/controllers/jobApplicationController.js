const JobApplication = require('../models/JobApplication');
const Careers = require('../models/careers');
const archiver = require('archiver');
const path = require('path');
const fs = require('fs');


const submitJobApplication = async (req, res) => {
  console.log('submitJobApplication');
  
  const { 
    firstName, middleName, lastName, email, linkedInId, 
    country, highestQualification, contactNumber, whatsAppNumber ,careerId
  } = req.body;

  if (!careerId) {
    return res.status(400).json({ message: 'Career ID is required' });
  }

  if (!req.file) {
    return res.status(400).json({ message: 'CV file is required' });
  }


  if (!firstName || !lastName || !email || !linkedInId || !country || 
      !highestQualification || !contactNumber || !whatsAppNumber) {
    return res.status(400).json({ message: 'All fields except middle name are required' });
  }

  try {
    const newJobApplication = await JobApplication.create({
      firstName,
      middleName,
      lastName,
      email,
      linkedInId,
      country,
      highestQualification,
      contactNumber,
      whatsAppNumber,
      cv: req.file.filename, 
      careerId
    });


    await Careers.findByIdAndUpdate(careerId, {
      $push: { applicants: newJobApplication._id }
    });

    res.status(201).json({
      message: 'Job application submitted successfully',
      application: newJobApplication,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getApplicants = async (req, res) => {
  console.log('getApplicants');
  
  const { page = 1, perPage = 10, sortBy = 'createdAt', order = 'desc', search = '', careerId, qualification, status } = req.query;
  console.log('careerId',careerId);
  
  try {
    // const query = search ? { $text: { $search: search } } : {};
    const query = {
      ...(search && { firstName: new RegExp(search, 'i') }),
      ...(careerId && { careerId }),
      ...(qualification && { highestQualification: new RegExp(qualification, 'i') }),
      ...(status && { status }),
    };
    const options = {
      page: parseInt(page),
      limit: parseInt(perPage),
      sort: { [sortBy]: order === 'asc' ? 1 : -1 },
      populate: 'careerId',
    };
    const result = await JobApplication.paginate(query, options);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching applicants', error: err });
  }
};

const updateApplicantStatus = async (req, res) => {
  const { id } = req.params;
  const { newStatus } = req.body;
  try {
    const application = await JobApplication.findByIdAndUpdate(id, { status: newStatus }, { new: true });
    res.status(200).json(application);
  } catch (err) {
    res.status(500).json({ message: 'Error updating status', error: err });
  }
};



// const downloadAllCVs = async (req, res) => {
//   const archive = archiver('zip', { zlib: { level: 9 } });
//   res.setHeader('Content-Disposition', 'attachment; filename=all_cvs.zip');
//   res.setHeader('Content-Type', 'application/zip');

//   archive.pipe(res);

//   const applications = await JobApplication.find({}).select('cv');
//   applications.forEach((app) => {
//     if (fs.existsSync(app.cv)) {
//       archive.file(app.cv, { name: path.basename(app.cv) });
//     }
//   });

//   archive.finalize();
// };


const downloadAllCVs = async (req, res) => {
  try {
    const output = fs.createWriteStream('all_cvs.zip');
    const archive = archiver('zip', { zlib: { level: 9 } });

    archive.pipe(output);

    // Get all CV files
    const applications = await JobApplication.find({});
    applications.forEach((app) => {
      const filePath = path.join(__dirname, '../public', app.cv);
      if (fs.existsSync(filePath)) {
        archive.file(filePath, { name: path.basename(app.cv) });
      }
    });

    await archive.finalize();

    output.on('close', () => {
      res.download('all_cvs.zip', 'all_cvs.zip', (err) => {
        if (err) console.error('Error downloading file:', err);
        fs.unlinkSync('all_cvs.zip'); // Delete zip after sending
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error downloading all CVs', error });
  }
};


module.exports = { submitJobApplication,getApplicants, updateApplicantStatus,downloadAllCVs };
