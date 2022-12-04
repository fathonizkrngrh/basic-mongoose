const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name tidak ada, harus diisi!!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data nama tidak ada, harus diisi!!"],
  },
  age: {
    type: Number,
    required: [true, "Data umur tidak ada, harus diisi!!"],
  },
  favoriteFruit: fruitSchema,
});

const People = mongoose.model("People", peopleSchema);

const fruitDuku = new Fruit({
  name: "duku",
  rating: 4,
  review: "Rasanya ga enak",
});

fruitDuku.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("berhasil simpan data buah duku");
  }
});

const people = new People({
  name: "fathoni",
  age: "20",
  favoriteFruit: fruitDuku,
});

people.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("berhasil simpan data fathoni");
  }
});
