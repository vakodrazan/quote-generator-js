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

// Create new arrays

let newFirstQuotes = [
    "I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it",
    "No man goes before his time—unless the boss leaves early",
    "Doing nothing is very hard to do… you never know when you’re finished"
];

let newSecondQuotes = [
    "It takes less time to do a thing right, than it does to explain why you did it wrong",
    "If you think your boss is stupid, remember: you wouldn’t have a job if he was any smarter",
    "Most of what we call management consists of making it difficult for people to get their work done"
];

let newThirdQuotes = [
    "It is better to have one person working with you than three people working for you",
    "People who never do any more than they get paid for, never get paid for any more than they do",
    "The best way to appreciate your job is to imagine yourself without one"
];



// use prompt to ask the user how many times we want to generate a random quote



// refactor our code into a function, this is for the first quotes

const generatorQuotes = () => { // generate random numbers
    let arrayFirstQuotes = Math.floor(Math.random() * (firstQuotes.length));
    let arraySecondQuotes = Math.floor(Math.random() * (secondQuotes.length));
    let arrayThirdQuotes = Math.floor(Math.random() * (thirdQuotes.length));

    let arrayIndex1 = firstQuotes[arrayFirstQuotes];
    let arrayIndex2 = secondQuotes[arraySecondQuotes];
    let arrayIndex3 = thirdQuotes[arrayThirdQuotes];

    let quotesGenerator = `${arrayIndex1} ${arrayIndex2} ${arrayIndex3}.`; // show the generated quotes
    console.log(`Quotes: ${quotesGenerator}`);
}

// This is a function for the second quotes 

// const generatenewQuotes = () => { // generate random numbers
//     let indexFirstQuotes = Math.floor(Math.random() * (newFirstQuotes.length));
//     let indexSecondQuotes = Math.floor(Math.random() * (newSecondQuotes.length));
//     let indexThirdQuotes = Math.floor(Math.random() * (newThirdQuotes.length));

//     let index1 = newFirstQuotes[indexFirstQuotes];
//     let index2 = newSecondQuotes[indexSecondQuotes];
//     let index3 = newThirdQuotes[indexThirdQuotes];

//     let newQuotesGenerator = `${index1} ${index2} ${index3}.`; // show the generated quotes
//     console.log(`New quotes: ${newQuotesGenerator}`);
// }

let typeOfQuotes = Number(prompt('Choose between two quotes 1 or 2: '));
if (typeOfQuotes === 1) {
    let quotation = Number(prompt("Enter number between 1 and 5: "));
    if (quotation >= 1 && quotation <= 5) {
        for (let i = 0; i < quotation; i++) {
            generatorQuotes(); //Call the function inside the loop
        }
    }
}


