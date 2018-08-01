var Cat = require("../models/cat").Cat;
module.exports=function(app){

    app.get("/cat", function(req, res){
        Cat.find({}, function(err, cat){
            if(err)
            return res.send(err);
            res.json(cat)
        });
    });
    app.get("/cat/:id", function(req, res){
        Cat.find({"_id":req.params.id}, function(err, cat){
            if(err)
            return res.send(err);
            res.json(cat)
        });
    });
    app.post("/cat", function(req, res){
        var cat = new Cat();
        cat.name=req.body.name;
        cat.from = req.body.from;
        cat.caracter= req.body.caracter;

        console.log(req.body.name);
        cat.save(function(err, cat){
            if(err)
            return res.send(err);
            res.json({"status":"OK", data:cat});
        });
    });
    app.put("/cat", function(req, res) {
        cat.findById(req.params.id, function(err, cat) {
          if(err)
          return res.send(err);
          cat.name=req.body.name;
          cat.from=req.body.from;
          cat.caracter=req.body.caracter;
    
          cat.save(function(err, cat) {
            if(err)
            return res.send(err);
            res.json({"status":"OK", data:cat});
          })
        })
      })
      app.delete("/cat", function(req, res) {
        cat.findById(req.params.id, function(err, cat) {
          if(err)
          return res.send(err);
          cat.remove(function(err, cat) {
            if(err)
            return res.send(err);
            res.json({"status":"OK"});
          })
        })
      })

}