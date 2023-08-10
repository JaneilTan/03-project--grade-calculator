const getLetterGrade = (gradeScale, mark, level) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }

  const validLevel = gradeScale.find((item) => item.level === level);

  if (!validLevel || validLevel === undefined) {
    throw new Error("Invalid level provided.");
  }

  //Used .find() was inspired by https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find viewed on 01/08/2023
  const validGrade = gradeScale.find(
    (item) =>
      mark >= item.minMark && mark <= item.maxMark && level === item.level
  );

  if (validGrade) {
    return validGrade.grade;
  } else if (mark > 100) {
    throw new Error("No matching grade found for the provided mark.");
  }
};

module.exports = { getLetterGrade };
