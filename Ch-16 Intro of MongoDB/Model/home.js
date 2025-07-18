const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/databaseUtil");
module.exports = class Home {
  constructor(
    _id,
    first_name,
    last_name,
    house_name,
    phone,
    Location,
    price,
    email,
    imageLink,
    discription
  ) {
    if (_id) {
      this._id = _id;
    }
    this.first_name = first_name;
    this.last_name = last_name;
    this.house_name = house_name;
    this.phone = phone;
    this.Location = Location;
    this.price = price;
    this.email = email;
    this.imageLink = imageLink;
    this.discription = discription;
  }

  save() {
    const db = getDb();
    if (this._id) {
      const updateData = {
        first_name: this.first_name,
        last_name: this.last_name,
        house_name: this.house_name,
        phone: this.phone,
        Location: this.Location,
        price: this.price,
        email: this.email,
        imageLink: this.imageLink,
        discription: this.discription,
      };
      return db
        .collection("homes")
        .updateOne(
          { _id: new ObjectId(String(this._id)) },
          { $set: updateData }
        );
    } else {
      return db.collection("homes").insertOne(this);
    }
  }

  static fetchAll() {
    const db = getDb();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {
    // console.log(homeId);
    const db = getDb();
    return db
      .collection("homes")
      .find({ _id: new ObjectId(String(homeId)) })
      .next();
  }
  static deleteById(homeId) {
    const db = getDb();
    return db
      .collection("homes")
      .deleteOne({ _id: new ObjectId(String(homeId)) });
  }
};
