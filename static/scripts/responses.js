function getBotResponse(input) {
    //rock paper scissors
    if (input == "what is stem") {
        return "Science, technology, engineering, and mathematics is a broad term used to group together these academic disciplines.";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}