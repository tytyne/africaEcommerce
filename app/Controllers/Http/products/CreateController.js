'use strict'
const Product = use("App/Models/Product")

class CreateController {
    async create({request,response,auth}){
        const user= await auth.getUser()
        const{name,price,size,description}=request.all()
        const product = await Product.create(request.all())
        product.user_id=user.id
        await product.save()
        response.status(200).json(product)
    
    }
}

module.exports = CreateController
