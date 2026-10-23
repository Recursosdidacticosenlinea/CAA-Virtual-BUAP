window.UNIT = {
  slug: "if-i-had-studied",
  title: "If I Had Studied…",
  level: "C1",
  minutes: 60,
  speakers: { "Valentina": "f", "Rodrigo": "m", "Host": "m", "Economist": "f", "Historian": "m", A: "f", B: "m" },
  focus: ["mixed conditionals: past → present, present → past", "unless, provided (that), as long as, on condition that", "otherwise / or else / but for", "inverted conditionals: Had I known…, Were I to…, Should you…", "alternative histories"],

  presentation: {
    scene: "🔀🎓🎻⚖️",
    situation: "Valentina, a lawyer, and Rodrigo, a professional violinist, meet at a school reunion. Twenty years ago, they almost chose each other's careers.",
    warmup: {
      prompt: "Which of these decisions shape a person's life the most? Choose your top three.",
      options: ["what to study", "where to live", "who to marry", "whether to have children", "which job to accept", "whether to emigrate", "who your friends are", "whether to start a business", "which language to learn", "taking a gap year"],
      response: "Big questions! In this unit you'll learn to connect past decisions with present results, and vice versa."
    },
    dialogueTitle: "The reunion",
    dialogue: [
      { who: "Rodrigo", line: "Valentina! You were the best violinist in our class. *If you had kept* playing, *you'd be* in an orchestra now." },
      { who: "Valentina", line: "Maybe. But *if I weren't* so practical, *I wouldn't have chosen* law. I needed a stable salary." },
      { who: "Rodrigo", line: "Funny. I almost studied law. *Had my father not insisted* so much, I might have done it just to make him happy." },
      { who: "Valentina", line: "Do you regret anything?" },
      { who: "Rodrigo", line: "Not really. *If I had become* a lawyer, *I'd be* richer, but *I wouldn't be* as happy." },
      { who: "Valentina", line: "I still play at home, *provided that* my neighbors don't complain." },
      { who: "Rodrigo", line: "Then join our amateur orchestra! We rehearse on Thursdays. *Unless* you're too busy with court cases…" },
      { who: "Valentina", line: "*As long as* nobody expects me to be perfect, I'm in." }
    ]
  },

  objectives: [
    "I can use mixed conditionals to connect past causes with present results, and present facts with past results.",
    "I can use alternatives to *if*: *unless, provided that, as long as, on condition that, otherwise, but for*.",
    "I can use inverted conditionals in formal contexts: *Had I known…, Were it not for…, Should you…*",
    "I can speculate about alternative histories, personal and global."
  ],

  explanation: {
    vocabTitle: "Choices and consequences",
    vocab: [
      { word: "a crossroads", icon: "🔀" }, { word: "hindsight", icon: "🔙" }, { word: "consequence", icon: "➡️" },
      { word: "outcome", icon: "🎯" }, { word: "by chance", icon: "🎲" }, { word: "inevitable", icon: "⛓️" },
      { word: "alternatively", icon: "🔁" }, { word: "pursue", icon: "🏃" }, { word: "abandon", icon: "🚮" },
      { word: "stable", icon: "⚖️" }, { word: "fulfilling", icon: "😊" }, { word: "make a living", icon: "💵" },
      { word: "take the plunge", icon: "🏊" }, { word: "play it safe", icon: "🛡️" }, { word: "what-if scenario", icon: "❓" }
    ],
    grammar: [
      {
        title: "Mixed conditionals",
        head: ["Type", "Structure", "Example"],
        rows: [
          ["past cause → present result", "*If* + past perfect, *would* + infinitive", "*If I had studied* medicine, *I'd be* a doctor now."],
          ["present fact → past result", "*If* + past simple, *would have* + participle", "*If I weren't* so shy, *I would have spoken* to her yesterday."]
        ],
        note: "Check the time of each clause separately. Time words help: *now, today* (present) vs. *yesterday, in 2010* (past)."
      },
      {
        title: "Alternatives to if",
        head: ["Word", "Meaning", "Example"],
        rows: [
          ["*unless*", "if… not", "I won't go *unless* you come. (= if you don't come)"],
          ["*provided (that) / as long as / on condition that*", "only if", "You can borrow it *provided that* you return it."],
          ["*otherwise / or else*", "if not, then…", "Hurry, *otherwise* we'll miss the train."],
          ["*but for* + noun", "if it hadn't been for", "*But for* your help, I would have failed."],
          ["*supposing / what if*", "imagine that", "*Supposing* you won, what would you do?"]
        ]
      },
      {
        title: "Inverted conditionals (formal)",
        head: ["Normal", "Inverted"],
        rows: [
          ["If I had known, …", "*Had I known*, I would have helped."],
          ["If it were not for…", "*Were it not for* the rain, we'd go out."],
          ["If you should need anything, …", "*Should you need* anything, please call."],
          ["If they were to cancel, …", "*Were they to cancel*, we'd lose money."]
        ],
        note: "Negatives are not contracted: *Had I not known* (not *Hadn't I known*)."
      }
    ],
    watchOut: [
      ["If I had studied medicine, I would have been a doctor now.", "If I had studied medicine, I would be a doctor now."],
      ["Unless you don't hurry, you'll be late.", "Unless you hurry, you'll be late."],
      ["Hadn't I missed the bus, I'd have arrived.", "Had I not missed the bus, I'd have arrived."],
      ["Provided you will finish, you can go.", "Provided you finish, you can go."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "If I had saved more money, I [[would]] be traveling now.",
        "You can't come in [[unless]] you have a ticket.",
        "[[Had]] I known about the traffic, I would have left earlier.",
        "Take an umbrella, [[otherwise]] you'll get wet."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a history podcast, *What If?*, in which a historian and an economist imagine alternative pasts for Mexico.",
      title: "What if…?",
      script: [
        { who: "Host", line: "Welcome to What If? Today's question: what if Mexico had never discovered oil in the twentieth century?" },
        { who: "Economist", line: "Well, had Mexico not found oil, its economy would probably be more diversified today. We'd likely have invested more in manufacturing and technology much earlier." },
        { who: "Historian", line: "I partly agree. But we shouldn't forget that oil money built a lot of infrastructure. But for the oil boom of the 1970s, many highways and hospitals wouldn't exist." },
        { who: "Host", line: "So, positive or negative?" },
        { who: "Economist", line: "Both. If the government hadn't depended so heavily on oil, the debt crisis of 1982 wouldn't have been so severe. That crisis still affects how Mexicans view the economy today." },
        { who: "Historian", line: "And there's a cultural side. If we weren't so proud of the 1938 oil expropriation, we probably wouldn't have defended Pemex for so long as a national symbol." },
        { who: "Host", line: "Final thoughts?" },
        { who: "Economist", line: "History isn't a laboratory. Unless we accept that, these exercises are just fantasy. But provided we're careful, they help us understand the present." }
      ],
      activities: [
        {
          type: "sort", title: "Which type of conditional?",
          prompt: "Classify each statement from the podcast.",
          bins: ["Past cause → present result", "Present fact → past result", "Past cause → past result"],
          items: [
            { text: "Had Mexico not found oil, its economy would be more diversified today.", bin: 0 },
            { text: "But for the oil boom, many highways wouldn't exist.", bin: 0 },
            { text: "If we weren't so proud of 1938, we wouldn't have defended Pemex for so long.", bin: 1 },
            { text: "If the government hadn't depended on oil, the 1982 crisis wouldn't have been so severe.", bin: 2 },
            { text: "We'd likely have invested more in manufacturing earlier.", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The economist thinks Mexico's economy would be more diversified without oil.", a: true },
            { s: "The historian says oil money didn't build anything useful.", a: false },
            { s: "The debt crisis happened in 1982.", a: true },
            { s: "The oil expropriation happened in 1958.", a: false },
            { s: "The economist says these exercises are useful if we're careful.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an essay from an anthology of personal stories about chance and destiny.",
      title: "The wrong train",
      text: [
        { body: "In 2009, I was a twenty-two-year-old engineering student on my way to a job interview in Monterrey. I was supposed to take the 7:15 bus from Puebla, but I misread my ticket and got on the 7:50. Had I caught the right bus, I would be an engineer in a steel company today. Instead, I'm a high school biology teacher in Oaxaca, and I wouldn't change it for anything." },
        { body: "On the late bus, I sat next to an elderly woman who was going to visit her grandson. We talked for nine hours. She had been a rural teacher for forty years, and she told me stories about her students that made me laugh and cry. By the time we arrived, I had missed my interview. If I weren't so stubborn, I would have rescheduled it. Instead, I took it as a sign." },
        { body: "Some people say that our lives are determined by our choices. I'm not so sure. But for that small mistake with my ticket, I would never have met the woman who changed my mind about what really matters. Unless you believe in destiny, it was pure chance." },
        { body: "I sometimes imagine the other version of me, the engineer. He probably earns more. Provided he's happy, I wish him well. But I doubt he has ever seen a fifteen-year-old's face when she finally understands how a cell divides." }
      ],
      activities: [
        {
          type: "match", title: "Meaning",
          prompt: "Match each sentence from the essay with its meaning.",
          pairs: [
            ["Had I caught the right bus, I would be an engineer today.", "He caught the wrong bus, so he isn't an engineer now."],
            ["If I weren't so stubborn, I would have rescheduled it.", "He's stubborn, so he didn't reschedule the interview."],
            ["But for that small mistake, I would never have met the woman.", "The mistake made the meeting possible."],
            ["Provided he's happy, I wish him well.", "He wishes the other version of himself well, if that version is happy."]
          ]
        },
        {
          type: "tf", title: "Understanding the essay",
          prompt: "Are these sentences true or false?",
          items: [
            { s: "The writer took the bus he had planned to take.", a: false },
            { s: "He was traveling to a job interview.", a: true },
            { s: "The woman on the bus had been an engineer.", a: false },
            { s: "He rescheduled his interview the following week.", a: false },
            { s: "He's sure that our lives are determined only by our choices.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice transformations, then write about an alternative history.",
      activities: [
        {
          type: "rewrite", title: "Mixed conditionals",
          prompt: "Rewrite each pair of facts as one mixed conditional sentence.",
          items: [
            { q: "I didn't learn to drive. Now I depend on buses.", a: ["If I had learned to drive, I wouldn't depend on buses now.", "If I'd learned to drive, I wouldn't depend on buses now.", "If I had learnt to drive, I wouldn't depend on buses now."] },
            { q: "She isn't patient. She shouted at her students yesterday.", a: ["If she were patient, she wouldn't have shouted at her students yesterday.", "If she was patient, she wouldn't have shouted at her students yesterday.", "If she were more patient, she wouldn't have shouted at her students yesterday."] },
            { q: "They moved to Canada in 2015. Now they speak French.", a: ["If they hadn't moved to Canada in 2015, they wouldn't speak French now.", "If they had not moved to Canada in 2015, they would not speak French now."] },
            { q: "He doesn't speak English. He didn't get the job.", a: ["If he spoke English, he would have got the job.", "If he spoke English, he would have gotten the job.", "If he spoke English, he'd have got the job.", "If he spoke English, he'd have gotten the job."] }
          ]
        },
        {
          type: "rewrite", title: "Formal inversion",
          prompt: "Rewrite each sentence with an inverted conditional.",
          items: [
            { q: "If I had known, I would have called you.", a: ["Had I known, I would have called you."] },
            { q: "If you should have any questions, please contact us.", a: ["Should you have any questions, please contact us."] },
            { q: "If it were not for your support, I would give up.", a: ["Were it not for your support, I would give up."] },
            { q: "If we had not received the funds, the project would have failed.", a: ["Had we not received the funds, the project would have failed."] }
          ]
        },
        {
          type: "write", title: "An alternative history",
          prompt: "Choose a moment in history (Mexican, global or personal) and imagine it had been different. Write an essay explaining the consequences then and now. Use mixed conditionals, at least two alternatives to *if*, and one inverted conditional.",
          minWords: 170, maxWords: 240,
          model: "What would Mexico be like today if the Spanish conquest had failed in 1521? Had Tenochtitlan resisted, the Mexica empire might have continued to dominate central Mexico for decades. If that had happened, Nahuatl, rather than Spanish, would probably be the main language of the country today, and Mexico City would still be surrounded by lakes. However, it is unlikely that Mexico would have remained isolated. Unless the empire had developed defenses against European diseases, smallpox would still have devastated the population. Provided that the Mexica had survived politically, they might have negotiated trade agreements with several European powers, as some Asian kingdoms did. If we weren't so used to thinking of history as inevitable, we would probably ask these questions more often. Imagining alternatives helps us understand that the present is the result of many choices, not destiny.",
          bank: ["What would… be like today if…?", "Had…, … might have…", "If that had happened, … would be… today.", "Unless…,", "Provided that…,", "But for…,", "If we weren't…, we would have…"],
          checklist: [
            "I used at least **two** mixed conditionals.",
            "I used **two** alternatives to *if* (*unless, provided that, but for…*).",
            "I used at least **one** inverted conditional.",
            "My essay has an introduction, development and conclusion."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. In *Had I known*, stress *known*.",
          items: [
            "Had I known, I would have called you.",
            "Should you have any questions, please contact us.",
            "Were it not for your support, I would give up.",
            "If I had studied medicine, I'd be a doctor now.",
            "I won't go unless you come.",
            "Hurry, otherwise we'll miss the train."
          ]
        },
        {
          type: "speak", title: "History's turning point",
          prompt: "Record a 90-second talk about a historical event that you think changed the world (or your country). Explain how today would be different if it hadn't happened.",
          language: ["One of the most important turning points was…", "Had… not happened,…", "If… hadn't…, we would… today.", "But for…,", "Unless…,", "In my view,…"],
          seconds: 120,
          checklist: ["explain the event clearly?", "connect past and present with mixed conditionals?", "use formal inversion?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use mixed conditionals (past → present).", review: "Explanation: mixed conditionals; Writing activity 1" },
    { can: "I can use mixed conditionals (present → past).", review: "Explanation: mixed conditionals; Reading activity 1" },
    { can: "I can use *unless, provided that, as long as, otherwise, but for*.", review: "Explanation: alternatives to if" },
    { can: "I can use inverted conditionals in formal writing.", review: "Explanation: inverted conditionals; Writing activity 2" },
    { can: "I can follow discussions about alternative histories.", review: "Listening: What if…?" },
    { can: "I can write and speak about how the past shapes the present.", review: "Writing activity 3 and Speaking activities" }
  ]
};
