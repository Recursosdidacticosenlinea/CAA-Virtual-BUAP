window.UNIT = {
  slug: "break-the-ice",
  title: "Break the Ice",
  level: "C1",
  minutes: 60,
  speakers: { "Cristina": "f", "Tomás": "m", "Manager": "f", "Consultant": "m", "Host": "f", A: "f", B: "m" },
  focus: ["workplace idioms: on the same page, a ballpark figure…", "phrasal verbs: bring up, put off, carry out, come up with…", "separable and inseparable phrasal verbs", "three-part phrasal verbs: come up with, get round to…", "sounding natural and professional"],

  presentation: {
    scene: "🧊🤝💼☕",
    situation: "Cristina has just started as a project coordinator at a car parts company in Puebla. On her first day, her colleague Tomás explains how things work.",
    warmup: {
      prompt: "What makes a first day at a new job (or school) easier? Choose everything that helps.",
      options: ["a friendly colleague", "a clear schedule", "a welcome lunch", "a mentor", "knowing the dress code", "a tour of the building", "an introduction meeting", "having a laptop ready", "knowing the boss's expectations", "humor", "small talk", "a buddy system"],
      response: "Great ideas! In this unit you'll learn idioms and phrasal verbs that make your English sound natural at work."
    },
    dialogueTitle: "First day at work",
    dialogue: [
      { who: "Tomás", line: "Welcome aboard, Cristina! Don't worry, everyone's friendly. The Monday meeting usually *breaks the ice*." },
      { who: "Cristina", line: "Thanks! I'm still trying to *get the hang of* the software." },
      { who: "Tomás", line: "You'll *pick it up* quickly. Just a heads-up: the boss likes us to *be on the same page* before any client call." },
      { who: "Cristina", line: "Good to know. And if I have a problem, should I *bring it up* in the meeting?" },
      { who: "Tomás", line: "Yes, but keep it short. And never *put off* sending the weekly report. That's a big *no-no* here." },
      { who: "Cristina", line: "Got it. Who should I talk to about the new supplier project?" },
      { who: "Tomás", line: "Raúl is *in charge of* it. He'll *fill you in*. Between you and me, it's a bit behind schedule, so they need someone to *come up with* fresh ideas." },
      { who: "Cristina", line: "Sounds like I'll *hit the ground running*!" }
    ]
  },

  objectives: [
    "I can understand and use common workplace idioms.",
    "I can use phrasal verbs for meetings, projects and problems.",
    "I can place objects correctly with separable phrasal verbs.",
    "I can use three-part phrasal verbs and choose between formal and informal equivalents."
  ],

  explanation: {
    vocabTitle: "Workplace idioms",
    vocab: [
      { word: "break the ice", icon: "🧊" }, { word: "be on the same page", icon: "📄" }, { word: "get the ball rolling", icon: "⚽" },
      { word: "a ballpark figure", icon: "🏟️" }, { word: "think outside the box", icon: "📦" }, { word: "cut corners", icon: "✂️" },
      { word: "back to the drawing board", icon: "📝" }, { word: "the bottom line", icon: "📉" }, { word: "touch base", icon: "📞" },
      { word: "a long shot", icon: "🎯" }, { word: "up in the air", icon: "🎈" }, { word: "call it a day", icon: "🌙" },
      { word: "hit the ground running", icon: "🏃" }, { word: "learn the ropes", icon: "🪢" }, { word: "go the extra mile", icon: "🛣️" }
    ],
    grammar: [
      {
        title: "Phrasal verbs at work",
        head: ["Phrasal verb", "Meaning", "Example"],
        rows: [
          ["*bring up*", "mention a topic", "She *brought up* the budget issue."],
          ["*put off*", "postpone", "Let's *put off* the meeting until Friday."],
          ["*carry out*", "do (a task, study)", "We *carried out* a survey."],
          ["*fill in (someone)*", "give missing information", "Can you *fill me in* on the project?"],
          ["*turn down*", "reject", "They *turned down* our offer."],
          ["*follow up (on)*", "check / continue later", "I'll *follow up on* this next week."],
          ["*set up*", "organize, establish", "Can you *set up* a call with the client?"]
        ]
      },
      {
        title: "Separable or inseparable?",
        head: ["Type", "Rule", "Example"],
        rows: [
          ["separable", "noun: before or after the particle; pronoun: always in the middle", "*put off the meeting* / *put the meeting off* / *put it off* (✗ *put off it*)"],
          ["inseparable", "object always after the particle", "*look after the clients* / *look after them*"],
          ["three-part", "never separated", "*come up with an idea*, *get round to it*, *look forward to it*, *run out of time*"]
        ]
      },
      {
        title: "Formal vs. informal",
        head: ["Informal (phrasal verb)", "Formal equivalent"],
        rows: [
          ["*put off*", "*postpone*"],
          ["*find out*", "*discover / ascertain*"],
          ["*carry out*", "*conduct / perform*"],
          ["*look into*", "*investigate*"],
          ["*come up with*", "*devise / propose*"]
        ],
        note: "Phrasal verbs are common in emails and meetings. In very formal reports, the one-word equivalent is often preferred."
      }
    ],
    watchOut: [
      ["Let's put off it until Monday.", "Let's put it off until Monday."],
      ["We need to come with a solution.", "We need to come up with a solution."],
      ["Can you fill in me?", "Can you fill me in?"],
      ["We ran out time.", "We ran out of time."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "Let's get the ball [[rolling]] and start the meeting.",
        "We need to come up [[with]] a new marketing strategy.",
        "The client turned [[down]] our proposal.",
        "Can you give me a [[ballpark]] figure for the cost?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a team meeting about a project that is in trouble.",
      title: "The project meeting",
      script: [
        { who: "Manager", line: "OK, let's get the ball rolling. As you know, the supplier project is behind schedule. Cristina, can you fill us in?" },
        { who: "Cristina", line: "Sure. We carried out tests on the new parts last week, and about ten percent failed. So, I'm afraid it's back to the drawing board for the design." },
        { who: "Consultant", line: "Can we give the client a ballpark figure for the delay?" },
        { who: "Cristina", line: "Roughly six weeks. Everything else is still up in the air until the engineers look into the problem." },
        { who: "Manager", line: "Six weeks… The bottom line is that we can't afford to lose this client. Is there any way we can speed things up without cutting corners?" },
        { who: "Consultant", line: "It's a long shot, but we could set up a second production line in the Querétaro plant." },
        { who: "Manager", line: "Interesting. Let's not turn that idea down too fast. Could you look into the costs and touch base with me on Thursday?" },
        { who: "Consultant", line: "Absolutely. I'll follow up with the plant manager today." },
        { who: "Manager", line: "Great. I think we're all on the same page. Let's call it a day." }
      ],
      activities: [
        {
          type: "match", title: "Idioms in context",
          prompt: "Match each idiom from the meeting with its meaning.",
          pairs: [
            ["back to the drawing board", "start the design again"],
            ["a ballpark figure", "an approximate number"],
            ["up in the air", "not decided yet"],
            ["cutting corners", "doing things badly to save time or money"],
            ["a long shot", "an idea with a small chance of success"],
            ["touch base", "contact briefly"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "About ten percent of the parts failed the tests.", a: true },
            { s: "The delay will be about six months.", a: false },
            { s: "The manager wants to finish faster but without reducing quality.", a: true },
            { s: "The manager immediately rejects the consultant's idea.", a: false },
            { s: "They'll talk again on Thursday.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a careers website about using idioms at work.",
      title: "Speak like a native… or not?",
      text: [
        { body: "If you work in an international company, you've probably heard colleagues say things like \"Let's touch base\", \"We're on the same page\" or \"That's the bottom line\". For many non-native speakers, these expressions can be confusing at first. But should you learn to use them?" },
        { body: "The short answer is yes, but carefully. Idioms and phrasal verbs make your English sound more natural and can help you build rapport with colleagues. Using an expression like \"break the ice\" correctly in a meeting shows that you have a high level of English and understand workplace culture." },
        { body: "However, there are some risks. First, idioms that are common in the US may not be understood in the UK, India or Australia, and vice versa. Second, overusing them can make you sound unnatural or even arrogant. A presentation full of phrases like \"let's think outside the box and leverage synergies\" may make your audience roll their eyes." },
        { body: "Communication experts suggest a simple rule: first, make sure you understand the idioms you hear; then, pick up a few that your colleagues use frequently and try them out in informal situations. In written reports and with clients whose English is limited, it's often better to go for clear, direct language. After all, the bottom line is to be understood." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read the article. Are these sentences true or false according to the writer?",
          items: [
            { s: "The writer thinks you should never use idioms at work.", a: false },
            { s: "Idioms can help you build rapport with colleagues.", a: true },
            { s: "All English-speaking countries use the same idioms.", a: false },
            { s: "Using too many idioms can sound unnatural.", a: true },
            { s: "In reports for clients with limited English, clear language is better.", a: true }
          ]
        },
        {
          type: "gap", title: "Find the phrasal verbs",
          prompt: "Complete with the phrasal verbs from the article.",
          items: [
            "Learn a few expressions and try them [[out]] in informal situations.",
            "[[Pick]] up a few idioms that your colleagues use frequently.",
            "With some clients, it's better to go [[for]] clear, direct language.",
            "Too many idioms may make your audience roll their [[eyes]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice phrasal verbs and register, then write a professional email.",
      activities: [
        {
          type: "rewrite", title: "Pronoun position",
          prompt: "Replace the noun with a pronoun (*it / them / him / her*) and put it in the right place.",
          items: [
            { q: "Can you set up the meeting?", a: ["Can you set it up?"] },
            { q: "They turned down the offer.", a: ["They turned it down."] },
            { q: "I'll look after the clients.", a: ["I'll look after them.", "I will look after them."] },
            { q: "We need to put off the launch.", a: ["We need to put it off."] },
            { q: "She brought up the problem in the meeting.", a: ["She brought it up in the meeting."] }
          ]
        },
        {
          type: "match", title: "Formal and informal",
          prompt: "Match each phrasal verb with its formal equivalent.",
          pairs: [
            ["put off", "postpone"], ["look into", "investigate"], ["carry out", "conduct"],
            ["find out", "discover"], ["come up with", "devise"], ["turn down", "reject"]
          ]
        },
        {
          type: "write", title: "A team update email",
          prompt: "Write an email to your team giving an update on a project (real or invented): what has been done, what problems have come up, what the next steps are. Use at least six phrasal verbs and three idioms naturally.",
          minWords: 150, maxWords: 220,
          model: "Hi team, I just wanted to touch base and fill you in on where we are with the website redesign. Last week we carried out user tests with fifteen customers, and the feedback was mostly positive. However, a few problems came up with the mobile version, so I'm afraid it's back to the drawing board for the menu design. Ana is looking into the technical side and should come up with a solution by Wednesday. The launch date is still up in the air, but a ballpark figure would be two weeks' delay. I'd rather put it off than cut corners. Could everyone send me their updates by Thursday so we're all on the same page? Thanks for going the extra mile on this one. Best, Cristina",
          bank: ["I just wanted to touch base…", "fill you in on…", "carried out", "came up", "back to the drawing board", "look into", "come up with", "up in the air", "put it off", "on the same page"],
          checklist: [
            "I used at least **six** phrasal verbs.",
            "I used at least **three** idioms naturally.",
            "I placed pronouns correctly with separable verbs.",
            "My email has a clear structure: update → problems → next steps."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. In phrasal verbs, stress the particle: *put it OFF*.",
          items: [
            "Can you set it up?",
            "They turned it down.",
            "We need to put it off.",
            "She brought it up in the meeting.",
            "Let's get the ball rolling.",
            "Can you fill me in?"
          ]
        },
        {
          type: "speak", title: "Advice for newcomers",
          prompt: "Record a 90-second message for new employees or new students: give them tips on how to settle in, using idioms and phrasal verbs naturally.",
          language: ["Welcome aboard!", "Don't worry, you'll learn the ropes quickly.", "Make sure you…", "Don't put off…", "If something comes up,…", "Try to hit the ground running, but…"],
          seconds: 120,
          checklist: ["use at least five idioms and phrasal verbs?", "give useful advice?", "sound friendly and natural?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can understand common workplace idioms.", review: "Explanation: vocabulary cards; Listening activity 1" },
    { can: "I can use phrasal verbs for meetings and projects.", review: "Explanation: phrasal verbs at work" },
    { can: "I place pronouns correctly with separable phrasal verbs.", review: "Explanation: separable or inseparable?; Writing activity 1" },
    { can: "I can use three-part phrasal verbs.", review: "Explanation: separable or inseparable?" },
    { can: "I can choose between phrasal verbs and formal equivalents.", review: "Explanation: formal vs. informal; Writing activity 2" },
    { can: "I can take part in a meeting and write a team update naturally.", review: "Writing activity 3 and Speaking activities" }
  ]
};
