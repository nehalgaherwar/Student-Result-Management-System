// =======================================
// Student Result Management System
// Enhanced Version
// =======================================

// Subjects

const semesters = {

    sem1: [
        "IT",
        "ENG-Math",
        "CAD",
        "Web-Tech",
        "Python",
        "BEDE"
    ],

    sem2: [
        "C++",
        "DBMS",
        "CN",
        "CA",
        "EM"
    ]

};

// Total Students

const studentCount = 60;

// Student Database

const students = {};

// Generate Random Marks (35-100)

function randomMarks() {

    return Math.floor(Math.random() * 66) + 35;

}

// Generate Student Data

function generateStudents() {

    for (let i = 1; i <= studentCount; i++) {

        const roll = 100 + i;

        const sem1Marks = {};
        const sem2Marks = {};

        semesters.sem1.forEach(subject => {

            sem1Marks[subject] = randomMarks();

        });

        semesters.sem2.forEach(subject => {

            sem2Marks[subject] = randomMarks();

        });

        students[roll] = {

            name: `Student ${i}`,

            roll,

            sem1: sem1Marks,

            sem2: sem2Marks

        };

    }

}

generateStudents();

// ================================
// Grade Functions
// ================================

function getGrade(mark) {

    if (mark >= 90) return "A+";

    if (mark >= 80) return "A";

    if (mark >= 70) return "B";

    if (mark >= 60) return "C";

    return "F";

}

function getGradeClass(grade) {

    switch (grade) {

        case "A+":
            return "aplus";

        case "A":
            return "a";

        case "B":
            return "b";

        case "C":
            return "c";

        default:
            return "f";

    }

}

// Overall Grade

function getOverallGrade(percentage) {

    if (percentage >= 90) return "A+";

    if (percentage >= 80) return "A";

    if (percentage >= 70) return "B";

    if (percentage >= 60) return "C";

    return "F";

}

// CGPA

function calculateCGPA(percentage) {

    return (percentage / 9.5).toFixed(2);

}

// ==================================
// Loader
// ==================================

function showLoader() {

    document.getElementById("loader").classList.remove("hidden");

}

function hideLoader() {

    document.getElementById("loader").classList.add("hidden");

}// =======================================
// Student Result Management System
// Enhanced Version
// =======================================

// Subjects

const semesters = {

    sem1: [
        "IT",
        "ENG-Math",
        "CAD",
        "Web-Tech",
        "Python",
        "BEDE"
    ],

    sem2: [
        "C++",
        "DBMS",
        "CN",
        "CA",
        "EM"
    ]

};

// Total Students

const studentCount = 60;

// Student Database

const students = {};

// Generate Random Marks (35-100)

function randomMarks() {

    return Math.floor(Math.random() * 66) + 35;

}

// Generate Student Data

function generateStudents() {

    for (let i = 1; i <= studentCount; i++) {

        const roll = 100 + i;

        const sem1Marks = {};
        const sem2Marks = {};

        semesters.sem1.forEach(subject => {

            sem1Marks[subject] = randomMarks();

        });

        semesters.sem2.forEach(subject => {

            sem2Marks[subject] = randomMarks();

        });

        students[roll] = {

            name: `Student ${i}`,

            roll,

            sem1: sem1Marks,

            sem2: sem2Marks

        };

    }

}

generateStudents();

// ================================
// Grade Functions
// ================================

function getGrade(mark) {

    if (mark >= 90) return "A+";

    if (mark >= 80) return "A";

    if (mark >= 70) return "B";

    if (mark >= 60) return "C";

    return "F";

}

function getGradeClass(grade) {

    switch (grade) {

        case "A+":
            return "aplus";

        case "A":
            return "a";

        case "B":
            return "b";

        case "C":
            return "c";

        default:
            return "f";

    }

}

// Overall Grade

function getOverallGrade(percentage) {

    if (percentage >= 90) return "A+";

    if (percentage >= 80) return "A";

    if (percentage >= 70) return "B";

    if (percentage >= 60) return "C";

    return "F";

}

