window.UNIT = {
  slug: "it-is-said-that",
  title: "It Is Said That…",
  level: "C1",
  minutes: 60,
  speakers: { "Anchor": "f", "Correspondent": "m", "Inés": "f", "Bernardo": "m", "Professor": "f", A: "f", B: "m" },
  focus: ["It is said / believed / thought that…", "He is said to be / to have been…", "There is thought to be…", "distancing and hedging in the news", "fact vs. rumor vs. claim"],

  presentation: {
    scene: "📰📺🔎🗞️",
    situation: "Inés and Bernardo are journalism students at BUAP. They're reviewing a draft article about a famous local legend, the tunnels under Puebla's historic center.",
    warmup: {
      prompt: "Where do you usually get your news? Choose everything that is true.",
      options: ["TV news", "news websites", "social media", "newspapers", "podcasts", "radio", "YouTube", "friends and family", "WhatsApp groups", "news apps", "I don't follow the news", "international media"],
      response: "Interesting! In this unit you'll learn the impersonal language of reports, news and academic texts."
    },
    dialogueTitle: "Editing the article",
    dialogue: [
      { who: "Inés", line: "Your first sentence says: \"There are secret tunnels under all of Puebla.\" That's too strong. We can't prove it." },
      { who: "Bernardo", line: "But everybody says so!" },
      { who: "Inés", line: "Exactly. So write: \"*It is said that* a network of tunnels runs under the historic center.\"" },
      { who: "Bernardo", line: "OK. And the part about the monks?" },
      { who: "Inés", line: "\"The tunnels *are believed to have been used* by monks to move between convents.\" We don't have documents." },
      { who: "Bernardo", line: "But some tunnels were really found in 2015. The government opened one to tourists." },
      { who: "Inés", line: "Right, that's a fact, so no distancing needed. But the claim about the hidden treasure? \"*There is thought to be* treasure…\" No, that's just a rumor." },
      { who: "Bernardo", line: "Fine. \"Some residents *claim that* treasure is hidden there, but no evidence has been found.\"" }
    ]
  },

  objectives: [
    "I can use impersonal passive structures: *It is said / believed / reported that…*",
    "I can use personal passive structures: *He is said to be / to have done…*",
    "I can use *There is thought / believed to be…*",
    "I can distinguish facts, beliefs and rumors, and report information with appropriate distance."
  ],

  explanation: {
    vocabTitle: "News and reporting",
    vocab: [
      { word: "allegedly", icon: "🗣️" }, { word: "reportedly", icon: "📰" }, { word: "according to", icon: "📑" },
      { word: "a rumor", icon: "🤫" }, { word: "a claim", icon: "📢" }, { word: "a source", icon: "🔗" },
      { word: "evidence", icon: "🧾" }, { word: "confirm", icon: "✅" }, { word: "deny", icon: "❌" },
      { word: "fake news", icon: "🚫" }, { word: "fact-check", icon: "🔎" }, { word: "bias", icon: "⚖️" },
      { word: "speculation", icon: "💭" }, { word: "investigate", icon: "🕵️" }, { word: "eyewitness", icon: "👁️" }
    ],
    grammar: [
      {
        title: "Impersonal: It + passive + that",
        head: ["Active", "Passive (It is… that)"],
        rows: [
          ["People say that the house is haunted.", "*It is said that* the house is haunted."],
          ["Experts believe that the city was founded in 1531.", "*It is believed that* the city was founded in 1531."],
          ["Police think the thieves escaped by car.", "*It is thought that* the thieves escaped by car."]
        ],
        note: "Common verbs: *say, believe, think, report, claim, estimate, expect, know, understand, consider, rumor*."
      },
      {
        title: "Personal: Subject + passive + to-infinitive",
        head: ["Time relation", "Structure", "Example"],
        rows: [
          ["same time (present)", "*is said to* + infinitive", "The house *is said to be* haunted."],
          ["ongoing now", "*is said to be* + -ing", "The minister *is believed to be negotiating* a deal."],
          ["earlier (past)", "*is said to have* + participle", "The monks *are believed to have used* the tunnels."],
          ["past report, earlier action", "*was said to have* + participle", "He *was thought to have left* the country."]
        ]
      },
      {
        title: "There + passive + to be",
        head: ["Structure", "Example"],
        rows: [
          ["*There is said / thought / believed to be* + noun", "*There is thought to be* treasure under the church."],
          ["*There are estimated to be* + plural", "*There are estimated to be* 3 million people in the area."],
          ["*There is reported to have been* + noun", "*There is reported to have been* an explosion."]
        ]
      }
    ],
    watchOut: [
      ["It is said the house to be haunted.", "It is said that the house is haunted. / The house is said to be haunted."],
      ["He is believed that he lives in Spain.", "He is believed to live in Spain. / It is believed that he lives in Spain."],
      ["The painting is thought to be stolen in 1990.", "The painting is thought to have been stolen in 1990."],
      ["There is thought being gold here.", "There is thought to be gold here."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "It is [[said|believed|thought|reported]] that the actor will retire next year.",
        "The singer is believed [[to]] be living in Los Angeles.",
        "The ship is thought to [[have]] sunk in 1715.",
        "There [[are]] estimated to be 500 species of birds in the reserve."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a TV news bulletin with two stories.",
      title: "Evening news",
      script: [
        { who: "Anchor", line: "Good evening. Our top story: a sixteenth-century manuscript has been discovered in a private library in Puebla. Our correspondent reports." },
        { who: "Correspondent", line: "Thank you. The manuscript, found during renovation works, is believed to have been written by a Franciscan friar around 1560. It is thought to contain one of the earliest descriptions of the city. Experts from the national university are expected to confirm its authenticity next month." },
        { who: "Anchor", line: "Is anything known about how it ended up in a private collection?" },
        { who: "Correspondent", line: "Not yet. It is rumored that the family bought it at an auction in Spain in the nineteenth century, but the family has refused to comment." },
        { who: "Anchor", line: "In other news, a powerful storm hit the coast of Veracruz last night. There are reported to have been strong winds of up to 150 kilometers per hour. Around two thousand people are estimated to have been evacuated. No deaths have been confirmed, but several fishermen are said to be missing." },
        { who: "Anchor", line: "We'll have more on both stories after the break." }
      ],
      activities: [
        {
          type: "sort", title: "Confirmed or not?",
          prompt: "Is each piece of information presented as a confirmed fact or as a belief, estimate or rumor?",
          bins: ["Confirmed fact", "Belief / estimate / rumor"],
          items: [
            { text: "A manuscript has been discovered.", bin: 0 }, { text: "A storm hit Veracruz last night.", bin: 0 }, { text: "The family refused to comment.", bin: 0 },
            { text: "It was written by a Franciscan friar.", bin: 1 }, { text: "The family bought it in Spain.", bin: 1 },
            { text: "About 2,000 people were evacuated.", bin: 1 }, { text: "Several fishermen are missing.", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Complete the report",
          prompt: "Listen again and complete with the exact words.",
          items: [
            "The manuscript is believed to have been [[written]] by a Franciscan friar.",
            "It is [[thought]] to contain one of the earliest descriptions of the city.",
            "Experts are [[expected]] to confirm its authenticity next month.",
            "It is [[rumored|rumoured]] that the family bought it at an auction.",
            "Several fishermen are said to be [[missing]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about how misinformation spreads online.",
      title: "Why lies travel faster than the truth",
      text: [
        { body: "A large study of millions of posts on social media found that false stories spread significantly faster and further than true ones. False news is estimated to reach people several times faster than accurate reporting, and it is not bots but humans who are thought to be mainly responsible." },
        { body: "Why? Researchers believe that false stories tend to be more surprising and emotional. A story claiming that a celebrity is said to have secretly married, or that a common food is believed to cause cancer, triggers curiosity, fear or anger, emotions that make us want to share. True news, on the other hand, is often more complex and less shocking." },
        { body: "Language plays a role too. Many misleading posts imitate the style of real journalism. Phrases such as \"it is reported that\" or \"experts are said to be worried\" give an impression of authority, even when no real source is mentioned. A responsible journalist, by contrast, uses these structures to show that information has not been fully confirmed, and always explains who said it." },
        { body: "So, before you share, ask yourself three questions: Who is the source? Is the information confirmed, or only claimed? And why does this story make me feel so strongly? It is estimated that just pausing for a few seconds before sharing reduces the spread of false news considerably." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read the article. Are these sentences true or false according to the writer?",
          items: [
            { s: "True stories spread faster than false ones.", a: false },
            { s: "Bots are thought to be mainly responsible for spreading false news.", a: false },
            { s: "False stories often provoke strong emotions.", a: true },
            { s: "Misleading posts sometimes imitate journalistic language.", a: true },
            { s: "Pausing before sharing can reduce the spread of false news.", a: true }
          ]
        },
        {
          type: "rewrite", title: "Change the structure",
          prompt: "Rewrite each sentence using the personal structure (*Subject + is said / believed… to…*).",
          items: [
            { q: "It is estimated that false news reaches people faster.", a: ["False news is estimated to reach people faster."] },
            { q: "It is thought that humans are mainly responsible.", a: ["Humans are thought to be mainly responsible."] },
            { q: "It is said that the celebrity has secretly married.", a: ["The celebrity is said to have secretly married.", "The celebrity is said to have married secretly."] },
            { q: "It is believed that this food causes cancer.", a: ["This food is believed to cause cancer."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice transformations, then write a news report.",
      activities: [
        {
          type: "rewrite", title: "Two ways to report",
          prompt: "Rewrite each sentence using the structure given in parentheses.",
          items: [
            { q: "People believe that the bridge was built by the Romans. (The bridge…)", a: ["The bridge is believed to have been built by the Romans."] },
            { q: "Experts expect that prices will rise. (Prices…)", a: ["Prices are expected to rise."] },
            { q: "Police think the suspect is hiding in the mountains. (The suspect…)", a: ["The suspect is thought to be hiding in the mountains."] },
            { q: "They say there is a ghost in the castle. (There…)", a: ["There is said to be a ghost in the castle."] },
            { q: "People reported that the singer cancelled the concert. (It…)", a: ["It was reported that the singer had cancelled the concert.", "It was reported that the singer cancelled the concert.", "It was reported that the singer had canceled the concert.", "It was reported that the singer canceled the concert."] }
          ]
        },
        {
          type: "tiles", title: "Build the news sentences",
          items: [
            { a: "The president is expected to resign." },
            { a: "It is believed that the fire started in the kitchen." },
            { a: "The thieves are thought to have escaped." },
            { a: "There are said to be problems with the system." },
            { a: "The town was founded in the sixteenth century." }
          ]
        },
        {
          type: "write", title: "A news report",
          prompt: "Write a short news report about a local event, real or invented (a discovery, an accident, a festival, a scandal). Clearly separate confirmed facts from beliefs, estimates and rumors. Use at least six reporting structures.",
          minWords: 160, maxWords: 230,
          model: "PUEBLA – A colonial tunnel was discovered on Tuesday during construction works on 5 de Mayo Avenue. The tunnel, which is approximately two meters high, is thought to have been built in the seventeenth century, although experts from INAH have not yet confirmed its age. It is believed that the passage once connected the cathedral with a nearby convent. Workers reported finding ceramic fragments and several coins, which are estimated to date from around 1680. Some local residents claim that the tunnel is part of a larger network that runs under the entire historic center. However, there is said to be no documentary evidence of this. Construction has been suspended and the site is expected to remain closed for at least three months while archaeologists investigate.",
          bank: ["… is thought to have been…", "It is believed that…", "… are estimated to date from…", "Some residents claim that…", "There is said to be…", "… is expected to…", "has not yet been confirmed"],
          checklist: [
            "I used at least **six** reporting structures.",
            "I used both *It is said that* and *X is said to…*",
            "I used a perfect infinitive (*to have been*) for past events.",
            "I clearly separated facts from beliefs and rumors."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Use a neutral, news-reader tone.",
          items: [
            "Prices are expected to rise.",
            "The president is expected to resign.",
            "Humans are thought to be mainly responsible.",
            "There is said to be a ghost in the castle.",
            "The thieves are thought to have escaped.",
            "It is believed that the fire started in the kitchen."
          ]
        },
        {
          type: "speak", title: "News bulletin",
          prompt: "Record a 90-second news bulletin with two or three stories. Use neutral, impersonal language and reporting structures, as on TV.",
          language: ["Good evening. Our top story…", "It is reported that…", "… is believed to have…", "Around… are estimated to…", "Authorities are expected to…", "In other news,…"],
          seconds: 120,
          checklist: ["use at least six reporting structures?", "sound neutral and objective?", "separate facts from claims?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *It is said / believed / thought that…*", review: "Explanation: impersonal passive" },
    { can: "I can use *Subject + is said to + infinitive*.", review: "Explanation: personal passive; Reading activity 2" },
    { can: "I can use perfect and continuous infinitives (*to have been, to be doing*).", review: "Explanation: personal passive; Writing activity 1" },
    { can: "I can use *There is thought to be…*", review: "Explanation: there + passive" },
    { can: "I can distinguish facts, beliefs and rumors in the news.", review: "Listening and Reading" },
    { can: "I can write and present a news report with appropriate distance.", review: "Writing activity 3 and Speaking activities" }
  ]
};
