const Home = require("../Model/home");

exports.getHome = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/Home-list", {
      title: "Home-list Page ",
      registerHome: registerHome,
    });
  });
};
exports.getBooking = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/Booking-list", {
      title: "Booking List",
      registerHome: registerHome,
    });
  });
};
exports.getFavouriteList = (req, res, next) => {
  res.render("store/Favourite-list", { title: "Your Favourite Home list" });
};
exports.getIndex = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/Index", {
      title: "Home Page ",
      registerHome: registerHome,
    });
  });
};

exports.getHomeDetailPage = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    console.log(home);
    res.render("store/Home-detials", { title: "Home Detial Page" });
  });
};
