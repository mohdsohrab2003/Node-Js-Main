const mongoose = require("mongoose");
const Favourite = require("./favourite");

const homeSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  house_name: { type: String, required: true },
  phone: { type: String, required: true },
  Location: { type: String, required: true },
  price: { type: Number, required: true },
  email: { type: String, required: true },
  imageLink: String,
  discription: String,
});
homeSchema.pre("findOneAndDelete", async function (next) {
  console.log("Deleting home and its favourites");
  const homeId = this.getQuery()._id;
  await Favourite.deleteMany({ homeId: homeId });
  next();
});

module.exports = mongoose.model("Home", homeSchema);
