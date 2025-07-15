exports.pageNotFound = (req, res) => {
  res.status(404).render("404", { title: "Page not Found" });
};
