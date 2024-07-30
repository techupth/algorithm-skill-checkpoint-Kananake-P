function findProductPrice(products, name) {
  // Your code here
  let left = 0;
  let right = products.length - 1;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (products[mid].name === name) {
      result = products[mid].price;
      break;
    } else if (products[left] < products[right]) {
      left = mid + 1;
      result = products[left].price;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
