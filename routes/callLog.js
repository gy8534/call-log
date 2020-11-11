const epxress = require("express");
const router = epxress.Router();

const Log = require("../models/Log");

router.get("/", async (req, res) => {
  try {
    const logs = await Log.find({})
      .lean();
    res.render("callLog/all", {
      logs
    });
  } catch (err) {
    console.log(err);
    res.send("error/500");
  }
});
router.get("/incoming", async (req, res) => {
  try {
    const logs = await Log.find({ type: "incoming" })
      .lean();
    res.render("callLog/incoming", {
      logs
    });
  } catch (err) {
    console.log(err);
    res.send("error/500");
  }
});
router.get("/outgoing", async (req, res) => {
  try {
    const logs = await Log.find({ type: "outgoing" })
      .lean();
    res.render("callLog/outgoing", {
      logs
    });
  } catch (err) {
    console.log(err);
    res.send("error/500");
  }
});
router.get("/missed", async (req, res) => {
  try {
    const logs = await Log.find({ type: "missed" })
      .lean();
    res.render("callLog/missed", {
      logs
    });
  } catch (err) {
    console.log(err);
    res.send("error/500");
  }
});

module.exports = router;
