"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td class="coffeename">' + coffee.name + '</td>';
    html += '<td class="roast">' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
        coffees.forEach(function (coffee) {
            if (selectedRoast === 'all' && coffee.name.toLowerCase().includes(coffeeName.value)) {
                filteredCoffees.push(coffee);
            } else if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(coffeeName.value)) {
                filteredCoffees.push(coffee);
            }
        });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
console.log(updateCoffees);


function addNewCoffee(coffee) {
    let newCoffee = [{name: newCoffeeInput, roast: newCoffeeRoast}]
    coffees.push(newCoffee)
    tbody.innerHTML = renderCoffees(newCoffee);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
var coffeeName = document.querySelector("#CoffeeName");
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var newCoffeeInput = document.querySelector('#entercoffeeName').value;
var newCoffeeRoast = document.querySelector('#roasttype').value;
var newCoffeeSubmit = document.querySelector('#submitButton')

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

coffeeName.addEventListener("keyup", updateCoffees);




