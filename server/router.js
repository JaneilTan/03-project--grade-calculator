const express = require("express");
const router = express.Router();
const repository = require("./repository");


router.get("/", async (req, res, next) => {
  try {
    
    const getGrades = await repository.getGradeScale();
    res.json(getGrades);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
