const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtis");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");
module.exports = class Favourite {
  static addToFavourite(homeId, callback) {
    Favourite.getFavourite((favourite) => {
      if (favourite.includes(homeId)) {
        callback("Home is alredy add in favourite");
      } else {
        favourite.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourite), callback);
      }
    });
  }
  static getFavourite(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
  static deleteHomeFormFavourite(delhomeId, callback) {
    Favourite.getFavourite((favourites) => {
      const updatedFavourites = favourites.filter(
        (homeId) => delhomeId !== homeId
      );
      fs.writeFile(
        favouriteDataPath,
        JSON.stringify(updatedFavourites),
        callback
      );
    });
  }
};
