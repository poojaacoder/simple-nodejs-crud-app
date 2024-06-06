
const emp = require('../models/emp')

async function deleteEmployee(req){
    await emp.findByIdAndDelete(req.body.id).then(()=>{return "deleted successfully"}).catch(()=> "Error dur9ng deletion of record")
}

module.exports = deleteEmployee()