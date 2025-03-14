const audio = new Audio();
audio.src = "Assets/Click1.wav";

function calculateCumulativeWeights(rarities) {
   let cumulativeWeights = [];
   let sum = 0;
   for (let rarity of rarities) {
      sum += rarity;
      cumulativeWeights.push(sum);
   }
   return cumulativeWeights;
}

function getRandomNumber(rarities) {
   const cumulativeWeights = calculateCumulativeWeights(rarities);
   const rand = Math.random() * cumulativeWeights[cumulativeWeights.length - 1];
   for (let i = 0; i < cumulativeWeights.length; i++) {
      if (rand < cumulativeWeights[i]) {
         return i + 1;
      }
   }
}

function applyLuckBoost(rarities, boostFactor) { 
   return rarities.map(rarity => rarity * boostFactor);
}

function capStone(Rarities, cap) {
   for (let i = 0; i < Rarities.length; i++) {
       if (Rarities[i] > cap) {
          Rarities[i] = cap 
       }
   }
   return Rarities
}

const raritylists = [[0.11,0.24,0.36,0.48,0.05,0.612,0.07,0.816,0.09, 0], 
                     [0.1, 0.20, 0.15, 0.12, 0.05, 0.13, 0.07, 0.08, 0.01, 0], 
                     [0.12, 0.25, 0.18, 0.09, 0.06, 0.14, 0.11, 0.07, 0.08, 0], 
                     [0.14, 0.26, 0.18, 0.15, 0.02, 0.19, 0.03, 0.12, 0.02, 0], 
                     [0.11, 0.20, 0.22, 0.13, 0.05, 0.14, 0.07, 0.10, 0.02, 0], 
                     [0.09, 0.21, 0.13, 0.18, 0.03, 0.17, 0.02, 0.08, 0.04, 0], 
                     [0.12, 0.25, 0.16, 0.11, 0.05, 0.15, 0.07, 0.09, 0.01, 0], 
                     [0.10, 0.24, 0.17, 0.14, 0.03, 0.13, 0.05, 0.11, 0.02, 0], 
                     [0.15, 0.22, 0.19, 0.09, 0.02, 0.18, 0.07, 0.12, 0.01, 0], 
                     [0.08, 0.22, 0.14, 0.18, 0.02, 0.17, 0.03, 0.11, 0.05, 0], 
                     [0.10, 0.21, 0.19, 0.12, 0.03, 0.16, 0.05, 0.09, 0.05, 0], 
                     [0.13, 0.23, 0.15, 0.10, 0.03, 0.18, 0.07, 0.11, 0.02, 0], 
                     [0.09, 0.20, 0.17, 0.13, 0.01, 0.14, 0.02, 0.12, 0.07, 0], 
                     [0.11, 0.24, 0.16, 0.12, 0.03, 0.15, 0.04, 0.08, 0.07, 0], 
                     [0.07, 0.21, 0.14, 0.19, 0.02, 0.16, 0.05, 0.10, 0.06, 0], 
                     [0.12, 0.22, 0.18, 0.09, 0.03, 0.17, 0.05, 0.11, 0.03, 0], 
                     [0.08, 0.20, 0.15, 0.14, 0.01, 0.16, 0.03, 0.10, 0.13, 0], 
                     [0.10, 0.23, 0.17, 0.11, 0.03, 0.19, 0.05, 0.09, 0.03, 0], 
                     [0.13, 0.24, 0.16, 0.08, 0.01, 0.18, 0.05, 0.11, 0.04, 0], 
                     [0.11, 0.25, 0.19, 0.09, 0.02, 0.15, 0.07, 0.10, 0.02, 0], 
                     [0.09, 0.22, 0.14, 0.13, 0.02, 0.17, 0.04, 0.12, 0.05, 0]];

var decToPerc = 0;
var luckbooster = 1;
var cooldown = false;
var HAKARIUSED = false;
var speedboost = false;
var adminluck = 0
var xtraluck = 0;
var tsb = false;
var cap = 0.5;
var admin = false;
var limitless = false;

