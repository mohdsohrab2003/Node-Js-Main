const Favourite = require("../Model/favourite");
const Home = require("../Model/home");

exports.getHome = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("store/Home-list", {
      title: "Home-list Page",
      registerHome: registerHome,
      isLoggedIn: req.isLoggedIn, // Pass the login status to the view
    });
  });
};
exports.getBooking = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("store/Booking-list", {
      title: "Booking House",
      registerHome: registerHome,
      isLoggedIn: req.isLoggedIn, // Pass the login status to the view
    });
  });
};
exports.getFavouriteList = (req, res, next) => {
  Favourite.find()
    .populate("homeId") // Populate the homeId field with Home documents
    .then((favourite) => {
      const favourites = favourite.map((fav) => fav.homeId);
      res.render("store/Favourite-list", {
        title: "Your Favourite Home list",
        registerHome: favourites,
        isLoggedIn: req.isLoggedIn, // Pass the login status to the view
      });
    });
};
exports.postAddToFavouriteList = (req, res, next) => {
  const homeId = req.body.id;

  Favourite.findOne({ homeId: homeId })
    .then((existingFav) => {
      if (existingFav) {
        // Already added, just redirect or show message
        return res.redirect("/favourite-list");
      }

      const fav = new Favourite({
        homeId: homeId,
      });

      fav.save().then((result) => {
        // console.log("Fav Added", result);
        res.redirect("/favourite-list"); // ✅ Only redirect if success
      });
    })
    .catch((err) => {
      console.error("Error adding to favourite:", err);
    });
};
// controller  delete a home form favourite list
exports.deleteFavouriteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("delete home form favourite list", homeId);
  Favourite.findOneAndDelete({ homeId: homeId }).then(() => {
    res.redirect("/favourite-list");
  });
};

exports.getIndex = (req, res, next) => {
  console.log("isLoggedIn", req.isLoggedIn);
  Home.find()
    .then((registerHome) => {
      res.render("store/Index", {
        title: "Home Page",
        registerHome,
        isLoggedIn: req.isLoggedIn, // Pass the login status to the view
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
        isLoggedIn: req.isLoggedIn, // Pass the login status to the view
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
