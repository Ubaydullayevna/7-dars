const api = "https://jsonplaceholder.typicode.com/todos/";

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState == 4 && request.status == 200) {
    const data = JSON.parse(request.responseText);
    UpdateUI(data);

    const doneRadio = document.getElementById("doneRadio");
    const notRadio = document.getElementById("notRadio");
    const allRadio = document.getElementById("allRadio");

    doneRadio.addEventListener("click", () => {
      UpdateUI(data.filter((todo) => todo.completed === true));
      notRadio.checked === false;
      allRadio.checked = false;
    });
    notRadio.addEventListener("click", () => {
      UpdateUI(data.filter((todo) => todo.completed === false));
      doneRadio.checked = false;
      allRadio.checked = false;
    });

    allRadio.addEventListener("click", () => {
      updateUI(data);
      doneRadio.checked = false;
      notRadio.checked = false;
    });
  } else if (request.readyState == 4) {
    console.log("Eror");
  } else {
    console.log("Loading....");
  }
});
request.open("get", api);
request.send();
const ul = document.querySelector("ul");
function UpdateUI(data) {
  ul.innerHTML = "";
  data.slice(0, 20).forEach((todo, index) => {
    console.log(`Index: ${index} - ${todo}`);
    ul.innerHTML += `

   <li class="card">
           <h3>ID ${todo.id} </h3> 
           <h4>Compleated: ${todo.completed}   </h4>
           <p> ${todo.title} </p>
        </li>
  `;
  });
}

// function filterData(getData) {
//   if (getData === "all") {
//     return data;
//   } else if (getData === "not") {
//     return data.filter((item) => item.completed === false);
//   } else if (getData === "done") {
//     return data.filter((item) => item.completed === true);
//   }
// }

// const selectedRadio = 'done';

// const filteredData = filterData(selectedRadio);
// console.log(filteredData);
