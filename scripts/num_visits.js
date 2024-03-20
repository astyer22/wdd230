const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = console.log(numVisits);
} else {
    visitsDisplay.textContent = `This is your first visit, welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

