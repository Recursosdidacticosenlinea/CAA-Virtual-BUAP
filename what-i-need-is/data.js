window.UNIT = {
  slug: "what-i-need-is",
  title: "What I Need Is…",
  level: "C1",
  minutes: 60,
  speakers: { "Daniela": "f", "Marco": "m", "Host": "f", "Dr. Arriaga": "m", "Caller": "f", A: "f", B: "m" },
  focus: ["it-clefts: It was Ana who…", "wh-clefts: What I need is…", "All I want is… / The thing that…", "The reason why… is that…", "correcting, contrasting and emphasizing"],

  presentation: {
    scene: "🗣️📌💡🎯",
    situation: "Daniela and Marco are co-founders of a small app start-up in Puebla. Their investor meeting went badly, and they're arguing about what went wrong.",
    warmup: {
      prompt: "In a team project, what causes the most problems? Choose the ones you've experienced.",
      options: ["poor communication", "unclear goals", "missed deadlines", "one person doing all the work", "too many meetings", "no leader", "different priorities", "lack of money", "technical problems", "personality clashes"],
      response: "Very common problems! In this unit you'll learn to emphasize, clarify and correct information precisely."
    },
    dialogueTitle: "After the meeting",
    dialogue: [
      { who: "Marco", line: "Well, that was a disaster. *It was the demo that* ruined everything. The app crashed twice!" },
      { who: "Daniela", line: "No, Marco. *It wasn't the demo that* worried them. *What worried them was* our business plan." },
      { who: "Marco", line: "Our business plan is fine!" },
      { who: "Daniela", line: "*The problem is that* we don't know how we'll make money. *What they asked*, three times, *was* how we'd get paying customers." },
      { who: "Marco", line: "OK… maybe. But *the reason why* I didn't answer *is that* I wasn't expecting that question." },
      { who: "Daniela", line: "*That's exactly why* we need to prepare better. *All I'm saying is* that we can't just focus on the technology." },
      { who: "Marco", line: "Fine. So *what we need to do* now *is* rewrite the plan." },
      { who: "Daniela", line: "Exactly. And *it's you who* should present the financial part next time. You understand the numbers better than I do." }
    ]
  },

  objectives: [
    "I can use *it*-cleft sentences to emphasize a person, thing, time or place.",
    "I can use *what*-cleft sentences to focus on actions, needs and opinions.",
    "I can use clefts with *all, the thing, the reason, the place* to clarify ideas.",
    "I can correct information and contrast ideas politely and precisely."
  ],

  explanation: {
    vocabTitle: "Business and teamwork",
    vocab: [
      { word: "start-up", icon: "🚀" }, { word: "investor", icon: "💼" }, { word: "pitch", icon: "🎤" },
      { word: "revenue", icon: "💵" }, { word: "business model", icon: "📊" }, { word: "stakeholder", icon: "👥" },
      { word: "priority", icon: "🔝" }, { word: "bottleneck", icon: "🍾" }, { word: "feedback", icon: "🔁" },
      { word: "outcome", icon: "🎯" }, { word: "drawback", icon: "⚠️" }, { word: "underestimate", icon: "📉" },
      { word: "overlook", icon: "🙈" }, { word: "address (a problem)", icon: "🛠️" }, { word: "streamline", icon: "➰" }
    ],
    grammar: [
      {
        title: "It-clefts",
        head: ["Normal sentence", "Cleft (focus on…)"],
        rows: [
          ["The demo ruined everything.", "*It was the demo that* ruined everything. (the thing)"],
          ["Ana called you, not me.", "*It was Ana who* called you. (the person)"],
          ["We met in Cholula.", "*It was in Cholula that* we met. (the place)"],
          ["I realized it only yesterday.", "*It was only yesterday that* I realized it. (the time)"]
        ],
        note: "Structure: *It + be + focus + that / who + rest*. Very useful for correcting: *It wasn't Marco who said it; it was Daniela.*"
      },
      {
        title: "Wh-clefts",
        head: ["Normal sentence", "Cleft"],
        rows: [
          ["I need a holiday.", "*What I need is* a holiday."],
          ["Their questions worried me.", "*What worried me was* their questions."],
          ["We should rewrite the plan.", "*What we should do is* rewrite the plan."],
          ["He forgot to call.", "*What happened was (that)* he forgot to call."]
        ],
        note: "With actions, use *do* + infinitive (with or without *to*): *What I did was (to) call the manager.*"
      },
      {
        title: "Other clefts",
        head: ["Structure", "Example"],
        rows: [
          ["*All* + clause + *is / was*", "*All I want is* a little respect. (= only)"],
          ["*The thing (that)…*", "*The thing that* annoys me *is* the noise."],
          ["*The reason (why)… is that…*", "*The reason why* I left *is that* I was bored."],
          ["*The place where… / The person who…*", "*The person who* helped me most *was* my aunt."],
          ["*That's why / That's what…*", "*That's exactly why* we need a plan."]
        ]
      }
    ],
    watchOut: [
      ["What I need it is more time.", "What I need is more time."],
      ["It was Ana that she called me.", "It was Ana who called me."],
      ["The reason why I left is because I was bored.", "The reason why I left is that I was bored."],
      ["What I did was I called him.", "What I did was (to) call him."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the cleft sentences with one word.",
      items: [
        "[[What]] I really need is a good night's sleep.",
        "It was my sister [[who|that]] told me the news.",
        "The reason I'm late [[is]] that the bus broke down.",
        "[[All]] I want is a bit of peace and quiet."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio phone-in about workplace stress with Dr. Arriaga, an organizational psychologist.",
      title: "Stress at work",
      script: [
        { who: "Host", line: "Dr. Arriaga, many listeners say they're stressed at work. Is it the workload?" },
        { who: "Dr. Arriaga", line: "Interestingly, it isn't usually the amount of work that causes the most stress. What really exhausts people is the lack of control over how they do it." },
        { who: "Host", line: "We have a caller. Go ahead." },
        { who: "Caller", line: "Hi. I work in a call center. What drives me crazy is that my boss checks every single call. I feel like I can't breathe." },
        { who: "Dr. Arriaga", line: "That's a classic case. The thing that you need to understand is that micromanagement often comes from the manager's own anxiety. What I'd suggest is asking for a meeting and proposing clear goals, so your boss can trust the results instead of watching every step." },
        { who: "Caller", line: "And if that doesn't work?" },
        { who: "Dr. Arriaga", line: "Then what you might consider is talking to human resources. All I'm saying is that silence rarely solves anything." },
        { who: "Host", line: "Doctor, one final tip for our listeners?" },
        { who: "Dr. Arriaga", line: "Yes. It's the small breaks that make the biggest difference. Five minutes away from the screen every hour. That's what the research shows." }
      ],
      activities: [
        {
          type: "match", title: "Who says what?",
          prompt: "Match the beginnings and endings of the cleft sentences you hear.",
          pairs: [
            ["It isn't usually the amount of work", "that causes the most stress."],
            ["What really exhausts people", "is the lack of control."],
            ["What drives the caller crazy", "is that her boss checks every call."],
            ["What Dr. Arriaga suggests", "is asking for a meeting."],
            ["It's the small breaks", "that make the biggest difference."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "According to Dr. Arriaga, workload is the main cause of stress.", a: false },
            { s: "The caller works in a call center.", a: true },
            { s: "Micromanagement can come from the manager's anxiety.", a: true },
            { s: "Dr. Arriaga recommends staying silent.", a: false },
            { s: "He suggests a five-minute break every hour.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an opinion column from a business magazine.",
      title: "It's not the idea, it's the execution",
      text: [
        { body: "Every year, thousands of young Mexicans launch start-ups, and most of them fail within three years. The common explanation is that their ideas weren't good enough. But in my experience as an investor, it's rarely the idea that kills a company. What kills it is poor execution." },
        { body: "What I mean by execution is the daily discipline of turning a plan into results: hiring the right people, listening to customers, and knowing your numbers. The founders who succeed aren't necessarily the most creative. It's those who are willing to change their plans when the data tells them to that survive." },
        { body: "Take the case of a food delivery app I invested in five years ago. The original idea was a premium service for expensive restaurants. It didn't work. What saved the company was a decision by the founders to listen to their delivery drivers, who noticed that most orders came from small, local fondas. The reason the app is profitable today is that they changed their target market completely." },
        { body: "So, if you're thinking of starting a business, all I ask is this: fall in love with the problem, not with your idea. The thing that matters most is not how brilliant your first plan is, but how quickly you can improve it." }
      ],
      activities: [
        {
          type: "rewrite", title: "Identify the focus",
          prompt: "Rewrite each cleft sentence from the text as a normal sentence.",
          items: [
            { q: "It's rarely the idea that kills a company.", a: ["The idea rarely kills a company."] },
            { q: "What kills it is poor execution.", a: ["Poor execution kills it.", "Poor execution kills a company."] },
            { q: "What saved the company was a decision by the founders.", a: ["A decision by the founders saved the company."] },
            { q: "The reason the app is profitable is that they changed their target market.", a: ["The app is profitable because they changed their target market."] }
          ]
        },
        {
          type: "tf", title: "Understanding the column",
          prompt: "Are these sentences true or false according to the writer?",
          items: [
            { s: "Most start-ups fail because of bad ideas.", a: false },
            { s: "Execution includes knowing your numbers.", a: true },
            { s: "The most creative founders always succeed.", a: false },
            { s: "The delivery app's first idea was successful.", a: false },
            { s: "Delivery drivers helped the company find its real market.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice building clefts, then write a persuasive text.",
      activities: [
        {
          type: "rewrite", title: "Make it a cleft",
          prompt: "Rewrite each sentence starting with the words given.",
          items: [
            { q: "I need a long vacation. → What…", a: ["What I need is a long vacation."] },
            { q: "Pedro broke the window, not Luis. → It was…", a: ["It was Pedro who broke the window, not Luis.", "It was Pedro that broke the window, not Luis.", "It was Pedro who broke the window."] },
            { q: "His attitude annoys me. → What…", a: ["What annoys me is his attitude."] },
            { q: "We met in 2015. → It was…", a: ["It was in 2015 that we met."] },
            { q: "I only want a cup of coffee. → All…", a: ["All I want is a cup of coffee."] },
            { q: "She called the police. → What she did…", a: ["What she did was call the police.", "What she did was to call the police."] }
          ]
        },
        {
          type: "sort", title: "What's the focus?",
          prompt: "What does each cleft sentence emphasize?",
          bins: ["a person", "a thing / idea", "an action", "a time or place"],
          items: [
            { text: "It was my grandmother who taught me to cook.", bin: 0 }, { text: "The person who inspired me was my coach.", bin: 0 },
            { text: "What I love is the food.", bin: 1 }, { text: "The thing that worries me is the cost.", bin: 1 },
            { text: "What we did was cancel the trip.", bin: 2 }, { text: "What happened was that he fell asleep.", bin: 2 },
            { text: "It was in Oaxaca that we got married.", bin: 3 }, { text: "It was only last week that I found out.", bin: 3 }
          ]
        },
        {
          type: "write", title: "What our university really needs",
          prompt: "Write an opinion article for the student newspaper: *What our university (or city) really needs*. Identify the real problem, correct a common misconception, and propose solutions. Use at least six cleft sentences of different types.",
          minWords: 160, maxWords: 230,
          model: "Many students complain that the problem with our campus is the lack of parking. However, it isn't more parking that we need. What we really need is better public transport. Every morning, thousands of students spend over an hour in traffic, and the reason why this happens is that most of us have no alternative to the car. What the university should do is negotiate with the city to create direct bus routes from the main neighborhoods. It was a similar agreement that transformed transport at other universities in Latin America. The thing that frustrates me most is that we keep discussing this issue without acting. All we need is political will. If we invest in transport now, it's the next generation of students who will benefit.",
          bank: ["Many people think… However, it isn't… that…", "What we really need is…", "The reason why… is that…", "What the university should do is…", "The thing that frustrates me most is…", "All we need is…", "It's … who will benefit."],
          checklist: [
            "I used at least **six** cleft sentences.",
            "I used both *it*-clefts and *wh*-clefts.",
            "I corrected a misconception with *It isn't… that…*",
            "I used *The reason why… is that…* (not *is because*)."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Stress the important information in the cleft.",
          items: [
            "What I need is a long vacation.",
            "What annoys me is his attitude.",
            "All I want is a cup of coffee.",
            "What she did was call the police.",
            "It was my sister who told me.",
            "That's exactly why we need a plan."
          ]
        },
        {
          type: "speak", title: "My pitch",
          prompt: "Record a 90-second pitch for a business, social project or app idea. Use clefts to emphasize the problem, the solution and why people should support you.",
          language: ["What frustrates many people is…", "The problem isn't… What's really missing is…", "What our project does is…", "It's … who will benefit most.", "The reason why it will work is that…", "All we need is…"],
          seconds: 120,
          checklist: ["use at least five clefts?", "present a problem and a solution?", "use stress and intonation for emphasis?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form *it*-clefts to focus on a person, thing, time or place.", review: "Explanation: it-clefts; Writing activity 2" },
    { can: "I can form *wh*-clefts, including with actions (*What I did was…*).", review: "Explanation: wh-clefts" },
    { can: "I can use *All…, The thing…, The reason why… is that…*", review: "Explanation: other clefts" },
    { can: "I can correct information politely with cleft sentences.", review: "Speaking activity 1: listen and repeat" },
    { can: "I can identify the focus of cleft sentences in texts.", review: "Reading and Listening" },
    { can: "I can use clefts to write and present a persuasive argument.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
