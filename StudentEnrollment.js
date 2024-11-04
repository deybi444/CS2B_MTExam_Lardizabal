const dsaStudents = [];
const plStudents = [];
const networksStudents = [];

function enrollStudent(subject, studentName) {
  switch (subject) {
    case "DSA":
      dsaStudents.push(studentName);
      break;
    case "PL":
      plStudents.push(studentName);
      break;
    case "Networks":
      networksStudents.push(studentName);
      break;
    default:
      console.log("Invalid subject.");
  }
  console.log(`${studentName} enrolled in ${subject}.`);
}

function unenrollStudent(subject, studentName) {
  // ... (same as before)
}

while (true) {
  const subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) PL\n(C) Networks");

  if (subjectChoice.toUpperCase() === 'A' || subjectChoice.toUpperCase() === 'B' || subjectChoice.toUpperCase() === 'C') {
    const operation = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");

    if (operation.toUpperCase() === 'A') {
      const studentName = prompt("Enter the student's name:");
      enrollStudent(subjectChoice.toUpperCase(), studentName);
    } else if (operation.toUpperCase() === 'B') {
      const studentName = prompt("Enter the student's name:");
      unenrollStudent(subjectChoice.toUpperCase(), studentName);
    } else if (operation.toUpperCase() === 'C') {
      continue; // Go back to the main menu
    } else if (operation.toUpperCase() === 'D') {
      console.log("Exiting program.");
      break;
    } else {
      console.log("Invalid operation.");
    }
  } else {
    console.log("Invalid input. Please try again.");
  }
}
