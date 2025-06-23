//define renderDestination function

function renderDestination(destination){
    const card = document.createElement('div')
    card.classList.add('document-card')
    card.innerHTML = `
    <h3> ${destination.name}</h3>
    <img src="${destination.image}" style ="width:100%; height:auto;"/>
    <p> ${destination.description}</p>
    <p class="continent"> ${destination.continent}</p>
    `;
    document.getElementById('destination-list').appendChild(card)
}

//define displayDestination function
function displayDestination(){
    fetch("http://localhost:3000/destinations")
    .then(res => res.json())
    .then(destinations => {
        destinations.forEach(destination => renderDestination(destination))
    })
}

//run when dom is ready
document.addEventListener("DOMContentLoaded", function(){
    displayDestination();
});