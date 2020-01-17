var questions = [
    new Question("Who is the god of thunder in Norse Mythology?", ["Loki", "Thor", "Baldur", "Odin"], "Thor"),
    new Question("What was the creature Hercules slayed during his first labor?", ["The Hydra", "The Erymanthian Boar", "The Nemean Lion", "The Stymphalian Birds"], "The Nemean Lion"),
    new Question("Who was the sun god in Egyptian Mythology?", ["Set", "Horus","Osiris", "Ra"], "Ra"),
    new Question("Which deity is NOT a love goddess?", ["Tiamat", "Aphrodite", "Ishtar", "Freyja"], "Tiamat"),
    new Question("Who was the divine hero of the earliest survivng epic?", ["Perseus", "Anansi", "Gilgamesh", "Rama"], "Gilgamesh")
];
 
var quiz = new Quiz(questions);
 
populate();