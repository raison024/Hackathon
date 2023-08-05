var countDownDate = new Date("Aug 12, 2023 0:0:0").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + " Days ";
  document.getElementById("hours").innerHTML = hours + " Hours ";
  document.getElementById("minutes").innerHTML = minutes + " Minutes ";
  document.getElementById("seconds").innerHTML = seconds + " Seconds ";

  document.getElementById("demo2").innerHTML = "Ends in: " + days + " Days ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    document.getElementById("demo2").innerHTML = "Closed";
  }
}, 1000);