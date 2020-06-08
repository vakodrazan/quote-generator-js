console.log('it works!');
let firstQuotes = [  // Create the first quote
    "The purpose of our lives is to be happy",
    "Life is what happens when you're busy making other plans",
    "Get busy living or get busy dying"
];
let secondQuotes = [  // This is the second quote
    "You only live once, but if you do it right, once is enough",
    "Be who you are and say what you feel, because those who mind don't matter",
    "Get busy living or get busy dying"
];

let thirdQuotes = [  // Third quote
    "and those who matter don't mind",
    "If you work harder, your life would be succced",
    "Try to work as much as you can"
];

let randomFirstQuotes = Math.floor(Math.random() * (firstQuotes.length));
let randomSecondQuotes = Math.floor(Math.random() * (secondQuotes.length));
let randomThirdQuotes = Math.floor(Math.random() * (thirdQuotes.length));

let quotes = `${firstQuotes[randomFirstQuotes]} ${secondQuotes[randomSecondQuotes]} ${thirdQuotes[randomThirdQuotes]}.`;
console.log(quotes);


//1. use prompt to ask the user how many times we want to generate a random quote

let random = prompt("How many quotes do you want to loop between 1 to 5: ");

//2. check if the prompt give us something between 1 and 5

if (random >= 1 && random <= 5) {
    console.log(quotes)
}

const generatorQuotes = () => {
    if (random >= 1 && random <= 5) {
        console.log(quotes)
    } else {
    console.log(quotes !== quotes)
    }
}

for (let i = 1; i <= random; i++) {
    let randomFirstQuotes = Math.floor(Math.random() * (firstQuotes.length));
    let randomSecondQuotes = Math.floor(Math.random() * (secondQuotes.length));
    let randomThirdQuotes = Math.floor(Math.random() * (thirdQuotes.length));

    let array1 = firstQuotes[randomFirstQuotes];
    let array2 = secondQuotes[randomSecondQuotes];
    let array3 = thirdQuotes[randomThirdQuotes];

    let quotes = `${array1} ${array2} ${array3}.`;
    console.log(quotes);

    console.log(generatorQuotes());
}

//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
//4. refactor our code into a function, and put the function call inside the loop 
//4.1 generate random numbers
//4.2 show the generated quotes

