
var Deaths = document.getElementById("Death");
var Recovered = document.getElementById("Recovered");
var NewCases = document.getElementById("NewCases");

















function doit(){

    var url = "https://api.covid19api.com/summary";
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
        console.log(data.Global)
        var  TotalDeaths = data.Global.TotalDeaths;
        var  NewConfirmed = data.Global.NewConfirmed;
        var Recovered2  = data.Global.TotalConfirmed;

        var finalRecovered = Recovered2  - 10000;


        Deaths.innerHTML = 'Deaths:'+ " "+TotalDeaths;
        NewCases.innerHTML = 'New confirmed:'+ " "+NewConfirmed;

        Recovered.innerHTML = ' Recovered:'+ " "+finalRecovered;    


        
    })
    

        

    
}


function refreshPage(){
    window.location.reload();
} 

doit();