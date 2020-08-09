/* Doni Brysoni Mbaga */


setInterval(today, 500);

function today() {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();

  document.getElementById("today").innerHTML = date + ", " + time;
}

