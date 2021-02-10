var opacity = 0;
var intervalID = 0;
window.onload = FadeIn();

function FadeIn()
{
    setInterval(show, 0.5);
}

function show()
{
    var body = document.getElementById("hidden-section");
    opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));

    if(opacity < 1)
    {
        opacity = opacity + 0.001;
        body.style.opacity = opacity
    }
    else
    {
        clearInterval(intervalID);
    }
}

function alertMe()
{
    alert("I'm alerting you!!!");
}

//Fetch Usage
function GetFetch()
{
    FadeIn();
    fetch('http://api.icndb.com/jokes/random')
    .then(response => {
        if(!response.ok)
        {
            throw Error("ERROR");
        }
        return response.json();
    }).then(joke => {
        console.log(joke.value.joke);
        document.querySelector('#hidden-section').innerHTML = joke.value.joke;
    }).catch(error => {
        console.log(error);
    });
}

//AJAX Calls

function getFetchViaAJAXCall(url)
{

    FadeIn();
    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200)
        {
            let joke = JSON.parse(http.response);
            document.querySelector('#hidden-section').innerHTML = joke.value.joke;
            console.log(joke.value.joke);
        }
    }
    
    http.open('GET', url, true);
    http.send();
    
    /*ready states:
    0 - not initialized
    1 - set up
    2 - sent
    3 - process
    4- finished
    */
}

/*
THIS FUNCTION IS NOT COMPLETED, SINCE https://api.github.com/search/repositories IS
PROBABLY DOWN SERVICE
function getFetchWithParameters(q = 'Javascript')
{
    fetch('https://api.github.com/search/repositories')
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        let item = document.createElement('li');
        item.textContent = 'temporal data';
        document.getElementById('repositoriesList').appendChild(item);
    }).catch(error => {
        console.log(error);
    }); 
}

function makeSearch() {
    let search = document.getElementById('searchValue').value;
    getFetchWithParameters(search);
    console.log('searching for repositories: ' + search);
}
*/

