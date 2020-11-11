const epxress = require("express");
const router = epxress.Router();

const Log = require("../models/Log");
const Contact = require("../models/Contact");

router.get("/makecall", async (req, res) => {
  try {
    const contacts = await Contact.find({})
      .lean();
    res.render("call/makeCall", {
      contacts
    });
  } catch (err) {
    console.log(err);
    res.send("error/500");
  }
});

router.post("/makecall", async(req, res) => {
  
  const contacts = await Contact.find({}).lean();
  const num = req.body.contact;
  let name = "";

  contacts.forEach(contact => {
    if (contact.contact == num){
      name = contact.name
    }
  });

  if (name !== "") {
    req.body.name = name
  }
  const newLog = new Log(req.body);

  newLog.save().then(() => res.redirect("/"));
});




router.get("/getcall", async (req, res) => {
  try {
    const contacts = await Contact.find({})
      .lean();
    res.render("call/getCall", {
      contacts
    });
  } catch (err) {
    console.log(err);
    res.send("error/500");
  }
});

router.post("/getcall",async (req, res) => {

  const contacts = await Contact.find({}).lean();
  const num = req.body.contact;
  let name = "";

  contacts.forEach(contact => {
    if (contact.contact == num){
      name = contact.name
    }
  });

  if (name !== "") {
    req.body.name = name
  }
  const newLog = new Log(req.body);

  newLog.save().then(() => res.redirect("/"));
});

module.exports = router;
