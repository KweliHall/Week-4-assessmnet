const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json()); 

app.get("/api/gherbo", (req, res) => {
  const gherbo = ["Bi Polar",
                     "Crown",
                     "Hood Legends",
           "Legend",
           "Wilt Chamberlin",
           "Cap guns",
           "Humble Beast intro",
           "PTSD",
           "Sessions",
           "Write Your Name(my favorite by far)",

  ];
  let randomIndex = Math.floor(Math.random() * gherbo.length);
  let randomgherbo = gherbo[randomIndex];

  res.status(200).send(randomgherbo);
  
});


app.get("/api/yomama", (req, res) => {
  const yomama = ["Yo mama's so fat, when she fell I didn't laugh, but the sidewalk cracked up.",
                     "Yo mama's so fat, when she skips a meal, the stock market drops.",
                     "Yo mama's so fat, it took me two buses and a train to get to her good side.",
           "Yo mama's so fat, when she goes camping, the bears hide their food.",
           "Yo mama's so fat, if she buys a fur coat, a whole species will become extinct.",
           "Yo mama's so fat, I swerved to miss her in my car and ran out of gas.",
           "Yo mama's so fat, when she wears high heels, she strikes oil.",
           "Yo mama's so fat, her car has stretch marks.",
           "Yo mama's so stupid, she put lipstick on her forehead to make up her mind.",
           "Yo mama's so stupid, she thought a quarterback was a refund.",
  ];
  let randomIndex = Math.floor(Math.random() * yomama.length);
  let randomyomama = yomama[randomIndex];

  res.status(200).send(randomyomama);
  
});

app.get("/api/inspire", (req, res) => {
  const inspire = ["Optimism is the one quality more associated with success and happiness than any other.",
                     "Happiness is not something readymade. It comes from your own actions.",
                     "All our dreams can come true if we have the courage to pursue them.",
           "Success is not final, failure is not fatal: it is the courage to continue that counts.",
           "Believe you can and you’re halfway there.",
  ];
  let randomIndex = Math.floor(Math.random() * inspire.length);
  let randominspire = inspire[randomIndex];

  res.status(200).send(randominspire);
  
});


app.get("/api/fortune", (req, res) => {
  const fortune = ["A dubious friend may be an enemy in camouflage.",
                     "A faithful friend is a strong defense.",
                     "A fresh start will put you on your way.",
           "A friend asks only for your time not your money.",
           "A friend is a present you give yourself.",
  ];
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomfortune = fortune[randomIndex];

  res.status(200).send(randomfortune);
  
});


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
                     "Cool shirt!",
                     "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
