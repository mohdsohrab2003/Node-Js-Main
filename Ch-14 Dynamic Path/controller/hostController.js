const Home = require("../Model/home");

// const registerHome = [];
exports.getAddHome = (req, res, next) => {
  res.render("host/AddHome", { title: "Add Home " });
};

exports.postHome = (req, res, next) => {
  const {
    id,
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
    id,
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

  res.render("host/HomeAdded", { title: "Added Home Successly " });
};

exports.getHostHome = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("host/Host-Home-list", {
      title: "Host Home List  ",
      registerHome: registerHome,
    });
  });
};
