const products = [];
const getDb = require('../util/database').getDb;
module.exports = class Product {
    constructor(title, price, imageUrl, description){
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    save(){
        this.id = Math.random().toString();
        products.push(this);

        const db = getDb();
        db.collection('products').insertOne(this)
        .then(result => {
            console.log(result);
            }
        )
        .catch(
            err => {
                console.log(err);
            }
        );
    }

    static showAll(){
        return products;
    }

    static findById(id){
        const product = products.find(p => p.id === id);
        return product;
    }

    static deleteById(id){
        const productIndex = products.findIndex(p => p.id === id);
        products.splice(productIndex, 1);
    }

}