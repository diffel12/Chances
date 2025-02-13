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

const raritylists = [[0.11,0.24,0.36,0.48,0.05,0.612,0.07,0.816,0.09], [0.1, 0.20, 0.15, 0.12, 0.05, 0.13, 0.07, 0.08, 0.01], [0.12, 0.25, 0.18, 0.09, 0.06, 0.14, 0.11, 0.07, 0.08], [0.14, 0.26, 0.18, 0.15, 0.02, 0.19, 0.03, 0.12, 0.02], [0.11, 0.20, 0.22, 0.13, 0.05, 0.14, 0.07, 0.10, 0.02], [0.09, 0.21, 0.13, 0.18, 0.03, 0.17, 0.02, 0.08, 0.04], [0.12, 0.25, 0.16, 0.11, 0.05, 0.15, 0.07, 0.09, 0.01], [0.10, 0.24, 0.17, 0.14, 0.03, 0.13, 0.05, 0.11, 0.02], [0.15, 0.22, 0.19, 0.09, 0.02, 0.18, 0.07, 0.12, 0.01], [0.08, 0.22, 0.14, 0.18, 0.02, 0.17, 0.03, 0.11, 0.05], [0.10, 0.21, 0.19, 0.12, 0.03, 0.16, 0.05, 0.09, 0.05], [0.13, 0.23, 0.15, 0.10, 0.03, 0.18, 0.07, 0.11, 0.02], [0.09, 0.20, 0.17, 0.13, 0.01, 0.14, 0.02, 0.12, 0.07], [0.11, 0.24, 0.16, 0.12, 0.03, 0.15, 0.04, 0.08, 0.07], [0.07, 0.21, 0.14, 0.19, 0.02, 0.16, 0.05, 0.10, 0.06], [0.12, 0.22, 0.18, 0.09, 0.03, 0.17, 0.05, 0.11, 0.03], [0.08, 0.20, 0.15, 0.14, 0.01, 0.16, 0.03, 0.10, 0.13], [0.10, 0.23, 0.17, 0.11, 0.03, 0.19, 0.05, 0.09, 0.03], [0.13, 0.24, 0.16, 0.08, 0.01, 0.18, 0.05, 0.11, 0.04], [0.11, 0.25, 0.19, 0.09, 0.02, 0.15, 0.07, 0.10, 0.02], [0.09, 0.22, 0.14, 0.13, 0.02, 0.17, 0.04, 0.12, 0.05]];
var decToPerc = 0;
var luckbooster = 1.5;
var cooldown = false;
var HAKARIUSED = false;
var speedboost = false;
var adminluck = 0
var xtraluck = 0;

function addLuck(perc) {
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
   for (let i = 0; i < chosenrarities.length; i++) {
      console.log(chosenrarities[i]*100+"%");
   }
}

function setTable(n1,n2,n3,n4,n5,n6,n7,n8,n9) {
   chosenrarities = [n1/100,n2/100,n3/100,n4/100,n5/100,n6/100,n7/100,n8/100,n9/100]
}

