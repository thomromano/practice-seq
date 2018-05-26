var db = require("../models");

const trialSID = process.env.TWILIO_TRIAL_SID;
const realSID = process.env.TWILIO_SID;
const trialToken = process.env.TWILIO_TRIAL_TOKEN;
const realToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(trialSID, trialToken);

const realNumber = +16123245498
const trialNumber = +15005550006

module.exports = function(app) {
    app.get('/Contacts', function(req, res){
        client.messages.create({
            from: trialNumber,
            to: '+15072591109',
            body: 'This is a test', 
        }, function(err, data){
            if(err) {
                console.log(err);
            } else console.log(data.body);
        })
    });
}

module.exports = function(app) {
  
  app.get("/api/contacts", function(req, res) {
    db.Contact.findAll({}).then(function(dbAuthor) {
      res.json(dbContact);
    });
  });

  app.get("/api/contacts/:id", function(req, res) {
   
    db.Contact.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbContact) {
      res.json(dbContact);
    });
  });

  app.post("/api/contacts", function(req, res) {
    
    console.log(req.body);
    db.Contact.create(req.body).then(function(dbContact) {
      res.json(dbContact);
    });
  });

//   app.delete("/api/contacts/:id", function(req, res) {
 
//     db.Contact.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbContact) {
//       res.json(dbContact);
//     });
//   });

};