function Pass(v1) {
	if (v1 == PASSWORD) {
		admin = true;
		console.log("Welcome, Voidd.");
                document.getElementById('secret').innerHTML = "Chances";
	} else {
		console.log("Incorrect.")
	}
}

function toggleCap() {
	if (admin == false) {
	document.getElementById('secret').innerHTML = "Cheating isn't lucky...";
	}
         document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
  if (limitless == false) {
      console.log("Infinite luck activated");
      limitless = true;
   } else if (limitless == true) {
      console.log("Infinite luck deactivated");
      limitless = false;
   }
}

function setCap(Cp) {
	if (admin == false) {
	document.getElementById('secret').innerHTML = "Cheating isn't lucky...";
	}
  cap = Cp/100
 document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
}

function instantRoll() {
   if (admin == false) {
	document.getElementById('secret').innerHTML = "Cheating isn't lucky...";
	}
   if (tsb == false) {
      console.log("Instant-roll activated");
      tsb = true;
   } else if (tsb == true) {
      console.log("Instant-roll deactivated");
      tsb = false;
   }
}

function addLuck(perc) {
	 if (admin == false) {
	document.getElementById('secret').innerHTML = "Cheating isn't lucky...";
	}
   luckbooster += perc/100
   adminluck += perc
   document.getElementById('boosteritem5').outerHTML = "<div class='boosteritem' id='boosteritem5'><h2>Admin Boost</h2> Luck Boost: "+adminluck+"%</div>";
   document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
}

function getRandomList(lists) { 
   const randomIndex = Math.floor(Math.random() * lists.length); 
   return lists[randomIndex];
}



var chosenrarities = getRandomList(raritylists);

function showraritytable() {
	 if (admin == false) {
	document.getElementById('secret').innerHTML = "Cheating isn't lucky...";
	}
   for (let i = 0; i < chosenrarities.length; i++) {
      console.log(chosenrarities[i]*100+"%");
   }
}

function setTable(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10=0) {
	 if (admin == false) {
	document.getElementById('secret').innerHTML = "Cheating isn't lucky...";
	}
   chosenrarities = [n1/100,n2/100,n3/100,n4/100,n5/100,n6/100,n7/100,n8/100,n9/100,n10/100]
   document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
}

