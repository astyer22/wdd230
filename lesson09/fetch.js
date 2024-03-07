const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let result = null;
async function getPokemon(url) {
    const results = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.  
        const data = await response.json();
        doStuff(data);
    }  
}

function dostuff(data) {
    results = data;
    console.log("first: ", results);
}

getPoemon(url);
console.log("second: ", results);
