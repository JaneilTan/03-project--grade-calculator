const getLetterGrade = (gradeScale, mark, level) => {
  

  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }
  //This section of code (line-8) was inspired by https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find viewed on 01/08/2023
  const validGrade = gradeScale.find((item) => mark >= item.minMark && mark <= item.maxMark);

  if (validGrade) {
    return validGrade.grade;
  } else {
    throw new Error("No matching grade found for the provided mark.");
  }

  
};

module.exports = { getLetterGrade };
