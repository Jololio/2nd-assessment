///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE// callbacks and functions make no sense to me, I hope this is normal at this point ☹

const summedPrice = cart.reduce((previousValue, currentValue) = previousValue + currentValue)
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE// check above comment on problem 1 next to code here
function calcFinalPrice(cartTotal, couponValue, tax){
    
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    const customer = {
        name: String
        age: Number
        personalRating: Number
        dinnersPerMonth: Number
    }

    The name one is important cause a restaraunt would need to know the customers that come in, would be a useful thing to know their name
    
    Age is important because kids would definitely order differently than elderly customers would, and it would be helpful to know which age groups order which foods
    
    personalRating is important for the restaraunt since each customer gives different ratings, and you can average out those ratings and see which kinds of customers give 8's, 9's, 1's, etc.
    
    The dinnersPerMonth would be important because someone who only comes once and has a bad time and gives it a bad rating as opposed to frequent eaters that give it high ratings, wouldn't be credited
    at all since that's just one customer who's only come once, and all the customers who come regularly enjoy their experience, so it would be helpful to know which customers ACTUALLY come often and which 
    just came once and tried to trash the place.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: "Joseph",
    age: 22,
    personalRating: 10,
    dinnersPerMonth: 7
}