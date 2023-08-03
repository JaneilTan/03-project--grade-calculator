const express = require("express");
const repository = require("./repository");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const getGrades = await repository.getGradeScale();
    
    res.json(getGrades);

  } catch (err) {
    next(err);
  }

});

module.exports = router;
