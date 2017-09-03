// Require packages and files
let express = require('express'),
    router = express.Router(),
    // Import the model (burger.js) to use its database functions.
    food = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    food.selectAll(function(data) {
        console.log(data);
        var hbsObject = {
            foods: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    // Colums, [forminput, boolean = false;
    food.insertOne(["burger_name", "devoured"], [req.body.burger_name, "0"], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

     console.log("condition", condition);

    food.updateOne({
        devoured: req.body.devoured
                }, condition, function() {
        res.redirect("/");
    });
});  
       
router.delete('/:id', function(req, res) {
                var condition = "id = " + req.params.id;
    console.log("condition", condition);
        
    food.deleteOne(condition, function() {
        res.redirect('/');
    });
});
module.exports = router;
