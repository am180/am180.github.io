// Quit Smoking Counters
var start = new Date("March 25, 2018, 11:00:00");
var today = new Date();
total = today - start;

// Division happening here
days = Math.floor(total / 86400000);
remainder = total % 86400000;
hours = Math.floor(remainder / 3600000);
remainder = remainder % 3600000;
minutes = Math.floor(remainder / 60000);
remainder = remainder % 60000;
seconds = Math.floor(remainder / 1000);

// Money Calculation
money = (3.2 * days)+(.13 * hours)+(.002 * minutes);
money = money.toFixed(2);

var formatted = days+" Days, "+hours+" Hours, "+minutes+" Minutes, "+seconds+" Seconds ::"+"   $"+money+" Saved";	
document.getElementById("clock").innerHTML = formatted;