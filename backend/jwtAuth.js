//middleware for paths that require user authorisation.
const jwt = require('jsonwebtoken')
const Users = require('./model/users')

const authprotection = async(request,response,next) => {
    const auth = request.headers.authorization

    if(!auth) {
        return response.status(401).json({error: 'Authorization token required'})
    }

    const token = auth.replace('Bearer ', '')
    
    console.log(token)
    try{
        const {_id} = jwt.verify(token, process.env.SECRET_KEY)
        request.user = await Users.findById({_id}).select('_id')
        next()
    } catch (error) {
        response.status(401).json({error: 'Request is not Authorized'})
    }
}

module.exports = authprotection