function item(r1, r2, r3, r4, r5) {
   if (cooldown == false) {
   	if (speedboost == false && tsb == false) {
      	var totalval = 1;
      	if (limitless == false) {
        var boostedluck = capStone(applyLuckBoost(chosenrarities, luckbooster), cap);
		 } else {
        var boostedluck = applyLuckBoost(chosenrarities, luckbooster);
		 }
      	cooldown = true;
      	document.getElementById('1').outerHTML = "<a class='num' id='1'>0</a>";
      	document.getElementById('2').outerHTML = "<a class='num' id='2'>0</a>";
      	document.getElementById('3').outerHTML = "<a class='num' id='3'>0</a>";
      	document.getElementById('4').outerHTML = "<a class='num' id='4'>0</a>";
      	document.getElementById('5').outerHTML = "<a class='num' id='5'>0</a>";
      	document.getElementById('totalrarity').innerHTML = "Rolling!";
      	document.getElementById('button').innerHTML = "Cooldown: 5";
 
      	setTimeout(function() {
        	 if (HAKARIUSED == false) {
        	    var same = parseInt(document.getElementById('1').innerHTML);
        	    if (document.getElementById('1').innerHTML == same && document.getElementById('2').innerHTML == same && document.getElementById('3').innerHTML == same && document.getElementById('4').innerHTML == same && document.getElementById('5').innerHTML == same) {
        	       luckbooster += same/10;
        	       document.getElementById('1').outerHTML = "<a class='ledgendnum' id='1'>"+same+"</a>";
        	       document.getElementById('2').outerHTML = "<a class='ledgendnum' id='2'>"+same+"</a>";
        	       document.getElementById('3').outerHTML = "<a class='ledgendnum' id='3'>"+same+"</a>";
        	       document.getElementById('4').outerHTML = "<a class='ledgendnum' id='4'>"+same+"</a>";
        	       document.getElementById('5').outerHTML = "<a class='ledgendnum' id='5'>"+same+"</a>";
        	       document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
        	       HAKARIUSED = true;
        	       document.getElementById('boosteritem2').outerHTML = "<div class='boosteritem' id='boosteritem2'><h2>Lucky Number "+same+""+same+""+same+"</h2> Luck Boost: "+(same*10)+"%</div>";
        	    }
        	 }
	
	         cooldown = false;
  	       document.getElementById('button').innerHTML = "Roll";
  	    }, 5500);	

    	  setTimeout(function() {
		  audio.play();
         if (r1 == 10) {
            document.getElementById('1').innerHTML = "0";
         } else {
            document.getElementById('1').innerHTML = r1;
         }
         totalval *= boostedluck[r1 - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[r1 - 1] * 100;
         document.getElementById(r1+'b').innerHTML = r1+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (r1 == 5 || r1 == 7 || r1 == 9) {
            document.getElementById('1').outerHTML = "<a class='rarenum' id='1'>"+r1+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 4";
      }, 1000);

      setTimeout(function() {
	      audio.play();
         if (r2 == 10) {
            document.getElementById('2').innerHTML = "0";
         } else {
            document.getElementById('2').innerHTML = r2;
         }
         totalval *= boostedluck[r2 - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[r2 - 1] * 100;
         document.getElementById(r2+'b').innerHTML = r2+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (r2 == 5 || r2 == 7 || r2 == 9) {
            document.getElementById('2').outerHTML = "<a class='rarenum' id='2'>"+r2+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 3";
      }, 2000);

      setTimeout(function() {
	      audio.play();
         if (r3 == 10) {
            document.getElementById('3').innerHTML = "0";
         } else {
            document.getElementById('3').innerHTML = r3;
         }
         totalval *= boostedluck[r3 - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[r3 - 1] * 100;
         document.getElementById(r3+'b').innerHTML = r3+"'s rarity: "+decToPerc+"%";
         totalval /= 100 
         if (r3 == 5 || r3 == 7 || r3 == 9) {
            document.getElementById('3').outerHTML = "<a class='rarenum' id='3'>"+r3+"</a>";
         }
         if (document.getElementById('1').innerHTML == r3 && document.getElementById('2').innerHTML == r3) { 
             document.getElementById('1').outerHTML = "<a class='epiknum' id='1'>"+r3+"</a>";
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+r3+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+r3+"</a>";
             if (speedboost == false) {
                speedboost = true;
                document.getElementById('boosteritem3').outerHTML = "<div class='boosteritem' id='boosteritem3'><h2>Lucky Sprint!</h2> Speed Boost: -2.5sec</div>";
             } else {
                luckbooster += 0.05
                xtraluck += 5
                document.getElementById('boosteritem4').outerHTML = "<div class='boosteritem' id='boosteritem4'><h2>Xtra Luck</h2> Luck Boost: "+xtraluck+"%</div>";
                document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
             }
         }
         document.getElementById('button').innerHTML = "Cooldown: 2";
      }, 3000);

      setTimeout(function() {
	      audio.play();
         if (r4 == 10) {
            document.getElementById('4').innerHTML = "0";
         } else {
            document.getElementById('4').innerHTML = r4;
         }
         totalval *= boostedluck[r4 - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[r4 - 1] * 100;
         document.getElementById(r4+'b').innerHTML = r4+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (r4 == 5 || r4 == 7 || r4 == 9) {
            document.getElementById('4').outerHTML = "<a class='rarenum' id='4'>"+r4+"</a>";
         }
         if (document.getElementById('2').innerHTML == r4 && document.getElementById('3').innerHTML == r4) { 
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+r4+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+r4+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+r4+"</a>";
             if (speedboost == false) {
                speedboost = true;
                document.getElementById('boosteritem3').outerHTML = "<div class='boosteritem' id='boosteritem3'><h2>Lucky Sprint!</h2> Speed Boost: -2.5sec</div>";
             } else {
                luckbooster += 0.05
                xtraluck += 5
                document.getElementById('boosteritem4').outerHTML = "<div class='boosteritem' id='boosteritem4'><h2>Xtra Luck</h2> Luck Boost: "+xtraluck+"%</div>";
                document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
             }
         }
         document.getElementById('button').innerHTML = "Cooldown: 1";
      }, 4000);

      setTimeout(function() {
	      audio.play();
         if (r5 == 10) {
            document.getElementById('5').innerHTML = "0";
         } else {
            document.getElementById('5').innerHTML = r5;
         }
         totalval *= boostedluck[r5 - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[r5 - 1] * 100;
         document.getElementById(r5+'b').innerHTML = r5+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (r5 == 5 || r5 == 7 || r5 == 9) {
            document.getElementById('5').outerHTML = "<a class='rarenum' id='5'>"+r5+"</a>";
         }
         else if (document.getElementById('3').innerHTML == r5 && document.getElementById('4').innerHTML == r5) {
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+r5+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+r5+"</a>";
             document.getElementById('5').outerHTML = "<a class='epiknum' id='5'>"+r5+"</a>";
             if (speedboost == false) {
                speedboost = true;
                document.getElementById('boosteritem3').outerHTML = "<div class='boosteritem' id='boosteritem3'><h2>Lucky Sprint!</h2> Speed Boost: -2.5sec</div>";
             } else {
                luckbooster += 0.05
                xtraluck += 5
                document.getElementById('boosteritem4').outerHTML = "<div class='boosteritem' id='boosteritem4'><h2>Xtra Luck</h2> Luck Boost: "+xtraluck+"%</div>";
                document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
             }
         }
         document.getElementById('button').innerHTML = "Cooldown: 0";
      }, 5000);
   	} else if (speedboost == true && tsb == false) {
   var totalval = 1;
      cooldown = true;
      if (limitless == false) {
        var boostedluck = capStone(applyLuckBoost(chosenrarities, luckbooster), cap);
		 } else {
        var boostedluck = applyLuckBoost(chosenrarities, luckbooster);
		 }
      document.getElementById('1').outerHTML = "<a class='num' id='1'>0</a>";
      document.getElementById('2').outerHTML = "<a class='num' id='2'>0</a>";
      document.getElementById('3').outerHTML = "<a class='num' id='3'>0</a>";
      document.getElementById('4').outerHTML = "<a class='num' id='4'>0</a>";
      document.getElementById('5').outerHTML = "<a class='num' id='5'>0</a>";
      document.getElementById('totalrarity').innerHTML = "Rolling!";
      document.getElementById('button').innerHTML = "Cooldown: 2.5";
 
      setTimeout(function() {
         if (HAKARIUSED == false) {
            var same = parseInt(document.getElementById('1').innerHTML);
            if (r1 == same && r2 == same && r3 == same && r4 == same && r5 == same) {
               luckbooster += same/10;
               document.getElementById('1').outerHTML = "<a class='ledgendnum' id='1'>"+same+"</a>";
               document.getElementById('2').outerHTML = "<a class='ledgendnum' id='2'>"+same+"</a>";
               document.getElementById('3').outerHTML = "<a class='ledgendnum' id='3'>"+same+"</a>";
               document.getElementById('4').outerHTML = "<a class='ledgendnum' id='4'>"+same+"</a>";
               document.getElementById('5').outerHTML = "<a class='ledgendnum' id='5'>"+same+"</a>";
               document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
               HAKARIUSED = true;
               document.getElementById('boosteritem2').outerHTML = "<div class='boosteritem' id='boosteritem2'><h2>Lucky Number "+same+""+same+""+same+"</h2> Luck Boost: "+(same*10)+"%</div>";
            }
         }

         cooldown = false;
         document.getElementById('button').innerHTML = "Roll";
      }, 3000);

      setTimeout(function() {
	      audio.play();
         if (r1 == 10) {
            document.getElementById('1').innerHTML = "0";
         } else {
            document.getElementById('1').innerHTML = r1;
         }
         totalval *= boostedluck[r1 - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[r1 - 1] * 100;
         document.getElementById(r1+'b').innerHTML = r1+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (r1 == 5 || r1 == 7 || r1 == 9) {
            document.getElementById('1').outerHTML = "<a class='rarenum' id='1'>"+r1+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 2";
      }, 500);

      setTimeout(function() {
	      audio.play();
         if (r2 == 10) {
            document.getElementById('2').innerHTML = "0";
         } else {
            document.getElementById('2').innerHTML = r2;
         }
         totalval *= boostedluck[r2 - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[r2 - 1] * 100;
         document.getElementById(r2+'b').innerHTML = r2+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (r2 == 5 || r2 == 7 || r2 == 9) {
            document.getElementById('2').outerHTML = "<a class='rarenum' id='2'>"+r2+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 1.5";
      }, 1000);

      setTimeout(function() {
	      audio.play();
         if (r3 == 10) {
            document.getElementById('3').innerHTML = "0";
         } else {
            document.getElementById('3').innerHTML = r3;
         }
         totalval *= boostedluck[r3 - 1] * 100;
         document.getElementById('totalrarity').innerHTML = r3+"% Chance";
         decToPerc = boostedluck[r3 - 1] * 100;
         document.getElementById(r3+'b').innerHTML = r3+"'s rarity: "+decToPerc+"%";
         totalval /= 100 
         if (r3 == 5 || r3 == 7 || r3 == 9) {
            document.getElementById('3').outerHTML = "<a class='rarenum' id='3'>"+r3+"</a>";
         }
         if (document.getElementById('1').innerHTML == r3 && document.getElementById('2').innerHTML == r3) { 
             document.getElementById('1').outerHTML = "<a class='epiknum' id='1'>"+r3+"</a>";
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+r3+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+r3+"</a>";
             if (speedboost == false) {
                speedboost = true;
                document.getElementById('boosteritem3').outerHTML = "<div class='boosteritem' id='boosteritem3'><h2>Lucky Sprint!</h2> Speed Boost: -2.5sec</div>";
             } else {
                luckbooster += 0.05
                xtraluck += 5
                document.getElementById('boosteritem4').outerHTML = "<div class='boosteritem' id='boosteritem4'><h2>Xtra Luck</h2> Luck Boost: "+xtraluck+"%</div>";
                document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
             }
         }
         document.getElementById('button').innerHTML = "Cooldown: 1";
      }, 1500);

      setTimeout(function() {
	      audio.play();
         if (r4 == 10) {
            document.getElementById('4').innerHTML = "0";
         } else {
            document.getElementById('4').innerHTML = r4;
         }
         totalval *= boostedluck[r4 - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[r4 - 1] * 100;
         document.getElementById(r4+'b').innerHTML = r4+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (r4 == 5 || r4 == 7 || r4 == 9) {
            document.getElementById('4').outerHTML = "<a class='rarenum' id='4'>"+r4+"</a>";
         }
         if (document.getElementById('2').innerHTML == r4 && document.getElementById('3').innerHTML == r4) { 
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+r4+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+r4+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+r4+"</a>";
             if (speedboost == false) {
                speedboost = true;
                document.getElementById('boosteritem3').outerHTML = "<div class='boosteritem' id='boosteritem3'><h2>Lucky Sprint!</h2> Speed Boost: -2.5sec</div>";
             } else {
                luckbooster += 0.05
                xtraluck += 5
                document.getElementById('boosteritem4').outerHTML = "<div class='boosteritem' id='boosteritem4'><h2>Xtra Luck</h2> Luck Boost: "+xtraluck+"%</div>";
             }
         }
         document.getElementById('button').innerHTML = "Cooldown: 0.5";
      }, 2000);

      setTimeout(function() {
	      audio.play();
         if (r5 == 10) {
            document.getElementById('5').innerHTML = "0";
         } else {
            document.getElementById('5').innerHTML = r5;
         }
         totalval *= boostedluck[r5 - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[r5 - 1] * 100;
         document.getElementById(r5+'b').innerHTML = r5+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (r5 == 5 || r5 == 7 || r5 == 9) {
            document.getElementById('5').outerHTML = "<a class='rarenum' id='5'>"+r5+"</a>";
         }
         else if (document.getElementById('3').innerHTML == r5 && document.getElementById('4').innerHTML == r5) {
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+r5+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+r5+"</a>";
             document.getElementById('5').outerHTML = "<a class='epiknum' id='5'>"+r5+"</a>";
             if (speedboost == false) {
                speedboost = true;
                document.getElementById('boosteritem3').outerHTML = "<div class='boosteritem' id='boosteritem3'><h2>Lucky Sprint!</h2> Speed Boost: -2.5sec</div>";
             } else {
                luckbooster += 0.05
                xtraluck += 5
                document.getElementById('boosteritem4').outerHTML = "<div class='boosteritem' id='boosteritem4'><h2>Xtra Luck</h2> Luck Boost: "+xtraluck+"%</div>";
                document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
             }
         }
         document.getElementById('button').innerHTML = "Cooldown: 0";
      }, 2500);
   	} else if (tsb == true) {
      var totalval = 1;
      if (limitless == false) {
        var boostedluck = capStone(applyLuckBoost(chosenrarities, luckbooster), cap);
		 } else {
        var boostedluck = applyLuckBoost(chosenrarities, luckbooster);
		 }
      cooldown = true;
      document.getElementById('1').outerHTML = "<a class='num' id='1'>0</a>";
      document.getElementById('2').outerHTML = "<a class='num' id='2'>0</a>";
      document.getElementById('3').outerHTML = "<a class='num' id='3'>0</a>";
      document.getElementById('4').outerHTML = "<a class='num' id='4'>0</a>";
      document.getElementById('5').outerHTML = "<a class='num' id='5'>0</a>";

      if (HAKARIUSED == false) {
         var same = r1
         if (r1 == same && r2 == same && r3 == same && r4 == same && r5== same) {
            luckbooster += same/10;
            document.getElementById('1').outerHTML = "<a class='ledgendnum' id='1'>"+same+"</a>";
            document.getElementById('2').outerHTML = "<a class='ledgendnum' id='2'>"+same+"</a>";
            document.getElementById('3').outerHTML = "<a class='ledgendnum' id='3'>"+same+"</a>";
            document.getElementById('4').outerHTML = "<a class='ledgendnum' id='4'>"+same+"</a>";
            document.getElementById('5').outerHTML = "<a class='ledgendnum' id='5'>"+same+"</a>";
            document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
            HAKARIUSED = true;
            document.getElementById('boosteritem2').outerHTML = "<div class='boosteritem' id='boosteritem2'><h2>Lucky Number "+same+""+same+""+same+"</h2> Luck Boost: "+(same*10)+"%</div>";
         }
      }

      if (r1 == 10) {
         document.getElementById('1').innerHTML = "0";
      } else {
         document.getElementById('1').innerHTML = r1;
      }
      totalval *= boostedluck[r1 - 1] * 100;
      document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
      decToPerc = boostedluck[r1 - 1] * 100;
      document.getElementById(r1+'b').innerHTML = r1+"'s rarity: "+decToPerc+"%";
      totalval /= 100
      if (r1 == 5 || r1 == 7 || r1 == 9) {
         document.getElementById('1').outerHTML = "<a class='rarenum' id='1'>"+r1+"</a>";
      }

      if (r2 == 10) {
         document.getElementById('2').innerHTML = "0";
      } else {
         document.getElementById('2').innerHTML = r2;
      }
      totalval *= boostedluck[r2 - 1] * 100;
      document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
      decToPerc = boostedluck[r2 - 1] * 100;
      document.getElementById(r2+'b').innerHTML = r2+"'s rarity: "+decToPerc+"%";
      totalval /= 100
      if (r2 == 5 || r2 == 7 || r2 == 9) {
         document.getElementById('2').outerHTML = "<a class='rarenum' id='2'>"+r2+"</a>";
      }

      if (r3 == 10) {
         document.getElementById('3').innerHTML = "0";
      } else {
         document.getElementById('3').innerHTML = r3;
      }
      totalval *= boostedluck[r3 - 1] * 100;
      document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
      decToPerc = boostedluck[r3 - 1] * 100;
      document.getElementById(r3+'b').innerHTML = r3+"'s rarity: "+decToPerc+"%";
      totalval /= 100
      if (r3 == 5 || r3 == 7 || r3 == 9) {
         document.getElementById('3').outerHTML = "<a class='rarenum' id='3'>"+r3+"</a>";
      }

      if (r4 == 10) {
         document.getElementById('4').innerHTML = "0";
      } else {
         document.getElementById('4').innerHTML = r4;
      }
      totalval *= boostedluck[r4 - 1] * 100;
      document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
      decToPerc = boostedluck[r4 - 1] * 100;
      document.getElementById(r4+'b').innerHTML = r4+"'s rarity: "+decToPerc+"%";
      totalval /= 100
      if (r4 == 5 || r4 == 7 || r4 == 9) {
         document.getElementById('4').outerHTML = "<a class='rarenum' id='4'>"+r4+"</a>";
      }

      if (r5 == 10) {
         document.getElementById('5').innerHTML = "0";
      } else {
         document.getElementById('5').innerHTML = r5;
      }
      totalval *= boostedluck[r5 - 1] * 100;
      document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
      decToPerc = boostedluck[r5 - 1] * 100;
      document.getElementById(r5+'b').innerHTML = r5+"'s rarity: "+decToPerc+"%";
      totalval /= 100
      if (r5 == 5 || r5 == 7 || r5 == 9) {
         document.getElementById('5').outerHTML = "<a class='rarenum' id='5'>"+r5+"</a>";
      }
		cooldown = false;
   }
   }
}

function devclick(r1,r2,r3,r4,r5) {
	if (admin == false) {
	document.getElementById('secret').innerHTML = "Cheating isn't lucky...";
	}
   if (cooldown == false) {
      if (limitless == false) {
        var boostedluck = capStone(applyLuckBoost(chosenrarities, luckbooster), cap);
		 } else {
        var boostedluck = applyLuckBoost(chosenrarities, luckbooster);
		 }
      item(r1, r2, r3, r4, r5);
   }
}
        
document.getElementById('button').addEventListener('click', function() {
   if (cooldown == false) {
		 if (limitless == false) {
        var boostedluck = capStone(applyLuckBoost(chosenrarities, luckbooster), cap);
		 } else {
        var boostedluck = applyLuckBoost(chosenrarities, luckbooster);
		 }
      var value1 = getRandomNumber(boostedluck);
      var value2 = getRandomNumber(boostedluck);
      var value3 = getRandomNumber(boostedluck);
      var value4 = getRandomNumber(boostedluck);
      var value5 = getRandomNumber(boostedluck);
      item(value1, value2, value3, value4, value5);
   }
});

document.addEventListener('keydown', function() {
   if (event.key == ' ') {
      if (cooldown == false) {
         if (limitless == false) {
        var boostedluck = capStone(applyLuckBoost(chosenrarities, luckbooster), cap);
		 } else {
        var boostedluck = applyLuckBoost(chosenrarities, luckbooster);
		 }
         var value1 = getRandomNumber(boostedluck);
         var value2 = getRandomNumber(boostedluck);
         var value3 = getRandomNumber(boostedluck);
         var value4 = getRandomNumber(boostedluck);
         var value5 = getRandomNumber(boostedluck);
         item(value1, value2, value3, value4, value5);
      }
   }
});

var boostedBySecret = false;

document.getElementById('secret').addEventListener('click', function() {
   if (boostedBySecret == false) {
      luckbooster += 0.15;

      document.getElementById('boosteritem').outerHTML = "<div class='boosteritem' id='boosteritem'><h2>Chance Master</h2> Luck Boost: 15%</div>";
      
      document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
      
      boostedBySecret = true;
   }
});
