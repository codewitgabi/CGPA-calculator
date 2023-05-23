const btn = document.getElementById("submit-btn");
const addCourseBtn = document.getElementById("add-btn");
const courseForm = document.getElementById("course-form");
const gp = document.getElementById("gp");

btn.addEventListener("click", () => {
  let data = [];

  // split form data
  for (let i = 0; i < courseForm.length; i += 3) {
    let col = [];
    for (let j = i + 1; j < i + 3; j++) {
      col.push(courseForm[j].value);
    }
    data.push(col);
  }
  calculateGP(data);
});

addCourseBtn.addEventListener("click", () => {
  // create form input row
  const div = document.createElement("div");
  div.classList.add("col");

  // create course code input box
  const courseCodeBox = document.createElement("input");
  courseCodeBox.type = "text";
  courseCodeBox.placeholder = "Course Code";

  // create course unit input box
  const courseUnitBox = document.createElement("input");
  courseUnitBox.type = "number";
  courseUnitBox.placeholder = "Units";

  // create grade option boxes
  const optionA = document.createElement("option");
  optionA.value = "A";
  optionA.textContent = "A";

  const optionB = document.createElement("option");
  optionB.value = "B";
  optionB.textContent = "B";

  const optionC = document.createElement("option");
  optionC.value = "C";
  optionC.textContent = "C";

  const optionD = document.createElement("option");
  optionD.value = "D";
  optionD.textContent = "D";

  const optionE = document.createElement("option");
  optionE.value = "E";
  optionE.textContent = "E";

  const optionF = document.createElement("option");
  optionF.value = "F";
  optionF.textContent = "F";

  // create grade select input box
  const select = document.createElement("select");

  // add options to select box
  select.appendChild(optionA);
  select.appendChild(optionB);
  select.appendChild(optionC);
  select.appendChild(optionD);
  select.appendChild(optionE);
  select.appendChild(optionF);

  // add input boxes to row
  div.appendChild(courseCodeBox);
  div.appendChild(courseUnitBox);
  div.appendChild(select);

  // add row div to form
  courseForm.appendChild(div);
});

function calculateGP(data) {
  /*
      data: An array of arrays; A 2xX array
      */
  const gradeMapping = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 0
  };
  let totalUnits = 0;
  let cummPoints = 0;

  for (let value of data) {
    let [unit,
      grade] = value;
    unit = Number(unit);
    totalUnits += unit;
    cummPoints += gradeMapping[grade] * unit;
  }
  let cgpa = cummPoints / totalUnits;
  gp.textContent = `GP: ${cgpa.toFixed(2)}`
}