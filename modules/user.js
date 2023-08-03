const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;
const ObjectId = mongodb.ObjectId;
const Cart = require('./cart');

class User {
    constructor(name, email, cart, id){
        this.name = name;
        this.email = email;
        this.cart = cart;
        this._id = id;
    }

    save(){
        const db = getDb();
        return db.collection('users').insertOne(this)
    }

    static findById(userId){
        const db = getDb();
        return db.collection('users').findOne({_id: new ObjectId(userId)}).then(user => {
            console.log(user);
            return user;
        }).catch(err => {
            console.log(err);
        });
    }

    addToCart(product){
        
        const updatedCart = { items: [{productId: new ObjectId(product._id), quantity: 1}]};
        const db = getDb();
        return db.collection('users').updateOne({_id: new ObjectId(this._id)}, {$set: {cart: updatedCart}});

        // if(this.cart){
        //     //cart is not empty
        //     const isExist = this.cart.items.find(p => p._id === product._id);
        //     if(isExist){
        //         //product is existing in the cart
        //         const productIndex = this.cart.items.findIndex(product._id);
        //         this.cart.items[productIndex].qty += 1;
        //         this.cart.totalPrice += product.price;
        //     }
        //     else {
        //         //product is not existing in the cart
        //         product.qty = 1;
        //         this.cart.totalPrice += product.price;
        //         this.cart.items.push(product);                
        //     }
        // }
        // else {
        //     //cart is empty
        //     cart = {
        //         items: [],
        //         totalPrice: 0
        //     };
        //     product.qty = 1;
        //     this.cart.totalPrice += product.price;
        //     this.cart.items.push(product);     

        // }
    }
}

module.exports = User;