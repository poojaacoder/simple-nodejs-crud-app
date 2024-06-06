const router = require('express').Router
const response = require('../constants')
const getService = require('../src/getService')
const addEmployees = require('../src/postService')
const putService = require('../src/postService')
const deleteService = require('../src/deleteService')


router.get('/getEmployee/:id', async(req)=>{
    try{
        getResponse = await getService(req)
        res.send(getResponse)
    }
    catch{
        res.send("Error Fetching Employee id")
    }
})

//  post
router.post('/addEmployee', async(req,res)=>{
    try{
        addEmployees = await addEmployees(req)
        res.send(response.success_response(addEmployees))
    }
    catch{
        res.send(response.error_response)
    }

})

//  put
router.patch('/updateEmployee/:id', async(req, res)=>{
    try{
        putService = await putService(req)
        res.send(response.success_response(putService))
    }
    catch{
        res.send(response.error_response)
    }

})

// delete
router.delete('/deleteEmployee/:id', async(req, res)=>{
    try{
        deleteService = await deleteService(req)
        res.send(response.success_response(deleteService))
    }
    catch{
        res.send(response.error_response)
    }

})

module.exports =  router
