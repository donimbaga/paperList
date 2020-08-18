/* Doni Brysoni Mbaga */


setInterval(showToday, 500);

function showToday() {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();
  document.getElementById("today").innerHTML = date + ", " + time;
}

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addListItem);

const rmvBtn = document.getElementById("rmvBtn");
rmvBtn.addEventListener("click", rmvListItem);

function addListItem() {
  const main = document.getElementsByTagName("main")[0];

  if (main.childElementCount == 0) {
    const listEl = document.createElement("input");
    listEl.setAttribute("type", "text");
    listEl.setAttribute("class", "listItem");
    listEl.setAttribute("id", "list");
    main.appendChild(listEl);
  } else { 

    const listItem = document.getElementById("list");

    if (main.childElementCount == 1 && listItem.value == "") {
       console.log("Fill that first");
    } 

    else if (main.childElementCount == 1 && listItem.value != "") {
      const listEl = document.createElement("input");
      listEl.setAttribute("type", "text");
      listEl.setAttribute("class", "listItem");
      listEl.setAttribute("id", "list");
      main.appendChild(listEl);
    }

    else { 
 
      if (main.childElementCount >= 2) {
        const lastListItem = document.querySelector("input:last-child");
     
        if (lastListItem.value == "") {
          console.log("Fill that first");
        }

        else if (lastListItem.value =! "") {
          const listEl = document.createElement("input");
          listEl.setAttribute("type", "text");
          listEl.setAttribute("class", "listItem");
          listEl.setAttribute("id", "list");
          main.appendChild(listEl);
        }
      }
    }
  }
}
     
/*
      if (main.childElementCount >= 1) {

        const listItem = document.getElementById("list");

        if (main.childElementCount == 1 && listItem.value == "") {
          window.alert("Fill that empty list first");
        } else if (main.childElement == 1 && listItem.value != "") {
            const listEl = document.createElement("input");
            listEl.setAttribute("type", "text");
            listEl.setAttribute("class", "listItem");
            listEl.setAttribute("id", "list");
            main.appendChild(listEl);
        } else if (main.childElement >= 2) {
            const lastListItem = document.querySelector("input:last-child");
      
          if (lastListItem == "") {
            window.alert("Fill that empty list first");
          } else if (lastListItem =! "") {
            const listEl = document.createElement("input");
            listEl.setAttribute("type", "text");
            listEl.setAttribute("class", "listItem");
            listEl.setAttribute("id", "list");
            main.appendChild(listEl);
          }
        }
      }
   }
}
*/

/*const input = document.querySelector("input:last-child");
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    const listEl = document.createElement("input");
    listEl.setAttribute("type", "text");
    listEl.setAttribute("class", "listItem");
    listEl.setAttribute("id", "list");
    const main = document.getElementsByTagName("main")[0];
    main.appendChild(listEl);
  } 
});*/

function rmvListItem() {
}
