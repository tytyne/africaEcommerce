'use strict'
const User= use('App/Models/User')
class RegisterController {
    async register(request,auth,response){
        
        let user = await User.create(request.all())

        //generate token for user;
        let token = await auth.generate(user)

        Object.assign(user, token)

        return response.json(user)
    }
}

module.exports = RegisterController
