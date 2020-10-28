'use strict'
const Product=use("App/Models/Product")
const Database=use("Database")
class GetProductsController {
    async all({request,response,auth}){
        const user=await auth.getUser()
        const userId=user.id
     
        const products=await Product.query().whereNot('id',user.id).fetch()
        if(products.rows.length == 0){
            return response.status(404).json({message:"no products"})
        }    
       
        return response.status(200).json(products)
    

    }
}

module.exports = GetProductsController
