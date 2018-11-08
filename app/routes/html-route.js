var path = require("path");
var express = require("express")
var router = express.Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

router.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname,"view.html"));
});

router.get("/make", function(req, res) {
  res.sendFile(path.join(__dirname,"make.html"));
});

// Displays a single character, or returns false
router.get("/api/rsv/:person", function(req, res) {
  var chosen = req.params.person;

  console.log(chosen);

  for (var i = 0; i < rsv.length; i++) {
    if (chosen === rsv[i].name) {
      return res.json(rsv[i]);
    }
  }

  return res.json(false);
});

router.post("/rsv" , function(req,res){

  var newRsv = req.body;

  newRsv.name.replace(/\s+/g, "").toLowerCase();

  console.log(newRsv);

  rsv.push(newRsv);

  res.json(newRsv);
});

module.exports = router;