function devclick(r1,r2,r3,r4,r5) {
   if (cooldown == false && r1 == 0 && r2 == 0 && r3 == 8 && r4 == 0 && r5 == 0) {
      document.getElementById('1').outerHTML = "<a class='num' id='1'>0</a>";
      document.getElementById('2').outerHTML = "<a class='num' id='2'>0</a>";
      document.getElementById('3').outerHTML = "<a class='num' id='3'>8</a>";
      document.getElementById('4').outerHTML = "<a class='num' id='4'>0</a>";
      document.getElementById('5').outerHTML = "<a class='num' id='5'>0</a>";
      document.getElementById('totalrarity').innerHTML = "...";
      document.getElementById('button').innerHTML = "Cooldown: ?";
   } else if (cooldown == false) {
      var totalval = 1;
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
               document.getElementById('boosteritem2').outerHTML = "<div class='boosteritem' id='boosteritem2'><h2>Hakari's luck "+same+""+same+""+same+"</h2> Luck Boost: "+(same*10)+"%</div>";
            }
         }

         cooldown = false;
         document.getElementById('button').innerHTML = "Roll";
      }, 5500);

      setTimeout(function() {
         var value = r1;
         document.getElementById('1').innerHTML = value;
         totalval *= chosenrarities[value - 1] * luckbooster
         totalval *= 100
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = (chosenrarities[value-1] * luckbooster) * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('1').outerHTML = "<a class='rarenum' id='1'>"+value+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 4";
      }, 1000);

      setTimeout(function() {
         var value = r2;
         document.getElementById('2').innerHTML = value;
         totalval *= chosenrarities[value - 1] * luckbooster
         totalval *= 100
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = (chosenrarities[value-1] * luckbooster) * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('2').outerHTML = "<a class='rarenum' id='2'>"+value+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 3";
      }, 2000);

      setTimeout(function() {
         var value = r3;
         document.getElementById('3').innerHTML = value;
         totalval *= chosenrarities[value - 1] * luckbooster
         totalval *= 100
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = (chosenrarities[value-1] * luckbooster) * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100 
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('3').outerHTML = "<a class='rarenum' id='3'>"+value+"</a>";
         }
         if (document.getElementById('1').innerHTML == value && document.getElementById('2').innerHTML == value) { 
             document.getElementById('1').outerHTML = "<a class='epiknum' id='1'>"+value+"</a>";
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             if (speedboost == false) {
                speedboost = true;
                document.getElementById('boosteritem3').outerHTML = "<div class='boosteritem' id='boosteritem3'><h2>Lucky Sprint!</h2> Speed Boost: -2.5sec</div>";
             } else {
                luckbooster += 0.05
                xtraluck += 5
                document.getElementById('boosteritem4').outerHTML = "<div class='boosteritem' id='boosteritem4'><h2>Xtra Luck</h2> Luck Boost: "+xtraluck+"%</div>";
             }
         } else if (document.getElementById('2').innerHTML == value && document.getElementById('4').innerHTML == value) {
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
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
         var value = r4;
         document.getElementById('4').innerHTML = value;
         totalval *= chosenrarities[value - 1] * luckbooster
         totalval *= 100
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = (chosenrarities[value-1] * luckbooster) * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('4').outerHTML = "<a class='rarenum' id='4'>"+value+"</a>";
         }
         if (document.getElementById('2').innerHTML == value && document.getElementById('3').innerHTML == value) { 
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
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
         var value = r5;
         document.getElementById('5').innerHTML = value;
         totalval *= chosenrarities[value - 1] * luckbooster
         totalval *= 100
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = (chosenrarities[value-1] * luckbooster) * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('5').outerHTML = "<a class='rarenum' id='5'>"+value+"</a>";
         }
         if (document.getElementById('3').innerHTML == value && document.getElementById('4').innerHTML == value) {
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
             document.getElementById('5').outerHTML = "<a class='epiknum' id='5'>"+value+"</a>";
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
   }

}
        
