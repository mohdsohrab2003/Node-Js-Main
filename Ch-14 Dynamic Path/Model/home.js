const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const rootDir = require("../utils/pathUtis");
const { error } = require("console");
const Favourite = require("./favourite");
const homeDataPath = path.join(rootDir, "data", "home.json");
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
    imageLink
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
  }

  save() {
    // this.id = Math.random().toString();

    Home.fetchAll((registerHome) => {
      if (this.id) {
        registerHome = registerHome.map((home) =>
          home.id === this.id ? this : home
        );
      } else {
        this.id = uuidv4();
        registerHome.push(this);
      }
      fs.writeFile(homeDataPath, JSON.stringify(registerHome), (error) => {});
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      const text = data.toString();
      callback(!err ? JSON.parse(text) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const foundHome = homes.find((home) => home.id === homeId);
      callback(foundHome);
    });
  }
  static deleteById(homeId, callback) {
    this.fetchAll((homes) => {
      homes = homes.filter((home) => home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(homes), (err) => {
        Favourite.deleteHomeFormFavourite(homeId, callback);
      });
    });
  }
};
