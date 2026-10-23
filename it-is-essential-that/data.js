window.UNIT = {
  slug: "it-is-essential-that",
  title: "It Is Essential That…",
  level: "C2",
  minutes: 60,
  speakers: { "Dr. Cervantes": "f", "Joel": "m", "Chair": "m", "Delegate": "f", "Spokesperson": "f", A: "f", B: "m" },
  focus: ["the mandative subjunctive: It is essential that he be…", "verbs of demand: insist, recommend, propose that she attend", "the formulaic subjunctive: Be that as it may, Come what may", "were-subjunctive: If I were…, as it were", "formal rules, policies and recommendations"],

  presentation: {
    scene: "🏛️📜⚖️🖋️",
    situation: "Joel, a student representative, is helping Dr. Cervantes draft new rules for the university's research ethics committee. The document must be precise and formal.",
    warmup: {
      prompt: "Which of these documents use very formal language? Choose all that apply.",
      options: ["university regulations", "a wedding invitation", "a legal contract", "a text message", "a job offer letter", "terms and conditions", "a recipe", "a court ruling", "minutes of a meeting", "a scientific protocol", "a diplomatic statement", "a restaurant review"],
      response: "Exactly. In this unit you'll learn the structures that make formal rules, recommendations and statements sound precise and authoritative."
    },
    dialogueTitle: "Drafting the ethics rules",
    dialogue: [
      { who: "Joel", line: "OK, rule one: \"Researchers should ask participants for permission.\"" },
      { who: "Dr. Cervantes", line: "Too weak. Try: \"*It is essential that* every participant *give* written consent before the study begins.\"" },
      { who: "Joel", line: "\"Give\"? Not \"gives\"?" },
      { who: "Dr. Cervantes", line: "Right. That's the *subjunctive*: the base form, with no *-s*, for every subject. It's typical of formal requirements." },
      { who: "Joel", line: "Got it. Rule two: \"*The committee recommends that* data *be* stored securely for five years.\"" },
      { who: "Dr. Cervantes", line: "Perfect. And note *be*, not *is*. Now, what about students who disagree with a decision?" },
      { who: "Joel", line: "\"*We propose that* any appeal *be submitted* in writing within fifteen days.\"" },
      { who: "Dr. Cervantes", line: "Excellent. Some colleagues will say it sounds old-fashioned. *Be that as it may*, legal precision matters here." }
    ]
  },

  objectives: [
    "I can use the mandative subjunctive after adjectives like *essential, vital, imperative*.",
    "I can use the subjunctive after verbs like *insist, recommend, propose, demand*.",
    "I can recognize fixed subjunctive expressions and the *were*-subjunctive.",
    "I can write formal rules, recommendations and resolutions, and choose alternatives (*should*) appropriately."
  ],

  explanation: {
    vocabTitle: "Formal and legal vocabulary",
    vocab: [
      { word: "imperative", icon: "❗" }, { word: "mandatory", icon: "📌" }, { word: "stipulate", icon: "📜" },
      { word: "comply with", icon: "✅" }, { word: "be subject to", icon: "⚖️" }, { word: "hereby", icon: "🖋️" },
      { word: "in accordance with", icon: "📏" }, { word: "pursuant to", icon: "➡️" }, { word: "notwithstanding", icon: "🧱" },
      { word: "waive", icon: "👋" }, { word: "enforce", icon: "👮" }, { word: "breach", icon: "💥" },
      { word: "consent", icon: "✍️" }, { word: "confidentiality", icon: "🔒" }, { word: "appeal", icon: "📨" }
    ],
    grammar: [
      {
        title: "Mandative subjunctive after adjectives",
        head: ["Structure", "Example"],
        rows: [
          ["*It is essential / vital / crucial that* + subject + base verb", "*It is essential that* each student *attend* the induction."],
          ["*It is imperative / important that* …", "*It is imperative that* the data *be* kept confidential."],
          ["negative: *not* + base verb", "*It is important that* he *not be* disturbed."]
        ],
        note: "The base form is the same for all persons: *that he be, that she attend, that it not be*. In British English, *should* + verb is a common alternative: *It is essential that each student should attend.*"
      },
      {
        title: "Subjunctive after verbs and nouns",
        head: ["Verb / noun", "Example"],
        rows: [
          ["*insist that*", "The doctor *insisted that* she *rest* for a week."],
          ["*recommend / suggest that*", "We *recommend that* the policy *be* reviewed annually."],
          ["*propose / request / demand that*", "They *demanded that* the minister *resign*."],
          ["*the requirement / proposal that*", "*The requirement that* every member *pay* a fee was removed."]
        ]
      },
      {
        title: "Fixed expressions and were",
        head: ["Expression", "Meaning / use"],
        rows: [
          ["*Be that as it may,…*", "Even if that is true,…"],
          ["*Come what may,…*", "Whatever happens,…"],
          ["*So be it.*", "OK, I accept it (reluctantly)."],
          ["*God save the King / Long live…*", "formulaic wishes"],
          ["*If I were you… / as it were*", "*were*-subjunctive for unreal situations; *as it were* = so to speak"]
        ]
      }
    ],
    watchOut: [
      ["It is essential that he attends the meeting. (formal written)", "It is essential that he attend the meeting. / …that he should attend…"],
      ["We recommend that the report is revised.", "We recommend that the report be revised."],
      ["They insisted that she doesn't leave.", "They insisted that she not leave."],
      ["Be that as it is,…", "Be that as it may,…"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the subjunctive form of the verb in parentheses.",
      items: [
        "It is vital that every employee [[be]] informed of the changes. (be)",
        "The committee recommends that the budget [[be]] approved. (be)",
        "She insisted that her son [[apologize|apologise]] immediately. (apologize)",
        "It is essential that the patient [[not eat]] anything before surgery. (not eat)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an extract from a formal meeting of an international environmental organization.",
      title: "Resolution on plastic waste",
      script: [
        { who: "Chair", line: "Order, please. We now turn to the draft resolution on plastic waste. I invite the delegate from Mexico to present the proposal." },
        { who: "Delegate", line: "Thank you, Mr. Chair. In view of the alarming increase in plastic pollution in our oceans, my delegation proposes that member states adopt the following measures." },
        { who: "Delegate", line: "First, we recommend that all single-use plastic bags be phased out by 2030. Second, it is essential that manufacturers be held responsible for the collection and recycling of their packaging. Third, we request that a monitoring committee be established to report annually on progress." },
        { who: "Chair", line: "Thank you. Are there any objections?" },
        { who: "Spokesperson", line: "Mr. Chair, my delegation supports the spirit of the resolution. However, we insist that developing countries receive financial support to implement these measures. Otherwise, the burden would be unfair." },
        { who: "Delegate", line: "We fully accept that amendment. It is imperative that no country be left behind." },
        { who: "Chair", line: "Be that as it may, we must also agree on the timeline. I suggest that the working group meet again tomorrow and present a final text. The session is adjourned." }
      ],
      activities: [
        {
          type: "match", title: "Who proposes what?",
          prompt: "Match the beginnings and endings of the sentences you hear.",
          pairs: [
            ["We recommend that all single-use plastic bags", "be phased out by 2030."],
            ["It is essential that manufacturers", "be held responsible for recycling."],
            ["We request that a monitoring committee", "be established."],
            ["We insist that developing countries", "receive financial support."],
            ["I suggest that the working group", "meet again tomorrow."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the statements true or false?",
          items: [
            { s: "The Mexican delegate presents the resolution.", a: true },
            { s: "The proposal is to phase out plastic bags by 2040.", a: false },
            { s: "The spokesperson opposes the resolution completely.", a: false },
            { s: "The Mexican delegate accepts the amendment.", a: true },
            { s: "A final text will be presented the following day.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an extract from university regulations (a fictional document created for this unit).",
      title: "Regulations for the submission of theses",
      text: [
        { body: "**Article 1.** It is essential that every candidate submit the final thesis no later than thirty days before the date of the oral examination. Late submissions shall not be accepted unless the Academic Committee expressly authorizes an extension." },
        { body: "**Article 2.** The Committee requires that each thesis be accompanied by a declaration of originality signed by the candidate and the supervisor. It is imperative that all sources be acknowledged in accordance with the citation style approved by the faculty." },
        { body: "**Article 3.** Where research involves human participants, it is mandatory that written informed consent be obtained prior to data collection. The Committee recommends that the corresponding documentation be included as an appendix." },
        { body: "**Article 4.** Should a candidate wish to contest a decision of the examining board, it is required that the appeal be submitted in writing within fifteen working days. The Committee shall respond within thirty days." },
        { body: "**Article 5.** Notwithstanding the above, the Committee may, in exceptional circumstances, waive any of these requirements, provided that the decision be recorded in the minutes of the corresponding session." }
      ],
      activities: [
        {
          type: "sort", title: "Find the subjunctive",
          prompt: "Classify each phrase from the regulations.",
          bins: ["Subjunctive (base form)", "Other formal structure"],
          items: [
            { text: "…that every candidate submit the final thesis…", bin: 0 }, { text: "…that each thesis be accompanied by…", bin: 0 },
            { text: "…that all sources be acknowledged…", bin: 0 }, { text: "…that written informed consent be obtained…", bin: 0 },
            { text: "Late submissions shall not be accepted…", bin: 1 }, { text: "Should a candidate wish to contest…", bin: 1 },
            { text: "Notwithstanding the above,…", bin: 1 }
          ]
        },
        {
          type: "tf", title: "Understanding the regulations",
          prompt: "Are these statements true or false according to the regulations?",
          items: [
            { s: "Theses must be submitted at least thirty days before the exam.", a: true },
            { s: "Late submissions are always accepted.", a: false },
            { s: "Only the candidate needs to sign the declaration of originality.", a: false },
            { s: "Appeals must be submitted in writing.", a: true },
            { s: "The Committee can never change the requirements.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice formal transformations, then write a set of rules or recommendations.",
      activities: [
        {
          type: "rewrite", title: "Make it formal",
          prompt: "Rewrite each sentence using the subjunctive structure given.",
          items: [
            { q: "All visitors must wear a helmet. (It is essential that…)", a: ["It is essential that all visitors wear a helmet."] },
            { q: "The report should be revised. (We recommend that…)", a: ["We recommend that the report be revised."] },
            { q: "He must not be disturbed. (It is important that…)", a: ["It is important that he not be disturbed."] },
            { q: "The manager must resign. (The workers demanded that…)", a: ["The workers demanded that the manager resign."] },
            { q: "Every member should pay the fee by May. (It is vital that…)", a: ["It is vital that every member pay the fee by May."] }
          ]
        },
        {
          type: "gap", title: "Fixed expressions",
          prompt: "Complete each fixed subjunctive expression.",
          items: [
            "Be that as it [[may]], we still need a decision today.",
            "Come what [[may]], I'll finish this marathon.",
            "If they want to cancel the project, so [[be]] it.",
            "If I [[were]] you, I'd accept the offer.",
            "He's the heart of the team, as it [[were]]."
          ]
        },
        {
          type: "write", title: "Rules and recommendations",
          prompt: "Write a formal document (regulations for a library, a code of conduct for a sports club, recommendations from a committee, or a resolution for a student assembly). Include at least five articles or points. Use the mandative subjunctive at least six times and one fixed expression.",
          minWords: 170, maxWords: 240,
          model: "Code of Conduct for Members of the BUAP Mountaineering Club. 1. It is essential that every member complete the basic safety course before participating in any expedition. 2. The Board requires that each participant carry a first-aid kit, a headlamp and sufficient water. 3. It is imperative that no member leave the group without informing the expedition leader. 4. The Club recommends that all equipment be inspected at least once a month and that any damage be reported immediately. 5. Should weather conditions deteriorate, it is vital that the leader's decision to turn back be respected without exception. Some members may consider these rules excessively strict. Be that as it may, the Board insists that the safety of every climber take priority over reaching the summit. Approved by the Board on 15 March.",
          bank: ["It is essential that…", "The Board requires that…", "It is imperative that… not…", "The Club recommends that… be…", "Should…,", "Be that as it may,…", "…insists that… take priority…"],
          checklist: [
            "I used the **subjunctive** at least **six** times.",
            "I used the base form for all subjects (*he be, she attend*).",
            "I used at least **one** fixed expression.",
            "My document has a formal structure and register."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Use a formal, authoritative tone.",
          items: [
            "It is essential that all visitors wear a helmet.",
            "We recommend that the report be revised.",
            "It is important that he not be disturbed.",
            "The workers demanded that the manager resign.",
            "Be that as it may, we need a decision.",
            "Are there any objections?"
          ]
        },
        {
          type: "speak", title: "Official statement",
          prompt: "Record a 90-second official statement as a spokesperson (for a university, company, city or organization) responding to a problem and announcing measures. Use the subjunctive and formal language.",
          language: ["On behalf of…,", "In light of recent events,…", "It is imperative that…", "We have requested that…", "We recommend that all… be…", "Come what may, we remain committed to…"],
          seconds: 120,
          checklist: ["use the subjunctive at least four times?", "use formal vocabulary?", "sound authoritative and clear?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the subjunctive after *essential, vital, imperative*.", review: "Explanation: mandative subjunctive" },
    { can: "I can use the subjunctive after *insist, recommend, propose, demand*.", review: "Explanation: subjunctive after verbs; Writing activity 1" },
    { can: "I can form negative and passive subjunctives (*not be, be done*).", review: "Explanation; watch out!" },
    { can: "I can use fixed expressions (*Be that as it may, Come what may*).", review: "Explanation: fixed expressions; Writing activity 2" },
    { can: "I can understand formal regulations and resolutions.", review: "Listening and Reading" },
    { can: "I can write and present formal rules and statements.", review: "Writing activity 3 and Speaking activities" }
  ]
};