// CGPA

function calculateCGPA(percentage) {

    return (percentage / 9.5).toFixed(2);

}

// ==================================
// Loader
// ==================================

function showLoader() {

    document.getElementById("loader").classList.remove("hidden");

}

function hideLoader() {

    document.getElementById("loader").classList.add("hidden");

}function checkResult() {

    const name = document.getElementById("nameInput").value.trim();
    const roll = document.getElementById("rollInput").value.trim();
    const semester = document.getElementById("semester").value;

    const resultDiv = document.getElementById("result");

    // Validation

    if (name === "") {

        resultDiv.innerHTML = `
            <div class="result-card">
                <h3 style="color:red;">❌ Please enter your name.</h3>
            </div>
        `;
        return;

    }

    if (roll === "") {

        resultDiv.innerHTML = `
            <div class="result-card">
                <h3 style="color:red;">❌ Please enter your roll number.</h3>
            </div>
        `;
        return;

    }

    if (roll < 101 || roll > 160 || !students[roll]) {

        resultDiv.innerHTML = `
            <div class="result-card">
                <h3 style="color:red;">❌ Invalid Roll Number</h3>
                <p>Roll Number must be between <b>101 - 160</b>.</p>
            </div>
        `;
        return;

    }

    showLoader();

    resultDiv.innerHTML = "";

    setTimeout(() => {

        hideLoader();

        const student = students[roll];

        const subjects = semesters[semester];

        const marks = student[semester];

        let total = 0;

        let failedSubjects = 0;

        let rows = "";

        subjects.forEach(subject => {

            const mark = marks[subject];

            const grade = getGrade(mark);

            total += mark;

            if (mark < 40) {

                failedSubjects++;

            }

            rows += `

                <tr>

                    <td>${subject}</td>

                    <td>${mark}</td>

                    <td>
                        <span class="grade ${getGradeClass(grade)}">
                            ${grade}
                        </span>
                    </td>

                </tr>

            `;

        });

        const percentage = (total / subjects.length).toFixed(2);

        const cgpa = calculateCGPA(percentage);

        const overallGrade = getOverallGrade(percentage);

        const status = failedSubjects === 0 ? "PASS" : "FAIL";

        const statusClass = failedSubjects === 0 ? "pass" : "fail";

        let badge = "";

        if (percentage >= 95) {

            badge = `<span class="status topper">🏆 College Topper</span>`;

        } else if (percentage >= 85) {

            badge = `<span class="status distinction">⭐ Distinction</span>`;

        }

        resultDiv.innerHTML = `

<div class="result-card">

<div class="student-header">

<div class="avatar">

${name.charAt(0).toUpperCase()}

</div>

<div class="student-info">

<h2>${name}</h2>

<p><strong>Roll Number:</strong> ${roll}</p>

<p><strong>Semester:</strong> ${semester.toUpperCase()}</p>

<p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>

</div>

</div>

<div class="summary">

<div class="summary-box">

<h4>Total Marks</h4>

<span>${total}</span>

</div>

<div class="summary-box">

<h4>Percentage</h4>

<span>${percentage}%</span>

</div>

<div class="summary-box">

<h4>CGPA</h4>

<span>${cgpa}</span>

</div>

<div class="summary-box">

<h4>Grade</h4>

<span>${overallGrade}</span>

</div>

</div>

<table class="result-table">

<thead>

<tr>

<th>Subject</th>

<th>Marks</th>

<th>Grade</th>

</tr>

</thead>

<tbody>

${rows}

</tbody>

</table>

<div style="padding:25px;text-align:center;">

<h3>Final Result</h3>

<br>

<span class="status ${statusClass}">

${status}

</span>

<br><br>

${badge}

</div>

<div class="action-buttons">

<button class="print-btn" onclick="window.print()">

🖨 Print Result

</button>

<button class="download-btn" onclick="downloadResult()">

📄 Download

</button>

<button class="copy-btn" onclick="copyResult()">

📋 Copy

</button>

</div>

</div>

        `;

    }, 1200);

}