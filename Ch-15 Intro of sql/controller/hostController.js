const Home = require("../Model/home");

// const registerHome = [];
exports.getAddHome = (req, res, next) => {
  res.render("host/Edit-home", { title: "Add Home ", queryEdit: false });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const queryEdit = req.query.editing === "true";

  Home.findById(homeId)
    .then(([rows]) => {
      if (!rows || rows.length === 0) {
        console.log("home not found");
        return res.redirect("/host-home-list");
      }

      const home = rows[0];

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
  const home = new Home(
    id,
    first_name,
    last_name,
    house_name,
    phone,
    Location,
    price,
    email,
    imageLink,
    discription
  );
  home.save();

  res.redirect("/home-list");
};

exports.postEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
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
  const home = new Home(
    id,
    first_name,
    last_name,
    house_name,
    phone,
    Location,
    price,
    email,
    imageLink,
    discription
  );
  home
    .save()
    .then(() => {
      res.redirect("/host-home-list");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Failed to update home");
    });
};

exports.deleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("you want to delete hoem id", homeId);
  Home.deleteById(homeId).then(([rows]) => {
    res.redirect("/host-home-list");
  });
};

exports.getHostHome = (req, res, next) => {
  Home.fetchAll().then(([rows]) => {
    res.render("host/Host-Home-list", {
      title: "Host Home List",
      registerHome: rows,
    });
  });
};
