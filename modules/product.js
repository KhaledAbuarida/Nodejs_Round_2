const products = [];

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
    }

    static showAll(){
        return products;
    }

}