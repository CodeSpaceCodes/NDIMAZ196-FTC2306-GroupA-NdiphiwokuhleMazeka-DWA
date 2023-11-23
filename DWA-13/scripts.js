//@ts-check

const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// first user story using forEach() method to console the names of the people in the name array
names.forEach((person) => {
  console.log(`\n${person}`)
})

// using forEach() to console both the name and province on the same line
provinces.forEach((province, index) => {
  const person = names[index];
  console.log(`\n${person} ${province}`)
})

//usin map() to turn each name in the names array into uppercases
const newNames = names.map(function (eachName) { 
    return eachName.toUpperCase();
});
console.log(newNames)

// using map()  to find the length of each string element in the names array
const namesLength = names.map((eachName) => {
  return eachName.length;
})
console.log(namesLength)

// sorting the provinces alphabetical order
const alphabeticalSorting = provinces.sort() // please note that toSorted() is not recognized by my IDE
console.log(alphabeticalSorting)

// using filter to cut out provinces with name term 'cape'
const excludeCape = provinces.filter((province) => !province.toLowerCase().includes('cape'))
console.log(excludeCape.length)

// using map() and some() to create a boolean array

const boolArray = names.map(eachName => eachName.toLowerCase().split('')
                    .some(char => char.includes('s'))
);

console.log(boolArray)

const obj = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc
}, {})
console.log(obj)



// // BONUS (Additional Exercises)
const products = [
    { 
      product: 'banana', 
      price: "2" 
    },
    { 
      product: 'mango', 
      price: 6 
    },
    { 
      product: 'potato', 
      price: ' ' 
    },
    { 
      product: 'avocado', 
      price: "8" 
    },
    { 
      product: 'coffee', 
      price: 10 
    },
    { 
      product: 'tea', 
      price: '' 
    },
  ];

// // Use forEach to console.log each product name to the console.
products.forEach(item => console.log(item.product));

// // Use filter to filter out products that have a name longer than 5 characters
console.log(products.filter(item => (item.product).length > 5));

// // Using both filter and map. 
// // Convert all prices that are strings to numbers, 
// and remove all products from the array that do not have prices.then use
// reduce to calculate the combined price of all remaining products.
console.log( products
  .filter(obj => typeof (obj.price) === ('string' || Number))
  .map(obj => Number(obj.price))
  .reduce((total, price) => total + price, 0)
);

// // Use reduce to concatenate all product names to create the following string:
// // banana, mango, potato, avocado, coffee and tea.
console.log(
  products.reduce((acc, obj, index, array) => 
    index === array.length -1 ? acc + 'and ' + obj.product :
    index === array.length - 2 ? acc + obj.product + ', ' :
    acc + obj.product + ', ', '')
);

// // Use reduce to calculate both the highest and lowest-priced items. 
// // The names should be returned as the following 
// //string: Highest: coffee. Lowest: banana.

const result = products.reduce((acc, currentProduct) => {
  const price = parseInt(currentProduct.price);

  if (!isNaN(price) && price > acc.highestPrice) {
    acc.highestProduct = currentProduct.product;
  }

  if (!isNaN(price) && price < acc.lowestPrice) {
    acc.lowestPrice = price;
    acc.lowestProduct = currentProduct.product;
  }

  return acc;
}, { highestPrice: -Infinity, lowestPrice: Infinity });

console.log(`Highest: ${result.highestProduct}. Lowest: ${result.lowestProduct}.`);

// // Using only Object.entries and reduce recreate the object with the exact same values.
// // However, the following object keys should be changed in the new array:
// // product should be changed to name
// // price should be changed to cost
console.log(
  products.reduce((acc, obj) => {
    acc.push(
      Object.entries(obj).reduce((obj, [key, value]) => {
        obj[key === 'product' ? 'name' : key === 'price' ? 'cost' : key] = value;
        return obj;
      }, {})
    );
    return acc;
  }, [])
);