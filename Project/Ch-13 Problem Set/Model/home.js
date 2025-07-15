const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/pathUtis");
const { error } = require("console");

module.exports = class Home {
  constructor(
    first_name,
    last_name,
    house_name,
    phone,
    Location,
    price,
    email,
    imageLink
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.house_name = house_name;
    this.phone = phone;
    this.Location = Location;
    this.price = price;
    this.email = email;
    this.imageLink = imageLink;
  }

  save() {
    Home.fetchAll((registerHome) => {
      registerHome.push(this);
      const homeDataPath = path.join(rootDir, "data", "home.json");
      fs.writeFile(homeDataPath, JSON.stringify(registerHome), (error) => {
        //   console.log("Writing File Conculed", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "home.json");
    fs.readFile(homeDataPath, (err, data) => {
      //   console.log("File read : ", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
