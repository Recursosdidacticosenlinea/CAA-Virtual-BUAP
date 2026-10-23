window.UNIT = {
  slug: "she-said-that",
  title: "She Said That…",
  level: "B2",
  minutes: 60,
  speakers: { "Nayeli": "f", "Iñaki": "m", "Manager": "f", "Reporter": "m", "Mayor": "f", "Witness": "m", A: "f", B: "m" },
  focus: ["reported statements: She said (that)…", "tense backshift: is → was, will → would", "reported questions: He asked if / where…", "reporting verbs: suggest, promise, refuse, warn…", "pronoun and time changes"],

  presentation: {
    scene: "🗣️📰💬👂",
    situation: "Nayeli had a job interview yesterday at a tech company in Puebla. Her roommate Iñaki wants to know everything.",
    warmup: {
      prompt: "When do you usually report what other people said? Choose everything that is true.",
      options: ["telling gossip", "after a job interview", "explaining news", "after a doctor's appointment", "telling a teacher's instructions", "after a phone call", "after an argument", "in a work meeting", "retelling a movie", "explaining a message from my parents"],
      response: "Great! In this unit you'll learn to report what people said, asked and suggested."
    },
    dialogueTitle: "How was the interview?",
    dialogue: [
      { who: "Iñaki", line: "So? What did they say?" },
      { who: "Nayeli", line: "Well, the manager *said that* my profile *was* exactly what they *were looking* for." },
      { who: "Iñaki", line: "Amazing! What else?" },
      { who: "Nayeli", line: "She *asked me why I wanted* to leave my current job, and *if I could* work on weekends sometimes." },
      { who: "Iñaki", line: "And what did you answer?" },
      { who: "Nayeli", line: "I *told her that* I *needed* new challenges. Then she *explained that* the salary *would be* higher after six months." },
      { who: "Iñaki", line: "When will they call you?" },
      { who: "Nayeli", line: "She *promised to call* me *the following week*. And she *suggested that I prepare* a short presentation, just in case!" }
    ]
  },

  objectives: [
    "I can report what someone said using tense backshift.",
    "I can report questions with *if / whether* and question words.",
    "I can use reporting verbs like *suggest, promise, warn, refuse, admit*.",
    "I can change pronouns, time and place expressions when reporting."
  ],

  explanation: {
    vocabTitle: "Reporting verbs",
    vocab: [
      { word: "admit", icon: "😳" }, { word: "deny", icon: "🙅" }, { word: "promise", icon: "🤞" },
      { word: "refuse", icon: "✋" }, { word: "suggest", icon: "💡" }, { word: "warn", icon: "⚠️" },
      { word: "remind", icon: "🔔" }, { word: "complain", icon: "😤" }, { word: "insist", icon: "☝️" },
      { word: "explain", icon: "🧑‍🏫" }, { word: "claim", icon: "📢" }, { word: "agree", icon: "🤝" },
      { word: "offer", icon: "🎁" }, { word: "advise", icon: "🧭" }, { word: "apologize", icon: "🙏" }
    ],
    grammar: [
      {
        title: "Reported statements: tense backshift",
        head: ["Direct speech", "Reported speech"],
        rows: [
          ["\"I *am* tired.\"", "She said (that) she *was* tired."],
          ["\"We *are working*.\"", "They said they *were working*."],
          ["\"I *finished* it.\" / \"I *have finished* it.\"", "He said he *had finished* it."],
          ["\"I *will* call you.\"", "She said she *would* call me."],
          ["\"I *can* help.\"", "He said he *could* help."]
        ],
        note: "*say* + (that); *tell* + person + (that): *She told me that…* (not *She said me*). If the information is still true, backshift is optional: *He said he lives in Puebla.*"
      },
      {
        title: "Reported questions",
        head: ["Direct question", "Reported question"],
        rows: [
          ["\"*Do you* speak English?\"", "She asked *if / whether I spoke* English."],
          ["\"*Where do you* live?\"", "He asked me *where I lived*."],
          ["\"*Why did you* leave?\"", "She asked *why I had left*."]
        ],
        note: "Reported questions use normal word order (subject + verb) and no question mark: *She asked where I lived* (not *where did I live?*)."
      },
      {
        title: "Reporting verbs: patterns",
        head: ["Pattern", "Verbs", "Example"],
        rows: [
          ["verb + *to* + infinitive", "promise, refuse, offer, agree", "She *promised to call* me."],
          ["verb + person + *to* + infinitive", "tell, ask, warn, remind, advise", "He *warned me not to touch* it."],
          ["verb + *-ing*", "admit, deny, suggest", "He *admitted taking* the money."],
          ["verb + *that* + clause", "explain, claim, insist, complain", "She *explained that* it was late."],
          ["*suggest* + that + subject + verb", "suggest", "She *suggested that I prepare* a presentation."]
        ]
      },
      {
        title: "Time and place changes",
        head: ["Direct", "Reported"],
        rows: [
          ["now / today", "then / that day"],
          ["tomorrow / next week", "the next day / the following week"],
          ["yesterday / last month", "the day before / the previous month"],
          ["here / this", "there / that"]
        ]
      }
    ],
    watchOut: [
      ["She said me that she was busy.", "She told me that she was busy. / She said that she was busy."],
      ["He asked me where did I live.", "He asked me where I lived."],
      ["She suggested me to rest.", "She suggested that I rest. / She suggested resting."],
      ["They asked if I can come.", "They asked if I could come."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the reported speech.",
      items: [
        "\"I'm hungry.\" → Pablo said that he [[was]] hungry.",
        "\"We will win.\" → They said they [[would]] win.",
        "\"Are you ready?\" → She asked me [[if|whether]] I was ready.",
        "\"Don't be late.\" → The teacher told us [[not to]] be late."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a local news report about a problem in a Puebla neighborhood.",
      title: "News report: the water problem",
      script: [
        { who: "Reporter", line: "Good evening. I'm in the San Manuel neighborhood, where residents have had no water for five days. I spoke to the mayor this afternoon." },
        { who: "Mayor", line: "We are working day and night on the problem. A main pipe broke on Monday, and the repairs will be finished by Friday." },
        { who: "Reporter", line: "Some residents say the city knew about the problem months ago. Is that true?" },
        { who: "Mayor", line: "I can't comment on that now. But I promise that every family will receive free water from trucks until the repairs are done." },
        { who: "Reporter", line: "I also spoke to a resident who saw the pipe break." },
        { who: "Witness", line: "I heard a huge noise at six in the morning. Water was everywhere! We called the city, but nobody came until the next day. I think they should pay compensation to the families." },
        { who: "Reporter", line: "The mayor refused to say how much the repairs will cost. We'll continue following this story." }
      ],
      activities: [
        {
          type: "sort", title: "Who said what?",
          prompt: "Put each reported sentence under the person who said it.",
          bins: ["The reporter", "The mayor", "The witness"],
          items: [
            { text: "He explained that residents had had no water for five days.", bin: 0 },
            { text: "He asked if the city had known about the problem.", bin: 0 },
            { text: "She said they were working day and night.", bin: 1 },
            { text: "She promised that families would receive free water.", bin: 1 },
            { text: "She refused to comment.", bin: 1 },
            { text: "He said he had heard a huge noise.", bin: 2 },
            { text: "He complained that nobody had come until the next day.", bin: 2 },
            { text: "He suggested paying compensation.", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Complete the report",
          prompt: "Listen again and complete the reported sentences with one or two words.",
          items: [
            "The mayor said that a main pipe [[had broken]] on Monday.",
            "She said the repairs [[would be]] finished by Friday.",
            "The reporter asked if the city [[had known]] about the problem.",
            "The mayor said she [[couldn't|could not]] comment on that.",
            "The witness said nobody had come until the [[next|following]] day."
          ]
        }
      ]
    },

    reading: {
      intro: "Read a blog post about misunderstandings in reported messages.",
      title: "Broken telephone at work",
      text: [
        { body: "Last month, our manager sent a short message to the team: \"The client meeting is on Thursday. Please bring your reports and don't be late.\" Simple, right? By Thursday morning, the message had traveled through four people and changed completely." },
        { body: "Laura told Marcos that the manager wanted everyone to bring reports to a meeting on Thursday. Marcos told Ana that the manager had asked them to bring reports, and suggested arriving early. Ana told Pepe that the meeting had been moved to an earlier time. Pepe, who was working from home, told his colleagues that the meeting had been cancelled and that they should send their reports by email." },
        { body: "The result? Half the team arrived at eight, the other half didn't come at all, and the client was waiting in an empty room at ten. When the manager asked Pepe why he had said the meeting was cancelled, Pepe insisted that Ana had told him so. Ana denied saying it. Marcos admitted that he might have added the part about arriving early." },
        { body: "The lesson: when you report a message, report it accurately. Better still, forward the original!" }
      ],
      activities: [
        {
          type: "tiles", title: "Who reported what?",
          prompt: "Make sentences from the blog post.",
          items: [
            { a: "Marcos suggested arriving early." },
            { a: "Ana said the meeting had been moved." },
            { a: "Pepe said the meeting had been cancelled." },
            { a: "Ana denied saying it." },
            { a: "Marcos admitted adding a detail." }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. Are the sentences true or false?",
          items: [
            { s: "The manager's original message mentioned arriving early.", a: false },
            { s: "Pepe was working from home.", a: true },
            { s: "Everybody arrived at eight.", a: false },
            { s: "Ana admitted saying the meeting was cancelled.", a: false },
            { s: "The writer recommends forwarding the original message.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice transforming direct speech, then write a report.",
      activities: [
        {
          type: "rewrite", title: "Report the sentences",
          prompt: "Rewrite in reported speech. Start as shown and use backshift.",
          items: [
            { q: "\"I'm moving to Monterrey.\" → Diana said…", a: ["Diana said that she was moving to Monterrey.", "Diana said she was moving to Monterrey."] },
            { q: "\"We've finished the project.\" → They told me…", a: ["They told me that they had finished the project.", "They told me they had finished the project."] },
            { q: "\"Where is the station?\" → A tourist asked me…", a: ["A tourist asked me where the station was."] },
            { q: "\"Can you help me?\" → My neighbor asked…", a: ["My neighbor asked if I could help him.", "My neighbor asked if I could help her.", "My neighbor asked whether I could help him.", "My neighbor asked whether I could help her.", "My neighbor asked me if I could help him.", "My neighbor asked me if I could help her."] },
            { q: "\"I will send it tomorrow.\" → He said…", a: ["He said that he would send it the next day.", "He said he would send it the next day.", "He said he would send it the following day.", "He said that he would send it the following day."] }
          ]
        },
        {
          type: "rewrite", title: "Use a reporting verb",
          prompt: "Report each sentence with the verb in parentheses.",
          items: [
            { q: "\"I'll pay for dinner.\" (offer)", a: ["He offered to pay for dinner.", "She offered to pay for dinner."] },
            { q: "\"I won't apologize!\" (refuse)", a: ["He refused to apologize.", "She refused to apologize."] },
            { q: "\"Don't swim here. It's dangerous.\" (warn)", a: ["He warned me not to swim there.", "She warned me not to swim there.", "He warned us not to swim there.", "She warned us not to swim there."] },
            { q: "\"Yes, I broke the vase.\" (admit)", a: ["He admitted breaking the vase.", "She admitted breaking the vase.", "He admitted that he had broken the vase.", "She admitted that she had broken the vase.", "He admitted having broken the vase.", "She admitted having broken the vase."] }
          ]
        },
        {
          type: "write", title: "Report a conversation",
          prompt: "Think of an important or funny conversation you had recently (with a teacher, a doctor, a friend, your parents). Write a report of it for a friend who wasn't there. Use at least five different reporting verbs.",
          minWords: 120, maxWords: 180,
          model: "Yesterday I went to the doctor because I had a terrible cough. First, she asked me how long I had been sick, and I explained that it had started a week before. She asked whether I smoked, and I admitted that I sometimes did at parties. She warned me that smoking was making the cough worse and advised me to stop completely. Then she told me that I needed to rest for three days. I asked if I could go to my cousin's wedding on Saturday, and she suggested that I wait until I felt better. Finally, I promised to take the medicine every day. I really hope I can go to the wedding!",
          bank: ["She asked me how / whether…", "I explained that…", "I admitted…", "She warned me…", "She advised me to…", "She suggested that…", "I promised to…"],
          checklist: [
            "I used **five** different reporting verbs.",
            "I changed tenses (backshift) correctly.",
            "I reported at least two questions with normal word order.",
            "I changed time expressions (*the next day, the day before*)."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. In reported speech, *that* is weak: /ðət/.",
          items: [
            "She said that she was tired.",
            "A tourist asked me where the station was.",
            "My neighbor asked if I could help him.",
            "He offered to pay for dinner.",
            "She promised to call me.",
            "They told me that they had finished."
          ]
        },
        {
          type: "speak", title: "News of the day",
          prompt: "Record yourself for about 90 seconds as a news reporter. Report a real or invented story, including what two different people said and asked.",
          language: ["Good evening. Today in…", "According to…,", "The mayor said that…", "A witness claimed that…", "When asked if…, she refused to…"],
          seconds: 120,
          checklist: ["report what two people said?", "report a question?", "use reporting verbs like *claim, deny, refuse*?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can report statements using tense backshift.", review: "Explanation: reported statements; Writing activity 1" },
    { can: "I can use *say* and *tell* correctly.", review: "Explanation: reported statements; watch out!" },
    { can: "I can report yes/no and Wh- questions with normal word order.", review: "Explanation: reported questions" },
    { can: "I can use reporting verbs with the right pattern.", review: "Explanation: reporting verbs; Writing activity 2" },
    { can: "I can change time and place expressions when reporting.", review: "Explanation: time and place changes" },
    { can: "I can report a conversation in writing or speaking.", review: "Writing activity 3 and Speaking activities" }
  ]
};
