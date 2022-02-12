const {averageExams, isStudentPassExam} = require("../gradeCalculations")

describe("Grade calculations", () => {
  test("It should return exact average", () => {
    const listValueOfExams = [80, 100, 100, 80]
    expect(averageExams(listValueOfExams)).toEqual(90)
  })

  // Integration testing
  test("It should return exam passed status", () => {
    const listValueOfExams = [80, 100, 100, 80]
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(true)
  })

  test("It should return exam failed status", () => {
    const listValueOfExams = [50, 40, 70, 80]
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(false)
  })

  test.each([
    { a: 1, b: 1, expected: 2 },
    { a: 1, b: 2, expected: 3 },
    { a: 2, b: 1, expected: 3 },
  ])('.add($a, $b)', ({ a, b, expected }) => {
    expect(a + b).toBe(expected)
  })
})
