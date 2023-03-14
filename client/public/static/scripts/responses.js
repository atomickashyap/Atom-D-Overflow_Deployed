function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input == "hi" || input == "hello ") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "thanks"|| input == "Thanks" || input == "bye") {
        return "Have a great day!";
    }else if (input == "I love Atom-D Overflow!") {
        return "Thanks";
    }else if (input == "How to start coding" || input == "how to start coding") {
        return "You can start solving easy problem from codechef!";
    }else {
        return "Sry!! Still Under Learning Process!";
    }
}