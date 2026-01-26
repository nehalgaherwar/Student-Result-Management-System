const subjects = ["IT", "ENG-Math", "CAD", "Web-tech", "Python", "BEDE"];
const studentCount = 60;
const students = {};

// 🔹 Generate random students
function generateStudents() {
    for (let i = 1; i <= studentCount; i++) {
        const roll = 100 + i;
        let marks = {};

        subjects.forEach(sub => {
            marks[sub] = Math.floor(Math.random() * 41) + 60; // 60–100
        });

        students[roll] = {
            name: "Student " + i,
            marks: marks
        };
    }
}

// 🔹 Grade calculation
function getGrade(mark) {
    if (mark >= 90) return "A+";
    if (mark >= 80) return "A";
    if (mark >= 70) return "B";
    if (mark >= 60) return "C";
    return "F";
}

// 🔹 Result check function
function checkResult() {
    const name = document.getElementById("nameInput").value;
    const roll = document.getElementById("rollInput").value;
    const resultDiv = document.getElementById("result");

    if (!name) {
        resultDiv.innerHTML = `<p style="color:red;">Please enter your name</p>`;
        return;
    }

    if (!students[roll]) {
        resultDiv.innerHTML = `<p style="color:red;">Invalid Roll Number</p>`;
        return;
    }

    const student = students[roll];
    let output = `<h3>${name} (Roll No: ${roll})</h3>`;
    output += `<table border="1" cellpadding="8" style="margin:auto;border-collapse:collapse;">
                <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>Grade</th>
                </tr>`;

    subjects.forEach(sub => {
        const mark = student.marks[sub];
        output += `
            <tr>
                <td>${sub}</td>
                <td>${mark}</td>
                <td>${getGrade(mark)}</td>
            </tr>`;
    });

    output += `</table>`;
    resultDiv.innerHTML = output;
}

// 🔹 Generate class data on page load
generateStudents();
