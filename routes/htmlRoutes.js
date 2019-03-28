var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Pet.findAll({}).then(function(dbPet) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbPet
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Pet.findOne({ where: { id: req.params.id } }).then(function(dbPet) {
      res.render("example", {
        example: dbPet
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
