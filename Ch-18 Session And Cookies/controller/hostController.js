const { default: mongoose } = require("mongoose");
const Home = require("../Model/home");

// const registerHome = [];
exports.getAddHome = (req, res, next) => {
  res.render("host/Edit-home", { title: "Add Home ", queryEdit: false });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const queryEdit = req.query.editing === "true";

  Home.findById(homeId)
    .then((home) => {
      if (!home) {
        console.log("home not found");
        res.redirect("/host-home-list");
      }

      res.render("host/Edit-home", {
        title: "Edit Home",
        queryEdit,
        home,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).redirect("404");
    });
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
    discription,
  } = req.body;
  const home = new Home({
    first_name,
    last_name,
    house_name,
    phone,
    Location,
    price,
    email,
    imageLink,
    discription,
  });
  home
    .save()
    .then(() => {
      console.log("Home added successfully");
    })
    .catch((err) => {
      console.log("Error adding home:", err);
    });

  res.redirect("/home-list");
};

exports.postEditHome = (req, res, next) => {
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
    discription,
  } = req.body;
  Home.findById(id)
    .then((home) => {
      if (!home) {
        console.log("Home not found");
        return res.redirect("/host-home-list");
      }
      home.first_name = first_name;
      home.last_name = last_name;
      home.house_name = house_name;
      home.phone = phone;
      home.Location = Location;
      home.price = price;
      home.email = email;
      home.imageLink = imageLink;
      home.discription = discription;

      home.save().then(() => {
        console.log("Home updated successfully");
        res.redirect("/host-home-list");
      });
    })

    .catch((err) => {
      console.error("Error updating home:", err);
      res.status(500).redirect("404");
    });
};

exports.deleteHome = (req, res, next) => {
  const homeId = req.params.homeId;

  console.log("you want to delete home id", homeId);
  Home.findByIdAndDelete(homeId)
    .then((home) => {
      if (!home) {
        return res.status(404).send("Home not found");
      }
      res.redirect("/host-home-list");
    })
    .catch((err) => {
      console.error("Error deleting home:", err);
    });
};

exports.getHostHome = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("host/Host-Home-list", {
      title: "Host Home List",
      registerHome: registerHome,
    });
  });
};
