'use strict'

class loginUser {
  get rules () {
    return{
    
    email:"required|email|unique:users",
    password:"required|"
    }
  }
    get messages(){
    return {
      // validation rules
      required: 'the {{field}} is required',
      email: "You must provide a valid email address."
  
      
  }
  }
}

module.exports = loginUser
