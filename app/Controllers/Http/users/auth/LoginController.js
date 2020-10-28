'use strict'

const User= use('App/Models/User')

class LoginController {
    async login({request,auth,response}){
        let {email, password} = request.all();

        try {
          if (await auth.attempt(email, password)) {
            let user = await User.findBy('email', email)
            let token = await auth.generate(user)

            Object.assign(user, token)
            return response.json(user)
          }


        }
        catch (e) {
          console.log(e)
          return response.json({message: 'incorrect email or password!'})
        }
      }
    
}

module.exports = LoginController
