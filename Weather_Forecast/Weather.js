




var button = document.querySelector('.submit')

var inputValue = document.querySelector('.city');


var name = document.getElementById('name');

var desc = document.getElementById('description');

 temp = document.getElementById('temp');
 



 aditua = document.getElementById('test');


button.addEventListener("click",function(){
    
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value + '&appid=590263a4c31e510bf3825276f999598c')
.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    temp.innerHTML = Math.round(tempValue) -273+"°C";
    desc.innerHTML  = descValue;
    name.innerHTML = nameValue;
    

    
    
    

})
.catch(err => alert("no dude no city found"));

})







