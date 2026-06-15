function addNumber(num1, num2){
    return num1 + num2;
    //This area is unaccessible because the function has already returned a value. Any code written after the return statement will not be executed, and will be ignored by the JavaScript engine. Therefore, it is important to ensure that all necessary code is included before the return statement in a function.

}

console.log(addNumber(3,5)) // Output: 8
console.log(addNumber); // Output: [Function: addNumber], this is because we are not calling the function, but rather referencing it. When we reference a function without calling it, we get the function definition itself, which is a function object in JavaScript. This can be useful when we want to pass a function as an argument to another function or assign it to a variable for later use.


//REST OPERATOR

function calculateCartPrice(...prices){
    return prices;
}

console.log(calculateCartPrice(10, 20, 30)); // Output: [10, 20, 30], this is because the rest operator (...) allows us to pass an arbitrary number of arguments to a function and collects them into an array. In this case, we are passing three arguments (10, 20, and 30) to the calculateCartPrice function, and the rest operator collects them into an array called prices. Therefore, the function returns the array [10, 20, 30].

function calculateTotalPrice(discount, tax, ...prices){
    const totalPrice = prices.reduce((total, price) => total + price, 0);
    const discountedPrice = totalPrice - discount;
    const finalPrice = discountedPrice + tax;
    return finalPrice;
}

console.log(calculateTotalPrice(10, 5, 100, 200, 300)); // Output: 595, this is because the calculateTotalPrice function takes three parameters: discount, tax, and prices (which is collected using the rest operator). The function first calculates the total price by summing up all the prices in the prices array using the reduce method. Then it applies the discount to the total price and adds the tax to get the final price. In this case, the total price is 600 (100 + 200 + 300), the discounted price is 590 (600 - 10), and the final price is 595 (590 + 5).
