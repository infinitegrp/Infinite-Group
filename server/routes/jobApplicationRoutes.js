// const { Router } = require('express');
// const { upload } = require('../middlewares/multer');
// const { submitJobApplication, getApplicants, updateApplicantStatus ,downloadAllCVs} = require('../controllers/jobApplicationController');
// const router = Router();


// router.post('/', upload.single('cv'), submitJobApplication);
// router.get('/', getApplicants);
// router.put('/:id', updateApplicantStatus);

// module.exports = router;



const { Router } = require('express');
const { upload } = require('../middlewares/multer');
const {
  submitJobApplication,
  getApplicants,
  updateApplicantStatus,
  downloadAllCVs,
} = require('../controllers/jobApplicationController');

const router = Router();

router.post('/', upload.single('cv'), submitJobApplication);
router.get('/', getApplicants);
router.put('/:id', updateApplicantStatus);
router.get('/download-all-cvs', downloadAllCVs);

module.exports = router;
