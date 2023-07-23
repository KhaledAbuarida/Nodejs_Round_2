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

    static deleteProduct(id){
        //searching on the product in the cart
        const targetProduct = cart.products.find(p => p.id === id);
        const productIndex = cart.products.findIndex(p => p.id === id);
        if(targetProduct){
            //the product is found in the cart
            const productQuantityPrice = targetProduct.price * targetProduct.qty;
            cart.totalPrice -= productQuantityPrice;
            cart.products.splice(productIndex, 1);
        }
    }

}