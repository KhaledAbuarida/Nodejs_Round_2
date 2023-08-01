# Online Shop
shop project using Nodejs & Expressjs that makes the admin push a product with its name and price and sample image URL and description about it.

# Features
- you can add products to your cart
- admin can add, edit and delete the product
- Product Catalog \w pagination
- Shopping Cart and Checkout
- Email Notifications
- Image Uploads
- user can see his cart with all products with their quantities and total price

## Installing Guide

### Installing npm
first, we write npm init
changing in the script section as follows:

`"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  },`
  
now we can run our app using npm start

### installing nodemon
first, we write npm install nodemon —save-dev
changing in the scripts section as follows:

`"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon  app.js"
  },`
  
now we can run our app using npm start
nodemon reruns the server when I save the file (now we don’t need to rerun the server manually when changing it happen)

