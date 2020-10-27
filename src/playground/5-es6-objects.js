const name = "Max";
const userAge = 25;

const user = {
  name: name,
  age: userAge,
  location: "Elkesley",
};

console.log(user);

const product = {
  label: "Red notebook",
  price: 3,
  stock: 200,
  salePrice: undefined,
};

const { label, stock } = product;

console.log(label);
console.log(stock);
