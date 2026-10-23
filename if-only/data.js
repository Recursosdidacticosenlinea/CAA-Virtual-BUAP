window.UNIT = {
  slug: "if-only",
  title: "If Only…",
  level: "B2",
  minutes: 60,
  speakers: { "Elisa": "f", "Arturo": "m", "Host": "f", "Gonzalo": "m", "Marisol": "f", A: "f", B: "m" },
  focus: ["third conditional: If I had…, I would have…", "I wish / If only + past perfect (regrets)", "I wish / If only + past simple (present situations)", "should have / shouldn't have", "talking about regrets and turning points"],

  presentation: {
    scene: "⏳😩🚌📄",
    situation: "Elisa missed the deadline for a scholarship to study in Canada. She's talking to her friend Arturo in the BUAP library.",
    warmup: {
      prompt: "Which of these do people often regret? Choose the ones you think are most common.",
      options: ["not studying enough", "not traveling more", "not learning a language", "choosing the wrong career", "saying something hurtful", "spending too much money", "not spending time with family", "giving up a hobby", "not taking a risk", "losing touch with friends"],
      response: "Interesting choices! In this unit you'll learn to talk about regrets and imagine different pasts."
    },
    dialogueTitle: "The missed deadline",
    dialogue: [
      { who: "Arturo", line: "Elisa, what's wrong? You look terrible." },
      { who: "Elisa", line: "I missed the scholarship deadline. It was yesterday at midnight. *If I had checked* the date, *I would have sent* it on time." },
      { who: "Arturo", line: "Oh, no. Didn't you have a reminder?" },
      { who: "Elisa", line: "No. *I wish I had written* it in my calendar. *I should have done* it weeks ago, but I kept putting it off." },
      { who: "Arturo", line: "Look, *if you hadn't been* so busy with your job, *you wouldn't have forgotten*." },
      { who: "Elisa", line: "Maybe. *If only I didn't work* so many hours! *I wish I had* more time." },
      { who: "Arturo", line: "Is there another call later this year?" },
      { who: "Elisa", line: "Actually… yes, in March. This time I'll set five alarms!" }
    ]
  },

  objectives: [
    "I can imagine different results for past events with the third conditional.",
    "I can express regrets with *I wish / If only* + past perfect.",
    "I can criticize past actions with *should have / shouldn't have*.",
    "I can talk about turning points and decisions in my life."
  ],

  explanation: {
    vocabTitle: "Decisions and regrets",
    vocab: [
      { word: "a regret", icon: "😔" }, { word: "a turning point", icon: "🔀" }, { word: "a missed opportunity", icon: "🚪" },
      { word: "a deadline", icon: "⏰" }, { word: "put off", icon: "📆" }, { word: "make up your mind", icon: "🤔" },
      { word: "take a risk", icon: "🎲" }, { word: "give up", icon: "🏳️" }, { word: "look back", icon: "🔙" },
      { word: "in hindsight", icon: "👓" }, { word: "fortunately", icon: "🍀" }, { word: "unfortunately", icon: "🌧️" },
      { word: "blame", icon: "👉" }, { word: "apologize", icon: "🙏" }, { word: "move on", icon: "➡️" }
    ],
    grammar: [
      {
        title: "Third conditional",
        head: ["If clause (past perfect)", "Result (would have + participle)"],
        rows: [
          ["*If I had checked* the date,", "*I would have sent* the form on time."],
          ["*If she hadn't missed* the bus,", "*she wouldn't have been* late."],
          ["*If we had known*,", "*we could have helped* you."],
          ["*If he had studied*,", "*he might have passed*."]
        ],
        note: "Use it to imagine a different past that is now impossible to change. Contractions: *If I'd known, I'd have come.* (*'d* = *had* in the if clause, *would* in the result)."
      },
      {
        title: "Wishes and regrets",
        head: ["Structure", "Refers to…", "Example"],
        rows: [
          ["*I wish / If only* + past perfect", "a regret about the past", "*I wish I had studied* medicine. *If only I hadn't said* that!"],
          ["*I wish / If only* + past simple", "a present situation you want to change", "*I wish I had* more time. *If only I lived* closer."],
          ["*I wish* + *could*", "an ability you want now", "*I wish I could* speak French."],
          ["*should have / shouldn't have* + participle", "criticism of a past action", "*You should have told* me. *I shouldn't have eaten* so much."]
        ],
        note: "*If only* is stronger and more emotional than *I wish*."
      },
      {
        title: "Mixed time check",
        head: ["Situation now / then", "Wish"],
        rows: [
          ["I didn't go to the concert. (past)", "*I wish I had gone* to the concert."],
          ["I don't have a car. (present)", "*I wish I had* a car."],
          ["I can't swim. (present ability)", "*I wish I could* swim."]
        ]
      }
    ],
    watchOut: [
      ["If I would have known, I would have come.", "If I had known, I would have come."],
      ["I wish I studied more for yesterday's exam.", "I wish I had studied more for yesterday's exam."],
      ["You should told me.", "You should have told me."],
      ["If I had more money last year, I would have traveled.", "If I had had more money last year, I would have traveled."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the verbs in parentheses.",
      items: [
        "If I [[had left|'d left]] earlier, I wouldn't have missed the flight. (leave)",
        "If she had asked me, I [[would have helped|'d have helped]] her. (help)",
        "I wish I [[hadn't eaten|had not eaten]] that third taco. (not eat)",
        "You [[should have called|should've called]] me! I was worried. (call)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio program, *Looking Back*. Two guests talk about decisions that changed their lives.",
      title: "Looking back",
      script: [
        { who: "Host", line: "Welcome to Looking Back. Gonzalo, you're a successful chef now. Was that always the plan?" },
        { who: "Gonzalo", line: "Not at all! I studied law for three years because my parents wanted me to. Then my grandmother got sick, and I cooked for her every day. If she hadn't gotten sick, I would never have discovered how much I loved cooking." },
        { who: "Host", line: "Do you regret the years in law school?" },
        { who: "Gonzalo", line: "A little. I wish I had been braver and told my parents earlier. But I learned a lot about contracts, which helped when I opened my restaurant." },
        { who: "Host", line: "Marisol, you're a marine biologist. What was your turning point?" },
        { who: "Marisol", line: "When I was nineteen, I was offered a volunteer job in Baja California, but I almost said no because I was scared of living alone. My best friend convinced me to go. If she hadn't pushed me, I wouldn't have found my career." },
        { who: "Host", line: "Any regrets?" },
        { who: "Marisol", line: "Just one. I should have learned to dive much earlier! I wish I could go back and tell my younger self not to be afraid." }
      ],
      activities: [
        {
          type: "match", title: "Causes and results",
          prompt: "Match the condition with the result, as the speakers describe them.",
          pairs: [
            ["If Gonzalo's grandmother hadn't gotten sick,", "he wouldn't have discovered his love of cooking."],
            ["If Marisol's friend hadn't pushed her,", "she wouldn't have found her career."],
            ["Gonzalo wishes he had been braver", "and told his parents earlier."],
            ["Marisol thinks she should have", "learned to dive earlier."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Gonzalo studied law because he loved it.", a: false },
            { s: "His law studies were useful later.", a: true },
            { s: "Marisol accepted the job immediately.", a: false },
            { s: "Marisol was afraid of living alone.", a: true },
            { s: "Marisol has no regrets at all.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about what psychologists have learned from studying regret.",
      title: "The things we didn't do",
      text: [
        { body: "Ask people about their biggest regrets, and most of them will not talk about mistakes they made. Instead, they will talk about things they didn't do. Psychologists have found that in the short term, we regret our actions more: *I shouldn't have said that*. But in the long term, we regret our inactions: *I wish I had traveled. If only I had told her how I felt.*" },
        { body: "Why? One reason is that when we do something and it goes wrong, we usually try to fix it or learn from it. We tell ourselves, \"If I hadn't made that mistake, I wouldn't have learned so much.\" But when we never try, our imagination has no limits. The life we didn't live always looks perfect." },
        { body: "Researchers also distinguish between different types of regret. \"Boldness regrets\" are about chances we didn't take: *I should have asked for the job*. \"Connection regrets\" are about relationships: *I wish I hadn't lost touch with my best friend*. Interestingly, connection regrets are the most common around the world." },
        { body: "The good news? Regret can be useful. People who think carefully about \"what would have happened if…\" often make better decisions in the future. The key is not to get stuck in the past, but to use it as a guide." }
      ],
      activities: [
        {
          type: "sort", title: "Types of regret",
          prompt: "Classify each regret as described in the article.",
          bins: ["Regret about an action", "Boldness regret (a chance not taken)", "Connection regret (a relationship)"],
          items: [
            { text: "I shouldn't have said that.", bin: 0 }, { text: "I wish I hadn't spent all my savings.", bin: 0 },
            { text: "I should have asked for the job.", bin: 1 }, { text: "If only I had applied to that university.", bin: 1 },
            { text: "I wish I hadn't lost touch with my best friend.", bin: 2 }, { text: "If only I had visited my grandpa more.", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. Are the sentences true or false according to the article?",
          items: [
            { s: "In the long term, people regret inactions more than actions.", a: true },
            { s: "We usually can't learn anything from our mistakes.", a: false },
            { s: "The life we didn't live often seems perfect.", a: true },
            { s: "Boldness regrets are the most common around the world.", a: false },
            { s: "Thinking about regrets can help us decide better in the future.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice transforming sentences, then write about a turning point.",
      activities: [
        {
          type: "rewrite", title: "Make a third conditional",
          prompt: "Rewrite each pair as one third conditional sentence.",
          items: [
            { q: "I didn't know about the party. I didn't go.", a: ["If I had known about the party, I would have gone.", "If I'd known about the party, I would have gone.", "If I had known about the party, I'd have gone."] },
            { q: "She didn't set an alarm. She overslept.", a: ["If she had set an alarm, she wouldn't have overslept.", "If she'd set an alarm, she wouldn't have overslept.", "If she had set an alarm, she would not have overslept."] },
            { q: "We took a taxi. We arrived on time.", a: ["If we hadn't taken a taxi, we wouldn't have arrived on time.", "If we had not taken a taxi, we would not have arrived on time."] },
            { q: "He didn't wear a helmet. He hurt his head.", a: ["If he had worn a helmet, he wouldn't have hurt his head.", "If he'd worn a helmet, he wouldn't have hurt his head."] }
          ]
        },
        {
          type: "rewrite", title: "Wishes",
          prompt: "Write a wish with *I wish* for each situation.",
          items: [
            { q: "I didn't take photos at the concert.", a: ["I wish I had taken photos at the concert.", "I wish I'd taken photos at the concert."] },
            { q: "I don't speak Japanese.", a: ["I wish I spoke Japanese.", "I wish I could speak Japanese."] },
            { q: "I told my friend the secret.", a: ["I wish I hadn't told my friend the secret.", "I wish I had not told my friend the secret."] },
            { q: "My apartment is very small.", a: ["I wish my apartment was bigger.", "I wish my apartment were bigger.", "I wish my apartment wasn't so small.", "I wish my apartment weren't so small."] }
          ]
        },
        {
          type: "write", title: "A turning point",
          prompt: "Write about a turning point in your life (or someone you know): a decision, an accident, a chance meeting. Explain what happened, how life would have been different, and any regrets you have.",
          minWords: 120, maxWords: 180,
          model: "The biggest turning point in my life happened when I was sixteen. I failed the entrance exam for a high school I really wanted, so I had to go to a smaller school near my house. At the time, I was devastated. However, if I hadn't failed that exam, I would never have met my English teacher, Ms. Robles, who inspired me to study languages. I also wouldn't have met my best friend, Mau. Looking back, I wish I hadn't been so hard on myself. I should have understood that one exam doesn't define your future. If only I could tell my sixteen-year-old self that everything would be fine!",
          bank: ["The biggest turning point…", "At the time,…", "If I hadn't…, I would never have…", "Looking back,…", "I wish I had / hadn't…", "I should have…", "If only…"],
          checklist: [
            "I used at least **two** third conditional sentences.",
            "I used *I wish / If only* + past perfect.",
            "I used *should have* + participle.",
            "I organized my text: what happened → consequences → reflection."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice *would have* sounds like /wʊdəv/ and *I'd* is short.",
          items: [
            "I wish I had taken more photos.",
            "I wish I hadn't told my friend the secret.",
            "If I had known, I would have come.",
            "You should have called me.",
            "If only I had more time.",
            "I wish my apartment was bigger."
          ]
        },
        {
          type: "speak", title: "Advice to my younger self",
          prompt: "Record a 90-second message to yourself five years ago. Talk about two decisions you're happy about and one you regret, and explain what would have happened if you had acted differently.",
          language: ["Dear younger me,…", "I'm glad you…, because if you hadn't…", "I wish you had…", "You should have…", "Don't worry about…"],
          seconds: 120,
          checklist: ["talk about three decisions?", "use the third conditional?", "use *wish* and *should have*?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form the third conditional correctly.", review: "Explanation: third conditional; Writing activity 1" },
    { can: "I can express past regrets with *I wish / If only* + past perfect.", review: "Explanation: wishes and regrets" },
    { can: "I can express present wishes with *I wish* + past simple or *could*.", review: "Explanation: mixed time check; Writing activity 2" },
    { can: "I can use *should have / shouldn't have* to criticize past actions.", review: "Explanation: wishes and regrets" },
    { can: "I can understand people talking about life decisions and regrets.", review: "Listening and Reading" },
    { can: "I can talk or write about a turning point in my life.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
