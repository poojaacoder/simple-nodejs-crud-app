
const response_json=  {
    status_code : 200,
    response : ""
}

function  success_response(response) {
response_json.response = response
return response_json
}

function error_response(){
response_json.response = "Internal Server Error"
return response_json
}

module.exports = { success_response, error_response}