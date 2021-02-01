var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn()
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