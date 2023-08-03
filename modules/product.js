const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;
const products = [];

module.exports = class Product {
    constructor(title, price, imageUrl, description, id, userId){
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this._id = id;
        this.userId = userId;
    }

    save(){
        const db = getDb();
        let dbObject;
        if(this._id)
        {
            dbObject = db.collection('products').updateOne({_id: new mongodb.ObjectId(this._id)}, {$set: this});
        }
        else {
            dbObject = db.collection('products').insertOne(this);
        }
        return dbObject.then(result => {
            console.log(result);
        }).catch(
            err => {
                console.log(err);
            }
        );
    }

    static showAll(){
        const db = getDb();
        return db.collection('products')
        .find()
        .toArray()
        .then(products => {
            console.log(products.length, 'products');
            return products;
        })
        .catch(err => {
            console.log(err);
        })
    }

    static findById(id){
        const db = getDb();
        return db.collection('products').find({_id: new mongodb.ObjectId(id)})
        .next()
        .then(product => {
            return product;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static deleteById(id){
        const db = getDb();
        return db.collection('products').deleteOne({_id: new mongodb.ObjectId(id)})
        .then(result => {
            console.log('Deleted');
        }).catch(err => {
            console.log(err);
        });
    }

}