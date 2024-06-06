
const emp = require('../models/emp')

async function getEmployee(req){
    var emp = await emp.findById(req.param.id)
    return emp
}

module.exports = getEmployee()