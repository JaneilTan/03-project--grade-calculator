const express = require("express");
const db = require("./db");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await db.query(
      `SELECT level, min_mark, max_mark, grade
      FROM grade_scale;
      `
    );
    const gradeScale = result.rows;
    return res.json(gradeScale);
  } catch (err) {
    next(err);
  }

});

module.exports = router;
