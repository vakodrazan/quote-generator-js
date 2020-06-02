console.log('it works!');
let firstLifeQuotes = ["The purpose of our lives is to be happy."]; // Create the first quote

let secondLifeQuotes = ["Life is what happens when you're busy making other plans."]; // This is the second quote

let thirdLifeQuotes = [" Get busy living or get busy dying."]; // Third quote

let fourthLifeQuotes = ["You only live once, but if you do it right, once is enough."]; // Fourth quote

let fifthLifeQuotes = ["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."] // The last quote

// Create an input to allow the use enter use their own
const combinationQuotes = prompt("Enter in here what you want to combine"); 

// Create a loop and if statements inside it, it will return the the given value if the condition is true
for (let i = 0; i < combinationQuotes.length; i++) {
    if (firstLifeQuotes) {
        alert(`${firstLifeQuotes[i]} — by Dalai Lama. `); // Return the first quotation
    } if (secondLifeQuotes) {
        alert(`${secondLifeQuotes[i]} — by John Lennon`);// Return the next quotation
    } if (thirdLifeQuotes) {
        alert(`${thirdLifeQuotes[i]} — by Stephen King`); // Return the given quotion if true
    } if (fourthLifeQuotes) {
        alert(`${fourthLifeQuotes[i]} — by Mae West`); // If the condition is true return the value
    } if (fifthLifeQuotes) {
        alert(`${fifthLifeQuotes[i]} — by Bernard M. Baruch`); // If there is still quotation return that value
    } else {
        alert("There is no given quotation!") // If all the condition aren't availlable return this value
    }
    
    let combinationAllQuotes = `${firstLifeQuotes} ${secondLifeQuotes} ${thirdLifeQuotes} ${fourthLifeQuotes} ${fourthLifeQuotes[i]}`; // Create a new variable to combine all of the quotation together

    console.log(combinationAllQuotes); // Console all the value together
}

function  randomQuotes() { // Use function to know how many quotation are given in there

    // Using Math.floor() to return the largest integer into less than or equal to the given number
    // Math.random() return the number between 0 (inclusive) and 1 (exclusive)
    let randomNumber1 = Math.floor(Math.random() * (firstLifeQuotes.length));
    let randomNumber2 = Math.floor(Math.random() * (secondLifeQuotes.length));
    let randomNumber3 = Math.floor(Math.random() * (thirdLifeQuotes.length));
    let randomNumber4 = Math.floor(Math.random() * (fourthLifeQuotes.length));
    let randomNumber5 = Math.floor(Math.random() * (fifthLifeQuotes.length));

    let newRandom =  firstLifeQuotes[randomNumber1] + ` ` + secondLifeQuotes[randomNumber2] + ` ` + thirdLifeQuotes[randomNumber3] + ` ` + fourthLifeQuotes[randomNumber4] + ` ` + fifthLifeQuotes[randomNumber5]; // Create a variable that will call all the function index

    let randomQuote = newRandom // Just call the variable that have been created in lately.
    document.getElementById('quoteDisplay').innerHTML = [randomQuote]
}

// Allow users to enter what quotation they want to generate by writing the numbee in here
const quoteNumber = prompt("How many quotes you would like to generate?");
if (randomQuotes !== null) {} // If there is no given value result nothing


