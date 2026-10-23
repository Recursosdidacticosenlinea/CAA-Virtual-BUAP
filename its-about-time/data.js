window.UNIT = {
  slug: "its-about-time",
  title: "It's About Time",
  level: "C1",
  minutes: 60,
  speakers: { "Lorena": "f", "Patricio": "m", "Mom": "f", "Columnist": "f", "Reader": "m", A: "f", B: "m" },
  focus: ["It's (high / about) time + past simple", "I'd rather / I'd sooner + past simple", "as if / as though", "wish + would (annoying habits)", "suppose / supposing / what if + past"],

  presentation: {
    scene: "🧺🍽️🙄🏠",
    situation: "Lorena and Patricio have been sharing a flat for six months. Tonight, Lorena has finally decided to talk about the dirty dishes.",
    warmup: {
      prompt: "Which roommate (or family) habits annoy you most? Choose the worst ones.",
      options: ["leaving dirty dishes", "playing loud music late", "never buying toilet paper", "eating other people's food", "long showers", "inviting friends without asking", "leaving lights on", "not paying bills on time", "borrowing things without asking", "talking on the phone loudly"],
      response: "Very relatable! In this unit you'll learn to complain, suggest and imagine using the 'unreal past'."
    },
    dialogueTitle: "The dishes",
    dialogue: [
      { who: "Lorena", line: "Patricio, can we talk? *It's about time we sorted out* the cleaning." },
      { who: "Patricio", line: "Why? Everything's fine." },
      { who: "Lorena", line: "Fine? *I wish you would* wash your plates after dinner. The sink looks *as if* a restaurant *had exploded* in it." },
      { who: "Patricio", line: "OK, I've been busy with my thesis. *I'd rather you told* me when something bothers you, instead of waiting for months." },
      { who: "Lorena", line: "That's fair. But you act *as though* the dishes *were* invisible!" },
      { who: "Patricio", line: "Ha ha. Alright. *Suppose we made* a cleaning schedule? I'd take Mondays, Wednesdays and Fridays." },
      { who: "Lorena", line: "*It's high time we did* that. And *I'd rather we didn't* use paper plates every day. It's terrible for the planet." },
      { who: "Patricio", line: "Deal. *What if we bought* a dishwasher?" }
    ]
  },

  objectives: [
    "I can use *It's (high / about) time* + past simple to say something should happen now.",
    "I can express preferences about other people's actions with *I'd rather + past*.",
    "I can use *as if / as though* to describe appearances and impressions.",
    "I can complain about habits with *wish + would* and make suggestions with *suppose / what if*."
  ],

  explanation: {
    vocabTitle: "Living with other people",
    vocab: [
      { word: "flatmate / roommate", icon: "🏠" }, { word: "chores", icon: "🧹" }, { word: "take turns", icon: "🔄" },
      { word: "split the bills", icon: "💸" }, { word: "get on someone's nerves", icon: "😤" }, { word: "pet peeve", icon: "🙄" },
      { word: "considerate", icon: "😇" }, { word: "inconsiderate", icon: "😒" }, { word: "messy", icon: "🌀" },
      { word: "tidy", icon: "✨" }, { word: "compromise", icon: "🤝" }, { word: "set ground rules", icon: "📜" },
      { word: "bring something up", icon: "💬" }, { word: "let it slide", icon: "🛝" }, { word: "clear the air", icon: "🌬️" }
    ],
    grammar: [
      {
        title: "It's time / I'd rather",
        head: ["Structure", "Meaning", "Example"],
        rows: [
          ["*It's time* + to-infinitive", "the right moment (neutral)", "*It's time to go*."],
          ["*It's (high / about) time* + subject + past simple", "it should have happened already (critical)", "*It's high time you got* a job!"],
          ["*I'd rather* + infinitive", "my preference for myself", "*I'd rather stay* home."],
          ["*I'd rather* + subject + past simple", "my preference for someone else", "*I'd rather you didn't smoke* here."]
        ],
        note: "The past tense here refers to the present or future: it's 'unreal', not past time."
      },
      {
        title: "As if / as though",
        head: ["Structure", "Meaning", "Example"],
        rows: [
          ["*as if* + present", "it seems likely", "You look *as if* you *are* tired."],
          ["*as if* + past simple", "it's not true / unlikely now", "He talks *as if* he *knew* everything. (He doesn't.)"],
          ["*as if* + past perfect", "unreal about the past", "She looked *as if* she *had seen* a ghost."]
        ]
      },
      {
        title: "Wish + would / Suppose",
        head: ["Structure", "Use", "Example"],
        rows: [
          ["*I wish* + person + *would*", "complaining about someone's habit or behavior", "*I wish you would* stop interrupting me."],
          ["*Suppose / Supposing* + past simple", "imagining a possibility, making a suggestion", "*Suppose we moved* to the coast?"],
          ["*What if* + past simple", "an imaginary situation / suggestion", "*What if* you *lost* your job?"]
        ],
        note: "*I wish I would…* is incorrect. Use *I wish I could…* or *I wish I had…* for yourself."
      }
    ],
    watchOut: [
      ["It's time we go home.", "It's time we went home. / It's time to go home."],
      ["I'd rather you don't call me so late.", "I'd rather you didn't call me so late."],
      ["I wish I would have more free time.", "I wish I had more free time."],
      ["He behaves as he was the boss.", "He behaves as if he were / was the boss."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the verb in parentheses.",
      items: [
        "It's high time the government [[did]] something about pollution. (do)",
        "I'd rather you [[didn't|did not]] tell anyone about this. (not tell)",
        "He spends money as if he [[were|was]] a millionaire. (be)",
        "I wish my neighbors [[would]] stop playing music at 3 a.m. (will)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a family conversation between a mother and her adult son, who still lives at home.",
      title: "A family talk",
      script: [
        { who: "Mom", line: "Patricio, you're twenty-seven. Don't you think it's about time you moved out?" },
        { who: "Patricio", line: "Mom! I thought you liked having me here." },
        { who: "Mom", line: "I do, but sometimes you act as if this were a hotel. You come home at three a.m., you never cook… I wish you would at least tell me when you won't be home for dinner." },
        { who: "Patricio", line: "OK, that's fair. But rent in Puebla is so expensive. Suppose I moved out and couldn't pay?" },
        { who: "Mom", line: "Then you'd learn to manage your money! Look, I'd rather you stayed until you finish your thesis, but after that, it's time you started your own life." },
        { who: "Patricio", line: "What if I paid you rent instead? Would that help?" },
        { who: "Mom", line: "It's not about the money, mijo. You look as though I were throwing you out. I just want you to be independent." },
        { who: "Patricio", line: "I understand. I'll start looking for a flat after the summer. I promise." }
      ],
      activities: [
        {
          type: "match", title: "Who means what?",
          prompt: "Match each sentence from the conversation with its meaning.",
          pairs: [
            ["It's about time you moved out.", "You should have moved out already."],
            ["You act as if this were a hotel.", "You treat our home like a hotel, but it isn't one."],
            ["I wish you would tell me.", "It annoys me that you don't tell me."],
            ["I'd rather you stayed until you finish your thesis.", "My preference is for you to stay a little longer."],
            ["What if I paid you rent?", "Patricio suggests an imaginary solution."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Patricio is twenty-seven.", a: true },
            { s: "His mother wants him to leave immediately.", a: false },
            { s: "Patricio often cooks for the family.", a: false },
            { s: "His mother's main concern is money.", a: false },
            { s: "Patricio promises to look for a flat after the summer.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a letter to an advice column and the columnist's reply.",
      title: "Dear Mónica: my flatmate treats me like a servant",
      text: [
        { author: "The letter", body: "Dear Mónica, I share a flat with an old school friend. When we moved in, we agreed to split everything fifty-fifty. Now, after a year, I do almost all the cleaning and shopping. She leaves her clothes everywhere and behaves as though I were her mother. Last week she invited six friends for a party without asking me. I wish she would show some respect, but I hate conflict. I'd rather we stayed friends, so I haven't said anything. What should I do? – Tired in Tlaxcala" },
        { author: "Mónica replies", body: "Dear Tired, I'm sorry you're going through this. You write as if the problem were entirely her fault, and in many ways it is, but you have also allowed it to continue by staying silent. It's high time you had an honest conversation with her. Choose a calm moment, not right after an argument." },
        { author: "", body: "Suppose you started by saying what you appreciate about her? Then explain, without blaming, how the situation makes you feel. Instead of \"You never clean\", try \"I'd rather we shared the chores, because I'm feeling exhausted.\" Finally, propose specific ground rules: a cleaning schedule, a shopping list, and an agreement that guests need to be mentioned in advance." },
        { author: "", body: "What if she reacts badly? Then at least you'll know where you stand. A friendship that can't survive one honest conversation may not be as strong as you think. Good luck! – Mónica" }
      ],
      activities: [
        {
          type: "sort", title: "Who says it?",
          prompt: "Put each idea under the person who expresses it.",
          bins: ["Tired in Tlaxcala", "Mónica"],
          items: [
            { text: "Her flatmate behaves as though she were her mother.", bin: 0 }, { text: "She wishes her flatmate would show respect.", bin: 0 },
            { text: "She'd rather they stayed friends.", bin: 0 },
            { text: "It's high time she had an honest conversation.", bin: 1 }, { text: "She should propose ground rules.", bin: 1 },
            { text: "A friendship should survive an honest conversation.", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Unreal past",
          prompt: "Rewrite using the words in parentheses.",
          items: [
            { q: "You should talk to her now; it's late already. (It's high time)", a: ["It's high time you talked to her.", "It is high time you talked to her."] },
            { q: "I prefer that we share the chores. (I'd rather)", a: ["I'd rather we shared the chores.", "I would rather we shared the chores."] },
            { q: "She treats me like her servant, but I'm not. (as if)", a: ["She treats me as if I were her servant.", "She treats me as if I was her servant."] },
            { q: "It annoys me that she never asks before inviting people. (I wish… would)", a: ["I wish she would ask before inviting people.", "I wish she'd ask before inviting people."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structures, then write a diplomatic message.",
      activities: [
        {
          type: "gap", title: "Choose the right form",
          prompt: "Complete with the correct form of the verb in parentheses.",
          items: [
            "It's time [[to leave]]. The last bus goes at eleven. (leave)",
            "It's about time you [[started]] taking your studies seriously. (start)",
            "I'd rather [[stay]] at home tonight, if you don't mind. (stay)",
            "I'd rather you [[came]] tomorrow instead of today. (come)",
            "She looked as if she [[had been|'d been]] crying all night. (be)"
          ]
        },
        {
          type: "tiles", title: "Build the sentences",
          items: [
            { a: "It's high time we cleaned this kitchen." },
            { a: "I'd rather you didn't use my laptop." },
            { a: "He talks as if he knew everything." },
            { a: "I wish you would listen to me." },
            { a: "Suppose we went to the beach instead?" }
          ]
        },
        {
          type: "write", title: "A message to clear the air",
          prompt: "Write a message to a flatmate, family member or colleague about a situation that bothers you. Be honest but diplomatic: explain the problem, how it makes you feel, and propose solutions. Use at least five unreal-past structures.",
          minWords: 150, maxWords: 210,
          model: "Hi Andrés, I hope you're well. I wanted to write to you because I'd rather we talked about this calmly than let it become a bigger problem. Over the last few weeks, our team meetings have been running very late, and I sometimes feel as if my opinions weren't being heard. I know you have a lot of pressure from management, but I wish you would let everyone finish before moving to the next point. I also think it's high time we had a clear agenda for each meeting. Suppose we shared it the day before? That way, everyone could prepare. What if we also limited meetings to forty-five minutes? I'm sure we'd all be more productive. I really appreciate your leadership, and I'd rather say this openly than keep it to myself. Let me know what you think. Best, Fernanda",
          bank: ["I'd rather we talked about…", "I feel as if…", "I wish you would…", "It's high time we…", "Suppose we…?", "What if we…?", "I'd rather… than…"],
          checklist: [
            "I used at least **five** unreal-past structures.",
            "I used *I'd rather* + subject + past simple.",
            "I used *wish + would* for a habit, not for myself.",
            "My tone is honest but diplomatic."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice the rhythm of *I'd rather* and *high time*.",
          items: [
            "It's high time we cleaned this kitchen.",
            "I'd rather you didn't use my laptop.",
            "He talks as if he knew everything.",
            "I wish you would listen to me.",
            "Suppose we went to the beach instead?",
            "It's about time you moved out."
          ]
        },
        {
          type: "speak", title: "It's high time…",
          prompt: "Record a 90-second opinion piece about something in your city, school or country that should change. Use the unreal past to criticize the situation and propose ideas.",
          language: ["It's high time the government…", "People act as if…", "I'd rather we…", "Suppose the city…?", "What if everyone…?", "I wish people would…"],
          seconds: 120,
          checklist: ["use at least five unreal-past structures?", "explain the problem clearly?", "propose concrete ideas?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *It's (high / about) time* + past simple.", review: "Explanation: it's time / I'd rather" },
    { can: "I can use *I'd rather* + subject + past simple.", review: "Explanation: it's time / I'd rather; Writing activity 1" },
    { can: "I can use *as if / as though* with the correct tense.", review: "Explanation: as if / as though" },
    { can: "I can complain about habits with *I wish… would*.", review: "Explanation: wish + would" },
    { can: "I can make suggestions with *Suppose / What if* + past.", review: "Explanation: suppose; Speaking activity 1: listen and repeat" },
    { can: "I can write and speak diplomatically about problems.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
