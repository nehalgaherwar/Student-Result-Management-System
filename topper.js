const names=['Aarav','Vivaan','Aditya','Krishna','Rohan','Ankit','Priya','Sneha','Neha','Rahul','Karan','Riya','Aryan','Sakshi','Aditi','Yash','Harsh','Divya','Om','Ved'];
function grade(p){if(p>=90)return'A+';if(p>=80)return'A';if(p>=70)return'B';if(p>=60)return'C';return'F';}
const data=[];
for(let i=0;i<20;i++){
 let per=Math.floor(Math.random()*16)+85;
 data.push({roll:101+i,name:names[i],semester:Math.random()>0.5?'Sem 1':'Sem 2',percentage:per,grade:grade(per)});
}
data.sort((a,b)=>b.percentage-a.percentage);
const tbody=document.getElementById('tbody');
function render(list){
 tbody.innerHTML='';
 list.forEach((s,i)=>{
  const medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1;
  tbody.innerHTML+=`<tr><td>${medal}</td><td>${s.roll}</td><td>${s.name}</td><td>${s.semester}</td><td>${s.percentage}%</td><td>${s.grade}</td></tr>`;
 });
}
render(data);
document.getElementById('search').addEventListener('input',e=>{
 const q=e.target.value.toLowerCase();
 render(data.filter(x=>x.name.toLowerCase().includes(q)||String(x.roll).includes(q)));
});
