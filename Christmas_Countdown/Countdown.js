function countdown(){



console.log('ok');
}

setInterval(
  function() {
    var currentdate = new Date();   

    var Christmas  = new Date('Dec 25, 2021  00:00:00')


    


    var daysleft = Christmas - currentdate
    var seconds = 1000;
    var minutes = seconds * 60;
    var hour  =  minutes * 60;
    var day = hour*24;

    
    var d  = Math.floor(daysleft/day);
    var h= Math.floor((daysleft%day)/(hour));
    var m = Math.floor((daysleft%(hour)/(minutes)));
    var s = Math.floor((daysleft%(minutes)/(seconds)));
    var minuteshow = document.getElementById("minutes");
    var hours = document.getElementById("no");
    var days = document.getElementById("da");
    var seconds = document.getElementById("seconds")


    
    days.innerText = d +" "+ 'days';

    hours.innerText = h;

    minuteshow.innerText = m;

    seconds.innerText = s + ' '+ 'seconds ';
  }  , 1000);



