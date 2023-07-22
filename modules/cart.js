let cart = null;

module.exports = class Cart {

    static save(product){
        if(cart){
            //cart is not empty
            const isExist = cart.products.find(p => p.id === product.id);
            if(isExist){
                //already existing in the cart
                product.qty += 1;
                cart.totalPrice += parseFloat(product.price);
            }
            else {
                //product is not exist --> first time adding to the cart
                product.qty = 1;
                cart.totalPrice += parseFloat(product.price);
                cart.products.push(product);
            }

        }
        else {
            //cart is empty
            cart = {
                products: [],
                totalPrice: 0   
            }
            product.qty = 1;
            cart.totalPrice = parseFloat(product.price);
            cart.products.push(product);
        }
    }

    static getCart(){
        return cart;
    }

}