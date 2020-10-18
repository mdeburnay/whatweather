setTimeout(() => {
  console.log("2 seconds are up!");
}, 2000);

// const names = ["Max", "Thomas", "Gyongyi"];
// const shortNames = names.filter((name) => names.length <= 4);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Nottingham", (data) => {
//   console.log(data);
// });

const add = (callback, ...nums) => {
  setTimeout(() => {
    const sum = nums.reduce((acc, n) => acc + n, 0);
    callback(sum);
  }, 2000);
};

add(
  (sum) => {
    console.log(sum);
  },
  1,
  4,
  7,
  3
);