document.getElementById('button').addEventListener('click', function() {
   if (cooldown == false) {
   if (speedboost == false) {
      var totalval = 1;
      var boostedluck = capStone(applyLuckBoost(chosenrarities, luckbooster), 0.5);
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
               document.getElementById('boosteritem2').outerHTML = "<div class='boosteritem' id='boosteritem2'><h2>Hakari's luck "+same+""+same+""+same+"</h2> Luck Boost: "+(same*10)+"%</div>";
            }
         }

         cooldown = false;
         document.getElementById('button').innerHTML = "Roll";
      }, 5500);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('1').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('1').outerHTML = "<a class='rarenum' id='1'>"+value+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 4";
      }, 1000);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('2').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('2').outerHTML = "<a class='rarenum' id='2'>"+value+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 3";
      }, 2000);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('3').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100 
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('3').outerHTML = "<a class='rarenum' id='3'>"+value+"</a>";
         }
         if (document.getElementById('1').innerHTML == value && document.getElementById('2').innerHTML == value) { 
             document.getElementById('1').outerHTML = "<a class='epiknum' id='1'>"+value+"</a>";
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             if (speedboost == false) {
                speedboost = true;
                document.getElementById('boosteritem3').outerHTML = "<div class='boosteritem' id='boosteritem3'><h2>Lucky Sprint!</h2> Speed Boost: -2.5sec</div>";
             } else {
                luckbooster += 0.05
                xtraluck += 5
                document.getElementById('boosteritem4').outerHTML = "<div class='boosteritem' id='boosteritem4'><h2>Xtra Luck</h2> Luck Boost: "+xtraluck+"%</div>";
                document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
             }
         } else if (document.getElementById('2').innerHTML == value && document.getElementById('4').innerHTML == value) {
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
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
         var value = getRandomNumber(boostedluck);
         document.getElementById('4').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('4').outerHTML = "<a class='rarenum' id='4'>"+value+"</a>";
         }
         if (document.getElementById('2').innerHTML == value && document.getElementById('3').innerHTML == value) { 
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
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
         var value = getRandomNumber(boostedluck);
         document.getElementById('5').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('5').outerHTML = "<a class='rarenum' id='5'>"+value+"</a>";
         }
         else if (document.getElementById('3').innerHTML == value && document.getElementById('4').innerHTML == value) {
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
             document.getElementById('5').outerHTML = "<a class='epiknum' id='5'>"+value+"</a>";
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
   } else {
   var totalval = 1;
      var boostedluck = capStone(applyLuckBoost(chosenrarities, luckbooster), 0.5);
      cooldown = true;
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
            if (document.getElementById('1').innerHTML == same && document.getElementById('2').innerHTML == same && document.getElementById('3').innerHTML == same && document.getElementById('4').innerHTML == same && document.getElementById('5').innerHTML == same) {
               luckbooster += same/10;
               document.getElementById('1').outerHTML = "<a class='ledgendnum' id='1'>"+same+"</a>";
               document.getElementById('2').outerHTML = "<a class='ledgendnum' id='2'>"+same+"</a>";
               document.getElementById('3').outerHTML = "<a class='ledgendnum' id='3'>"+same+"</a>";
               document.getElementById('4').outerHTML = "<a class='ledgendnum' id='4'>"+same+"</a>";
               document.getElementById('5').outerHTML = "<a class='ledgendnum' id='5'>"+same+"</a>";
               document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
               HAKARIUSED = true;
               document.getElementById('boosteritem2').outerHTML = "<div class='boosteritem' id='boosteritem2'><h2>Hakari's luck "+same+""+same+""+same+"</h2> Luck Boost: "+(same*10)+"%</div>";
            }
         }

         cooldown = false;
         document.getElementById('button').innerHTML = "Roll";
      }, 3000);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('1').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('1').outerHTML = "<a class='rarenum' id='1'>"+value+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 2";
      }, 500);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('2').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('2').outerHTML = "<a class='rarenum' id='2'>"+value+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 1.5";
      }, 1000);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('3').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100 
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('3').outerHTML = "<a class='rarenum' id='3'>"+value+"</a>";
         }
         if (document.getElementById('1').innerHTML == value && document.getElementById('2').innerHTML == value) { 
             document.getElementById('1').outerHTML = "<a class='epiknum' id='1'>"+value+"</a>";
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             if (speedboost == false) {
                speedboost = true;
                document.getElementById('boosteritem3').outerHTML = "<div class='boosteritem' id='boosteritem3'><h2>Lucky Sprint!</h2> Speed Boost: -2.5sec</div>";
             } else {
                luckbooster += 0.05
                xtraluck += 5
                document.getElementById('boosteritem4').outerHTML = "<div class='boosteritem' id='boosteritem4'><h2>Xtra Luck</h2> Luck Boost: "+xtraluck+"%</div>";
                document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
             }
         } else if (document.getElementById('2').innerHTML == value && document.getElementById('4').innerHTML == value) {
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
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
         var value = getRandomNumber(boostedluck);
         document.getElementById('4').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('4').outerHTML = "<a class='rarenum' id='4'>"+value+"</a>";
         }
         if (document.getElementById('2').innerHTML == value && document.getElementById('3').innerHTML == value) { 
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
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
         var value = getRandomNumber(boostedluck);
         document.getElementById('5').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('5').outerHTML = "<a class='rarenum' id='5'>"+value+"</a>";
         }
         else if (document.getElementById('3').innerHTML == value && document.getElementById('4').innerHTML == value) {
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
             document.getElementById('5').outerHTML = "<a class='epiknum' id='5'>"+value+"</a>";
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
   }
   }
});

