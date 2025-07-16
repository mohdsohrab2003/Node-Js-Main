const Home = require("../Model/home");

// const registerHome = [];
exports.getAddHome = (req, res, next) => {
  res.render("host/Edit-home", { title: "Add Home " ,queryEdit:false });
};

exports.getEditHome = (req, res, next) => {
  const homeId=req.params.homeId;
  const queryEdit=req.query.editing==="true";

  Home.findById(homeId,(home)=>{
    if(!home){
    console.log("home not found")
     return res.redirect('/host-home-list');
    }
    console.log(homeId,queryEdit,home)
    res.render("host/Edit-home", { title: "Edit Home " ,queryEdit:queryEdit,home:home});
  })


  

  
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

  res.redirect ("/home-list" );
};

exports.postEditHome= (req, res, next) => {

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
    first_name,
    last_name,
    house_name,
    phone,
    Location,
    price,
    email,
    imageLink
  );
  this.id=id;
  home.save((err)=>{
    if(err){
      console.log(err)
    }
    res.redirect('/host-home-list');
  });

  // res.redirect("/host-home-list");
};


exports.getHostHome = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("host/Host-Home-list", {
      title: "Host Home List  ",
      registerHome: registerHome,
    });
  });
};
