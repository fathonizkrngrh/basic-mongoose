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

// Fruit.updateOne(
//   { _id: "638c6d6de1f754c9933d12b1" },
//   { name: "jambu" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("berhasil update data pisang");
//     }
//   }
// );

Fruit.deleteOne({ _id: "638c6d6de1f754c9933d12b1" }, function (err) {
  if (err) {
    console.log(err);
  } else {
  }
  console.log("berhasil hapus data jambu");
});

Fruit.find(function (err, fruits) {
  if (err) {
    return console.log(err);
  } else {
    mongoose.connection.close();
    // console.log(fruits);
    console.log("nama-nama buah:");

    fruits.forEach(function (fruit) {
      return console.log(fruit.name);
    });
  }
});
