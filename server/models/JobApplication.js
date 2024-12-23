const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const jobApplicationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/
  },
  linkedInId: {
    type: String,
  },
  country: {
    type: String,
    required: true
  },
  highestQualification: {
    type: String,
    required: true    
  },
  contactNumber: {
    type: String,
    required: true
  },
  whatsAppNumber: {
    type: String,
    required: true
  },
  cv: {
    type: String,     
    required: true
  },
  careerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Careers',
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Reviewed', 'Shortlisted', 'Rejected', 'Hired'],
    default: 'Pending',
  },
}, { timestamps: true });

jobApplicationSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('JobApplication', jobApplicationSchema);
