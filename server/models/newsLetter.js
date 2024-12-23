const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');


const newsLetterSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true    
    }
},
{
    timestamps: true
})
newsLetterSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('NewsLetter', newsLetterSchema)