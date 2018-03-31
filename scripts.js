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
money = (3.2 * days)+(.13 * hours)+(.002 * minutes); // Average pace of half pack a day @ $6.40 a pack
money += 6.4*(days % 4); // Throws in a whole pack every 4 days to account for getting drunk and smoking a bunch
money = money.toFixed(2); // Always displays with two decimal places.


// Writing the entire output to a single string because i'm dumb
// and this is what I've figured out so far.
var formatted ="<------------ You Quit ------------>"+"\n"+days+" Days, "+hours+" Hours, "+minutes+" Minutes : "+"   $"+money+" Saved";	
document.getElementById("clockContent").innerHTML = formatted;