document.addEventListener('keydown', function() {
   if (event.key == ' ') {
   if (cooldown == false) {
   if (speedboost == false) {
      var totalval = 1;
      var boostedluck = capStone(applyLuckBoost(chosenrarities, luckbooster), 0.5);
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
               document.getElementById('boosteritem2').outerHTML = "<div class='boosteritem' id='boosteritem2'><h2>Hakari's luck "+same+""+same+""+same+"</h2> Luck Boost: "+(same*10)+"%</div>";
            }
         }

         cooldown = false;
         document.getElementById('button').innerHTML = "Roll";
      }, 5500);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('1').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('1').outerHTML = "<a class='rarenum' id='1'>"+value+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 4";
      }, 1000);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('2').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('2').outerHTML = "<a class='rarenum' id='2'>"+value+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 3";
      }, 2000);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('3').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100 
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('3').outerHTML = "<a class='rarenum' id='3'>"+value+"</a>";
         }
         if (document.getElementById('1').innerHTML == value && document.getElementById('2').innerHTML == value) { 
             document.getElementById('1').outerHTML = "<a class='epiknum' id='1'>"+value+"</a>";
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             if (speedboost == false) {
                speedboost = true;
                document.getElementById('boosteritem3').outerHTML = "<div class='boosteritem' id='boosteritem3'><h2>Lucky Sprint!</h2> Speed Boost: -2.5sec</div>";
             } else {
                luckbooster += 0.05
                xtraluck += 5
                document.getElementById('boosteritem4').outerHTML = "<div class='boosteritem' id='boosteritem4'><h2>Xtra Luck</h2> Luck Boost: "+xtraluck+"%</div>";
                document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
             }
         } else if (document.getElementById('2').innerHTML == value && document.getElementById('4').innerHTML == value) {
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
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
         var value = getRandomNumber(boostedluck);
         document.getElementById('4').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('4').outerHTML = "<a class='rarenum' id='4'>"+value+"</a>";
         }
         if (document.getElementById('2').innerHTML == value && document.getElementById('3').innerHTML == value) { 
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
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
         var value = getRandomNumber(boostedluck);
         document.getElementById('5').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('5').outerHTML = "<a class='rarenum' id='5'>"+value+"</a>";
         }
         else if (document.getElementById('3').innerHTML == value && document.getElementById('4').innerHTML == value) {
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
             document.getElementById('5').outerHTML = "<a class='epiknum' id='5'>"+value+"</a>";
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
   } else {
   var totalval = 1;
      var boostedluck = capStone(applyLuckBoost(chosenrarities, luckbooster), 0.5);
      cooldown = true;
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
            if (document.getElementById('1').innerHTML == same && document.getElementById('2').innerHTML == same && document.getElementById('3').innerHTML == same && document.getElementById('4').innerHTML == same && document.getElementById('5').innerHTML == same) {
               luckbooster += same/10;
               document.getElementById('1').outerHTML = "<a class='ledgendnum' id='1'>"+same+"</a>";
               document.getElementById('2').outerHTML = "<a class='ledgendnum' id='2'>"+same+"</a>";
               document.getElementById('3').outerHTML = "<a class='ledgendnum' id='3'>"+same+"</a>";
               document.getElementById('4').outerHTML = "<a class='ledgendnum' id='4'>"+same+"</a>";
               document.getElementById('5').outerHTML = "<a class='ledgendnum' id='5'>"+same+"</a>";
               document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
               HAKARIUSED = true;
               document.getElementById('boosteritem2').outerHTML = "<div class='boosteritem' id='boosteritem2'><h2>Hakari's luck "+same+""+same+""+same+"</h2> Luck Boost: "+(same*10)+"%</div>";
            }
         }

         cooldown = false;
         document.getElementById('button').innerHTML = "Roll";
      }, 3000);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('1').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('1').outerHTML = "<a class='rarenum' id='1'>"+value+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 2";
      }, 500);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('2').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('2').outerHTML = "<a class='rarenum' id='2'>"+value+"</a>";
         }
         document.getElementById('button').innerHTML = "Cooldown: 1.5";
      }, 1000);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('3').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100 
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('3').outerHTML = "<a class='rarenum' id='3'>"+value+"</a>";
         }
         if (document.getElementById('1').innerHTML == value && document.getElementById('2').innerHTML == value) { 
             document.getElementById('1').outerHTML = "<a class='epiknum' id='1'>"+value+"</a>";
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             if (speedboost == false) {
                speedboost = true;
                document.getElementById('boosteritem3').outerHTML = "<div class='boosteritem' id='boosteritem3'><h2>Lucky Sprint!</h2> Speed Boost: -2.5sec</div>";
             } else {
                luckbooster += 0.05
                xtraluck += 5
                document.getElementById('boosteritem4').outerHTML = "<div class='boosteritem' id='boosteritem4'><h2>Xtra Luck</h2> Luck Boost: "+xtraluck+"%</div>";
                document.getElementById('beastiary').innerHTML = "<a class='invis'>Rarities of the numbers ----------------</a><br><a class='beast' id='1b'>1's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='2b'>2's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='3b'>3's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='4b'>4's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='5b'>5's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='6b'>6's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='7b'>7's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='8b'>8's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a><br><a class='beast' id='9b'>9's rarity: ??%</a><br><a class='invis'>---------------------------------------------</a>";
             }
         } else if (document.getElementById('2').innerHTML == value && document.getElementById('4').innerHTML == value) {
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
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
         var value = getRandomNumber(boostedluck);
         document.getElementById('4').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('4').outerHTML = "<a class='rarenum' id='4'>"+value+"</a>";
         }
         if (document.getElementById('2').innerHTML == value && document.getElementById('3').innerHTML == value) { 
             document.getElementById('2').outerHTML = "<a class='epiknum' id='2'>"+value+"</a>";
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
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
         document.getElementById('button').innerHTML = "Cooldown: 0.5";
      }, 2000);

      setTimeout(function() {
         var value = getRandomNumber(boostedluck);
         document.getElementById('5').innerHTML = value;
         totalval *= boostedluck[value - 1] * 100;
         document.getElementById('totalrarity').innerHTML = totalval+"% Chance";
         decToPerc = boostedluck[value - 1] * 100;
         document.getElementById(value+'b').innerHTML = value+"'s rarity: "+decToPerc+"%";
         totalval /= 100
         if (value == 5 || value == 7 || value == 9) {
            document.getElementById('5').outerHTML = "<a class='rarenum' id='5'>"+value+"</a>";
         }
         else if (document.getElementById('3').innerHTML == value && document.getElementById('4').innerHTML == value) {
             document.getElementById('3').outerHTML = "<a class='epiknum' id='3'>"+value+"</a>";
             document.getElementById('4').outerHTML = "<a class='epiknum' id='4'>"+value+"</a>";
             document.getElementById('5').outerHTML = "<a class='epiknum' id='5'>"+value+"</a>";
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
   }
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
