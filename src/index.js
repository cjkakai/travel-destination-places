//define renderDestination function

function renderDestination(destination){
    const card = document.createElement('div')
    card.classList.add('document-card')
    card.innerHTML = `
    <h3> ${destination.name}</h3>
    <img src="${destination.image}" style ="width:100%; height:auto;" alt="photo of ${destination.name}"/>
    <p> ${destination.description}</p>
    <p class="continent"> ${destination.continent}</p>
    <button class="delete-btn">DELETE</buttom>
    `;

    //add delete functionality
    
    card.querySelector('.delete-btn').addEventListener('click', () => {
        fetch(`http://localhost:3000/destinations/${destination.id}`, {
            method: 'DELETE'
        })
        .then(() => card.remove())
        .catch(err => console.error('Failed to delete:', err));
    });
    document.getElementById('destination-list').appendChild(card)
}

//define displayDestination function

function displayDestination(){
    fetch("http://localhost:3000/destinations")
    .then(res => res.json())
    .then(destinations => {destinations.forEach(renderDestination);
    filterByContinent(destinations);
});
}

//run when dom is ready

document.addEventListener("DOMContentLoaded", function(){
    displayDestination();
    addFormListener()
});

// filter by continent

function filterByContinent(destinations){
    const continentSelector = document.getElementById('continent-selector');
    continentSelector.addEventListener("change", function(e){
        e.preventDefault();
        const selectedContinent = e.target.value;
        const valueOfTheSelectedContinent = selectedContinent === 'All'? destinations: 
        destinations.filter(destination => destination.continent === selectedContinent);
        document.getElementById('destination-list').innerHTML="";
        valueOfTheSelectedContinent.forEach(renderDestination);
    })
}

//add event listener

function addFormListener(){
    const newDestinationForm = document.getElementById('new-destination-form');
    newDestinationForm.addEventListener('submit', function(e){
        e.preventDefault();

//grab elements in new description form

const name = document.getElementById('name').value;
const continent = document.getElementById('continent').value;
const image = document.getElementById('image').value;
const description = document.getElementById('description').value;

const newDestination = {name,continent,image,description, visited: false};

fetch("http://localhost:3000/destinations", {
    method: "POST",
    headers: {
        "content-Type":"application/json",
    },
    body: JSON.stringify(newDestination)
})
.then(res => res.json())
.then(savedDestination => {
    renderDestination(savedDestination);
    newDestinationForm.reset();
})
    })
}

// delete function