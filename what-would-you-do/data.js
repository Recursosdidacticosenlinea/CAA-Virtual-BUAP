window.UNIT = {
  slug: "what-would-you-do",
  title: "What Would You Do?",
  level: "B1",
  minutes: 55,
  speakers: { "Karen": "f", "Óscar": "m", "Host": "f", "Caller 1": "m", "Caller 2": "f", "Caller 3": "m", A: "f", B: "m" },
  focus: ["second conditional: If I had…, I would…", "imaginary situations and dilemmas", "If I were you, I'd…", "would / wouldn't / could / might", "What would you do if…?"],

  presentation: {
    scene: "💰🏝️🤔💭",
    situation: "Karen and Óscar are waiting for their bus at the CU terminal. Karen sees an ad for the national lottery and starts dreaming.",
    warmup: {
      prompt: "If you had a free day tomorrow, what would you do? Choose everything that is true.",
      options: ["sleep all day", "go to the beach", "visit my family", "play video games", "go shopping", "read a book", "watch a movie marathon", "go to Cholula", "cook something special", "do sports", "study for an exam", "meet my friends"],
      response: "Great! In this unit you'll learn to talk about imaginary situations and give advice."
    },
    dialogueTitle: "Lottery dreams",
    dialogue: [
      { who: "Karen", line: "Look, Óscar! The prize is 100 million pesos. *What would you do if you won* the lottery?" },
      { who: "Óscar", line: "Hmm… *If I won*, *I'd buy* a house for my parents. And *I'd travel* around the world." },
      { who: "Karen", line: "*Would you* stop studying?" },
      { who: "Óscar", line: "No, *I wouldn't*. I like my career. But *I might* study abroad. What about you?" },
      { who: "Karen", line: "*If I had* that much money, *I'd open* an animal shelter. *I'd rescue* all the street dogs in Puebla!" },
      { who: "Óscar", line: "That's nice. But you'd need a really big shelter!" },
      { who: "Karen", line: "*If I were* rich, *I could* buy a ranch!" },
      { who: "Óscar", line: "Well, first you need to buy a ticket. *If I were you*, *I'd buy* one today!" }
    ]
  },

  objectives: [
    "I can talk about imaginary or unlikely situations with the second conditional.",
    "I can form the second conditional: *If + past simple, would + verb*.",
    "I can give advice with *If I were you, I'd…*",
    "I can discuss dilemmas and explain what I would do and why."
  ],

  explanation: {
    vocabTitle: "Dilemmas and dreams",
    vocab: [
      { word: "win the lottery", icon: "🎟️" }, { word: "find a wallet", icon: "👛" }, { word: "be invisible", icon: "👻" },
      { word: "live abroad", icon: "🌍" }, { word: "be famous", icon: "⭐" }, { word: "tell the truth", icon: "🗣️" },
      { word: "keep a secret", icon: "🤐" }, { word: "lie", icon: "🤥" }, { word: "donate", icon: "🎁" },
      { word: "save money", icon: "🐷" }, { word: "quit a job", icon: "🚪" }, { word: "a dilemma", icon: "⚖️" },
      { word: "honest", icon: "😇" }, { word: "brave", icon: "🦁" }, { word: "selfish", icon: "🙄" }
    ],
    grammar: [
      {
        title: "Second conditional: form",
        head: ["If clause (imaginary situation)", "Main clause (result)"],
        rows: [
          ["*If I won* the lottery,", "*I would (I'd) buy* a house."],
          ["*If she had* more time,", "*she would learn* to play the piano."],
          ["*If we didn't have* class,", "*we'd go* to the beach."],
          ["*If I were* invisible,", "*I wouldn't tell* anybody."]
        ],
        note: "The past simple here doesn't mean past time: it means **imaginary**. You can change the order: *I'd buy a house if I won the lottery* (no comma)."
      },
      {
        title: "If I were…",
        head: ["Use", "Example"],
        rows: [
          ["*were* for all subjects (more correct)", "*If he were* taller, he'd play basketball."],
          ["advice", "*If I were you, I'd* talk to the teacher."],
          ["questions", "*What would you do if you were* the president?"]
        ],
        note: "In informal English, people also say *If I was…*, but use *If I were you* for advice."
      },
      {
        title: "Would, could, might",
        head: ["Word", "Meaning", "Example"],
        rows: [
          ["*would*", "certain result", "If I had a car, I *would drive* to work."],
          ["*could*", "possible ability", "If I spoke French, I *could work* in Canada."],
          ["*might*", "maybe", "If I had time, I *might take* a dance class."]
        ]
      }
    ],
    watchOut: [
      ["If I would win, I would buy a car.", "If I won, I would buy a car."],
      ["If I have a million pesos, I would travel.", "If I had a million pesos, I would travel."],
      ["If I was you, I would study.", "If I were you, I would study."],
      ["What you would do?", "What would you do?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the verbs in parentheses.",
      items: [
        "If I [[had]] a dog, I would walk it every day. (have)",
        "If she lived near the beach, she [[would surf|'d surf]] every weekend. (surf)",
        "If I [[were]] you, I'd apologize. (be)",
        "What [[would]] you do if you saw a ghost? (will)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio program, *Tough Choices*. Three callers have a dilemma, and the host gives advice.",
      title: "Tough choices",
      script: [
        { who: "Host", line: "Good evening and welcome to Tough Choices. First caller, what's your dilemma?" },
        { who: "Caller 1", line: "Hi. My best friend wants to copy my homework every week. If I said no, he'd be angry. But I'm tired of it." },
        { who: "Host", line: "If I were you, I'd talk to him honestly. A real friend would understand. You could offer to study together instead." },
        { who: "Host", line: "Next caller, go ahead." },
        { who: "Caller 2", line: "I have a job offer in Monterrey. The salary is much better, but my family is here in Puebla. If I took the job, I'd miss them a lot." },
        { who: "Host", line: "That's difficult. If I were in your situation, I'd try it for one year. If you didn't like it, you could come back. And Monterrey isn't that far!" },
        { who: "Host", line: "Last caller." },
        { who: "Caller 3", line: "I found a wallet in the street with five thousand pesos and an ID. My friend says I should keep the money." },
        { who: "Host", line: "Oh, no! If I found a wallet, I'd return it with all the money. Imagine if it were yours! You could contact the person through social media." }
      ],
      activities: [
        {
          type: "match", title: "Problem and advice",
          prompt: "Match each caller with the host's advice.",
          pairs: [
            ["Caller 1: a friend copies his homework", "Talk to him honestly and offer to study together."],
            ["Caller 2: a job offer in Monterrey", "Try it for one year."],
            ["Caller 3: found a wallet with money", "Return it and contact the owner."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Caller 1 thinks his friend would be angry if he said no.", a: true },
            { s: "Caller 2's family lives in Monterrey.", a: false },
            { s: "The salary in Monterrey is better.", a: true },
            { s: "The wallet had five hundred pesos.", a: false },
            { s: "Caller 3's friend thinks he should keep the money.", a: true },
            { s: "The host would keep the money.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a magazine quiz. Choose your answers, then read what they say about you.",
      title: "Quiz: How honest are you?",
      text: [
        { body: "**1.** If a cashier gave you too much change, what would you do? *a)* I'd give it back immediately. *b)* I'd keep it if it were a small amount. *c)* I'd keep it. It's their mistake!" },
        { body: "**2.** If your friend had a terrible haircut and asked your opinion, what would you say? *a)* I'd tell the truth, but kindly. *b)* I'd say, \"It's different!\" *c)* I'd say, \"I love it!\"" },
        { body: "**3.** If you could see the answers to an exam before the test, would you look? *a)* No, never. *b)* I might look at one or two. *c)* Of course!" },
        { body: "**Mostly a:** You're very honest. People trust you, but sometimes the truth hurts, so be kind. **Mostly b:** You're honest most of the time, but you would change the rules a little if it helped you. **Mostly c:** Hmm… if you were a little more honest, people would trust you more!" }
      ],
      activities: [
        {
          type: "sort", title: "Honest or not?",
          prompt: "Is each answer from the quiz very honest or not very honest?",
          bins: ["Very honest", "Not very honest"],
          items: [
            { text: "I'd give the change back immediately.", bin: 0 }, { text: "I'd tell the truth, but kindly.", bin: 0 }, { text: "No, I'd never look at the answers.", bin: 0 },
            { text: "I'd keep it. It's their mistake!", bin: 1 }, { text: "I'd say, \"I love it!\"", bin: 1 }, { text: "Of course I'd look!", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Answer about you",
          prompt: "Write a full answer with *would* or *wouldn't*. Start each answer as shown.",
          items: [
            { q: "Would you give back the extra change? → Yes, I…", a: ["Yes, I would give it back.", "Yes, I'd give it back.", "Yes, I would."] },
            { q: "Would you look at the exam answers? → No, I…", a: ["No, I wouldn't look at the answers.", "No, I wouldn't.", "No, I would not.", "No, I wouldn't look at them."] },
            { q: "Complete the sentence with *trust me more*: If I were more honest, people…", a: ["If I were more honest, people would trust me more.", "If I was more honest, people would trust me more."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structure, then write your answer to a dilemma.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What would you do if you were invisible?" },
            { a: "If I had more time, I would learn Japanese." },
            { a: "If I were you, I'd tell her the truth." },
            { a: "She wouldn't lie if she were in your situation." },
            { a: "If we lived in Cancún, we could swim every day." }
          ]
        },
        {
          type: "gap", title: "Complete the conditionals",
          prompt: "Complete with the correct form of the verbs in parentheses.",
          items: [
            "If I [[spoke]] English perfectly, I [[would apply|'d apply]] for a job in Canada. (speak / apply)",
            "If my parents [[gave]] me a car, I [[would drive|'d drive]] to the beach. (give / drive)",
            "We [[wouldn't|would not]] have problems if everybody [[recycled]]. (not have / recycle)",
            "If he [[didn't|did not]] work on Saturdays, he [[could]] play on the team. (not work / can)"
          ]
        },
        {
          type: "write", title: "A tough choice",
          prompt: "Choose one dilemma and write what you would do and why: *You found a wallet with 5,000 pesos. / Your best friend's boyfriend is cheating. / You won a scholarship abroad, but your family needs you here.* Use at least four second conditional sentences.",
          minWords: 80, maxWords: 120,
          model: "If I won a scholarship to study in Spain, but my family needed me here, it would be a very difficult choice. First, I would talk to my parents. If they said they could manage without me, I would accept the scholarship, because it's a great opportunity. I could send them money if I found a part-time job there. However, if my mom were sick, I wouldn't go. I'd ask the university to postpone the scholarship for one year. If I were in this situation, I would follow my heart.",
          bank: ["If I were in this situation,", "I would…", "I wouldn't…", "because", "I could…", "However, if…", "In the end,"],
          checklist: [
            "I used at least **four** second conditional sentences.",
            "I used the **past simple** after *if* (never *would*).",
            "I used *would*, *could* or *might* in the result.",
            "I gave reasons with *because*."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice the short form *I'd* and the weak *would*.",
          items: [
            "What would you do if you were invisible?",
            "If I were you, I'd tell her the truth.",
            "Would you stop studying?",
            "No, I wouldn't.",
            "If I had more time, I would learn Japanese.",
            "If I were rich, I could buy a ranch."
          ]
        },
        {
          type: "speak", title: "If I were the president…",
          prompt: "Record yourself for about one minute. Imagine you were the president of Mexico or the rector of BUAP. What would you change? Give three ideas and explain the results.",
          language: ["If I were the president / rector,…", "I would…", "If I changed…, people would…", "We could…", "I wouldn't…", "because…"],
          seconds: 90,
          checklist: ["give three ideas?", "use the second conditional correctly?", "explain the results?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form the second conditional correctly.", review: "Explanation: second conditional form" },
    { can: "I can use the past simple after *if* (never *would*).", review: "Explanation: watch out!; Writing activity 2" },
    { can: "I can give advice with *If I were you, I'd…*", review: "Explanation: if I were…" },
    { can: "I can use *would, could* and *might* in results.", review: "Explanation: would, could, might" },
    { can: "I can understand people discussing dilemmas.", review: "Listening: tough choices" },
    { can: "I can explain what I would do in a difficult situation, in writing or speaking.", review: "Writing activity 3 and Speaking activities 1 and 2" }
  ]
};
