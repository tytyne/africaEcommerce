'use strict'
const User= use('App/Models/User')
const Role= use('App/Models/Role')

class RegisterController {
    async register({request,auth,response}){
        
  
    
    let user = await User.create(request.all())
    //asign to a role
    await user.save()
   
    let token = await auth.generate(user)

    Object.assign(user, token)

    return response.json(user)
    }
}

module.exports = RegisterController
