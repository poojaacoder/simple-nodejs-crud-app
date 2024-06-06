
const emp = require('../models/emp')

async function addEmployees(req){
    var emp = new emp(req.body)
    await emp.save(function(err, result){
        if (err){
           throw err
        }
        else{
           return "successfully added emp entry"
        }
    })
}

module.exports = addEmployees()