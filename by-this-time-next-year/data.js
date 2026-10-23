window.UNIT = {
  slug: "by-this-time-next-year",
  title: "By This Time Next Year",
  level: "B2",
  minutes: 60,
  speakers: { "Abigail": "f", "Emiliano": "m", "Host": "f", "Dr. Kuri": "m", "Coach Luna": "f", A: "f", B: "m" },
  focus: ["future continuous: I'll be working", "future perfect: I'll have finished", "by / by the time / in … years' time", "predictions about the future of cities and technology", "personal goals and plans"],

  presentation: {
    scene: "🎓🗓️🚀🌎",
    situation: "Abigail and Emiliano are in their last semester at BUAP. Sitting on the steps of the Carolino building, they imagine their lives in five years.",
    warmup: {
      prompt: "Where do you think you'll be in five years? Choose everything that might be true.",
      options: ["working in my field", "studying a master's", "living abroad", "living with my parents", "running my own business", "married", "traveling", "speaking another language", "living in Puebla", "still looking for my path", "working remotely", "raising a family"],
      response: "Interesting! In this unit you'll learn to talk about future actions in progress and completed future actions."
    },
    dialogueTitle: "Five years from now",
    dialogue: [
      { who: "Emiliano", line: "Can you believe we'll be graduating in three months?" },
      { who: "Abigail", line: "I know! *By this time next year*, *I'll have started* my master's in Barcelona, hopefully." },
      { who: "Emiliano", line: "Nice. *This time next year I'll be working* at my uncle's engineering firm. Not very exciting, but it's a start." },
      { who: "Abigail", line: "And in five years?" },
      { who: "Emiliano", line: "*By then, I'll have saved* enough to start my own company. *I'll be designing* solar panels for small towns." },
      { who: "Abigail", line: "That's a great plan. In five years… *I'll have finished* my master's and *I'll be living* somewhere by the sea." },
      { who: "Emiliano", line: "*Will you have learned* Catalan *by then*?" },
      { who: "Abigail", line: "Ha ha! Maybe. At least *I'll have tried*!" }
    ]
  },

  objectives: [
    "I can describe actions that will be in progress at a future time with the future continuous.",
    "I can describe actions that will be completed before a future time with the future perfect.",
    "I can use time expressions: *by, by the time, in … years' time, this time next…*",
    "I can make predictions and talk about my goals in detail."
  ],

  explanation: {
    vocabTitle: "Future and goals",
    vocab: [
      { word: "graduate", icon: "🎓" }, { word: "get promoted", icon: "📈" }, { word: "settle down", icon: "🏡" },
      { word: "start a business", icon: "🚀" }, { word: "pay off a loan", icon: "💳" }, { word: "achieve a goal", icon: "🎯" },
      { word: "in the long run", icon: "🛤️" }, { word: "in the near future", icon: "🔜" }, { word: "by then", icon: "⏱️" },
      { word: "a milestone", icon: "🪨" }, { word: "a forecast", icon: "📊" }, { word: "self-driving car", icon: "🚗" },
      { word: "renewable energy", icon: "☀️" }, { word: "remote work", icon: "💻" }, { word: "life expectancy", icon: "⏳" }
    ],
    grammar: [
      {
        title: "Future continuous",
        head: ["Form", "Use", "Example"],
        rows: [
          ["*will be* + -ing", "an action in progress at a specific future time", "*This time tomorrow, I'll be flying* to Cancún."],
          ["negative", "", "*I won't be working* on Saturday."],
          ["question", "polite question about plans", "*Will you be using* the car tonight?"]
        ]
      },
      {
        title: "Future perfect",
        head: ["Form", "Use", "Example"],
        rows: [
          ["*will have* + participle", "an action completed before a future time", "*By 2030, I'll have finished* my PhD."],
          ["negative", "", "*We won't have arrived* by eight."],
          ["question", "", "*Will you have saved* enough by December?"]
        ],
        note: "The future perfect is almost always used with *by* or *by the time*: *By the time you arrive, I'll have cooked dinner.*"
      },
      {
        title: "Time expressions",
        head: ["Expression", "Example"],
        rows: [
          ["*by* + time", "*By* Friday, I'll have finished the report."],
          ["*by the time* + present simple", "*By the time* she *gets* home, we'll have left."],
          ["*this time next* week / year", "*This time next week*, I'll be lying on a beach."],
          ["*in … years' time*", "*In ten years' time*, we'll be using flying taxis."]
        ],
        note: "After *by the time* and *when*, use the present simple, not *will*: *By the time he arrives* (not *will arrive*)."
      }
    ],
    watchOut: [
      ["By 2030 I will finish my degree.", "By 2030 I will have finished my degree."],
      ["This time tomorrow I'll work.", "This time tomorrow I'll be working."],
      ["By the time you will arrive, I'll have left.", "By the time you arrive, I'll have left."],
      ["I'll have been finished by Monday.", "I'll have finished by Monday."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the future continuous or future perfect of the verbs in parentheses.",
      items: [
        "Don't call me at 9. I [[will be driving|'ll be driving]] to work. (drive)",
        "By the end of the year, I [[will have read|'ll have read]] twenty books. (read)",
        "This time next month, we [[will be living|'ll be living]] in our new house. (live)",
        "By the time the movie starts, we [[will have eaten|'ll have eaten]] all the popcorn! (eat)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio interview with Dr. Kuri, an urban planner, about Puebla in 2050.",
      title: "Puebla 2050",
      script: [
        { who: "Host", line: "Dr. Kuri, what will Puebla look like in 2050?" },
        { who: "Dr. Kuri", line: "Well, by 2050 the metropolitan area will have grown to about four million people, so planning is urgent. I think we'll be living in much denser neighborhoods, with more apartments and fewer houses." },
        { who: "Host", line: "And transportation?" },
        { who: "Dr. Kuri", line: "By then, the city will have replaced most of its buses with electric ones. People will be using bicycles and electric scooters much more. I'm optimistic that we'll have built at least two more RUTA lines." },
        { who: "Host", line: "What about water? It's already a problem." },
        { who: "Dr. Kuri", line: "That's the biggest challenge. If we don't act now, by 2050 we'll have used up a large part of our underground water. But I believe new buildings will be collecting rainwater as standard practice." },
        { who: "Host", line: "And you personally? Where will you be in 2050?" },
        { who: "Dr. Kuri", line: "Ha ha! I'll have retired by then. I'll probably be sitting in a park in Atlixco, complaining that nobody listened to me!" }
      ],
      activities: [
        {
          type: "sort", title: "In progress or completed?",
          prompt: "Listen. Is each prediction an action in progress in 2050 or completed by 2050?",
          bins: ["In progress (will be + -ing)", "Completed (will have + participle)"],
          items: [
            { text: "living in denser neighborhoods", bin: 0 }, { text: "using bicycles and scooters more", bin: 0 },
            { text: "collecting rainwater", bin: 0 }, { text: "sitting in a park in Atlixco", bin: 0 },
            { text: "grown to four million people", bin: 1 }, { text: "replaced most buses", bin: 1 },
            { text: "built two more RUTA lines", bin: 1 }, { text: "retired", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete with one word or number.",
          items: [
            "The metropolitan area will have about [[four|4]] million people.",
            "Most buses will be [[electric]].",
            "The biggest challenge is [[water]].",
            "New buildings will be collecting [[rainwater]].",
            "Dr. Kuri will probably be sitting in a park in [[Atlixco]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about how work might change in the next twenty years.",
      title: "Your job in 2045",
      text: [
        { body: "If you're a university student today, you'll probably be working until at least 2065. But what kind of work will you be doing? Experts agree on one thing: many of today's jobs will have disappeared or changed completely in twenty years." },
        { body: "By 2045, artificial intelligence will have taken over many routine tasks, from writing basic reports to analyzing medical images. However, this doesn't mean everyone will be unemployed. New jobs will have appeared, just as \"social media manager\" didn't exist in 2005. Many people will be working alongside AI systems, checking and improving their results." },
        { body: "The way we work will also be different. Most office workers will be working remotely at least part of the week, and by then, many companies will have adopted a four-day week. On the other hand, people will be changing careers several times in their lives, so continuous learning will be essential." },
        { body: "So what can you do now? Develop skills that machines find difficult: creativity, empathy, critical thinking and communication. And keep learning languages: by 2045, you'll have discovered that being able to connect with people from other cultures is still one of the most human skills of all." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read the article. Are these sentences true or false according to the writer?",
          items: [
            { s: "Today's students will be working until about 2065.", a: true },
            { s: "All jobs will have disappeared by 2045.", a: false },
            { s: "New jobs will have appeared by 2045.", a: true },
            { s: "People will be staying in the same career all their lives.", a: false },
            { s: "Creativity and empathy will still be important.", a: true }
          ]
        },
        {
          type: "rewrite", title: "Make predictions",
          prompt: "Rewrite each idea from the article as a prediction with the verb form in parentheses.",
          items: [
            { q: "AI / take over many routine tasks / by 2045 (future perfect)", a: ["AI will have taken over many routine tasks by 2045.", "By 2045, AI will have taken over many routine tasks."] },
            { q: "many people / work alongside AI (future continuous)", a: ["Many people will be working alongside AI."] },
            { q: "many companies / adopt a four-day week / by then (future perfect)", a: ["Many companies will have adopted a four-day week by then.", "By then, many companies will have adopted a four-day week."] },
            { q: "people / change careers several times (future continuous)", a: ["People will be changing careers several times."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the two forms, then write about your future.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "This time next week I'll be studying for exams." },
            { a: "By June I'll have finished my thesis." },
            { a: "Will you be using the computer tonight?" },
            { a: "By the time we arrive, the concert will have started." },
            { a: "In ten years' time we'll be living abroad." }
          ]
        },
        {
          type: "gap", title: "My timeline",
          prompt: "Complete Mariana's plans with the future continuous or future perfect.",
          items: [
            "Next Monday at 8 a.m., I [[will be taking|'ll be taking]] my final exam. (take)",
            "By December, I [[will have graduated|'ll have graduated]]. (graduate)",
            "In January, I [[will be traveling|'ll be traveling|will be travelling|'ll be travelling]] around South America. (travel)",
            "By the time I come back, I [[will have spent|'ll have spent]] all my savings! (spend)",
            "In five years' time, I hope I [[will be running|'ll be running]] my own design studio. (run)"
          ]
        },
        {
          type: "write", title: "A letter to my future self",
          prompt: "Write a letter to yourself to open in ten years. Predict what you will have achieved and what you will be doing in different areas of your life (work, home, relationships, hobbies). Include one worry and one hope.",
          minWords: 130, maxWords: 190,
          model: "Dear future me, when you read this, you'll be thirty-one years old. I wonder where you'll be living. I hope you'll have finished your degree in architecture and that you'll be working for a firm that designs sustainable buildings. By then, you'll probably have traveled to at least five countries, and I hope you'll have learned Italian, which has always been your dream. Maybe you'll be living with a partner and a dog in a small house with a garden. My only worry is that you'll have stopped painting, because you'll be too busy. Please don't! I hope you'll still be spending Sunday afternoons with Mom and Grandma. Take care of yourself. Love, your younger self.",
          bank: ["When you read this, you'll be…", "By then, you'll have…", "I hope you'll be…ing", "You'll probably have…", "My only worry is that…", "I hope you'll still be…"],
          checklist: [
            "I used the **future perfect** at least three times.",
            "I used the **future continuous** at least three times.",
            "I used time expressions (*by then, in ten years' time*).",
            "I included a worry and a hope."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. *Will have* sounds like /wɪləv/ and *I'll be* is quick.",
          items: [
            "This time next week I'll be studying for exams.",
            "Will you be using the computer tonight?",
            "By June I'll have finished my thesis.",
            "In ten years' time we'll be living abroad.",
            "What will you be doing next year?",
            "The concert will have started."
          ]
        },
        {
          type: "speak", title: "The world in 2050",
          prompt: "Record yourself for about 90 seconds. Make predictions about the world in 2050 (technology, environment, cities, education). Say what will have changed and what people will be doing.",
          language: ["By 2050,… will have…", "People will be…ing", "I'm optimistic / pessimistic that…", "In my view, we won't have…", "Hopefully,…"],
          seconds: 120,
          checklist: ["make at least six predictions?", "use both future forms?", "give your opinion?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the future continuous for actions in progress.", review: "Explanation: future continuous" },
    { can: "I can use the future perfect for completed future actions.", review: "Explanation: future perfect" },
    { can: "I can choose between the two forms.", review: "Listening activity 1; Writing activity 2" },
    { can: "I can use *by, by the time, this time next…, in … years' time*.", review: "Explanation: time expressions" },
    { can: "I can understand predictions about the future.", review: "Listening and Reading" },
    { can: "I can describe my future goals and predictions in writing or speaking.", review: "Writing activity 3 and Speaking activities" }
  ]
};
