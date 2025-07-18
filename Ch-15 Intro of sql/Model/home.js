// const fs = require("fs");
// const path = require("path");
// const { v4: uuidv4 } = require("uuid");
// const rootDir = require("../utils/pathUtis");
// const { error } = require("console");
// // const Favourite = require("./favourite");
// const homeDataPath = path.join(rootDir, "data", "home.json");
const db = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(
    id,
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
    this.id = id;
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
    if (this.id) {
      //update
      return db.execute(
        `UPDATE homes SET
      
    first_name=?,
    last_name=?,
    house_name=?,
    phone=?,
    Location=?,
    price=?,
    email=?,
    imageLink=?,
    discription=? WHERE id=?  `,
        [
          this.first_name,
          this.last_name,
          this.house_name,
          this.phone,
          this.Location,
          this.price,
          this.email,
          this.imageLink,
          this.discription,
          this.id,
        ]
      );
    } else {
      //insert
      return db.execute(
        `INSERT INTO homes(
      
    first_name,
    last_name,
    house_name,
    phone,
    Location,
    price,
    email,
    imageLink,
    discription) VALUES (?,?,?,?,?,?,?,?,?)`,
        [
          this.first_name ?? null,
          this.last_name ?? null,
          this.house_name ?? null,
          this.phone ?? null,
          this.Location ?? null,
          this.price ?? null,
          this.email ?? null,
          this.imageLink ?? null,
          this.discription ?? null,
        ]
      );
    }
  }

  static fetchAll() {
    return db.execute(`SELECT * FROM homes`);
  }

  static findById(homeId) {
    return db.execute(`SELECT * FROM homes WHERE id=?`, [homeId]);
  }
  static deleteById(homeId) {
    return db.execute(`DELETE  FROM homes WHERE id=?`, [homeId]);
  }
};
