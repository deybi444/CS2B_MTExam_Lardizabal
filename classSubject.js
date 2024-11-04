const subjectTitle = promt("Enter subject title; ";
const subjectTitle = prompt("Enter subject title:");
const classSchedule = prompt("Enter class schedule (Time, Days):");
const classroom = prompt("Enter classroom:");
const classInstructor = prompt("Enter class instructor:");
const studentName = prompt("Enter student name:");

// Log the information to the console
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}`);
