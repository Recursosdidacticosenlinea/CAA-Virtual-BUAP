window.UNIT = {
  slug: "the-academic-voice",
  title: "The Academic Voice",
  level: "C2",
  minutes: 60,
  speakers: { "Dr. Olvera": "f", "Rafael": "m", "Lecturer": "m", "Researcher": "f", "Chair": "f", A: "f", B: "m" },
  focus: ["nominalization: analyze → analysis", "hedging: may, appears to, it is likely that", "boosters: clearly, undoubtedly, it is evident that", "stance and evaluation: notably, surprisingly", "impersonal and cautious academic style"],

  presentation: {
    scene: "🎓📑🔬📊",
    situation: "Rafael, a master's student at BUAP, is meeting his thesis supervisor, Dr. Olvera, to discuss the first draft of his research paper on water use in Puebla.",
    warmup: {
      prompt: "Which of these do you find most difficult in academic writing? Choose all that apply.",
      options: ["sounding formal", "organizing ideas", "citing sources", "avoiding repetition", "writing an abstract", "being concise", "being cautious", "presenting data", "writing conclusions", "paraphrasing", "using the passive", "finding the right word"],
      response: "Very common challenges! In this unit you'll learn the features that make writing sound genuinely academic."
    },
    dialogueTitle: "The thesis draft",
    dialogue: [
      { who: "Dr. Olvera", line: "Rafael, the research is solid, but the style is too conversational. Look at this: \"We looked at how people use water and we found out that they waste a lot.\"" },
      { who: "Rafael", line: "That's what happened, though." },
      { who: "Dr. Olvera", line: "Of course, but in academic writing we tend to use *nouns* rather than verbs. Try: \"*An analysis of* household water *consumption* revealed *significant waste*.\"" },
      { who: "Rafael", line: "It sounds more serious. And this sentence: \"This proves that the government's campaigns don't work\"?" },
      { who: "Dr. Olvera", line: "\"Proves\" is too strong. You surveyed four hundred households, not the whole state. \"These findings *suggest that* public campaigns *may have had limited* impact.\"" },
      { who: "Rafael", line: "So, more *cautious*." },
      { who: "Dr. Olvera", line: "Cautious where the evidence is limited; *confident* where it's strong. If your data *clearly* shows a pattern, say so. That's what we call *stance*." }
    ]
  },

  objectives: [
    "I can use nominalization to make writing more concise and academic.",
    "I can hedge claims appropriately according to the strength of the evidence.",
    "I can use boosters and stance markers to express confidence and evaluation.",
    "I can transform conversational writing into a formal academic register."
  ],

  explanation: {
    vocabTitle: "Academic vocabulary",
    vocab: [
      { word: "analyze → analysis", icon: "🔬" }, { word: "decide → decision", icon: "⚖️" }, { word: "develop → development", icon: "📈" },
      { word: "increase → an increase", icon: "⬆️" }, { word: "fail → failure", icon: "❌" }, { word: "consume → consumption", icon: "💧" },
      { word: "findings", icon: "🔎" }, { word: "evidence", icon: "🧾" }, { word: "framework", icon: "🧱" },
      { word: "significant", icon: "❗" }, { word: "consistent with", icon: "✔️" }, { word: "furthermore", icon: "➕" },
      { word: "thereby", icon: "➡️" }, { word: "whereas", icon: "↔️" }, { word: "notably", icon: "📌" }
    ],
    grammar: [
      {
        title: "Nominalization",
        head: ["Conversational (verbs)", "Academic (nouns)"],
        rows: [
          ["Prices *increased* rapidly, so people *consumed* less.", "*The rapid increase in prices* led to *a decline in consumption*."],
          ["We *analyzed* the data and *found* that…", "*Analysis of the data* revealed that…"],
          ["Because the government *failed* to act, …", "*The government's failure to act* …"],
          ["When cities *develop* quickly, …", "*Rapid urban development* …"]
        ],
        note: "Nominalization packs more information into fewer words and makes the text more objective. But don't overdo it, or the text becomes impossible to read!"
      },
      {
        title: "Hedging (being cautious)",
        head: ["Device", "Example"],
        rows: [
          ["modal verbs", "This *may / might / could* explain the difference."],
          ["lexical verbs", "The results *suggest / indicate / appear to show* that…"],
          ["adverbs", "This is *possibly / probably / arguably* the main cause."],
          ["impersonal phrases", "*It is likely that* … / *It would seem that* …"],
          ["quantifiers", "*Most* participants… / *In some cases*…"]
        ]
      },
      {
        title: "Boosters and stance",
        head: ["Function", "Examples"],
        rows: [
          ["confidence (boosters)", "*clearly, undoubtedly, it is evident that, the data demonstrate that*"],
          ["evaluation", "*Surprisingly,… / Notably,… / Unfortunately,… / Interestingly,…*"],
          ["limitation", "*It should be noted that… / A limitation of this study is…*"]
        ],
        note: "Match your language to your evidence: strong evidence → boosters; partial evidence → hedges."
      }
    ],
    watchOut: [
      ["This proves that all students are stressed.", "These findings suggest that many students experience stress."],
      ["We did an analysis about the data.", "We carried out an analysis of the data. / The data were analyzed."],
      ["It's obvious that people waste water.", "It is evident that a considerable amount of water is wasted."],
      ["Lots of people said yes.", "A substantial proportion of respondents answered positively."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the noun form of the verb in parentheses.",
      items: [
        "The [[analysis]] of the data took three months. (analyze)",
        "There was a sharp [[increase]] in prices in 2022. (increase)",
        "The [[failure]] of the project surprised everyone. (fail)",
        "Water [[consumption]] has fallen by 12%. (consume)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an extract from a conference presentation about urban heat in Mexican cities (the study is fictional).",
      title: "Conference: urban heat islands",
      script: [
        { who: "Chair", line: "Our next speaker will present her research on urban heat. Please." },
        { who: "Researcher", line: "Thank you. Our study examined temperature variation across twelve neighborhoods in Puebla during the summer of 2023. The findings clearly demonstrate that areas with less vegetation are significantly hotter: on average, 3.8 degrees warmer than neighborhoods with abundant green space." },
        { who: "Researcher", line: "Interestingly, the effect was most pronounced at night, which suggests that concrete and asphalt release heat accumulated during the day. This may have important implications for public health, particularly for elderly residents." },
        { who: "Researcher", line: "It should be noted, however, that our sample was limited to a single city and a single season. It is therefore possible that the pattern differs in cities with other climates." },
        { who: "Researcher", line: "Nevertheless, the evidence is consistent with international research. We would tentatively recommend that urban planning policies prioritize the expansion of green areas in the most affected zones." },
        { who: "Chair", line: "Thank you. Questions from the audience?" }
      ],
      activities: [
        {
          type: "sort", title: "Hedge or booster?",
          prompt: "Is each phrase from the presentation expressing confidence or caution?",
          bins: ["Confidence (booster)", "Caution (hedge)"],
          items: [
            { text: "The findings clearly demonstrate that…", bin: 0 }, { text: "…are significantly hotter", bin: 0 }, { text: "The evidence is consistent with international research.", bin: 0 },
            { text: "…which suggests that…", bin: 1 }, { text: "This may have important implications…", bin: 1 },
            { text: "It is therefore possible that…", bin: 1 }, { text: "We would tentatively recommend…", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the statements true or false?",
          items: [
            { s: "The study covered twelve neighborhoods.", a: true },
            { s: "Greener areas were 3.8 degrees hotter.", a: false },
            { s: "The difference was greatest at night.", a: true },
            { s: "The researcher says the results apply to all Mexican cities.", a: false },
            { s: "She recommends expanding green areas.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an abstract from a research article (the study is fictional, created for this unit).",
      title: "Abstract: Social media use and sleep quality among university students",
      text: [
        { body: "**Abstract.** The relationship between social media use and sleep has attracted increasing attention in recent years. However, evidence from Latin American university populations remains scarce. The present study investigated the association between night-time social media use and self-reported sleep quality among 612 undergraduate students at a public university in central Mexico." },
        { body: "Data were collected through an online questionnaire combining the Pittsburgh Sleep Quality Index with questions on frequency and timing of social media use. Analysis revealed a significant negative correlation between use in the hour before sleep and overall sleep quality. Notably, the association was stronger among first-year students, which may reflect the challenges of adapting to university life." },
        { body: "These findings appear to be consistent with previous research in North America and Europe. Nevertheless, given the cross-sectional design of the study, causal relationships cannot be established. It is plausible that poor sleep leads to increased social media use, rather than the reverse. Future longitudinal research is therefore recommended. The results nonetheless suggest that university well-being programs could usefully include guidance on digital habits." }
      ],
      activities: [
        {
          type: "match", title: "Abstract structure",
          prompt: "Match each part of the abstract with its function.",
          pairs: [
            ["The relationship… has attracted increasing attention.", "background"],
            ["However, evidence… remains scarce.", "research gap"],
            ["The present study investigated…", "aim of the study"],
            ["Data were collected through an online questionnaire…", "method"],
            ["Analysis revealed a significant negative correlation…", "main result"],
            ["Causal relationships cannot be established.", "limitation"]
          ]
        },
        {
          type: "tf", title: "Understanding the abstract",
          prompt: "Are these statements true or false?",
          items: [
            { s: "The study included more than 600 students.", a: true },
            { s: "The study proves that social media causes poor sleep.", a: false },
            { s: "The association was stronger among first-year students.", a: true },
            { s: "The authors suggest poor sleep might lead to more social media use.", a: true },
            { s: "The authors recommend no further research.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Transform conversational sentences, then write an abstract.",
      activities: [
        {
          type: "rewrite", title: "Nominalize",
          prompt: "Rewrite each sentence starting with the noun phrase given.",
          items: [
            { q: "We analyzed the results and this showed a clear pattern. → Analysis…", a: ["Analysis of the results showed a clear pattern.", "Analysis of the results revealed a clear pattern."] },
            { q: "Unemployment increased quickly, which worried the government. → The rapid…", a: ["The rapid increase in unemployment worried the government."] },
            { q: "Because the company failed to communicate, customers were confused. → The company's…", a: ["The company's failure to communicate confused customers.", "The company's failure to communicate led to customer confusion."] },
            { q: "If cities grow without planning, problems appear. → Unplanned…", a: ["Unplanned urban growth leads to problems.", "Unplanned urban growth causes problems.", "Unplanned growth leads to problems."] }
          ]
        },
        {
          type: "rewrite", title: "Hedge it",
          prompt: "These claims are too strong for the evidence. Rewrite them using the hedge in parentheses.",
          items: [
            { q: "This proves that diet affects memory. (suggest)", a: ["This suggests that diet affects memory.", "This suggests that diet may affect memory.", "These results suggest that diet affects memory."] },
            { q: "Students who sleep less get lower grades. (tend to)", a: ["Students who sleep less tend to get lower grades."] },
            { q: "The new policy caused the decline. (may have)", a: ["The new policy may have caused the decline."] },
            { q: "Teachers prefer online platforms. (most)", a: ["Most teachers prefer online platforms."] }
          ]
        },
        {
          type: "write", title: "Write an abstract",
          prompt: "Write an abstract for a real or imagined study related to your field or interests. Include: background, gap, aim, method, main findings (with appropriate hedging or boosting), limitation and implication. Use nominalization and an impersonal style.",
          minWords: 160, maxWords: 220,
          model: "The growing popularity of language-learning apps has transformed how adults study foreign languages. However, little is known about their effectiveness in developing speaking skills. The present study examined the oral progress of 85 adult learners of English in Puebla who used a mobile application for twelve weeks. Participants completed a speaking assessment before and after the intervention, and a subgroup took part in semi-structured interviews. Analysis revealed a modest improvement in fluency, whereas accuracy and pronunciation showed no significant change. Interestingly, learners who combined the app with weekly conversation sessions improved considerably more. These findings suggest that apps may be a useful complement to, rather than a substitute for, interactive practice. It should be noted that the sample was small and self-selected; further research with larger, randomized groups is therefore recommended.",
          bank: ["The growing… has…", "However, little is known about…", "The present study examined…", "Analysis revealed…", "Interestingly,…", "These findings suggest that…", "It should be noted that…", "Further research is recommended."],
          checklist: [
            "I included all seven parts of an abstract.",
            "I used at least **four** nominalizations.",
            "I hedged or boosted claims according to the evidence.",
            "I used an impersonal, objective style (passive, *the present study*)."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Read slowly and clearly, like in a presentation.",
          items: [
            "Analysis of the results showed a clear pattern.",
            "This suggests that diet affects memory.",
            "Students who sleep less tend to get lower grades.",
            "The new policy may have caused the decline.",
            "Most teachers prefer online platforms.",
            "Further research is recommended."
          ]
        },
        {
          type: "speak", title: "Present your research",
          prompt: "Record a 2-minute conference-style presentation of your abstract (Writing activity 3) or of a topic you know well. Use academic style, stance markers and hedging.",
          language: ["Good morning. Today I'll present…", "The aim of this study was to…", "Analysis revealed…", "Notably,…", "These findings suggest…", "A limitation of this study is…", "In conclusion,…"],
          seconds: 150,
          checklist: ["follow a clear academic structure?", "use nominalization?", "use both hedges and boosters?", "speak for about two minutes?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use nominalization to write concisely.", review: "Explanation: nominalization; Writing activity 1" },
    { can: "I can hedge claims with modals, verbs, adverbs and impersonal phrases.", review: "Explanation: hedging; Writing activity 2" },
    { can: "I can use boosters and stance markers appropriately.", review: "Explanation: boosters and stance" },
    { can: "I can identify the structure of an abstract.", review: "Reading activity 1" },
    { can: "I can understand an academic presentation.", review: "Listening: urban heat islands" },
    { can: "I can write and present research in an academic voice.", review: "Writing activity 3 and Speaking activities" }
  ]
};
