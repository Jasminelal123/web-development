function toggleLight() 
{
    var image = document.getElementById('myImage');
    var toggleSwitch = document.getElementById('togBtn');
    var c1 = document.getElementById('c1');

    if (toggleSwitch.checked) 
    {
        image.src = 'images/bulbon.jpg';
        myImage.style.boxShadow = '0 0 5px 5px yellow';
        c1.style.boxShadow = '0 0 5px 5px yellow';
    }
        else
    {
        image.src = 'images/bulboff.jpg';
        myImage.style.boxShadow='none';
        c1.style.boxShadow='none';
    }
}

