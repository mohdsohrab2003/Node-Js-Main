const Favourite = require("./favourite");
const db = require("../utils/databaseUtil");
module.exports = class Home {
  constructor(
    id,
    first_name,
    last_name,
    house_name,
    mobile_no,
    location,
    price,
    email,
    image_link,
    discription
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.house_name = house_name;
    this.mobile_no = mobile_no;
    this.location = location;
    this.price = price;
    this.email = email;
    this.image_link = image_link;
    this.discription = discription;
  }

  save() {
    return db.execute(
      `INSERT INTO homes (
      first_name,
      last_name,
      house_name,
      phone,
      location,
      price,
      email,
      image_link,
      description
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        this.first_name,
        this.last_name,
        this.house_name,
        this.phone, // use this.phone instead of this.mobile_no
        this.location, // make sure it's consistent (consider renaming to lowercase `location`)
        this.price,
        this.email,
        this.image_link,
        this.description, // match with correct property spelling
      ]
    );
  }

  static fetchAll() {
    return db.execute(`SELECT * FROM homes`);
  }

  static findById(homeId, callback) {}
  static deleteById(homeId, callback) {}
};
