function productOfAnyAmountOfNumbers(...args) {
  let product=1 ; 
  for (let arg of args) product= product *arg;
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
