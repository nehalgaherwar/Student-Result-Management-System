const semesters = {

sem1:["IT","ENG-Math","CAD","Web-Tech","Python","BEDE"],

sem2:["C++","DBMS","CN","CA","EM"]

};

const studentCount = 60;

const students = {};

function generateStudents(){

for(let i=1;i<=studentCount;i++){

const roll=100+i;

let sem1Marks={};
let sem2Marks={};

semesters.sem1.forEach(sub=>{

sem1Marks[sub]=Math.floor(Math.random()*41)+60;

});

semesters.sem2.forEach(sub=>{

sem2Marks[sub]=Math.floor(Math.random()*41)+60;

});

students[roll]={

name:"Student "+i,

sem1:sem1Marks,

sem2:sem2Marks

};

}

}

function getGrade(mark){

if(mark>=90) return "A+";

if(mark>=80) return "A";

if(mark>=70) return "B";

if(mark>=60) return "C";

return "F";

}

function checkResult(){

const name=document.getElementById("nameInput").value;

const roll=document.getElementById("rollInput").value;

const semester=document.getElementById("semester").value;

const resultDiv=document.getElementById("result");

const downloadBtn=document.getElementById("downloadBtn");

if(name===""||roll===""){

downloadBtn.style.display="none";

resultDiv.innerHTML="<p style='color:red'>Enter Name & Roll</p>";

return;

}

if(!students[roll]){

downloadBtn.style.display="none";

resultDiv.innerHTML="<p style='color:red'>Invalid Roll</p>";

return;

}

const student=students[roll];

const subjects=semesters[semester];

const marks=student[semester];

let total=0;

let output=`<h3>Result Card</h3>

<p><b>Name:</b> ${name}</p>

<p><b>Roll:</b> ${roll}</p>

<p><b>Semester:</b> ${semester.toUpperCase()}</p>

<table>

<tr>

<th>Subject</th>

<th>Marks</th>

<th>Grade</th>

</tr>
`;

subjects.forEach(sub=>{

let mark=marks[sub];

total+=mark;

output+=`

<tr>

<td>${sub}</td>

<td>${mark}</td>

<td>${getGrade(mark)}</td>

</tr>

`;

});

let percentage=(total/(subjects.length*100))*100;

let status=percentage>=60?"PASS":"FAIL";

let statusClass=percentage>=60?"pass":"fail";

output+=`

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

<th colspan="2" class="${statusClass}">${status}</th>

</tr>

</table>
`;

resultDiv.innerHTML=output;
downloadBtn.style.display = "block";


}

generateStudents();
async function downloadPDF() {
    const resultCard = document.getElementById("result");

    if (resultCard.innerHTML.trim() === "") {
        alert("Please generate a result first.");
        return;
    }

    const canvas = await html2canvas(resultCard, {
        scale: 2
    });

    const imgData = canvas.toDataURL("image/png");

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * (pdfWidth - 20)) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, pdfWidth - 20, pdfHeight);

    const name = document.getElementById("nameInput").value || "Student";
    const roll = document.getElementById("rollInput").value || "Result";

    pdf.save(`${name}_${roll}_Result.pdf`);
}