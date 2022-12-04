const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new Fruit({
//   name: "apple",
//   rating: 8,
//   review: "Rasanya manis",
// });
const pepaya = new Fruit({
  name: "pepaya",
  rating: 10,
  review: "Rasanya manis",
});
const pisang = new Fruit({
  name: "pisang",
  rating: 9,
  review: "Aku suka pisang",
});
const mangga = new Fruit({
  name: "mangga",
  rating: 9,
  review: "kita suka mangga",
});

// apple.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("berhasil simpan data buah baru");
//   }
// });

Fruit.insertMany([pepaya, pisang, mangga], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("berhasil simpan data buah baru");
  }
});
