
let tableBody = document.getElementById("output");

tableBody.innerHTML = `
	<tr id="loading">
                <td colspan=2>Loading...</td>
            </tr>
			<tr id="loading">
                <td colspan=2>Loading...</td>
            </tr>
			<tr id="loading">
                <td colspan=2>Loading...</td>
            </tr>
			`;

let randomTime1 = (Math.floor(Math.random() * 3) + 1) * 1000;
let randomTime2 = (Math.floor(Math.random() * 3) + 1) * 1000;
let randomTime3 = (Math.floor(Math.random() * 3) + 1) * 1000;

const P1 = new Promise((res, rej) => {
  setTimeout(() => {
    res({
      name: "P1resolved",
      time: randomTime1 / 1000,
    });
  }, randomTime1);
});
const P2 = new Promise((res, rej) => {
  setTimeout(() => {
    res({
      name: "P2resolved",
      time: randomTime2 / 1000,
    });
  }, randomTime2);
});
const P3 = new Promise((res, rej) => {
  setTimeout(() => {
    res({
      name: "P3resolved",
      time: randomTime3 / 1000,
    });
  }, randomTime3);
});

async function promresolv() {
  const startTime = new Date();

  Promise.all([P1, P2, P3])
    .then((data) => {
      tableBody.innerHTML = ``;
      // logging all the array
      data.forEach((e) => {
        tableBody.innerHTML += `<tr>
	<td>${e.name}</td>
	<td>${e.time}</td>
</tr>`;
      });
	  const endTime = new Date();
  const finalTime = endTime - startTime;
  tableBody.innerHTML += `<tr>
<td>Total</td>
<td>${finalTime / 1000}</td>
</tr>`;
    })
    .catch((err) => {
      console.log(err);
    });

  

}

promresolv();
