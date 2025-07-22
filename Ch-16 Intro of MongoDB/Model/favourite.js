const { getDb } = require("../utils/databaseUtil");
module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }
  saveFav() {
    const db = getDb();
    if (!this.homeId) {
      return Promise.reject(new Error("No homeId provided"));
    }

    return db
      .collection("favourites")
      .findOne({ homeId: this.homeId }) // 👈 Check if it already exists
      .then((existingFav) => {
        if (existingFav) {
          console.log("Already in favourites");
          return { inserted: false };
        }

        return db
          .collection("favourites")
          .insertOne({ homeId: this.homeId })
          .then((result) => ({ result, inserted: true }));
      });
  }
  static getFavourite() {
    const db = getDb();
    return db.collection("favourites").find().toArray();
  }
  static deleteHomeFormFavourite(delhomeId) {
    const db = getDb();
    return db.collection("favourites").deleteOne({ homeId: delhomeId });
  }
};
