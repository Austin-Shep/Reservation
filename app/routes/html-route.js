var path = require("path");
var express = require("express")
var router = express.Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../view/index.html"));
});

router.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname,"../view/view.html"));
});

router.get("/make", function(req, res) {
  res.sendFile(path.join(__dirname,"../view/make.html"));
});

// Displays a single character, or returns false
router.get("/rsv", function(req, res) {
  
 return res.json(rsv);

});

router.post("/rsv" , function(req,res){

  var newRsv = req.body;

  newRsv.name.replace(/\s+/g, "").toLowerCase();

  console.log(newRsv);

  rsv.push(newRsv);

  res.json(newRsv);
});

module.exports = router;