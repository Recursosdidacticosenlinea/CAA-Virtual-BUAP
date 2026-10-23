window.UNIT = {
  slug: "where-do-you-want-to-meet",
  title: "Where Do You Want to Meet?",
  level: "B1",
  minutes: 55,
  focus: ["going to: plans and intentions", "will: quick decisions and offers", "will: predictions", "Shall we…? Let's…"],

  presentation: {
    scene: "📅☕🎬📍",
    situation: "It's Friday afternoon. Emilio and Renata want to see a movie together on Saturday. They need to decide **where and when to meet**.",
    warmup: {
      prompt: "Where do you usually meet your friends? Choose all the places.",
      options: ["at school", "at a café", "at the mall", "at the park", "at the cinema", "at the metro station", "at someone's house", "at a food stand", "online"],
      response: "Perfect! Now let's make plans to meet."
    },
    dialogueTitle: "Making plans",
    dialogue: [
      { who: "Emilio", line: "Hey Renata, *are you going to see* the new superhero movie this weekend?" },
      { who: "Renata", line: "Yes! I'm *going to go* on Saturday afternoon. Do you want to come?" },
      { who: "Emilio", line: "Sure! *Where do you want to meet*?" },
      { who: "Renata", line: "How about the café opposite the cinema, at four?" },
      { who: "Emilio", line: "Great. Oh no, I don't have money for the tickets. Hmm… OK, I*'ll ask* my mom." },
      { who: "Renata", line: "Don't worry, I*'ll buy* the tickets online now. You can pay me later." },
      { who: "Emilio", line: "Thanks! I think it*'ll be* a great movie. See you at four!" }
    ]
  },

  objectives: [
    "I can talk about my plans and intentions with *going to*.",
    "I can make quick decisions, offers and promises with *will*.",
    "I can make predictions with *will* and *going to*.",
    "I can arrange where and when to meet a friend."
  ],

  explanation: {
    vocabTitle: "Making plans",
    vocab: [
      { word: "meet up", icon: "🤝" }, { word: "hang out", icon: "🛋️" }, { word: "invite", icon: "💌" },
      { word: "arrange", icon: "📅" }, { word: "cancel", icon: "❌" }, { word: "be late", icon: "⏰" },
      { word: "on time", icon: "✅" }, { word: "pick up", icon: "🚗" }, { word: "a meeting point", icon: "📍" },
      { word: "the entrance", icon: "🚪" }, { word: "a text message", icon: "💬" }, { word: "tonight", icon: "🌙" },
      { word: "tomorrow", icon: "🌅" }, { word: "next week", icon: "🗓️" }, { word: "this weekend", icon: "🎉" }
    ],
    grammar: [
      {
        title: "Going to: plans you already have",
        intro: "Use **be + going to + verb** for plans and intentions you decided **before** speaking.",
        head: ["Form", "Example"],
        rows: [
          ["I *am going to* + verb", "I*'m going to* study tonight."],
          ["He / She *is going to* + verb", "She*'s going to* visit her aunt."],
          ["We / They *are going to* + verb", "We*'re going to* meet at the park."],
          ["Negative", "I*'m not going to* go to the party."],
          ["Question", "*Are you going to* come with us?"]
        ]
      },
      {
        title: "Will: decisions now, offers, promises",
        intro: "Use **will + verb** when you decide **at the moment of speaking**, to offer help, or to promise.",
        head: ["Use", "Example"],
        rows: [
          ["Quick decision", "It's raining. I*'ll take* an umbrella."],
          ["Offer", "Your bag looks heavy. I*'ll carry* it."],
          ["Promise", "I *won't be* late, I promise!"],
          ["Prediction (opinion)", "I think it *will be* a great movie."],
          ["Suggestions", "*Shall we* meet at six? / *Let's* meet at the entrance."]
        ],
        note: "*won't* = will not. *I'll* = I will."
      },
      {
        title: "Going to or will?",
        head: ["Situation", "Use", "Example"],
        rows: [
          ["You planned it before", "*going to*", "I'm going to see my cousins on Sunday."],
          ["You decide right now", "*will*", "OK, I'll call you later."],
          ["You see evidence now", "*going to*", "Look at those clouds! It's going to rain."],
          ["It's your opinion", "*will*", "I think you'll love this café."]
        ]
      }
    ],
    watchOut: [
      ["I will to go to the cinema.", "I'll go to the cinema. / I'm going to go to the cinema."],
      ["I going to study tonight.", "I'm going to study tonight."],
      ["The phone is ringing. I'm going to answer it. (decided now)", "The phone is ringing. I'll answer it."],
      ["Where we meet?", "Where shall we meet? / Where do you want to meet?"]
    ],
    check: {
      type: "gap", title: "Quick check", prompt: "Complete with *will ('ll)* or the correct form of *going to*.",
      items: [
        "I bought the tickets yesterday. We [['re going to|are going to]] see the movie on Saturday.",
        "I'm thirsty. – Wait, I[['ll]] get you some water.",
        "Look at the sky! It[['s going to|is going to]] rain."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to three phone calls. Friends are arranging to meet.",
      title: "Three phone calls",
      script: [
        { who: "Ximena", line: "Hi Paco! Are you going to come to the concert on Friday?" },
        { who: "Paco", line: "Yes, I'm going to go with my brother. Where do you want to meet?" },
        { who: "Ximena", line: "Let's meet at the main entrance at seven. I'll wait for you there." },
        { who: "Diego", line: "Hello, Sara. I'm going to play soccer at the park tomorrow. Do you want to come?" },
        { who: "Sara", line: "I'd love to, but I'm going to visit my grandma in the morning. What time are you going to play?" },
        { who: "Diego", line: "At twelve. Oh, and I don't have a ball." },
        { who: "Sara", line: "Don't worry, I'll bring mine." },
        { who: "Lucía", line: "Hi Tomás, are we still going to study together on Sunday?" },
        { who: "Tomás", line: "Yes, but the library isn't open on Sundays." },
        { who: "Lucía", line: "Oh, really? OK, then we'll study at my house. I'll send you my address." }
      ],
      activities: [
        {
          type: "match", title: "Who, where and when?",
          prompt: "Match the friends with their plans.",
          pairs: [
            ["Ximena and Paco", "the concert, main entrance at 7"],
            ["Diego and Sara", "soccer in the park at 12"],
            ["Lucía and Tomás", "study at Lucía's house on Sunday"],
            ["Sara, in the morning", "visit her grandma"]
          ]
        },
        {
          type: "sort", title: "Plan or quick decision?",
          prompt: "Is each sentence a plan made before, or a decision made at the moment?",
          bins: ["Plan made before (going to)", "Decision now (will)"],
          items: [
            { text: "I'm going to go with my brother.", bin: 0 }, { text: "I'm going to play soccer tomorrow.", bin: 0 }, { text: "I'm going to visit my grandma.", bin: 0 },
            { text: "I'll bring mine.", bin: 1 }, { text: "We'll study at my house.", bin: 1 }, { text: "I'll send you my address.", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the class group chat. They're organizing a goodbye party for their English teacher.",
      title: "Group chat: 4th semester English 🎉",
      text: [
        { author: "Valeria", body: "Hi everyone! Teacher Mónica is going to leave the school next month. Let's have a surprise party! 😮" },
        { author: "Hugo", body: "Great idea! I'm going to be free on Thursday after class. Shall we do it then?" },
        { author: "Andrea", body: "Thursday is perfect. Where are we going to have it? The classroom is too small." },
        { author: "Valeria", body: "The school garden! I'll ask the principal tomorrow." },
        { author: "Iván", body: "I'll bring a speaker for music. Who's going to buy the cake?" },
        { author: "Andrea", body: "Me! My aunt has a bakery. I'm going to order a chocolate cake. I think she'll love it." },
        { author: "Hugo", body: "Let's meet at the garden entrance at 1:30 to prepare everything. Don't tell her! 🤫" }
      ],
      activities: [
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Answer with a short sentence from the chat.",
          items: [
            { q: "When are they going to have the party?", a: ["On Thursday.", "On Thursday after class.", "They're going to have it on Thursday.", "Thursday"] },
            { q: "Where are they going to have it?", a: ["In the school garden.", "At the school garden.", "The school garden"] },
            { q: "Who is going to ask the principal?", a: ["Valeria.", "Valeria is."] },
            { q: "What is Iván going to bring?", a: ["A speaker.", "A speaker for music.", "He's going to bring a speaker."] },
            { q: "What time are they going to meet?", a: ["At 1:30.", "1:30", "At one thirty.", "At half past one."] }
          ]
        },
        {
          type: "tf", title: "True or false?",
          items: [
            { s: "Teacher Mónica is going to leave the school next week.", a: false },
            { s: "The party is a surprise.", a: true },
            { s: "They're going to have the party in the classroom.", a: false },
            { s: "Andrea is going to order a chocolate cake.", a: true },
            { s: "They're going to meet at the garden entrance.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Build plans and decisions, then write a message to arrange a meeting.",
      activities: [
        {
          type: "tiles", title: "Build the sentences",
          items: [
            { a: "Where do you want to meet?" },
            { a: "I'm going to visit my cousins on Sunday." },
            { a: "Don't worry, I'll pay for the tickets." },
            { a: "Shall we meet at the entrance?" },
            { a: "Are you going to come to the party?" },
            { a: "I won't be late, I promise." }
          ]
        },
        {
          type: "rewrite", title: "Will or going to?",
          prompt: "Complete each answer with *will* or *going to* and the verb in brackets. Write the full sentence.",
          items: [
            { q: "We have tickets for Saturday. We… (see) the play.", a: ["We're going to see the play.", "We are going to see the play."] },
            { q: "The phone is ringing! – OK, I… (answer) it.", a: ["I'll answer it.", "I will answer it.", "OK, I'll answer it."] },
            { q: "I'm cold. – I… (close) the window.", a: ["I'll close the window.", "I will close the window."] },
            { q: "She decided last week. She… (study) medicine.", a: ["She's going to study medicine.", "She is going to study medicine."] },
            { q: "I promise I… (not / tell) anyone.", a: ["I won't tell anyone.", "I will not tell anyone.", "I promise I won't tell anyone."] }
          ]
        },
        {
          type: "write", title: "A message to a friend",
          prompt: "Write a message to a friend to make plans for this weekend. Say what you are going to do, invite your friend, suggest where and when to meet, and offer to do something (buy tickets, bring food…).",
          minWords: 60, maxWords: 100,
          model: "Hi Sam! Are you free on Saturday? My cousin and I are going to go to the book fair in the Zócalo. Do you want to come with us? Let's meet at the metro station at eleven. After the fair we're going to have lunch at a small restaurant near there. I think you'll love it! Don't worry about the tickets, the fair is free. I'll bring some snacks. Text me!",
          bank: ["Are you free on…?", "I'm going to…", "Do you want to come?", "Let's meet at…", "Shall we…?", "I'll bring / buy…", "I think you'll…", "Text me!"],
          checklist: ["I used *going to* for my plans.", "I used *will* for an offer or a prediction.", "I said **where** and **when** to meet.", "I invited my friend with a question."]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. *Going to* often sounds like /gənə/.",
          items: [
            "Where do you want to meet?",
            "Shall we meet at the entrance?",
            "Are you going to come to the party?",
            "I won't be late, I promise.",
            "We're going to see the play.",
            "I'll close the window."
          ]
        },
        {
          type: "speak", title: "My plans and predictions",
          prompt: "Record a one-minute message about your plans for the next vacation or the end of the semester. Then make two predictions about your future.",
          language: ["Next vacation, I'm going to…", "I'm not going to…", "I think I'll…", "Maybe I'll…", "I'm sure it will be…"],
          seconds: 75,
          checklist: ["use *going to* for at least three plans?", "use *will* for two predictions?", "use one negative?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about my plans with *going to*.", review: "Explanation: going to" },
    { can: "I can make quick decisions and offers with *will*.", review: "Explanation: will; Listening activity 2" },
    { can: "I can choose between *will* and *going to*.", review: "Explanation: going to or will?; Writing activity 2" },
    { can: "I can make predictions about the future.", review: "Speaking activity 2" },
    { can: "I can suggest a time and place with *Let's…* and *Shall we…?*", review: "Speaking activity 1: listen and repeat" },
    { can: "I can write a message to arrange a meeting.", review: "Writing activity 3" }
  ]
};
