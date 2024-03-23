// View buttons
const gridbutton = document.querySelector("#grid");
const listenbutton = document.querySelector("#list");
const cards = document.querySelector(".grid");

gridbutton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listenbutton.addEventListener("click", showList);

function showList() {
    cards.classList.add("list");
    cards.classList.remove("grid");
}

// Directory Js for the chambers

const url = "./data/members.json"

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.ChamberOfCommerce.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement("section");
        card.innerHTML = `
            <hr>
            <h4>${member.name}</h4>
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



