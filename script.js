const subjects = ["IT", "ENG-Math", "CAD", "Web-Tech", "Python", "BEDE"];
const studentCount = 60;
const students = {};

// 🔥 Generate random students (IIT Dolkpur batch 😎)
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

// 🎓 Grade logic
function getGrade(mark) {
    if (mark >= 90) return "A+";
    if (mark >= 80) return "A";
    if (mark >= 70) return "B";
    if (mark >= 60) return "C";
    return "F";
}

// ✅ Check Result
function checkResult() {
    const name = document.getElementById("nameInput").value;
    const roll = document.getElementById("rollInput").value;
    const resultDiv = document.getElementById("result");

    if (name === "" || roll === "") {
        resultDiv.innerHTML = "<p style='color:red;'>⚠️ Please enter Name and Roll Number</p>";
        return;
    }

    if (!students[roll]) {
        resultDiv.innerHTML = "<p style='color:red;'>❌ Invalid Roll Number</p>";
        return;
    }

    const student = students[roll];
    let total = 0;

    let output = `
        <h3>🎓 Result Card</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Roll No:</b> ${roll}</p>

        <table>
            <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Grade</th>
            </tr>
    `;

    subjects.forEach(sub => {
        const mark = student.marks[sub];
        total += mark;
        output += `
            <tr>
                <td>${sub}</td>
                <td>${mark}</td>
                <td>${getGrade(mark)}</td>
            </tr>
        `;
    });

    const percentage = (total / (subjects.length * 100)) * 100;
    const status = percentage >= 60 ? "PASS ✅" : "FAIL ❌";

    output += `
        <tr>
            <th>Total</th>
            <th colspan="2">${total}</th>
        </tr>
        <tr>
            <th>Percentage</th>
            <th colspan="2">${percentage.toFixed(2)}%</th>
        </tr>
        <tr>
            <th>Status</th>
            <th colspan="2">${status}</th>
        </tr>
        </table>
    `;

    resultDiv.innerHTML = output;
}

// 🚀 Load class data
generateStudents();
