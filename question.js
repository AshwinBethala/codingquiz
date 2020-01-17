var questions = [
    new Question("What is the primary language of the Internet?", ["JavaScript", "Python", "SQL", "Tableau"], "JavaScript"),
    new Question("What ending is used to create a webpage file?", [".html", ".js", ".css", ".xml"], ".html"),
    new Question("Which code is used to link a JavaScript file?", ["h1", "form","script", "var"], "script"),
    new Question("What site can be used for formatting a code?", ["Yahoo", "BootStrap", "YouTube", "Amazon"], "BootStrap"),
    new Question("What is the name of the command line application on iOS?", ["CodingIsFun", "NoobHacker", "MicrosoftCode", "Terminal"], "Terminal")
];
 
var quiz = new Quiz(questions);
 
populate();