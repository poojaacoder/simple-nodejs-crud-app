
const mongoose = require('mongoose')


const empSchema = new mongoose.Schema({

    empId :{
        type: Number,
        require : true
    },
    name :{
        type: String,
        require: true
    },
    designation:{
        type: String,
        require: true
    },
    joinDate: {
        type: Date,
        require : true
    },
    teamDetails: {
        type: teamSchema,
        require : true
    }
})

const teamSchema = new mongoose.Schema({
    teamId: {
        type: Number,
        require : true
    },
    teamName :{
        type: String,
        require : true
    }
})

module.exports = empData = mongoose.model('empData', empSchema)
module.exports = teamData = mongoose.model('teamData', teamSchema)