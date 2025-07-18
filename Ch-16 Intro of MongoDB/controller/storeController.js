const Favourite = require("../Model/favourite");
const Home = require("../Model/home");

exports.getHome = (req, res, next) => {
  Home.fetchAll().then((registerHome) => {
    res.render("store/Home-list", {
      title: "Home-list Page",
      registerHome: registerHome,
    });
  });
};
exports.getBooking = (req, res, next) => {
  Home.fetchAll().then((registerHome) => {
    res.render("store/Booking-list", {
      title: "Booking House",
      registerHome: registerHome,
    });
  });
};
exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourite((favourite) => {
    Home.fetchAll().then((registerHome) => {
      const favouriteHome = registerHome.filter((home) => {
        return favourite.includes(home._id);
      });
      res.render("store/Favourite-list", {
        title: "Your Favourite Home list",
        registerHome: favouriteHome,
      });
    });
  });
  // res.render("store/Favourite-list", { title: "Your Favourite Home list" });
};
exports.postAddToFavouriteList = (req, res, next) => {
  console.log(req.body);
  Favourite.addToFavourite(req.body.id, (err) => {
    if (err) {
      console.log("Error is Marked to Add Favourite : ", err);
    }
    res.redirect("/favourite-list");
  });
};
// controller  delete a home form favourite list
exports.deleteFavouriteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("delete home form favourite list", homeId);
  Favourite.deleteHomeFormFavourite(homeId, (err) => {
    if (err) {
      console.log("Error while delete home form favourites list", err);
    }
    res.redirect("/favourite-list");
  });
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll()
    .then((registerHome) => {
      res.render("store/Index", {
        title: "Home Page",
        registerHome,
      });
    })
    .catch((err) => {
      console.error("Failed to fetch homes:", err);
      res.status(500).send("Failed to load home page.");
    });
};

exports.getHomeDetailPage = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId)
    .then((home) => {
      res.render("store/Home-detials", {
        title: "Home Detail Page",
        home: home,
      });
    })
    .catch((err) => {
      console.error("Error fetching home by ID:", err);
      res.status(500).render("store/error", {
        title: "Error",
        message: "Something went wrong while fetching the home",
      });
    });
};
