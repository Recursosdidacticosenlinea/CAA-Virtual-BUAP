window.UNIT = {
  slug: "having-finished",
  title: "Having Finished…",
  level: "C1",
  minutes: 60,
  speakers: { "Julieta": "f", "Andrés": "m", "Narrator": "f", "Curator": "m", "Visitor": "f", A: "f", B: "m" },
  focus: ["present participle clauses: Walking home, I saw…", "perfect participle: Having finished, she left.", "past participle clauses: Built in 1531, the city…", "reduced relative clauses: the man sitting there", "concise, formal writing"],

  presentation: {
    scene: "🖼️🏛️🎨📜",
    situation: "Julieta and Andrés are preparing the text for an audio guide at an art museum in Puebla. They want it to sound elegant and concise.",
    warmup: {
      prompt: "What makes a museum visit interesting for you? Choose everything that is true.",
      options: ["a good audio guide", "interactive screens", "a guided tour", "short, clear texts", "famous works", "a nice café", "workshops", "free entry", "night openings", "photo spots", "temporary exhibitions", "a gift shop"],
      response: "Great! In this unit you'll learn to write and speak in a more concise, sophisticated style."
    },
    dialogueTitle: "Editing the audio guide",
    dialogue: [
      { who: "Julieta", line: "This sentence is too long: \"The sculpture was made in the eighth century and it was found in Veracruz in 1960.\"" },
      { who: "Andrés", line: "How about: \"*Made in the eighth century*, the sculpture was found in Veracruz in 1960\"?" },
      { who: "Julieta", line: "Much better! And this one: \"After he had studied in Paris, the artist returned to Mexico.\"" },
      { who: "Andrés", line: "\"*Having studied in Paris*, the artist returned to Mexico.\"" },
      { who: "Julieta", line: "Perfect. Now: \"Visitors who enter the next room will see…\"" },
      { who: "Andrés", line: "\"Visitors *entering* the next room will see…\" It's shorter and flows better." },
      { who: "Julieta", line: "*Being* a perfectionist, I want to check every sentence twice." },
      { who: "Andrés", line: "And *knowing* you, we'll be here all night!" }
    ]
  },

  objectives: [
    "I can use present participle clauses to describe simultaneous actions and reasons.",
    "I can use perfect participle clauses to show that one action happened before another.",
    "I can use past participle clauses with a passive meaning.",
    "I can reduce relative clauses to write in a more concise, formal style."
  ],

  explanation: {
    vocabTitle: "Art and museums",
    vocab: [
      { word: "exhibition", icon: "🖼️" }, { word: "curator", icon: "🧑‍🎨" }, { word: "masterpiece", icon: "🌟" },
      { word: "sculpture", icon: "🗿" }, { word: "mural", icon: "🎨" }, { word: "pre-Hispanic", icon: "🏺" },
      { word: "colonial", icon: "⛪" }, { word: "restore", icon: "🖌️" }, { word: "display", icon: "🔦" },
      { word: "commission", icon: "📜" }, { word: "donate", icon: "🎁" }, { word: "acquire", icon: "🤝" },
      { word: "depict", icon: "👁️" }, { word: "inspired by", icon: "💡" }, { word: "renowned", icon: "🏅" }
    ],
    grammar: [
      {
        title: "Present participle (-ing) clauses",
        head: ["Use", "Long version", "Participle clause"],
        rows: [
          ["simultaneous action", "While I was walking home, I saw an accident.", "*Walking home*, I saw an accident."],
          ["reason", "Because she felt tired, she went to bed.", "*Feeling tired*, she went to bed."],
          ["result", "It rained all day, so it ruined our plans.", "It rained all day, *ruining our plans*."],
          ["reduced relative", "The woman who is sitting there is my aunt.", "The woman *sitting there* is my aunt."]
        ],
        note: "The subject of the participle clause must be the same as the subject of the main clause. ✗ *Walking home, the rain started.* (The rain wasn't walking!)"
      },
      {
        title: "Perfect participle (having + participle)",
        head: ["Long version", "Participle clause"],
        rows: [
          ["After she had finished her degree, she moved abroad.", "*Having finished her degree*, she moved abroad."],
          ["Because he had lost his keys, he couldn't get in.", "*Having lost his keys*, he couldn't get in."],
          ["As I hadn't seen the film, I didn't comment.", "*Not having seen the film*, I didn't comment."]
        ],
        note: "Use it to stress that the first action was completed before the second. Negative: *Not having…*"
      },
      {
        title: "Past participle clauses (passive meaning)",
        head: ["Long version", "Participle clause"],
        rows: [
          ["The city was founded in 1531 and is now a UNESCO site.", "*Founded in 1531*, the city is now a UNESCO site."],
          ["If it is used correctly, this tool is safe.", "*Used correctly*, this tool is safe."],
          ["The paintings which were stolen in 1990 were found.", "The paintings *stolen in 1990* were found."]
        ]
      }
    ],
    watchOut: [
      ["Walking into the room, the lights went off.", "Walking into the room, I saw the lights go off. / As I walked into the room, the lights went off."],
      ["Having finish the report, he went home.", "Having finished the report, he went home."],
      ["Built in 1649, people visit the cathedral every day.", "Built in 1649, the cathedral is visited every day."],
      ["The man stood there is my uncle.", "The man standing there is my uncle."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct participle form of the verb in parentheses.",
      items: [
        "[[Having read|Having finished]] the book, I watched the film. (read)",
        "[[Painted]] in 1940, the mural shows the history of Puebla. (paint)",
        "[[Not knowing]] what to say, she smiled. (not know)",
        "Students [[wishing]] to join the club should register online. (wish)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an extract from a museum audio guide.",
      title: "Audio guide: Room 4, Colonial Art",
      script: [
        { who: "Narrator", line: "Welcome to Room 4. Standing in front of you is one of the museum's most important works, The Virgin of the Apocalypse." },
        { who: "Narrator", line: "Painted around 1750 by an unknown artist from Puebla, the canvas was originally commissioned for a convent in the city center. Having survived two earthquakes and a fire, it was restored in 1998, revealing colors hidden for over two centuries." },
        { who: "Narrator", line: "Notice the angels surrounding the Virgin. Inspired by European engravings, they nevertheless have faces with clearly indigenous features, reflecting the mixed cultural identity of colonial Puebla." },
        { who: "Narrator", line: "Moving to your left, you will see a collection of Talavera tiles. Produced in local workshops, these tiles were used to decorate churches and kitchens throughout the region." },
        { who: "Narrator", line: "Having finished this room, please continue to Room 5, where you'll find our collection of nineteenth-century photography. Visitors wishing to take a break may use the café on the ground floor." }
      ],
      activities: [
        {
          type: "match", title: "Long and short versions",
          prompt: "Match each participle clause from the audio guide with its longer meaning.",
          pairs: [
            ["Painted around 1750,…", "It was painted around 1750."],
            ["Having survived two earthquakes,…", "After it had survived two earthquakes,…"],
            ["Inspired by European engravings,…", "They were inspired by European engravings."],
            ["Produced in local workshops,…", "They were produced in local workshops."],
            ["Visitors wishing to take a break…", "Visitors who wish to take a break…"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The painting's artist is known.", a: false },
            { s: "It was originally made for a convent.", a: true },
            { s: "It was restored in 1998.", a: true },
            { s: "The angels have European faces.", a: false },
            { s: "Room 5 has nineteenth-century photography.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a biography from an exhibition catalogue.",
      title: "Catalogue: a self-taught painter",
      text: [
        { body: "Born in a small village in the Sierra Norte de Puebla in 1932, Aurora Méndez grew up surrounded by the colors of local textiles. Having lost her father at the age of nine, she left school to help her mother, weaving huipiles that were sold at the market in Zacapoaxtla." },
        { body: "Never having received formal training, Méndez began painting in her forties, using pigments made from plants and minerals. Working at night after long days in the fields, she produced more than three hundred works in twenty years. Her paintings, depicting everyday scenes of village life, were largely ignored by critics during her lifetime." },
        { body: "Discovered by a French anthropologist in 1988, her work was exhibited in Paris the following year, attracting enormous attention. Having become famous almost overnight, Méndez refused to move to the city, saying that her inspiration came from the mountains." },
        { body: "Considered today one of the most original voices in Mexican popular art, Méndez died in 2009. The forty works shown in this exhibition, many of them never displayed before, were donated by her family." }
      ],
      activities: [
        {
          type: "sort", title: "What kind of participle?",
          prompt: "Classify each participle clause from the text.",
          bins: ["Present participle (-ing)", "Perfect participle (having…)", "Past participle (passive)"],
          items: [
            { text: "Working at night after long days…", bin: 0 }, { text: "…depicting everyday scenes of village life", bin: 0 }, { text: "…attracting enormous attention", bin: 0 },
            { text: "Having lost her father at nine…", bin: 1 }, { text: "Having become famous almost overnight…", bin: 1 },
            { text: "Born in a small village…", bin: 2 }, { text: "Discovered by a French anthropologist…", bin: 2 }, { text: "Considered today one of the most original voices…", bin: 2 }
          ]
        },
        {
          type: "tf", title: "Understanding the biography",
          prompt: "Note: Aurora Méndez is a fictional artist created for this unit. Are these sentences true or false according to the text?",
          items: [
            { s: "She studied at an art school.", a: false },
            { s: "She started painting when she was young.", a: false },
            { s: "Critics praised her work during most of her life.", a: false },
            { s: "Her work became famous after an exhibition in Paris.", a: true },
            { s: "She moved to the city after becoming famous.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice reducing sentences, then write a short biography.",
      activities: [
        {
          type: "rewrite", title: "Make it concise",
          prompt: "Rewrite each sentence using a participle clause at the beginning.",
          items: [
            { q: "After she had graduated, she worked in Madrid.", a: ["Having graduated, she worked in Madrid."] },
            { q: "The bridge was built in 1890 and is still used today.", a: ["Built in 1890, the bridge is still used today."] },
            { q: "Because I didn't know the answer, I stayed quiet.", a: ["Not knowing the answer, I stayed quiet."] },
            { q: "As he was walking along the beach, he found a bottle.", a: ["Walking along the beach, he found a bottle."] },
            { q: "Because they had missed the bus, they took a taxi.", a: ["Having missed the bus, they took a taxi."] }
          ]
        },
        {
          type: "rewrite", title: "Reduce the relative clauses",
          prompt: "Rewrite each sentence without the relative pronoun.",
          items: [
            { q: "The girl who is wearing a red dress is my cousin.", a: ["The girl wearing a red dress is my cousin."] },
            { q: "The books which were donated by the family are on display.", a: ["The books donated by the family are on display."] },
            { q: "Anyone who wants to participate should call us.", a: ["Anyone wanting to participate should call us."] },
            { q: "The houses which were destroyed in the earthquake were rebuilt.", a: ["The houses destroyed in the earthquake were rebuilt."] }
          ]
        },
        {
          type: "write", title: "A biography for an exhibition",
          prompt: "Write a short biography (for an exhibition, a website or a book jacket) of a person you admire: an artist, scientist, athlete or family member. Use at least six participle clauses of different types.",
          minWords: 160, maxWords: 230,
          model: "Born in Puebla in 1951, Elena Ruiz grew up in a family of musicians. Having learned to play the guitar at the age of six, she gave her first concert in the Teatro Principal at only twelve. Encouraged by her teachers, she won a scholarship to the National Conservatory in Mexico City. Working as a waitress at night to pay her rent, she still found time to compose more than fifty songs. Having recorded her first album in 1978, she toured Latin America, becoming one of the most popular folk singers of her generation. Admired for her honest lyrics, she has inspired several generations of young musicians. Now living in Cholula, she continues to teach guitar to children from her neighborhood, believing that music can change lives.",
          bank: ["Born in…,", "Having learned / finished / recorded…,", "Encouraged by…,", "Working as…,", "…, becoming…", "Admired for…,", "Now living in…,"],
          checklist: [
            "I used at least **six** participle clauses.",
            "I used present, perfect and past participles.",
            "The subject of each participle clause matches the main clause.",
            "My text sounds formal and concise."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Pause after the participle clause.",
          items: [
            "Not knowing the answer, I stayed quiet.",
            "Walking along the beach, he found a bottle.",
            "Having missed the bus, they took a taxi.",
            "The girl wearing a red dress is my cousin.",
            "Built in the sixteenth century, the city is beautiful.",
            "Having finished the report, he went home."
          ]
        },
        {
          type: "speak", title: "Audio guide",
          prompt: "Record a 90-second audio guide for a place, building or work of art that you know well. Use a formal style with participle clauses.",
          language: ["Welcome to…", "Founded in…,", "Having been…,", "Moving to your right, you will see…", "Visitors wishing to…", "Considered…,"],
          seconds: 120,
          checklist: ["use at least six participle clauses?", "give historical information?", "use a clear, formal style?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use present participle clauses for simultaneous actions and reasons.", review: "Explanation: present participle clauses" },
    { can: "I can use *having + participle* for earlier actions.", review: "Explanation: perfect participle; Writing activity 1" },
    { can: "I can use past participle clauses with passive meaning.", review: "Explanation: past participle clauses" },
    { can: "I can reduce relative clauses.", review: "Writing activity 2" },
    { can: "I avoid dangling participles (different subjects).", review: "Explanation: watch out!" },
    { can: "I can write and speak concisely in a formal style.", review: "Writing activity 3 and Speaking activities" }
  ]
};
