window.UNIT = {
  slug: "reading-between-the-lines",
  title: "Reading Between the Lines",
  level: "C2",
  minutes: 60,
  speakers: { "Sofía": "f", "Owen": "m", "Host": "f", "Comedian": "m", "Manager": "f", "Employee": "m", A: "f", B: "m" },
  focus: ["implied meaning (implicature)", "irony and sarcasm", "understatement: not bad, a bit of a problem", "polite indirectness: I'm not sure that's the best idea", "humor and cultural expectations"],

  presentation: {
    scene: "😏🫖🌧️🤐",
    situation: "Sofía, from Puebla, is doing a master's in Manchester. Her British flatmate Owen often says things she doesn't quite understand.",
    warmup: {
      prompt: "Which of these phrases do you think are NOT meant literally? Choose all of them.",
      options: ["Oh, great.", "Nice weather, isn't it? (in a storm)", "It's not the end of the world.", "I'll bear it in mind.", "That's an interesting idea.", "Not bad at all.", "With all due respect…", "I hear what you're saying.", "Quite good.", "We should have lunch sometime."],
      response: "Good instincts! Many of these often mean something different from their literal words. That's what this unit is about."
    },
    dialogueTitle: "Lost in implicature",
    dialogue: [
      { who: "Owen", line: "Lovely day for it, isn't it?" },
      { who: "Sofía", line: "Owen, it's been raining for six hours." },
      { who: "Owen", line: "Exactly. *That's the joke*." },
      { who: "Sofía", line: "Ah. *Irony*. OK. By the way, I showed my essay to my tutor. He said it was \"*quite interesting*\"." },
      { who: "Owen", line: "Hmm. Did he say anything else?" },
      { who: "Sofía", line: "He said I might want to \"*have another look at* the structure\"." },
      { who: "Owen", line: "Right… I'm afraid that *means* you need to rewrite it." },
      { who: "Sofía", line: "What? In Mexico, \"interesting\" means interesting!" },
      { who: "Owen", line: "Here, \"*quite interesting*\" can mean \"*not very good*\". And \"*have another look*\" means \"*this is wrong*\". Welcome to British *understatement*." }
    ]
  },

  objectives: [
    "I can recognize implied meaning beyond the literal words.",
    "I can identify and use irony and sarcasm appropriately.",
    "I can understand and use understatement and polite indirectness.",
    "I can interpret tone and attitude in conversations, emails and feedback."
  ],

  explanation: {
    vocabTitle: "Tone and attitude",
    vocab: [
      { word: "irony", icon: "🙃" }, { word: "sarcasm", icon: "😏" }, { word: "understatement", icon: "🤏" },
      { word: "overstatement / hyperbole", icon: "📢" }, { word: "implication", icon: "💭" }, { word: "subtext", icon: "📄" },
      { word: "tongue-in-cheek", icon: "😜" }, { word: "deadpan", icon: "😐" }, { word: "passive-aggressive", icon: "😤" },
      { word: "tactful", icon: "🕊️" }, { word: "blunt", icon: "🔨" }, { word: "euphemism", icon: "🎀" },
      { word: "hint", icon: "🔍" }, { word: "take something at face value", icon: "🪞" }, { word: "read between the lines", icon: "📖" }
    ],
    grammar: [
      {
        title: "Understatement",
        head: ["What they say", "What they probably mean"],
        rows: [
          ["*It's not bad.* / *Not bad at all.*", "It's good (sometimes very good)."],
          ["*We have a bit of a problem.*", "We have a serious problem."],
          ["*I was slightly disappointed.*", "I was very disappointed."],
          ["*That's not ideal.*", "That's bad."],
          ["*It could be better.*", "It's poor."]
        ],
        note: "Understatement is very common in British English, but also in professional contexts everywhere."
      },
      {
        title: "Polite indirectness (especially in feedback)",
        head: ["What they say", "What they probably mean"],
        rows: [
          ["*That's an interesting idea.*", "I don't agree / I'm not convinced."],
          ["*I'll bear it in mind.*", "I probably won't do anything about it."],
          ["*You might want to reconsider…*", "You should change this."],
          ["*With all due respect…*", "I strongly disagree."],
          ["*I'm sure it's my fault, but…*", "It's your fault."]
        ]
      },
      {
        title: "Irony and sarcasm",
        head: ["Context", "Utterance", "Real meaning"],
        rows: [
          ["Your bus is cancelled.", "*Oh, perfect.*", "This is terrible."],
          ["A friend arrives an hour late.", "*Thanks for being so punctual.*", "You're very late."],
          ["A heavy storm.", "*Great weather for a picnic.*", "Terrible weather."]
        ],
        note: "Irony relies on context and intonation (often flat, or exaggerated). Sarcasm is irony used to criticize, and can sound rude. Use it carefully with people you don't know well."
      }
    ],
    watchOut: [
      ["Taking \"quite good\" as high praise in British English.", "\"Quite good\" often means \"acceptable, but not great\" in British English."],
      ["Answering \"We should have lunch sometime\" with \"When? Tuesday?\"", "It's often a friendly closing phrase, not a real invitation (unless they follow up)."],
      ["Using sarcasm with a new boss.", "Save sarcasm for people who know you well."],
      ["Saying \"Your idea is bad\" in a meeting.", "\"I'm not sure that would work, because…\""]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "What does the speaker really mean? Complete with one word.",
      items: [
        "\"We have a bit of a problem\" (the server has crashed) = we have a [[serious|big|major]] problem.",
        "\"Oh, wonderful\" (you spill coffee on your laptop) is an example of [[irony|sarcasm]].",
        "\"I'll bear it in mind\" often means \"I probably [[won't]] do it.\"",
        "\"Not bad at all!\" usually means it's quite [[good]]."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an end-of-year performance review between a manager and an employee. What is really being said?",
      title: "The performance review",
      script: [
        { who: "Manager", line: "Thanks for coming in, Daniel. Overall, this year has been… interesting." },
        { who: "Employee", line: "Interesting good, or interesting bad?" },
        { who: "Manager", line: "Well, your creativity is certainly not in question. The client presentations were, shall we say, memorable." },
        { who: "Employee", line: "Thank you!" },
        { who: "Manager", line: "However, there were one or two minor issues with deadlines. The March report, for instance, arrived three weeks late, and the client was slightly less than delighted." },
        { who: "Employee", line: "Ah. Yes. That was a bit of a mess." },
        { who: "Manager", line: "Going forward, you might want to think about using a project management tool. And perhaps it would be wise to check with me before promising clients things we can't deliver." },
        { who: "Employee", line: "Like the free trip to Cancún." },
        { who: "Manager", line: "Like the free trip to Cancún. I'm sure you'll take all this on board." }
      ],
      activities: [
        {
          type: "match", title: "What does she really mean?",
          prompt: "Match each phrase from the review with its real meaning.",
          pairs: [
            ["This year has been… interesting.", "This year has had serious problems."],
            ["The presentations were, shall we say, memorable.", "Some presentations were inappropriate or strange."],
            ["one or two minor issues with deadlines", "serious, repeated delays"],
            ["slightly less than delighted", "very unhappy"],
            ["You might want to think about using a tool.", "You must start organizing your work better."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Interpret the conversation. Are the statements true or false?",
          items: [
            { s: "The manager is completely satisfied with Daniel's work.", a: false },
            { s: "The March report was three weeks late.", a: true },
            { s: "The client was happy with the report.", a: false },
            { s: "Daniel promised a client something the company couldn't deliver.", a: true },
            { s: "The manager uses direct, blunt criticism.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a humorous column by a Mexican writer living in London.",
      title: "A Mexican's guide to British English",
      text: [
        { body: "When I arrived in London, I thought my English was excellent. I had passed every exam with flying colors. Within a week, I realized I spoke a different language altogether: Literal English. The British, it turns out, speak Implied English." },
        { body: "My first lesson came from my landlady. When I asked if I could paint my room bright orange, she smiled and said, \"What a brave choice.\" I bought the paint. Two days later, I learned that \"brave\" in this context means \"insane\". The walls are now magnolia." },
        { body: "At work, my manager described my first report as \"a very good start\". I celebrated with tacos. My British colleague later explained, gently, that \"a very good start\" meant \"please start again\". When I asked why nobody simply said so, she looked genuinely puzzled. \"We just did,\" she said." },
        { body: "The weather, of course, is a national sport. If someone says \"Bit nippy today\", it is snowing horizontally. If they say \"Glorious day\" in a deadpan voice, you should probably bring an umbrella. And if they say \"Not bad, actually\" about anything, food, a film, a person, it is the highest compliment the island can offer." },
        { body: "After three years, I'm almost fluent. Last week, my bus broke down in the rain and I heard myself say, \"Well, this is marvelous.\" A woman next to me nodded approvingly. I have never felt so British." }
      ],
      activities: [
        {
          type: "match", title: "Decode the phrases",
          prompt: "Match each phrase from the column with its real meaning.",
          pairs: [
            ["What a brave choice.", "That's a crazy idea."],
            ["a very good start", "please start again"],
            ["Bit nippy today.", "It's extremely cold."],
            ["Not bad, actually.", "It's excellent."],
            ["Well, this is marvelous.", "This is terrible."]
          ]
        },
        {
          type: "tf", title: "Understanding the humor",
          prompt: "Are these statements true or false?",
          items: [
            { s: "The writer painted her walls orange.", a: false },
            { s: "Her manager loved her first report.", a: false },
            { s: "Her colleague thought the manager's message was clear.", a: true },
            { s: "According to the writer, 'Not bad, actually' is a very strong compliment.", a: true },
            { s: "At the end, the writer uses irony like a British person.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice decoding and producing indirect language, then write diplomatic feedback.",
      activities: [
        {
          type: "rewrite", title: "Make it tactful",
          prompt: "Rewrite each blunt sentence in a more indirect, polite way. Use the words in parentheses.",
          items: [
            { q: "Your idea is bad. (not sure / would work)", a: ["I'm not sure that would work.", "I'm not sure your idea would work.", "I'm not sure the idea would work.", "I am not sure that would work."] },
            { q: "This report is late. (seems / a little behind schedule)", a: ["The report seems to be a little behind schedule.", "This report seems to be a little behind schedule.", "It seems the report is a little behind schedule."] },
            { q: "Change the introduction. (might want to / have another look at)", a: ["You might want to have another look at the introduction."] },
            { q: "You're wrong. (I see it slightly differently)", a: ["I see it slightly differently.", "I'm afraid I see it slightly differently.", "Actually, I see it slightly differently."] }
          ]
        },
        {
          type: "sort", title: "What's the real message?",
          prompt: "Sort each phrase by its most likely real meaning.",
          bins: ["Positive", "Negative / critical"],
          items: [
            { text: "Not bad at all!", bin: 0 }, { text: "I couldn't have done it better myself.", bin: 0 }, { text: "That went rather well.", bin: 0 },
            { text: "That's a brave decision.", bin: 1 }, { text: "I'll bear it in mind.", bin: 1 }, { text: "With all due respect…", bin: 1 }, { text: "It's not quite what we had in mind.", bin: 1 }
          ]
        },
        {
          type: "write", title: "Diplomatic feedback",
          prompt: "You are a team leader. A colleague's project proposal has good ideas but serious problems (budget, deadlines, clarity). Write an email giving honest feedback in a diplomatic, indirect style. Then add one sentence explaining what each indirect phrase really means (in brackets) to show you understand the subtext.",
          minWords: 160, maxWords: 230,
          model: "Dear Iván, Thank you for sending your proposal. There are some genuinely interesting ideas here, particularly the community workshops, which I think could work really well. That said, there are a couple of areas you might want to have another look at. The budget seems a little ambitious [= it is far too high], and I wonder whether the timeline might be slightly optimistic [= it's unrealistic]. It might also be worth tightening up the structure, as some sections are not entirely clear [= the document is confusing]. I'm sure these are easy to address, and I'd be very happy to go through them with you on Thursday. Overall, it's a promising start [= it needs a lot of work, but I believe in it]. Best wishes, Carla",
          bank: ["There are some genuinely interesting ideas…", "That said,…", "You might want to have another look at…", "seems a little ambitious", "slightly optimistic", "not entirely clear", "a promising start"],
          checklist: [
            "I used at least **five** indirect or understated phrases.",
            "I balanced positive comments and criticism.",
            "I explained the subtext of my phrases in brackets.",
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
          prompt: "Listen and repeat. Notice how intonation shows what the speaker really means.",
          items: [
            "I'm not sure that would work.",
            "I see it slightly differently.",
            "We have a bit of a problem.",
            "That's not ideal.",
            "Lovely day for it, isn't it?",
            "I'll bear it in mind."
          ]
        },
        {
          type: "speak", title: "Cultures of directness",
          prompt: "Record a 2-minute reflection: How direct or indirect is communication in Mexico (or your culture) compared to English-speaking cultures you know? Give examples of misunderstandings, and advice for avoiding them.",
          language: ["In my experience,…", "Mexicans tend to…, whereas…", "For example,…", "This can lead to misunderstandings because…", "My advice would be to…", "Reading between the lines,…"],
          seconds: 150,
          checklist: ["compare at least two cultures?", "give concrete examples?", "use precise vocabulary (*understatement, tactful, blunt*)?", "speak for about two minutes?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can recognize implied meaning beyond literal words.", review: "Explanation; Listening activity 1" },
    { can: "I can identify irony and sarcasm from context and intonation.", review: "Explanation: irony and sarcasm" },
    { can: "I can interpret understatement and polite indirectness.", review: "Explanation: understatement; Reading activity 1" },
    { can: "I can give criticism tactfully and indirectly.", review: "Writing activities 1 and 3" },
    { can: "I understand humor based on cultural expectations.", review: "Reading: A Mexican's guide to British English" },
    { can: "I can reflect on directness across cultures.", review: "Speaking activity 2" }
  ]
};
