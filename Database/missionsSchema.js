const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let missionsSchema = new Schema({
    status: { type: Number }, /* isPuplished [0 , 1 , 2] 0 => save without puplish, 1 => puplish, 2 => closed mission */
    title: { type: String },
    phase: { type: Number }, /* 0, 1 , 2, 3  */
    serviceLocation: { type: Number },  /* 0, 1 */
    address: { type: String },
    termsAndCondition: { type: String },
    acceptTerms: { type: Boolean },
    experience: { type: String },
    description: { type: String },
    keywords: [{
        type: Object
    }],
    userId: { type: String },
    budget: { type: Number },
    isDeleted: { type: Number } // 0 or 1
    // pinding: { type: Number }
})


let Missions = mongoose.model('Missions', missionsSchema)

module.exports.Missions = Missions;