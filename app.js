// *********************************************************
// NOTE: make sure you FORKED this repo, not just cloned it!
// *********************************************************

// create variables to assign to the DOM elements you'll be working with
// start with 'text', 'image', and 'attribution'

// here's a freebie to get you started
const text = document.querySelector('.quote-text p');

// next set up three arrays to contain different types of information
// one for quotes (named "quotes") with at least 3 quotes inside

// one for images with at least 3 image urls inside

// and one for attributions with at least three names inside


// we will need a function to get random items from our arrays
// the console.log examples will help you use new JS methods for randomization
// uncomment them to test them out and learn how they work
const randomValueFromArray = (array) => {

  // Math.random() returns a random decimal less than 1
  // console.log(Math.random());

  // Math.floor rounds down to the nearest integer. (5.99 and 5.01 would both return 5 for example)
  // console.log(Math.floor(Math.random())); // this will always return 0

  // multiplying the array length by Math.random() gives a random decimal between 0 and the length of the array.
  // console.log(Math.random() * array.length);

  // Math.floor drops the decimal so we can use the number as an index of the array

  //create a variable named 'random'
  // assign it to Math.floor()
  // pass Math.random() multiplied by the array length as an argument to Math.floor() (if you get stuck, this line of code is at the bottom of this file)

  // this returns an item from the array at a random index
  return array[random];
}

// this function will update the DOM. let's call it 'update'
const update = () => {

  // inside our update function, we will use the function we just made, 'randomValueFromArray()', and pass it some different arrays to get random items
  // first we will update the 'text' DOM element. use innerHTML and assign it to the randomValueFromArray function, but pass in the quotes array as an argument!
  
  // now do a similar action but for the 'attribution' DOM element
  
  // and again for the 'image' element

  // if the user entered a value, their text should be added to the quotes array. (remember the .push method)

}

// add an event listener to the 'shuffle' button to listen for clicks. pass in the 'update' function as the second parameter

// invoke the 'update' function so that when our page loads, we run all our code to get a random quote poster!






// STRETCH GOALS!

// modify the update() function so that the background image of the shuffle button and the main picture are both updated at the same time

// if the user entered a value, that will take priority and become the next quote, as well as getting added to the 'quotes' array

// after the user types in text and clicks "shuffle", then the text input should be cleared

// create 2 more text inputs for attributions and image urls

// add some fancy transition animations!

// read up about GitHub Pages, and publish your Iffy Quotes site online!



























// code for the 'random' variable
// const random = Math.floor(Math.random() * array.length);