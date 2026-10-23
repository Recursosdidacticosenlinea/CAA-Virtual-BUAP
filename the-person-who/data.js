window.UNIT = {
  slug: "the-person-who",
  title: "The Person Who…",
  level: "B2",
  minutes: 60,
  speakers: { "Montse": "f", "Raúl": "m", "Host": "m", "Professor Galindo": "f", "Student": "m", A: "f", B: "m" },
  focus: ["defining relative clauses: who, which, that, where, whose", "non-defining relative clauses with commas", "omitting the relative pronoun", "when, why, whom", "describing people, places and things precisely"],

  presentation: {
    scene: "👩‍🏫🏛️📖🌟",
    situation: "For a class project, Montse and Raúl must choose a person who has influenced Puebla's history or culture. They're brainstorming in a café.",
    warmup: {
      prompt: "Who has influenced your life the most? Choose the ones that apply.",
      options: ["a parent", "a grandparent", "a teacher", "a friend", "a coach", "an artist", "a writer", "a scientist", "a sibling", "a historical figure", "an athlete", "a neighbor"],
      response: "Great! In this unit you'll learn to describe people, places and things with more precision."
    },
    dialogueTitle: "Choosing a person",
    dialogue: [
      { who: "Montse", line: "We need someone *who* really changed Puebla. Any ideas?" },
      { who: "Raúl", line: "What about Carmen Serdán? She's the woman *whose* house became the Museum of the Revolution." },
      { who: "Montse", line: "Good idea. The house, *which* still has bullet holes in the walls, is on Avenida 6 Oriente." },
      { who: "Raúl", line: "Exactly. It's the place *where* the Mexican Revolution started, in 1910." },
      { who: "Montse", line: "I like her, but maybe we should choose someone *that* fewer people know." },
      { who: "Raúl", line: "OK… how about the nuns *who* invented mole poblano?" },
      { who: "Montse", line: "That's a legend *that* nobody can prove! Let's go with Carmen Serdán, *who* was incredibly brave." },
      { who: "Raúl", line: "Deal. And the museum, *where* we can take photos, is a ten-minute walk from here." }
    ]
  },

  objectives: [
    "I can use defining relative clauses with *who, which, that, where, whose*.",
    "I can use non-defining relative clauses with commas to add extra information.",
    "I can omit the relative pronoun when it is the object.",
    "I can describe people, places and objects precisely in speaking and writing."
  ],

  explanation: {
    vocabTitle: "Describing influence and character",
    vocab: [
      { word: "role model", icon: "🌟" }, { word: "influential", icon: "📣" }, { word: "inspiring", icon: "✨" },
      { word: "determined", icon: "💪" }, { word: "generous", icon: "🎁" }, { word: "courageous", icon: "🦁" },
      { word: "pioneer", icon: "🚩" }, { word: "legacy", icon: "🏛️" }, { word: "achievement", icon: "🏆" },
      { word: "mentor", icon: "🧭" }, { word: "look up to", icon: "⬆️" }, { word: "stand up for", icon: "✊" },
      { word: "make a difference", icon: "🌍" }, { word: "overcome", icon: "⛰️" }, { word: "landmark", icon: "📍" }
    ],
    grammar: [
      {
        title: "Relative pronouns",
        head: ["Pronoun", "Refers to…", "Example"],
        rows: [
          ["*who*", "people", "She's the teacher *who* inspired me."],
          ["*which*", "things, animals", "This is the book *which* changed my life."],
          ["*that*", "people or things (defining only)", "It's a song *that* everybody knows."],
          ["*where*", "places", "That's the café *where* we met."],
          ["*whose*", "possession", "He's the artist *whose* paintings are in the museum."],
          ["*when*", "times", "2010 was the year *when* I moved here."]
        ]
      },
      {
        title: "Defining vs. non-defining",
        head: ["Defining (essential, no commas)", "Non-defining (extra information, commas)"],
        rows: [
          ["The students *who passed* got a certificate. (only those students)", "My brother, *who lives in Tijuana*, is an engineer. (I have one brother)"],
          ["The house *that I bought* is old.", "Puebla, *which is famous for its food*, is a UNESCO site."],
          ["You can use *that* instead of *who / which*.", "Never use *that* in non-defining clauses."]
        ],
        note: "Non-defining clauses are more common in writing. In speech, we pause where the commas are."
      },
      {
        title: "Omitting the pronoun",
        head: ["Pronoun is the object → you can omit it", "Pronoun is the subject → you can't omit it"],
        rows: [
          ["The film (*that*) *we saw* was great.", "The film *that won* the prize was great."],
          ["The man (*who*) *I met* was Italian.", "The man *who called* you was Italian."]
        ],
        note: "If there's a new subject after the pronoun (*we, I, she…*), the pronoun is the object and can be omitted in defining clauses."
      }
    ],
    watchOut: [
      ["The woman which helped me was kind.", "The woman who helped me was kind."],
      ["My mother, that is a doctor, works at night.", "My mother, who is a doctor, works at night."],
      ["That's the restaurant where we ate there.", "That's the restaurant where we ate."],
      ["He's the boy who his father is a pilot.", "He's the boy whose father is a pilot."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *who, which, where* or *whose*.",
      items: [
        "Frida Kahlo is the painter [[who|that]] painted many self-portraits.",
        "Cholula is the town [[where]] you can see a church on top of a pyramid.",
        "My laptop, [[which]] I bought in 2019, still works perfectly.",
        "That's the student [[whose]] essay won the competition."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a podcast episode, *Mentors*, in which a university professor talks about the people who shaped her career.",
      title: "Mentors",
      script: [
        { who: "Host", line: "Welcome to Mentors. My guest today is Professor Galindo, who teaches environmental engineering at BUAP. Professor, who was the first person who inspired you?" },
        { who: "Professor Galindo", line: "Definitely my grandmother, who grew up in a village near Zacatlán where there was no running water. She walked two kilometers every day to get water. That's the reason why I became interested in water systems." },
        { who: "Host", line: "And at university?" },
        { who: "Professor Galindo", line: "There was a professor whose classes were always full. Dr. Ibarra. He was the one who told me to apply for a scholarship in Germany, which I did, and I spent three years in Munich." },
        { who: "Host", line: "What did you learn there?" },
        { who: "Professor Galindo", line: "I worked in a lab where they were designing filters that clean river water using plants. The project, which was funded by the European Union, changed my whole career." },
        { who: "Host", line: "And now you're a mentor yourself." },
        { who: "Professor Galindo", line: "I try to be. Last year, one of my students, a young woman whose family is from a village like my grandmother's, won a national prize. That was the moment when I felt everything had come full circle." }
      ],
      activities: [
        {
          type: "match", title: "Match the clauses",
          prompt: "Match the beginnings with the endings, as in the podcast.",
          pairs: [
            ["Her grandmother grew up in a village", "where there was no running water."],
            ["Dr. Ibarra was a professor", "whose classes were always full."],
            ["He was the one", "who told her to apply for a scholarship."],
            ["She worked in a lab", "where they were designing filters."],
            ["The project,", "which was funded by the European Union, changed her career."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Professor Galindo teaches environmental engineering.", a: true },
            { s: "Her grandmother grew up in Munich.", a: false },
            { s: "She spent three years in Germany.", a: true },
            { s: "The filters used chemicals to clean the water.", a: false },
            { s: "One of her students won a national prize.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short biography from a website about women in Mexican history.",
      title: "Carmen Serdán: the woman who fired the first shot",
      text: [
        { body: "Carmen Serdán, who was born in Puebla in 1875, is remembered as one of the first heroines of the Mexican Revolution. She came from a middle-class family whose members strongly opposed the dictatorship of Porfirio Díaz." },
        { body: "Together with her brothers Aquiles and Máximo, she organized a secret group which prepared weapons and distributed political pamphlets. Carmen, who used the pseudonym \"Marcos Serrato\", wrote messages that encouraged people to rebel." },
        { body: "On November 18, 1910, the police surrounded the family's house, where the group had hidden weapons. A gunfight started, and according to many accounts, Carmen was the one who fought from the balcony, calling on the people of Puebla to join the Revolution. Her brother Aquiles, who hid under the floor, was found and killed the next day." },
        { body: "Carmen was arrested and spent months in prison. After her release, she continued supporting the revolutionary cause as a nurse. The house where the events took place is now the Museo Regional de la Revolución Mexicana, which still shows the bullet holes in its walls." }
      ],
      activities: [
        {
          type: "sort", title: "Defining or non-defining?",
          prompt: "Is the relative clause in each sentence defining (essential) or non-defining (extra information)?",
          bins: ["Defining (no commas)", "Non-defining (commas)"],
          items: [
            { text: "She wrote messages that encouraged people to rebel.", bin: 0 }, { text: "She organized a secret group which prepared weapons.", bin: 0 },
            { text: "Carmen was the one who fought from the balcony.", bin: 0 },
            { text: "Carmen Serdán, who was born in 1875, is remembered…", bin: 1 }, { text: "Her brother Aquiles, who hid under the floor, was found.", bin: 1 },
            { text: "…the Museo Regional, which still shows the bullet holes.", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Combine the sentences",
          prompt: "Join the sentences with a relative pronoun. Use commas when needed.",
          items: [
            { q: "Carmen Serdán was born in Puebla. She was a revolutionary.", a: ["Carmen Serdán, who was born in Puebla, was a revolutionary.", "Carmen Serdán, who was a revolutionary, was born in Puebla."] },
            { q: "This is the house. The group hid weapons there.", a: ["This is the house where the group hid weapons."] },
            { q: "She had a brother. His name was Aquiles.", a: ["She had a brother whose name was Aquiles.", "She had a brother who was called Aquiles."] },
            { q: "The museum shows bullet holes. It is on 6 Oriente.", a: ["The museum, which is on 6 Oriente, shows bullet holes.", "The museum, which shows bullet holes, is on 6 Oriente."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice relative clauses, then write a tribute to someone who influenced you.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "She is the coach who changed my life." },
            { a: "This is the place where I grew up." },
            { a: "The book I'm reading is fascinating." },
            { a: "He's the writer whose novels I love." },
            { a: "My uncle, who lives in Chicago, is a chef." }
          ]
        },
        {
          type: "gap", title: "Can you omit it?",
          prompt: "Write the relative pronoun. If it can be omitted, write *–*.",
          items: [
            "The movie [[–|that|which]] we watched last night was boring. (object: can omit)",
            "The man [[who|that]] lives next door is a pilot.",
            "I lost the ring [[–|that|which]] my grandmother gave me.",
            "The students [[who|that]] arrived late missed the instructions.",
            "This is the song [[–|that|which]] I told you about."
          ]
        },
        {
          type: "write", title: "A person who influenced me",
          prompt: "Write a tribute to a person who has influenced you (a family member, a teacher, a public figure). Describe who they are, what they did, and why they matter to you. Use at least six relative clauses, including two non-defining ones.",
          minWords: 130, maxWords: 190,
          model: "The person who has influenced me the most is my aunt Lucía, who is a nurse at a public hospital in Puebla. She's someone whose energy seems endless. When I was a child, she used to take me to the market where she bought fresh herbs for her famous teas. She was the one who taught me that small acts of kindness can change someone's day. During the pandemic, which was a terrible time for everyone, she worked double shifts and still found time to call us every night. The advice that she gave me, \"Never stop learning\", is something I repeat to myself every morning. She's the reason why I decided to study medicine.",
          bank: ["The person who…", "…, who is…,", "…whose…", "the place where…", "the reason why…", "…, which was…,", "the one who…"],
          checklist: [
            "I used at least **six** relative clauses.",
            "I used **two** non-defining clauses with commas.",
            "I used *whose* or *where* at least once.",
            "I didn't use *that* after a comma."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Pause briefly where there are commas.",
          items: [
            "She is the coach who changed my life.",
            "This is the place where I grew up.",
            "The book I'm reading is fascinating.",
            "He's the writer whose novels I love.",
            "My uncle, who is a chef, lives abroad.",
            "That's the cafe where we met."
          ]
        },
        {
          type: "speak", title: "My role model",
          prompt: "Record yourself for about 90 seconds. Present a person you admire: who they are, what they have done, and why they're important to you. Use relative clauses to add detail.",
          language: ["The person I admire most is…, who…", "He / She is someone whose…", "He grew up in…, where…", "The thing that impresses me most is…", "That's the reason why…"],
          seconds: 120,
          checklist: ["use at least five relative clauses?", "use a non-defining clause with a pause?", "explain why you admire them?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *who, which, that, where, whose* correctly.", review: "Explanation: relative pronouns" },
    { can: "I can distinguish defining and non-defining clauses.", review: "Explanation: defining vs. non-defining; Reading activity 1" },
    { can: "I can use commas correctly in non-defining clauses.", review: "Reading activity 2" },
    { can: "I can omit the relative pronoun when it's the object.", review: "Explanation: omitting the pronoun; Writing activity 2" },
    { can: "I can understand descriptions with relative clauses when I listen.", review: "Listening: Mentors" },
    { can: "I can describe a person who influenced me, in writing or speaking.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
