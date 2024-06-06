
const emp = require('../models/emp')

async function updateEmployee(req){
    var emp = await emp.findOneandUpdate(req.param.id, req.body)
    return "Emp Record updated successfully"
}

module.exports = updateEmployee()