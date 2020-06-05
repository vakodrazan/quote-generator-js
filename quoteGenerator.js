console.log('it works!');
let firstQuotes = [  // Create the first quote
    "The purpose of our lives is to be happy",
    "Life is what happens when you're busy making other plans",
    "Get busy living or get busy dying"
];
let secondQuotes = [  // This is the second quote
    "You only live once, but if you do it right, once is enough",
    "Be who you are and say what you feel, because those who mind don't matter",
    " Get busy living or get busy dying"
];

let thirdQuotes = [  // Third quote
    "and those who matter don't mind",
    "If you work harder, your life would be succced",
    "Try to work as much as you can"
];

let userQuotes = prompt("Choose what quotes number do you want : ")

let randomFirstQuotes = Math.floor(Math.random() * (firstQuotes.length));
let randomSecondQuotes = Math.floor(Math.random() * (secondQuotes.length));
let randomThirdQuotes = Math.floor(Math.random() * (thirdQuotes.length));

let quotes = `${randomFirstQuotes} ${randomSecondQuotes} ${randomThirdQuotes}.`;

console.log(quotes)

