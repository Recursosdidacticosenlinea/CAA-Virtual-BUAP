window.UNIT = {
  slug: "have-you-been-waiting-long",
  title: "Have You Been Waiting Long?",
  level: "B2",
  minutes: 60,
  speakers: { "Fátima": "f", "Joaquín": "m", "Coach": "m", "Interviewer": "f", "Rosario": "f", A: "f", B: "m" },
  focus: ["present perfect continuous: I've been working", "for / since / How long…?", "continuous vs. simple: I've been reading / I've read", "visible results: Your eyes are red. Have you been crying?", "stative verbs"],

  presentation: {
    scene: "⏱️☕😅🏃‍♀️",
    situation: "Joaquín arrives forty minutes late to meet his friend Fátima at a café in the Puebla city center. She doesn't look happy.",
    warmup: {
      prompt: "Which of these things have you been doing lately? Choose everything that is true.",
      options: ["studying a lot", "working long hours", "learning something new", "exercising", "watching a new series", "sleeping badly", "saving money", "reading a book", "cooking more", "traveling", "looking for a job", "practicing English"],
      response: "Great! In this unit you'll learn to talk about recent activities and how long they've been happening."
    },
    dialogueTitle: "Forty minutes late",
    dialogue: [
      { who: "Joaquín", line: "Fátima! I'm so sorry. *Have you been waiting* long?" },
      { who: "Fátima", line: "*I've been sitting* here *for* forty minutes! *I've drunk* two coffees and *I've read* half my book." },
      { who: "Joaquín", line: "I know, I know. The traffic on the Periférico was terrible." },
      { who: "Fátima", line: "Hmm. And why are you all wet?" },
      { who: "Joaquín", line: "*I've been running* from the bus stop! It's *been raining since* noon." },
      { who: "Fátima", line: "OK, you're forgiven. So, what *have you been doing* lately? I haven't seen you *for* weeks." },
      { who: "Joaquín", line: "*I've been working* on my thesis every night. *I've written* three chapters so far." },
      { who: "Fátima", line: "Wow! *How long have you been working* on it?" },
      { who: "Joaquín", line: "*Since* January. Only two more chapters to go!" }
    ]
  },

  objectives: [
    "I can describe activities that started in the past and continue now.",
    "I can use *for, since* and *How long…?* with the present perfect continuous.",
    "I can choose between the present perfect simple (results, quantities) and continuous (duration, activity).",
    "I can explain present evidence with recent activities: *I'm tired because I've been running*."
  ],

  explanation: {
    vocabTitle: "Time expressions and recent activities",
    vocab: [
      { word: "lately", icon: "🗓️" }, { word: "recently", icon: "🕐" }, { word: "all day", icon: "☀️" },
      { word: "for ages", icon: "⏳" }, { word: "since then", icon: "➡️" }, { word: "so far", icon: "📍" },
      { word: "exhausted", icon: "😩" }, { word: "out of breath", icon: "😮‍💨" }, { word: "covered in paint", icon: "🎨" },
      { word: "train", icon: "🏋️" }, { word: "practice", icon: "🎹" }, { word: "queue / wait in line", icon: "🧍" },
      { word: "renovate", icon: "🛠️" }, { word: "save up", icon: "🐷" }, { word: "struggle", icon: "😣" }
    ],
    grammar: [
      {
        title: "Present perfect continuous: form",
        head: ["", "Example"],
        rows: [
          ["affirmative", "*I've (have) been studying* all day. *She's (has) been working* here since 2020."],
          ["negative", "*They haven't been sleeping* well."],
          ["question", "*Have you been waiting* long? *How long has* it *been raining*?"]
        ],
        note: "*have / has + been + -ing*. Use it for an activity that started in the past and is still happening, or has just stopped and has visible results."
      },
      {
        title: "For and since",
        head: ["Word", "Use", "Examples"],
        rows: [
          ["*for*", "a period of time", "*for* two hours, *for* three years, *for* ages"],
          ["*since*", "a starting point", "*since* 9 a.m., *since* Monday, *since* I was a child"]
        ]
      },
      {
        title: "Simple or continuous?",
        head: ["Present perfect continuous: the activity / duration", "Present perfect simple: the result / quantity"],
        rows: [
          ["*I've been reading* this book all week.", "*I've read* 200 pages."],
          ["*She's been painting* the kitchen. (She's covered in paint.)", "*She's painted* the kitchen. (It's finished.)"],
          ["*How long have you been learning* English?", "*How many words have you learned*?"]
        ],
        note: "Stative verbs (*know, like, believe, own, understand*) are not used in the continuous: *I've known her for years* (not *I've been knowing*)."
      }
    ],
    watchOut: [
      ["I'm waiting here for an hour.", "I've been waiting here for an hour."],
      ["I've been knowing him since 2015.", "I've known him since 2015."],
      ["She's been writing three emails.", "She's written three emails."],
      ["I've been living here since three years.", "I've been living here for three years."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *for* or *since*, or the right form of the verb.",
      items: [
        "I've been learning English [[since]] I was twelve.",
        "They've been playing that game [[for]] five hours!",
        "Your hands are dirty. What [[have you been doing]]? (you / do)",
        "I've [[known]] Laura for ten years. (know)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an interview with Rosario, a long-distance runner from Puebla preparing for her first marathon.",
      title: "Road to the marathon",
      script: [
        { who: "Interviewer", line: "Rosario, the Mexico City marathon is in six weeks. How long have you been training for it?" },
        { who: "Rosario", line: "I've been training seriously since February, so about seven months. Before that, I'd only run short races." },
        { who: "Interviewer", line: "What does your week look like?" },
        { who: "Rosario", line: "I've been running five days a week. Recently I've been doing long runs on Sundays, about thirty kilometers. Last Sunday I ran thirty-two, my longest ever." },
        { who: "Interviewer", line: "Have you had any injuries?" },
        { who: "Rosario", line: "Yes, my knee has been hurting for the last two weeks, so I've been doing yoga and seeing a physiotherapist. It's getting better." },
        { who: "Interviewer", line: "And what about food?" },
        { who: "Rosario", line: "I've been eating a lot more pasta and rice! And I've stopped drinking soda completely. I haven't had a soda since March." },
        { who: "Interviewer", line: "Have you been enjoying the process?" },
        { who: "Rosario", line: "Honestly, yes. I've met amazing people in my running club. We've run more than a thousand kilometers together this year!" }
      ],
      activities: [
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen and complete with one word or number.",
          items: [
            "Rosario has been training seriously since [[February]].",
            "She has been running [[five|5]] days a week.",
            "Her longest run was [[thirty-two|32]] kilometers.",
            "Her [[knee]] has been hurting for two weeks.",
            "She hasn't had a soda since [[March]]."
          ]
        },
        {
          type: "sort", title: "Activity or result?",
          prompt: "Is each sentence about an ongoing activity/duration or about a result/quantity?",
          bins: ["Ongoing activity (been + -ing)", "Result / quantity (present perfect simple)"],
          items: [
            { text: "She's been training since February.", bin: 0 }, { text: "She's been doing long runs on Sundays.", bin: 0 },
            { text: "Her knee has been hurting.", bin: 0 }, { text: "She's been eating more pasta.", bin: 0 },
            { text: "She's stopped drinking soda.", bin: 1 }, { text: "She's met amazing people.", bin: 1 },
            { text: "They've run more than 1,000 km.", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about a family business in Puebla.",
      title: "Three generations of Talavera",
      text: [
        { body: "The Hernández family has been making Talavera pottery in the same small workshop on Calle 6 Norte since 1952. Don Efraín, now 81, has been working there for more than sixty years. \"I've painted thousands of plates,\" he says, \"maybe more than fifty thousand. But I've never painted two the same.\"" },
        { body: "His granddaughter Valeria joined the business four years ago after studying graphic design. Since then, she's been modernizing the workshop. She has created an online store, and she's been designing new patterns that mix traditional blue with bright pinks and greens. \"Some older customers have complained,\" she laughs, \"but our sales have doubled.\"" },
        { body: "Recently, the family has been struggling with the cost of materials. The price of the special clay has been rising for the last two years. \"We've been thinking about raising our prices,\" Valeria admits, \"but we don't want to lose our local customers.\"" },
        { body: "Despite the challenges, Don Efraín is optimistic. \"I've been doing this all my life, and I've seen many difficult moments. Talavera has survived for five centuries. It will survive this too.\"" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read the article. Are the sentences true or false?",
          items: [
            { s: "The workshop has been in the same place since the 1950s.", a: true },
            { s: "Don Efraín has painted fewer than a thousand plates.", a: false },
            { s: "Valeria has been working in the business for four years.", a: true },
            { s: "All customers like the new colors.", a: false },
            { s: "The price of clay has been going up.", a: true },
            { s: "The family has already raised its prices.", a: false }
          ]
        },
        {
          type: "rewrite", title: "Write a How long / How many question",
          prompt: "Write the question for each answer.",
          items: [
            { q: "The family has been making Talavera since 1952. → How long…?", a: ["How long has the family been making Talavera?", "How long have they been making Talavera?"] },
            { q: "Don Efraín has painted about fifty thousand plates. → How many…?", a: ["How many plates has Don Efraín painted?", "How many plates has he painted?"] },
            { q: "Valeria has been working there for four years. → How long…?", a: ["How long has Valeria been working there?", "How long has she been working there?"] },
            { q: "The price has been rising for two years. → How long…?", a: ["How long has the price been rising?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice choosing the right form, then write an update about your life.",
      activities: [
        {
          type: "gap", title: "Simple or continuous?",
          prompt: "Complete with the present perfect simple or continuous of the verbs in parentheses.",
          items: [
            "I'm exhausted. I [[have been cleaning|'ve been cleaning]] the house all morning. (clean)",
            "I [[have cleaned|'ve cleaned]] three rooms, but there are two more. (clean)",
            "She [[has been learning|'s been learning]] Korean for a year. (learn)",
            "We [[have known|'ve known]] each other since primary school. (know)",
            "How many episodes [[have you watched]]? (you / watch)"
          ]
        },
        {
          type: "rewrite", title: "Explain the evidence",
          prompt: "Write a sentence with the present perfect continuous to explain each situation. Use the verb in parentheses.",
          items: [
            { q: "Your eyes are red. (cry → you)", a: ["You've been crying.", "You have been crying.", "Have you been crying?"] },
            { q: "The street is wet. (rain → it)", a: ["It's been raining.", "It has been raining."] },
            { q: "He's out of breath. (run → he)", a: ["He's been running.", "He has been running."] },
            { q: "They're covered in paint. (paint → they)", a: ["They've been painting.", "They have been painting."] }
          ]
        },
        {
          type: "write", title: "Life update",
          prompt: "Write an email to a friend you haven't seen for a long time. Tell them what you've been doing lately (studies, work, hobbies, relationships) and what you've achieved. Ask what they've been doing.",
          minWords: 120, maxWords: 180,
          model: "Hi Pau! It's been ages since we last talked. How have you been? I've been really busy lately. I've been working part-time at a bookstore since August, and I've been studying for my final exams at the same time, so I haven't been sleeping much! I've also been taking salsa classes on Fridays. I've learned five different routines so far, and I've made some great friends there. The best news: I've saved enough money for a trip to Oaxaca in December! What have you been doing? Have you been traveling? Write soon!",
          bank: ["It's been ages since…", "I've been … lately.", "since / for", "so far", "I haven't been… much", "I've managed to…", "What have you been doing?"],
          checklist: [
            "I used the present perfect continuous for **ongoing activities**.",
            "I used the present perfect simple for **results and quantities**.",
            "I used *for* and *since* correctly.",
            "I asked my friend at least one question."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. *Been* is weak and quick: /bɪn/.",
          items: [
            "Have you been waiting long?",
            "It's been raining since noon.",
            "You've been crying.",
            "He's been running.",
            "I've known her for ten years.",
            "How long have you been learning English?"
          ]
        },
        {
          type: "speak", title: "A project I've been working on",
          prompt: "Record yourself for about 90 seconds. Describe a project, hobby or goal you've been working on: when you started, what you've been doing, what you've achieved so far, and what's next.",
          language: ["For the last…, I've been…", "I started… in…, so I've been doing it for…", "So far, I've…", "Recently, I've been…", "The hardest part has been…"],
          seconds: 120,
          checklist: ["say how long you've been doing it?", "use both simple and continuous forms?", "describe results so far?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form the present perfect continuous.", review: "Explanation: form" },
    { can: "I can use *for, since* and *How long…?* correctly.", review: "Explanation: for and since" },
    { can: "I can choose between the simple and continuous forms.", review: "Explanation: simple or continuous?; Writing activity 1" },
    { can: "I know which stative verbs are not used in the continuous.", review: "Explanation: simple or continuous?" },
    { can: "I can explain present evidence with recent activities.", review: "Writing activity 2" },
    { can: "I can talk and write about what I've been doing lately.", review: "Writing activity 3 and Speaking activities" }
  ]
};
