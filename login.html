// ===============================
// Student Result Management System
// Version 2.0
// ===============================

// ---------- Subjects ----------

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

// ---------- Student Database ----------

const students = {};
const TOTAL_STUDENTS = 60;

// ---------- Random Marks ----------

function randomMarks() {
    return Math.floor(Math.random() * 66) + 35;
}

// ---------- Create Students ----------

function generateStudents() {

    for (let i = 1; i <= TOTAL_STUDENTS; i++) {

        const roll = 100 + i;

        let sem1 = {};
        let sem2 = {};

        semesters.sem1.forEach(subject => {
            sem1[subject] = randomMarks();
        });

        semesters.sem2.forEach(subject => {
            sem2[subject] = randomMarks();
        });

        students[roll] = {
            roll,
            name: `Student ${i}`,
            sem1,
            sem2
        };

    }

}

generateStudents();

// ---------- Grade ----------

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

function overallGrade(percentage) {

    if (percentage >= 90) return "A+";

    if (percentage >= 80) return "A";

    if (percentage >= 70) return "B";

    if (percentage >= 60) return "C";

    return "F";

}

function calculateCGPA(percentage) {

    return (percentage / 9.5).toFixed(2);

}

// ---------- Loader ----------

function showLoader() {

    document.getElementById("loader").classList.remove("hidden");

}

function hideLoader() {

    document.getElementById("loader").classList.add("hidden");

}
let currentActiveResult = null;

function renderResultCard(student, semester, name) {
    const resultDiv = document.getElementById("result");
    const subjects = semesters[semester];
    const marks = student[semester];

    let total = 0;
    let failed = false;
    let rows = "";

    subjects.forEach(subject => {
        const mark = marks[subject];
        const grade = getGrade(mark);

        if (mark < 40) failed = true;

        total += mark;

        rows += `
            <tr>
                <td>${subject}</td>
                <td>${mark}</td>
                <td>
                    <span class="grade ${getGradeClass(grade)}">${grade}</span>
                </td>
            </tr>
        `;
    });

    const percentage = (total / subjects.length).toFixed(2);
    const cgpa = calculateCGPA(percentage);
    const grade = overallGrade(percentage);
    const statusText = failed ? t("status_fail") : t("status_pass");
    const statusClass = failed ? "fail" : "pass";
    const semText = t(semester === "sem1" ? "sem_1" : "sem_2");

    resultDiv.innerHTML = `
    <div class="result-card">

        <div class="student-header">

            <div class="avatar">${name.charAt(0).toUpperCase()}</div>

            <div class="student-info">

                <h2>${name}</h2>

                <p>${t("roll_no_prefix")} : ${student.roll}</p>

                <p>${semText}</p>

            </div>

        </div>

        <div class="summary">

            <div class="summary-box">

                <h4>${t("summary_total")}</h4>

                <span>${total}</span>

            </div>

            <div class="summary-box">

                <h4>${t("summary_percentage")}</h4>

                <span>${percentage}%</span>

            </div>

            <div class="summary-box">

                <h4>${t("summary_cgpa")}</h4>

                <span>${cgpa}</span>

            </div>

            <div class="summary-box">

                <h4>${t("summary_grade")}</h4>

                <span>${grade}</span>

            </div>

        </div>

        <table class="result-table">

            <thead>

                <tr>

                    <th>${t("th_subject")}</th>

                    <th>${t("th_marks")}</th>

                    <th>${t("th_grade")}</th>

                </tr>

            </thead>

            <tbody>

                ${rows}

            </tbody>

        </table>

        <div style="padding:25px;text-align:center">

            <span class="status ${statusClass}">${statusText}</span>

        </div>

    </div>
    `;
}

window.refreshCurrentResult = function () {
    if (currentActiveResult) {
        renderResultCard(currentActiveResult.student, currentActiveResult.semester, currentActiveResult.name);
    }
};

function checkResult() {

    const name = document.getElementById("nameInput").value.trim();
    const roll = document.getElementById("rollInput").value.trim();
    const semester = document.getElementById("semester").value;

    const resultDiv = document.getElementById("result");

    if (name === "") {

        resultDiv.innerHTML = `
            <div class="result-card">
                <h3 style="color:red; padding: 20px; text-align: center;">${t("err_enter_name")}</h3>
            </div>
        `;
        currentActiveResult = null;
        return;
    }

    if (roll === "") {

        resultDiv.innerHTML = `
            <div class="result-card">
                <h3 style="color:red; padding: 20px; text-align: center;">${t("err_enter_roll")}</h3>
            </div>
        `;
        currentActiveResult = null;
        return;
    }

    if (!students[roll]) {

        resultDiv.innerHTML = `
            <div class="result-card">
                <h3 style="color:red; padding: 20px; text-align: center;">${t("err_invalid_roll")}</h3>
            </div>
        `;
        currentActiveResult = null;
        return;
    }

    const namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        resultDiv.innerHTML = `
            <div class="result-card">
                <h3 style="color:red; padding: 20px; text-align: center;">${t("err_valid_name")}</h3>
            </div>
        `;
        currentActiveResult = null;
        return;
    }

    showLoader();

    resultDiv.innerHTML = "";

    setTimeout(() => {

        hideLoader();

        const student = students[roll];
        currentActiveResult = { student, semester, name };
        renderResultCard(student, semester, name);

    }, 800);

}
