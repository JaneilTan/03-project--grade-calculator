import { getLetterGrade } from "./utils";

const gradeScale = [
  {
    level: "Level 5",
    minMark: 90,
    maxMark: 100,
    grade: "A+",
  },
  {
    level: "Level 5",
    minMark: 85,
    maxMark: 89,
    grade: "A",
  },
  {
    level: "Level 5",
    minMark: 80,
    maxMark: 84,
    grade: "A-",
  },
  {
    level: "Level 5",
    minMark: 75,
    maxMark: 79,
    grade: "B+",
  },
  {
    level: "Level 5",
    minMark: 70,
    maxMark: 74,
    grade: "B",
  },
  {
    level: "Level 5",
    minMark: 65,
    maxMark: 69,
    grade: "B-",
  },
  {
    level: "Level 5",
    minMark: 60,
    maxMark: 64,
    grade: "C+",
  },
  {
    level: "Level 5",
    minMark: 55,
    maxMark: 59,
    grade: "C",
  },
  {
    level: "Level 5",
    minMark: 50,
    maxMark: 54,
    grade: "C-",
  },
  {
    level: "Level 5",
    minMark: 40,
    maxMark: 49,
    grade: "D",
  },
  {
    level: "Level 5",
    minMark: 0,
    maxMark: 39,
    grade: "E",
  },
  {
    level: "Level 6",
    minMark: 92,
    maxMark: 100,
    grade: "A+",
  },
  {
    level: "Level 6",
    minMark: 85,
    maxMark: 91,
    grade: "A",
  },
  {
    level: "Level 6",
    minMark: 80,
    maxMark: 84,
    grade: "A-",
  },
  {
    level: "Level 6",
    minMark: 75,
    maxMark: 79,
    grade: "B+",
  },
  {
    level: "Level 6",
    minMark: 70,
    maxMark: 74,
    grade: "B",
  },
  {
    level: "Level 6",
    minMark: 65,
    maxMark: 69,
    grade: "B-",
  },
  {
    level: "Level 6",
    minMark: 60,
    maxMark: 64,
    grade: "C+",
  },
  {
    level: "Level 6",
    minMark: 55,
    maxMark: 59,
    grade: "C",
  },
  {
    level: "Level 6",
    minMark: 50,
    maxMark: 54,
    grade: "C-",
  },
  {
    level: "Level 6",
    minMark: 40,
    maxMark: 49,
    grade: "D",
  },
  {
    level: "Level 6",
    minMark: 0,
    maxMark: 39,
    grade: "E",
  },
];

describe("getLetterGrade", () => {
  
  test.each([
    ["A+", 95, "Level 5"], 
    ["A", 87, "Level 5"],
    ["A-", 82, "Level 5"],
    ["B+", 77, "Level 5"],
    ["B", 72, "Level 5"],
    ["B-", 67, "Level 5"],
    ["C+", 62, "Level 5"],
    ["C", 57, "Level 5"],
    ["C-", 52, "Level 5"],
    ["D", 45, "Level 5"],
    ["E", 28, "Level 5"],
    ["A+", 97, "Level 6"], 
    ["A", 89, "Level 6"],
    ["A-", 82, "Level 6"],
    ["B+", 77, "Level 6"],
    ["B", 72, "Level 6"],
    ["B-", 67, "Level 6"],
    ["C+", 62, "Level 6"],
    ["C", 57, "Level 6"],
    ["C-", 52, "Level 6"],
    ["D", 45, "Level 6"],
    ["E", 25, "Level 6"],
  ])("The grade calculator should return a grade of X when the mark is X and the level is X", (grade, mark, level) => {
    const expected = grade;
    const result = getLetterGrade(gradeScale, mark, level);

    expect(result).toBe(expected);
  });


  test("Throw an error for invalid mark provided" , () => {
  
    const mark = 101;
    const level = "Level 5";
    const validGradeScale = gradeScale; 
    expect(() => getLetterGrade(validGradeScale, mark, level)).toThrow("No matching grade found for the provided mark.")

  });
  
 

  test("Throws an error for invalid gradeScale", () => {
    const corruptGradeScale = {};
    const mark = 70;
    const level = "Level 5";
    expect(() => getLetterGrade(corruptGradeScale, mark, level)).toThrow(
      "Grade scale not provided."
    );
  });
});
