'use strict'

const { all } = require("../../../Models/User")

const  User=use('App/Models/User')

class GetUserController {
    async all({request,response}){
    let users= await User.all()
    response.status(200).json(users)
}
}

module.exports = GetUserController
