'use strict'

class registerUser {
  get rules () {
    return{
    firstname:"required",
    lastname:"required",
    email:"required|email|unique:users",
    password:"required|min:5"
    }
  }
    get messages(){
    return {
      // validation rules
      required: 'the {{field}} is required',
      email: "You must provide a valid email address.",
      min:'your {{field}} is minimum to 5 characters'
  }
  }
}


module.exports = registerUser
