// View buttons
function setupViewButtons() {
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("cards");

    if (gridbutton && listbutton && display) {
        gridbutton.addEventListener("click", () => {
            display.classList.add("grid");
            display.classList.remove("list");
        });

        listbutton.addEventListener("click", () => {
            display.classList.add("list");
            display.classList.remove("grid");
        });
    } else {
        console.error("One or more elements not found.");
    }
}

document.addEventListener("DOMContentLoaded", setupViewButtons);

// Directory Js for the chambers

const url = "./data/members.json"

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.ChamberOfCommerce.members);
}

const displayMembers = (members) => {
    const cards = document.getElementById("cards");
    members.forEach((member) => {
        const card = document.createElement("section");
        card.innerHTML = `
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phoneNumber}</p>
            <p>${member.membershipLevel}</p>
            <p>${member.websiteURL}</p>
            <p>${member.other}</p>
            <img src="${member.image}" alt="Image of ${member.name}" loading="lazy" width="540" height="400">
        
        `;
        cards.append(card);
    });
};

getMemberData().catch(error => {
    console.error('Error fetching member data:', error);
});



