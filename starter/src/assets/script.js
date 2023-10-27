/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */


/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

const products = [
  {
    name: "Carton of Strawberries",
    price: 3.00,
    quantity: 0,
    productId: 100,
    image: '/images/strawberry.jpg'
  },

  {
    name: "Bag of Oranges",
    price: 4.00,
    quantity: 0,
    productId: 101,
    image: '/images/orange.jpg'
  },

  {
    name: "Bag of Cherries",
    price: 3.00,
    quantity: 0,
    productId: 102,
    image: '/images/cherry.jpg'
  }

]


/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/


function addProductToCart (productID) {
  for (let i = 0; i < products.length; i++) {
  if (products[i].productId === productID) {
    products[i].quantity += 1; 
  
  if (!cart.some(item => item.productId === productID)) {
      cart.push(products[i]);
  }
  break; //Exit loop once product is found
}
 }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

  function increaseQuantity(productID){
    for (let i = 0; i < products.length; i++) {
      if (products[i].productId === productID) {
        products[i].quantity += 1;
      }
    }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productID){
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productID) {
      products[i].quantity -= 1;
    }
    if (products[i].quantity === 0){
      cart.splice(cart.indexOf(products[i]), 1);
    }
  
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/


function removeProductFromCart(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      products[i].quantity = 0;
      cart.splice(cart.indexOf(products[i]), 1)
    }
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  let total = 0;
  cart.forEach (item => {
    total += item.price * item.quantity;
  })
  return total;
  }    

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  for (i = 0; i < cart.length; i++) {
    cart.splice(indexOf(cart[i]), 1);
  }
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

function pay(amount) {
  let grandTotal = cartTotal();
  let newTotal = amount - grandTotal;
  if (grandTotal > amount || amount > grandTotal) {
    return newTotal;
  } else {
    return 0;
  }
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
