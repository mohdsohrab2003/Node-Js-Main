const Home = require("../Model/home");

// const registerHome = [];
exports.getAddHome = (req, res, next) => {
  res.render("host/AddHome", { title: "Add Home " });
};

exports.postHome = (req, res, next) => {
  const {
    first_name,
    last_name,
    house_name,
    phone,
    Location,
    price,
    email,
    imageLink,
  } = req.body;
  const home = new Home(
    first_name,
    last_name,
    house_name,
    phone,
    Location,
    price,
    email,
    imageLink
  );
  home.save();

  res.render("HomeAdded", { title: "Added Home Successly " });
};

exports.getHostHome = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("host/Host-Home-list", { title: "Host Home List  ", registerHome: registerHome });
  });
};
