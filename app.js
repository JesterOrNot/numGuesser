readline = require("readline-sync")
yourNum = 0
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function numGuesser() {
  console.log("Think of a whole number from 1-63")
  sleep(3000)
  sheet1 = readline.question("Is your number in \n\n1 3 5 7 9 11 13 15 \n17 19 21 23 25 27 29 31 \n33 35 37 39 41 43 45 47 \n49 51 53 55 57 59 61 63\n\n(y/n)?: ")
  if ( sheet1 == "y") {
      yourNum += 1
  } else {
      console.log("Ok Moving on!\n")
  }
  sheet2 = readline.question("Is your number in \n\n2 3 6 7 10 11 14 15 \n18 19 22 23 26 27 30 31 \n34 35 38 39 42 43 46 47 \n50 51 54 55 58 59 62 63\n\n(y/n)?: ")
  if ( sheet2 == "y" ) {
      yourNum += 2
  } else {
      console.log("Ok Moving on!\n")
  }
  sheet3 = readline.question("Is your number in \n\n4 5 6 7 12 13 14 15 \n20 21 22 23 28 29 30 31\n36 37 38 39 44 45 46 47\n52 53 54 55 60 61 62 63\n\n(y/n)?: ")
  if ( sheet3 == "y" ) {
      yourNum += 4
  } else {
      console.log("Ok Moving on!\n")
  }
  sheet4 = readline.question("Is your number in \n\n8 9 10 11 12 13 14 15\n24 25 26 27 28 29 30 31\n40 41 42 43 44 45 46 47\n56 57 58 59 60 62 63\n\n(y/n)?: ")
  if ( sheet4 == "y" ) {
      yourNum += 8
  } else {
      console.log("Ok Moving on!\n")
  }
  sheet5 = readline.question("Is your number in \n\n16 17 18 19 20 21 22 23\n24 25 26 27 28 29 30 31\n48 49 50 51 52 53 54 55\n56 57 58 59 60 61 62 63\n\n(y/n)?: ")
  if ( sheet5 == "y" ) {
      yourNum += 16
  } else {
      console.log("Ok Moving on!\n")
  }
  sheet6 = readline.question("Is your number in \n\n32 33 34 35 36 37 38 39\n40 41 42 43 44 45 46 47\n48 49 50 51 52 53 54 55\n56 57 58 59 60 61 62 63\n\n(y/n)?: ")
  if ( sheet6 == "y" ) {
      yourNum += 32
  } else {
      console.log("Ok Moving on!\n")
  }
  console.log(`\n\nYour Number is ${yourNum}`)
}
numGuesser()
