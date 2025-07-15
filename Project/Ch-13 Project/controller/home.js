const Home = require("../Model/home");

// const registerHome = [];
exports.getAddHome = (req, res, next) => {
  res.render("AddHome", { title: "Add Home " });
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

exports.getHome = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("Home", { title: "Home Page ", registerHome: registerHome });
  });
};
