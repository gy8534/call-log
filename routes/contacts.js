const epxress = require("express");
const router = epxress.Router();

const Contact = require("../models/Contact");

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find({})
      .sort({ createdAt: "desc" })
      .lean();
    res.render("contact/view", {
      contacts,
    });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

router.get("/add", async (req, res) => {
  res.render("contact/add");
});

router.post("/add", (req, res) => {
  const newContact = new Contact(req.body);

  newContact.save().then(() => res.redirect("/contacts"));
});

module.exports = router;
