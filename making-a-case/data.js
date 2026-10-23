window.UNIT = {
  slug: "making-a-case",
  title: "Making a Case",
  level: "C1",
  minutes: 60,
  speakers: { "Moderator": "f", "Ximena": "f", "Ignacio": "m", "Councillor": "m", "Activist": "f", A: "f", B: "m" },
  focus: ["discourse markers: moreover, nevertheless, consequently…", "conceding: admittedly, granted, while it is true that…", "hedging: it could be argued, tends to, arguably", "rhetorical questions and emphasis", "structuring a debate or argumentative essay"],

  presentation: {
    scene: "🎙️⚖️📊🗳️",
    situation: "It's the final of the BUAP inter-faculty debate tournament. The motion: *This house would ban cars from Puebla's historic center.* Ximena argues for, Ignacio against.",
    warmup: {
      prompt: "Which of these issues would you like to debate? Choose the ones you have strong opinions about.",
      options: ["banning cars downtown", "four-day work week", "free university education", "social media age limits", "school uniforms", "a meat tax", "compulsory voting", "AI in education", "zoos", "tourism limits", "homework", "nuclear energy"],
      response: "Great topics! In this unit you'll learn to build, connect and defend arguments like a professional debater."
    },
    dialogueTitle: "The final debate",
    dialogue: [
      { who: "Moderator", line: "Ximena, you have two minutes." },
      { who: "Ximena", line: "Thank you. *First and foremost*, traffic is destroying our historic center. *Not only* is pollution damaging the colonial facades, *but* it is *also* harming residents' health. *Moreover*, cities such as Pontevedra in Spain have shown that pedestrian centers attract more tourists, not fewer." },
      { who: "Moderator", line: "Ignacio, your response." },
      { who: "Ignacio", line: "*Admittedly*, pollution is a serious problem. *Nevertheless*, a total ban would be unfair to the thousands of people who work downtown. *After all*, how are elderly people supposed to reach their doctors?" },
      { who: "Ximena", line: "*That's a valid point*, *but* it overlooks the fact that public transport could be improved at the same time." },
      { who: "Ignacio", line: "*It could be argued* that this is idealistic. *Given* the city's budget, a better solution *would arguably be* to restrict cars gradually, *rather than* ban them overnight." },
      { who: "Moderator", line: "Thank you both. *In conclusion*, it seems you agree on the problem, if not on the solution." }
    ]
  },

  objectives: [
    "I can link ideas with a range of discourse markers (addition, contrast, cause, result).",
    "I can concede a point and then counter-argue.",
    "I can hedge claims to sound balanced and academic.",
    "I can structure and deliver a persuasive argument in a debate or essay."
  ],

  explanation: {
    vocabTitle: "Debate language",
    vocab: [
      { word: "motion", icon: "📜" }, { word: "rebuttal", icon: "↩️" }, { word: "counter-argument", icon: "🔄" },
      { word: "concede", icon: "🤝" }, { word: "assert", icon: "☝️" }, { word: "undermine", icon: "⛏️" },
      { word: "a fallacy", icon: "🧩" }, { word: "compelling", icon: "💪" }, { word: "flawed", icon: "⚠️" },
      { word: "to back up a claim", icon: "📊" }, { word: "the other side of the coin", icon: "🪙" }, { word: "a slippery slope", icon: "🛝" },
      { word: "in favor of", icon: "👍" }, { word: "opposed to", icon: "👎" }, { word: "stakeholders", icon: "👥" }
    ],
    grammar: [
      {
        title: "Discourse markers by function",
        head: ["Function", "Markers", "Example"],
        rows: [
          ["adding", "*moreover, furthermore, in addition, what is more*", "*Moreover*, it would reduce noise."],
          ["contrasting", "*however, nevertheless, nonetheless, on the other hand, whereas*", "*Nevertheless*, the cost is high."],
          ["cause / result", "*consequently, therefore, as a result, thus, hence*", "*Consequently*, sales have fallen."],
          ["concluding", "*in conclusion, to sum up, all things considered*", "*All things considered*, the plan is viable."]
        ],
        note: "*However, moreover, nevertheless* usually start a new sentence followed by a comma. *Whereas* and *while* join two clauses in one sentence."
      },
      {
        title: "Conceding and counter-arguing",
        head: ["Concede", "Counter"],
        rows: [
          ["*Admittedly*, … / *Granted*, …", "… *nevertheless / however*, …"],
          ["*While it is true that* …,", "… it doesn't follow that…"],
          ["*That's a valid point*, …", "… *but* it overlooks the fact that…"],
          ["*Although* …, / *Despite the fact that* …,", "… we must also consider…"]
        ],
        note: "Conceding first makes you sound fair and makes your counter-argument stronger."
      },
      {
        title: "Hedging (softening claims)",
        head: ["Strong claim", "Hedged claim"],
        rows: [
          ["This is the best solution.", "This is *arguably* the best solution."],
          ["Young people use too much social media.", "Young people *tend to* use social media excessively."],
          ["The ban will fail.", "*It could be argued that* the ban *may* not succeed."],
          ["This proves that…", "This *suggests* that… / This *would seem to indicate* that…"]
        ]
      }
    ],
    watchOut: [
      ["Moreover, but it is expensive.", "However, it is expensive. / Moreover, it is expensive."],
      ["Despite it is expensive, it's popular.", "Despite being expensive, it's popular. / Although it is expensive, it's popular."],
      ["In the other hand,…", "On the other hand,…"],
      ["Nevertheless the cost, we should do it.", "Despite the cost, we should do it. / It's costly; nevertheless, we should do it."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one discourse marker.",
      items: [
        "Cars cause pollution. [[Moreover|Furthermore|Besides]], they make the streets noisy.",
        "The plan is ambitious. [[However|Nevertheless|Nonetheless]], it is achievable.",
        "Bus fares went up. [[Consequently|Therefore|As a result]], fewer people use the bus.",
        "[[Admittedly|Granted]], the idea has some drawbacks, but the benefits are greater."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a city council meeting about limiting tourism in a small town near Puebla.",
      title: "Town hall meeting",
      script: [
        { who: "Councillor", line: "As you know, visitor numbers have tripled in five years. Consequently, we're proposing a daily limit of five thousand tourists on weekends." },
        { who: "Activist", line: "With respect, while it is true that tourism has grown, a limit would be devastating for local businesses. Many families depend entirely on weekend sales." },
        { who: "Councillor", line: "Granted, there would be some short-term losses. Nevertheless, our water supply simply cannot support this many people. Last April, half the town had no water for three days." },
        { who: "Activist", line: "That's a valid point, but it overlooks the real problem, which is poor infrastructure, not tourists. What is more, the money from tourism could fund a new water system." },
        { who: "Councillor", line: "Arguably, yes. However, that would take years, whereas the crisis is happening now." },
        { who: "Activist", line: "Then why not introduce a small tourist tax instead? That way, the town would benefit and visitors would contribute to the solution." },
        { who: "Councillor", line: "All things considered, that might be a reasonable compromise. We'll put both options to a public vote." }
      ],
      activities: [
        {
          type: "sort", title: "Who argues what?",
          prompt: "Put each argument under the person who makes it.",
          bins: ["The councillor", "The activist"],
          items: [
            { text: "Visitor numbers have tripled.", bin: 0 }, { text: "The water supply can't support so many people.", bin: 0 }, { text: "A new water system would take years.", bin: 0 },
            { text: "A limit would hurt local businesses.", bin: 1 }, { text: "The real problem is poor infrastructure.", bin: 1 }, { text: "A tourist tax could fund solutions.", bin: 1 }
          ]
        },
        {
          type: "match", title: "Functions of the markers",
          prompt: "Match each phrase from the meeting with its function.",
          pairs: [
            ["Consequently,…", "introducing a result"],
            ["While it is true that…", "conceding before disagreeing"],
            ["What is more,…", "adding a stronger point"],
            ["…whereas the crisis is happening now.", "contrasting two facts in one sentence"],
            ["All things considered,…", "concluding"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an argumentative essay written for a university writing course.",
      title: "Should university education be free?",
      text: [
        { body: "Few issues divide public opinion as sharply as the question of free higher education. Supporters argue that it is a right; critics, that it is an unaffordable luxury. This essay will argue that, while free tuition is a worthy goal, it should be accompanied by targeted support for the students who need it most." },
        { body: "First and foremost, education arguably benefits society as a whole, not only individuals. Graduates tend to earn higher salaries, pay more taxes and rely less on public services. It could therefore be argued that investing in universities pays for itself in the long term. Moreover, free tuition removes a psychological barrier for low-income families, who may otherwise assume that university is not for them." },
        { body: "Admittedly, there are serious concerns. Free tuition is extremely expensive and, paradoxically, may benefit wealthier students most, since they are more likely to finish secondary school and pass entrance exams. Nevertheless, this does not mean the idea should be abandoned. Rather, it suggests that free tuition alone is insufficient." },
        { body: "In conclusion, the debate should not be framed as \"free or paid\". A more effective approach would combine free tuition with scholarships for living costs, mentoring programs and investment in secondary schools. Only then would higher education be genuinely accessible to all." }
      ],
      activities: [
        {
          type: "match", title: "Essay structure",
          prompt: "Match each paragraph with its function.",
          pairs: [
            ["Paragraph 1", "introduces the topic and states the thesis"],
            ["Paragraph 2", "presents arguments in favor"],
            ["Paragraph 3", "concedes counter-arguments and responds"],
            ["Paragraph 4", "concludes and proposes a solution"]
          ]
        },
        {
          type: "tf", title: "Understanding the argument",
          prompt: "Are these sentences true or false according to the essay?",
          items: [
            { s: "The writer is completely against free tuition.", a: false },
            { s: "The writer believes education benefits society as a whole.", a: true },
            { s: "Free tuition may benefit wealthier students most.", a: true },
            { s: "The writer suggests abandoning the idea of free tuition.", a: false },
            { s: "The writer proposes combining free tuition with other support.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice connecting and hedging, then write an argumentative essay.",
      activities: [
        {
          type: "rewrite", title: "Hedge the claims",
          prompt: "Rewrite each strong claim using the hedging word in parentheses.",
          items: [
            { q: "Social media is harmful for teenagers. (can)", a: ["Social media can be harmful for teenagers."] },
            { q: "Online classes are less effective. (tend to)", a: ["Online classes tend to be less effective."] },
            { q: "This is the most important issue of our time. (arguably)", a: ["This is arguably the most important issue of our time.", "Arguably, this is the most important issue of our time."] },
            { q: "The data proves that the policy works. (suggests)", a: ["The data suggests that the policy works.", "The data suggest that the policy works."] }
          ]
        },
        {
          type: "rewrite", title: "Concede and counter",
          prompt: "Join each pair of ideas with the marker in parentheses.",
          items: [
            { q: "Electric cars are expensive. They save money in the long run. (Admittedly… nevertheless)", a: ["Admittedly, electric cars are expensive. Nevertheless, they save money in the long run.", "Admittedly, electric cars are expensive; nevertheless, they save money in the long run."] },
            { q: "Tourism creates jobs. It damages the environment. (While it is true that)", a: ["While it is true that tourism creates jobs, it damages the environment.", "While it is true that tourism creates jobs, it also damages the environment."] },
            { q: "The plan is expensive. It is necessary. (Despite + -ing)", a: ["Despite being expensive, the plan is necessary."] }
          ]
        },
        {
          type: "write", title: "An argumentative essay",
          prompt: "Choose a motion from the warm-up (or your own) and write an argumentative essay: introduction with a clear thesis, two arguments, a concession with counter-argument, and a conclusion. Use a range of discourse markers and hedging.",
          minWords: 200, maxWords: 280,
          model: "Should social media be banned for children under sixteen? This essay will argue that, although a total ban may be difficult to enforce, stricter age limits are both justified and necessary. First and foremost, there is growing evidence that intensive social media use tends to be associated with anxiety and poor sleep among young teenagers. Moreover, many platforms are deliberately designed to maximize screen time, which arguably makes self-regulation unrealistic for children. Admittedly, social media also offers benefits: it can help isolated young people find communities and develop creative skills. Nevertheless, these benefits do not necessarily require unrestricted access at the age of eleven or twelve. While it is true that determined teenagers may find ways around any rule, this is hardly a reason not to set one; after all, we do not abandon age limits for alcohol simply because some are broken. In conclusion, a minimum age of sixteen, combined with digital education in schools, would seem to offer the most balanced solution.",
          bank: ["This essay will argue that…", "First and foremost,…", "Moreover,…", "Admittedly,…", "Nevertheless,…", "While it is true that…,", "It could be argued that…", "In conclusion,…"],
          checklist: [
            "My introduction has a **clear thesis**.",
            "I used at least **eight** different discourse markers.",
            "I conceded a point and counter-argued.",
            "I hedged at least **three** claims."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Sound balanced and calm: don't rush the linking words.",
          items: [
            "Social media can be harmful for teenagers.",
            "Online classes tend to be less effective.",
            "This is arguably the most important issue.",
            "Despite being expensive, the plan is necessary.",
            "That's a valid point, but it overlooks the cost.",
            "All things considered, the plan is viable."
          ]
        },
        {
          type: "speak", title: "My position",
          prompt: "Record a two-minute persuasive speech on an issue you care about. Structure it like a debate speech: thesis, arguments, concession, counter-argument, conclusion.",
          language: ["Today I'd like to argue that…", "My first argument is…", "Furthermore,…", "Some people might say that… Admittedly,…", "However,…", "To sum up,…"],
          seconds: 150,
          checklist: ["state a clear thesis?", "give two or more arguments?", "include a concession?", "speak for about two minutes?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use discourse markers for addition, contrast, cause and result.", review: "Explanation: discourse markers" },
    { can: "I can concede a point and counter-argue.", review: "Explanation: conceding; Writing activity 2" },
    { can: "I can hedge claims to sound balanced.", review: "Explanation: hedging; Writing activity 1" },
    { can: "I can follow the structure of an argumentative essay.", review: "Reading: Should university education be free?" },
    { can: "I can identify arguments and counter-arguments in a discussion.", review: "Listening: town hall meeting" },
    { can: "I can write an essay and take part in a debate.", review: "Writing activity 3 and Speaking activities" }
  ]
};
