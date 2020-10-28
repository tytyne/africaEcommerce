'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.integer('User_id').unsigned().references("id").inTable("users")
      table.string("name")
      table.integer("price")
      table.integer("size")
      table.string("description")
      table.enum("currency",["FRW","US"]).defaultTo("FRW")
    
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
