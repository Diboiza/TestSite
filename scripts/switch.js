var select = document.querySelector('select');
var para = document.querySelector('p')

select.addEventListener('change', setWeather)

function setWeather()
{
    var choice = select.value;
    
    switch(choice)
    {
        case 'sunny':
            para.textContent = 'The weather is sunny. wear shorts';
            para.style.color = 'yellow';
            break;

        case 'rainy':
            para.textContent = "it's raining, grab an umbrella";
            para.style.color = 'blue';

        case 'snowing':
            para.textContent = "It's snowing, dress warm";
            para.style.color = 'navy';

        case 'overcast':
            para.textContent = "The weather is cloud, be aware";
            para.style.color = "grey";

        default:
            para.textContent = '';
    }

    var cars = {make: 'Audi', model:'A3-sportback', year:'2020', color:'red', owner:'Bongani'}
    var make = document.getElementById('make');
    var model = document.getElementById('model');
    var year = document.getElementById('year');
    var color = document.getElementById('color');
    var owner = document.getElementById('owner');
    var button = document.getElementById('btn');

    button.onclick = function()
    {
        viewDetails();
    }

    function viewDetails(){
        make.innerHTML = cars.make;
        model.innerHTML = cars.model;
        year.innerHTML = cars.year;
        color.innerHTML = cars.color;
        owner.innerHTML
         = cars.owner;
    }
}
