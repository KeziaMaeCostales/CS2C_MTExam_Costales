// Initialize arrays for each subject
let DSA = [];
let PL = [];
let Networks = [];

function enrollStudent(subject) {
    let studentName = prompt("Enter the name of the student to enroll:");
    subject.push(studentName);
    console.log("Student enrolled successfully.");
}

function unenrollStudent(subject) {
    console.log("Current students enrolled: " + subject.join(", "));
    let studentName = prompt("Enter the name of the student to unenroll:");
    let index = subject.indexOf(studentName);
    if (index !== -1) {
        subject.splice(index, 1);
        console.log("Student unenrolled successfully.");
    } else {
        console.log("Student not found in the list.");
    }
}

function selectSubject() {
    let choice = prompt("Select a subject:\n(A) DSA\n(B) PL\n(C) Networks").toUpperCase();
    if (choice === "A") return DSA;
    else if (choice === "B") return PL;
    else if (choice === "C") return Networks;
    else return null;
}

function operationsMenu(subject) {
    while (true) {
        let operation = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();
        
        if (operation === "A") enrollStudent(subject);
        else if (operation === "B") unenrollStudent(subject);
        else if (operation === "C") break;
        else if (operation === "D") return false;
        else console.log("Invalid operation. Please try again.");
    }
    return true;
}

function printAllStudents() {
    console.log("Enrolled students per subject:");
    console.log("DSA:", DSA.join(", "));
    console.log("PL:", PL.join(", "));
    console.log("Networks:", Networks.join(", "));
}

// Main Program
while (true) {
    let selectedSubject = selectSubject();
    if (!selectedSubject) {
        console.log("Invalid choice. Please try again.");
        continue;
    }

    let continueProgram = operationsMenu(selectedSubject);
    if (!continueProgram) break;
}

printAllStudents();
