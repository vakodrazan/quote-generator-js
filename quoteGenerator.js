let happyArray = [
    [
        "The purpose of our lives is to be happy",
        "Life is what happens when you're busy making other plans",
        "Get busy living or get busy dying"
    ],
    [
        "You only live once, but if you do it right, once is enough",
        "Be who you are and say what you feel, because those who mind don't matter",
        "Get busy living or get busy dying"
    ],
    [
        "and those who matter don't mind",
        "If you work harder, your life would be succced",
        "Try to work as much as you can"
    ]
];
// Create new arrays

let sadArray = [
    [
        "I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it",
        "No man goes before his time unless the boss leaves early",
        "Doing nothing is very hard to do you never know when you’re finished"
    ],
    [
        "It takes less time to do a thing right, than it does to explain why you did it wrong",
        "If you think your boss is stupid, remember: you wouldn’t have a job if he was any smarter",
        "Most of what we call management consists of making it difficult for people to get their work done"
    ],
    [
        "It is better to have one person working with you than three people working for you",
        "People who never do any more than they get paid for, never get paid for any more than they do",
        "The best way to appreciate your job is to imagine yourself without one"
    ]
];  

// create a function to random the quotes

const generateQuote = (quotesArray) => {
    let randomIndex1 = Math.floor(Math.random() * quotesArray[0].length);
    let randomIndex2 = Math.floor(Math.random() * quotesArray[1].length);
    let randomIndex3 = Math.floor(Math.random() * quotesArray[2].length);
    let stringQuotes1 = quotesArray[0][randomIndex1];
    let stringQuotes2 = quotesArray[1][randomIndex2];
    let stringQuotes3 = quotesArray[2][randomIndex3];
    const quoteGenerator = `Generated quote : "${stringQuotes1} ${stringQuotes2} ${stringQuotes3}"`;
    return quoteGenerator;
};


let continueProgram = 'yes';
while (continueProgram === 'yes') {

    let numberOfQuotes = Number(prompt('How many quotes do you want to generate? (1min, 5max)'));

    while (numberOfQuotes < 0 || numberOfQuotes > 5) { // Looping untill the users enter a right number
        numberOfQuotes = Number(prompt('How many quotes do you want to generate? (1min, 5max)'));
    }

    let typeOfQuote = prompt('Which set of quotes do you want to use? (happy or sad)');

    while (typeOfQuote !== 'happy' && typeOfQuote !== 'sad') { // Continue asking when the user enter a wrong choice
        typeOfQuote = prompt('Which set of quotes do you want to use? (happy or sad)');
    }

    if (typeOfQuote === 'happy') { // When choosing a happy quotes
        for (let i = 0; i < numberOfQuotes; i++) {
            alert(`\n ${generateQuote(sadArray)} \n`);
        }
    } else { // Choosing sad quotes
        for (let i = 0; i < numberOfQuotes; i++) {
            alert(`\n ${generateQuote(sadArray)} \n`);
        }
    }
    // Keep asking if enter nothing
    continueProgram = prompt('Do you want to run the program again? (yes, no)');
}
alert('Thank you for using my quote generator');