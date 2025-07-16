const Favourite = require("../Model/favourite");
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
  Favourite.getFavourite((favourite) => {
    Home.fetchAll((registerHome)=>{
      const favouriteHome=registerHome.filter((home)=>{
        return favourite.includes(home.id)
      })
      res.render("store/Favourite-list", {
        title: "Your Favourite Home list",
        registerHome: favouriteHome,
      });
    })
  })
  // res.render("store/Favourite-list", { title: "Your Favourite Home list" });
};
exports.postAddToFavouriteList=(req,res,next)=>{
  console.log(req.body)
  Favourite.addToFavourite(req.body.id, (err)=>{
    if(err){
      console.log("Error is Marked to Add Favourite : ",err)
    }
    res.redirect("/favourite-list")  
  })
  
}
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
    res.render("store/Home-detials", { title: "Home Detial Page", home: home });
  });
};
