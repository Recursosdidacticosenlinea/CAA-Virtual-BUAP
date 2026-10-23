window.UNIT = {
  slug: "mind-your-register",
  title: "Mind Your Register",
  level: "C2",
  minutes: 60,
  speakers: { "Paula": "f", "Esteban": "m", "Dean": "f", "Student": "m", "Coach": "f", A: "f", B: "m" },
  focus: ["formal, neutral and informal register", "Latin-based vs. phrasal/Germanic vocabulary", "politeness strategies: indirectness, modals, distancing", "register shift in emails, speeches and conversation", "appropriacy: what to say to whom"],

  presentation: {
    scene: "🎩👕✉️📱",
    situation: "Paula has been invited to give a speech at a graduation ceremony. Her friend Esteban is reading her draft, which she wrote late at night.",
    warmup: {
      prompt: "In which situations do you change the way you speak or write the most? Choose all that apply.",
      options: ["talking to a professor", "messaging friends", "a job interview", "writing to a government office", "talking to grandparents", "posting on social media", "a wedding speech", "complaining to a company", "chatting with a colleague", "a doctor's appointment"],
      response: "Exactly: we all shift register constantly. In this unit you'll learn to control register precisely in English."
    },
    dialogueTitle: "The graduation speech",
    dialogue: [
      { who: "Esteban", line: "Paula, I love your energy, but you can't start a graduation speech with \"Hey guys, what's up?\"" },
      { who: "Paula", line: "Why not? It's friendly!" },
      { who: "Esteban", line: "The rector, the deans and three hundred families will be there. Try something like \"*Distinguished guests, faculty, families and fellow graduates*.\"" },
      { who: "Paula", line: "Fine. What about \"We went through a ton of stuff together\"?" },
      { who: "Esteban", line: "Too colloquial. \"*We have overcome* numerous challenges together\" would be more appropriate." },
      { who: "Paula", line: "But that sounds so stiff! I don't want to sound like a government report." },
      { who: "Esteban", line: "Fair enough. *Mix registers strategically*. Start formally, then tell a personal anecdote in a warmer tone, and finish formally again." },
      { who: "Paula", line: "So: formal frame, informal heart. I like that." }
    ]
  },

  objectives: [
    "I can identify formal, neutral and informal register in spoken and written texts.",
    "I can choose between Latin-based and phrasal/Germanic vocabulary depending on context.",
    "I can use politeness strategies: indirectness, modal verbs, passive and distancing.",
    "I can shift register deliberately for rhetorical effect."
  ],

  explanation: {
    vocabTitle: "Register pairs (informal → formal)",
    vocab: [
      { word: "get → obtain", icon: "📥" }, { word: "ask for → request", icon: "🙋" }, { word: "find out → ascertain", icon: "🔎" },
      { word: "go up → increase", icon: "📈" }, { word: "put up with → tolerate", icon: "😐" }, { word: "set up → establish", icon: "🏗️" },
      { word: "need → require", icon: "📋" }, { word: "help → assist", icon: "🤝" }, { word: "start → commence", icon: "🚦" },
      { word: "end → terminate", icon: "🏁" }, { word: "enough → sufficient", icon: "✅" }, { word: "about → approximately", icon: "≈" },
      { word: "but → however", icon: "↔️" }, { word: "so → therefore", icon: "➡️" }, { word: "a lot of → numerous", icon: "🔢" }
    ],
    grammar: [
      {
        title: "Features of each register",
        head: ["Feature", "Informal", "Formal"],
        rows: [
          ["vocabulary", "phrasal verbs, slang: *find out, loads of*", "Latin-based: *ascertain, numerous*"],
          ["grammar", "contractions, ellipsis: *Got it? Can't make it.*", "full forms, passive, nominalization: *It has been decided…*"],
          ["subject", "personal: *you, we*", "impersonal: *one, it, applicants*"],
          ["directness", "direct: *Send me the file.*", "indirect: *I would be grateful if you could send…*"]
        ]
      },
      {
        title: "Politeness strategies",
        head: ["Strategy", "Less polite", "More polite / formal"],
        rows: [
          ["past tense distancing", "I want to ask you something.", "I *wanted* to ask you something."],
          ["modal verbs", "Send it today.", "*Could* you possibly send it today?"],
          ["conditionals", "Tell me if you're coming.", "I *would appreciate it if* you *could* confirm."],
          ["passive / impersonal", "You made a mistake.", "*A mistake appears to have been made.*"],
          ["softeners", "That's wrong.", "I'm *not entirely sure* that's *quite* right."]
        ]
      },
      {
        title: "Register shift for effect",
        head: ["Technique", "Example"],
        rows: [
          ["formal frame, informal anecdote", "*Distinguished guests…* → *I'll never forget the day the printer died at 3 a.m.…*"],
          ["deliberate understatement in formal speech", "*It was, shall we say, a somewhat challenging semester.*"],
          ["informal word in a formal context for humor", "*The committee, after lengthy deliberation, concluded that the proposal was… a no-go.*"]
        ]
      }
    ],
    watchOut: [
      ["Dear Sir, I wanna know about the job.", "Dear Sir or Madam, I am writing to enquire about the position."],
      ["Hey professor, gimme an extension pls.", "Dear Professor Ruiz, I was wondering whether it might be possible to have a short extension."],
      ["Yo, can u make it 2nite?", "(Fine for a close friend, but never in a work email.)"],
      ["We are writing to inform you that your request has been approved, dude.", "We are writing to inform you that your request has been approved."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the formal equivalent of the word in parentheses.",
      items: [
        "Applicants [[require|need]] a valid passport. (need)",
        "Prices are expected to [[increase|rise]] next year. (go up)",
        "Please let us know if we can [[assist]] you further. (help)",
        "The meeting will [[commence|begin]] at 9:00. (start)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to three short extracts. The same student talks about a missed deadline to three different people.",
      title: "One problem, three registers",
      script: [
        { who: "Student", line: "Ugh, Coach, I totally blew it. I was supposed to hand in the report yesterday, but I got sick and just crashed. Do you reckon the dean will freak out?" },
        { who: "Coach", line: "Relax! She's fine if you explain properly. Just don't talk to her like that!" },
        { who: "Student", line: "Good morning, Dean Herrera. I'm sorry to bother you. I wanted to let you know that I wasn't able to submit my report yesterday because I was unwell. Would it be possible to send it on Friday?" },
        { who: "Dean", line: "Thank you for letting me know. Friday will be fine, provided you include a medical note." },
        { who: "Student", line: "And finally, the formal email: Dear Dean Herrera, I am writing to formally request an extension for the submission of my research report, which was due on 14 October. Owing to illness, I was unable to complete the final revisions. I would be most grateful if the deadline could be extended until 17 October. Please find attached a medical certificate. Yours sincerely, Mateo Ríos." }
      ],
      activities: [
        {
          type: "sort", title: "Which register?",
          prompt: "Classify each expression from the extracts.",
          bins: ["Informal", "Neutral / polite spoken", "Formal written"],
          items: [
            { text: "I totally blew it.", bin: 0 }, { text: "Do you reckon the dean will freak out?", bin: 0 }, { text: "I just crashed.", bin: 0 },
            { text: "I'm sorry to bother you.", bin: 1 }, { text: "Would it be possible to send it on Friday?", bin: 1 }, { text: "I wasn't able to submit…", bin: 1 },
            { text: "I am writing to formally request an extension…", bin: 2 }, { text: "Owing to illness,…", bin: 2 }, { text: "Please find attached…", bin: 2 }
          ]
        },
        {
          type: "match", title: "Same meaning, different register",
          prompt: "Match the informal expressions with their formal equivalents from the email.",
          pairs: [
            ["hand in", "submit"],
            ["because I got sick", "owing to illness"],
            ["Can I send it on Friday?", "I would be most grateful if the deadline could be extended."],
            ["Here's a doctor's note.", "Please find attached a medical certificate."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a linguistics magazine about register and power.",
      title: "Who gets to be informal?",
      text: [
        { body: "Register is often taught as a simple matter of choosing the right words for the right situation: formal with the boss, informal with friends. In reality, the choice is rarely neutral. Register is intimately connected to power, and the person with more power usually decides how formal an interaction will be." },
        { body: "Consider a typical office. A manager may write \"Can you send me that by 5?\" to an employee, but the employee would seldom reply \"Sure, whatever.\" The manager's informality signals friendliness, yet it is a friendliness the employee is not entirely free to return. Sociolinguists call this asymmetry: the more powerful participant can shift register; the less powerful participant must wait to be invited." },
        { body: "The same principle applies across cultures, though with considerable variation. Speakers of Spanish, for instance, navigate the choice between tú and usted, a distinction that English lost centuries ago. English speakers compensate through other means: titles (Dr., Professor), first names versus surnames, the presence or absence of hedging, and, crucially, vocabulary drawn from Latin or from everyday Germanic roots." },
        { body: "For advanced learners, the lesson is subtle but important. Mastery of English is not merely knowing formal and informal equivalents; it is knowing when one has been granted permission to move between them, and when a sudden shift might be perceived as disrespectful, or, conversely, as cold and distant." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "According to the article, are these statements true or false?",
          items: [
            { s: "Register choice is always neutral.", a: false },
            { s: "The more powerful person usually decides the level of formality.", a: true },
            { s: "An employee can always return a manager's informality freely.", a: false },
            { s: "English still has a grammatical distinction like tú/usted.", a: false },
            { s: "Becoming too informal too quickly can be seen as disrespectful.", a: true }
          ]
        },
        {
          type: "match", title: "Vocabulary in context",
          prompt: "Match each word from the article with its meaning.",
          pairs: [
            ["intimately connected", "very closely linked"],
            ["asymmetry", "a lack of equality between two sides"],
            ["navigate", "find a way through a complex situation"],
            ["compensate", "make up for something missing"],
            ["conversely", "in the opposite way"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice register transformation, then write the same message in two registers.",
      activities: [
        {
          type: "rewrite", title: "Make it formal",
          prompt: "Rewrite each informal sentence in a formal register. Use the words given.",
          items: [
            { q: "We need to find out what went wrong. (ascertain)", a: ["We need to ascertain what went wrong.", "It is necessary to ascertain what went wrong."] },
            { q: "Prices have gone up a lot. (increased considerably)", a: ["Prices have increased considerably."] },
            { q: "Can you send me the report? (I would be grateful if)", a: ["I would be grateful if you could send me the report."] },
            { q: "You didn't pay the bill. (passive: the bill / not / paid)", a: ["The bill has not been paid.", "The bill was not paid."] },
            { q: "We can't put up with this any longer. (tolerate)", a: ["We cannot tolerate this any longer.", "This can no longer be tolerated."] }
          ]
        },
        {
          type: "sort", title: "Formal or informal?",
          prompt: "Sort the phrases by register.",
          bins: ["Informal", "Formal"],
          items: [
            { text: "Thanks a million!", bin: 0 }, { text: "Drop me a line.", bin: 0 }, { text: "No worries.", bin: 0 }, { text: "Catch you later.", bin: 0 },
            { text: "I look forward to your reply.", bin: 1 }, { text: "Please do not hesitate to contact me.", bin: 1 }, { text: "I am writing with regard to…", bin: 1 }, { text: "I remain at your disposal.", bin: 1 }
          ]
        },
        {
          type: "write", title: "Two messages, two registers",
          prompt: "Situation: a concert you organized has been cancelled at the last minute because the venue flooded. Write TWO messages: (1) a formal email to ticket holders, and (2) an informal message to your friends' group chat. Each should be about 90–120 words.",
          minWords: 180, maxWords: 260,
          model: "(1) Dear ticket holder, We regret to inform you that tonight's concert at the Teatro de la Ciudad has been cancelled owing to severe flooding at the venue. We sincerely apologize for any inconvenience this may cause. All tickets will be refunded in full within five working days, and no action is required on your part. Alternatively, ticket holders may choose to transfer their booking to the rescheduled date, which will be announced shortly. Should you have any questions, please do not hesitate to contact us. Yours faithfully, The Organizing Committee. (2) Guys, total disaster 😩 The theater flooded this afternoon, so tonight's concert is off. I'm gutted, we've been working on this for months! Everyone gets their money back, no stress. We're trying to find a new date, probably next month. If anyone fancies drowning our sorrows in tacos later, I'm in. Let me know!",
          bank: ["We regret to inform you that…", "owing to…", "We sincerely apologize for…", "Should you have any questions,…", "Guys,…", "total disaster", "it's off", "I'm gutted", "no stress"],
          checklist: [
            "The formal message uses **Latin-based vocabulary**, full forms and passives.",
            "The informal message uses **contractions, phrasal verbs and colloquial expressions**.",
            "Both messages contain the same key information.",
            "There are no accidental register mixes."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Use a polite, formal tone.",
          items: [
            "We need to ascertain what went wrong.",
            "Prices have increased considerably.",
            "The bill has not been paid.",
            "We cannot tolerate this any longer.",
            "I would be grateful if you could help.",
            "Please do not hesitate to contact me."
          ]
        },
        {
          type: "speak", title: "A short speech",
          prompt: "Record a 2-minute speech for a formal occasion (a graduation, a wedding, an award, a retirement). Use a formal frame with one warmer, more informal anecdote in the middle.",
          language: ["Distinguished guests, ladies and gentlemen,…", "It is an honor to…", "I'll never forget the day…", "On a more serious note,…", "In closing, I would like to…", "Please join me in…"],
          seconds: 150,
          checklist: ["open and close formally?", "shift register for the anecdote?", "use precise, sophisticated vocabulary?", "speak for about two minutes?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can identify formal, neutral and informal register.", review: "Explanation: features of each register; Listening activity 1" },
    { can: "I can choose between phrasal verbs and Latin-based vocabulary.", review: "Explanation: vocabulary cards; Writing activity 1" },
    { can: "I can use politeness strategies (distancing, modals, passives, softeners).", review: "Explanation: politeness strategies" },
    { can: "I understand how register relates to power and culture.", review: "Reading: Who gets to be informal?" },
    { can: "I can write the same message in different registers.", review: "Writing activity 3" },
    { can: "I can shift register deliberately for effect in a speech.", review: "Speaking activity 2" }
  ]
};
