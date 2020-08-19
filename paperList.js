/* Doni Brysoni Mbaga */

const ADDBTN = document.getElementById("addBtn");
const RMVBTN = document.getElementById("rmvBtn");
const MAIN = document.getElementsByTagName("main")[0];

ADDBTN.addEventListener("click", addListItem);

RMVBTN.addEventListener("click", rmvListItem);

setInterval(showToday, 500);

function showToday() {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();
  document.getElementById("today").innerHTML = date + ", " + time;
}


function addListItem() {

  function addEl(el, parEl) {
    const listEl = document.createElement(el);
    listEl.setAttribute("type", "text");
    listEl.setAttribute("class", "listItem");
    listEl.setAttribute("id", "list");
    parEl.appendChild(listEl);
  }

  if (MAIN.childElementCount == 0) {
    addEl("input", MAIN);
  } else { 

    const listItem = document.getElementById("list");

    if (MAIN.childElementCount == 1 && listItem.value == "") {
       console.log("Fill that first");
    } 

    else if (MAIN.childElementCount == 1 && listItem.value != "") {
      addEl("input", MAIN); 
    }

    else { 
 
      if (MAIN.childElementCount >= 2) {
        const lastListItem = document.querySelector("input:last-child");
     
        if (lastListItem.value == "") {
          console.log("Fill that first");
        }

        else if (lastListItem.value =! "") {
          addEl("input", MAIN);
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
