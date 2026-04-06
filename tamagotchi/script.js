
// name your Tamagochi
let myString = "some text"
let num = 5
let myBool = true
let myArray = ['red', 'yellow', 'green']
let myObj = {color='red', shape:'square', size: '300px'}

function myPizza(sauce, toppings, crust) {
  return {
    mySauce: sauce,
    myToppings: toppings,
    myCrust: crust
  }
}

myPizza('pesto', ['roasted bell pepper', 'spinach'], 'thin crust')

$('#setNameBtn').click(
  function () {
    let petName = $('#nameField').val()
    console.log(petName)
    $('#displayName').html(petName)
  }
)


//If there is no name, display #start
//if there is a name, display #care

// if meter value is less that 50%, if should be yellow
// if meter value is below 25% it should be red
//another above 50% should be green

//localstorage timer

//a start timer
//an interval that reminds you to feed your tamagochi
setInterval(function () {
  // set timeout when time has run out
  // change feedmeter +-5% each x seconds
  //message.innerHTML += "feed me"
}, 10000);

//reminders function
//a interval that reminds you to sleep your tamagochi
setInterval(function () {message.innerHTML += "I'm tired"}, 14000);
//a interval that reminds you to play your tamagochi
setInterval(function () {message.innerHTML += "play with me"}, 16000);

//meter update function
// update feedmeter when below 25%
// update sleepmeter when below 25%
// update playmeter when below 25%
// update feedmeter when above 50%
// update sleepmeter when above 50%
// update playmeter when above 50%

// death function
//set death notice when anything at 0%
// make a new tama

//buttons function
// a button that feeds
// a button that sleeps
// a button that plays
