var Title = document.getElementById('card-title');
var Description = document.getElementById('card-description');


var button = document.getElementById('Button');



button.addEventListener('click',function(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(response => response.json())
.then(data =>{
    Title.innerHTML = data['meals'][0]['strMeal'];
    Description.innerHTML = data['meals'][0]['strInstructions'];

    
})

})

