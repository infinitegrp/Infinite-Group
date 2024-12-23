const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const careersSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    pay: {
      type: String,
    },
    linkedin_url: {
      type: String,
    },
    summary: {
      type: String,
      required: true,
    },
    dutiesAndResponsibilities: {
      type: [String],
    },
    workingConditions: {
      type: [String],
    },
    jobRequirements: {
      type: [String],
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobApplication'
      }],
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

careersSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Careers", careersSchema);
