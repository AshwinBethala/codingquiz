var questions = [
    new Question("Who is the most beautiful person that ever lived?", ["Yoda", "Medusa","Creature from the Black Lagoon", "Beauty is in the eye of the beholder!"], "Beauty is in the eye of the beholder!"),
    new Question("Who was the worst human being to ever live?", ["Gandhi", "Martin Luther King Jr.", "Mother Teresa", "None of the above!"], "None of the above!"),
    new Question("Who would win in a three-way fight?", ["Shrek", "Santa on Steroids", "Buzz Lightyear wearing FlexTape", "Too close to call!"], "Too close to call!"),
    new Question("Where can you find Mountain Dew?", ["PepsiCo", "Mt. Dew", "Fast food restaurants that don't serve Coke products", "All of the above!"], "All of the above!"),
    new Question("What is the most powerful weapon in the universe?", ["The Infinity Stones", "The Death Star", "The Elder Wand", "How about my own fanfiction weapon?"], "How about my own fanfiction weapon?")
];
 
var quiz = new Quiz(questions);
 
populate();