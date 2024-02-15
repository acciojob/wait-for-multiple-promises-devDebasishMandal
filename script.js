let tableBody=document.getElementById("output");

	let row1 = document.createElement("tr");
	let tdata1=document.createElement("td");
	tdata1.textContent="Loading....";
	row1.appendChild(tdata1);
	tableBody.appendChild(row1);
	row1.colSpan=2;

	let row2 = document.createElement("tr");
	let tdata2=document.createElement("td");
	tdata2.textContent="Loading....";
	row2.appendChild(tdata2);
	tableBody.appendChild(row2);
	row2.colSpan=2;

	let row3 = document.createElement("tr");
	let tdata3=document.createElement("td");
	tdata3.textContent="Loading....";
	row3.appendChild(tdata3);
	tableBody.appendChild(row3);
	row3.colSpan=2;

let randomTime1 = (Math.floor(Math.random() * 3) + 1)*1000;
let randomTime2 = (Math.floor(Math.random() * 3) + 1)*1000;
let randomTime3= (Math.floor(Math.random() * 3) + 1)*1000;

const P1=new promise((res,rej)=>{
	
	setTimeout(()=>{
		res("P1resolved");
	},randomTime1);
});
const P2= new Promise((res,rej)=>{
	
	setTimeout(()=>{
		res("P2resolved");
	},randomTime2);
});
const P3= new Promise((res,rej)=>{
	
	setTimeout(()=>{
		res("P3resolved");
	},randomTime3);
});

async function promresolv(){
	Promise.all([P1,P2,P3]).then((data)=>{
		let d1=data[0];
		let d3=data[1];
		let d4=data[2];
		tdata1.textContent="Promise 1";
		tdata2.textContent="Promise 2";
		tdata3.textContent="Promise 3";
		let tdata12=document.createElement("td");
		let tdata22=document.createElement("td");
		let tdata32=document.createElement("td");
		tdata12.textContent=1;
		tdata12.textContent=2;
		tdata12.textContent=3;
		row1.appendChild(tdata12);
		row2.appendChild(tdata22);
		row3.appendChild(tdata32);
		
		
		let row4=document.createElement('tr');
		let td41=document.createElement('td');
		td41.textContent='Total'
		let td42=document.createElement('td');
		td42.textContent= randomTime1+randomTime2+randomTime3;
		row4.appendChild(td41);
		row4.appendChild(td42);
		tableBody.appendChild(row4);
		
		}).catch((err)=>{console.log(err)});
}

promresolv();