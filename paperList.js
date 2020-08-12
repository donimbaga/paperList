/* Doni Brysoni Mbaga */


setInterval(showToday, 500);

function showToday() {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();

  document.getElementById("today").innerHTML = date + ", " + time;
}

const addButt = document.getElementById("addButt");
addButt.addEventListener("click", addListItem);

function addListItem() {
  const listItem = document.createElement("input");
  listItem.setAttribute("type", "text");
  listItem.setAttribute("class", "listItem");
  listItem.setAttribute("id", "list");
  const main = document.getElementsByTagName("main")[0];
  main.appendChild(listItem);

  const input = document.querySelector("input:last-child");
  input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
       console.log("You pressed 'enter'");
    } 
  });
} 

