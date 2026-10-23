window.UNIT = {
  slug: "it-must-have-been",
  title: "It Must Have Been…",
  level: "B2",
  minutes: 60,
  speakers: { "Sandra": "f", "Rubén": "m", "Detective Ochoa": "m", "Lucero": "f", "Host": "f", "Dr. Pineda": "m", A: "f", B: "m" },
  focus: ["modals of deduction: must, might, could, can't", "present: It must be… / She can't be…", "past: It must have been… / He can't have…", "degrees of certainty", "speculating about mysteries"],

  presentation: {
    scene: "🔍🧩🏚️❓",
    situation: "Sandra and Rubén arrive at their shared apartment after a weekend away. The door is unlocked, the kitchen is a mess, and their cat is missing.",
    warmup: {
      prompt: "Which of these mysteries would you like to investigate? Choose everything that interests you.",
      options: ["the pyramids of Egypt", "the Bermuda Triangle", "crop circles", "UFO sightings", "the Mary Celeste ship", "Stonehenge", "the Nazca Lines", "ghost stories in Puebla", "the Loch Ness monster", "the lost city of Atlantis"],
      response: "Interesting! In this unit you'll learn to speculate about mysteries and make logical deductions."
    },
    dialogueTitle: "Who's been in our apartment?",
    dialogue: [
      { who: "Sandra", line: "The door's open! Someone *must have come* in while we were away." },
      { who: "Rubén", line: "Wait, it *can't have been* a burglar. The TV and the laptop are still here." },
      { who: "Sandra", line: "True. Look at the kitchen, though. Someone *must have been* really hungry. They ate all the cake!" },
      { who: "Rubén", line: "And where's Mishi? She *might have run* out when the door was open." },
      { who: "Sandra", line: "Or she *could be* hiding under the bed. She does that when she's scared." },
      { who: "Rubén", line: "Hold on… there's a note on the fridge: \"Fed the cat, ate your cake, sorry! – M.\"" },
      { who: "Sandra", line: "M? It *must be* my sister Mariana. She has a key!" },
      { who: "Rubén", line: "So she *must have forgotten* to lock the door. Typical Mariana!" }
    ]
  },

  objectives: [
    "I can make logical deductions about the present with *must, might, could* and *can't*.",
    "I can speculate about the past with *must have, might have, could have* and *can't have* + past participle.",
    "I can express different degrees of certainty.",
    "I can discuss mysteries and unexplained events, giving reasons for my opinions."
  ],

  explanation: {
    vocabTitle: "Language for speculating",
    vocab: [
      { word: "evidence", icon: "🧾" }, { word: "a clue", icon: "🔎" }, { word: "a theory", icon: "💭" },
      { word: "a suspect", icon: "🕵️" }, { word: "unexplained", icon: "❓" }, { word: "a hoax", icon: "🎭" },
      { word: "a coincidence", icon: "🎲" }, { word: "likely", icon: "📈" }, { word: "unlikely", icon: "📉" },
      { word: "obviously", icon: "💡" }, { word: "apparently", icon: "👀" }, { word: "presumably", icon: "🤔" },
      { word: "disappear", icon: "💨" }, { word: "conclude", icon: "✅" }, { word: "rule out", icon: "🚫" }
    ],
    grammar: [
      {
        title: "Degrees of certainty: present",
        head: ["Certainty", "Modal + infinitive", "Example"],
        rows: [
          ["~95% sure it's true", "*must* + verb", "She *must be* tired. She worked all night."],
          ["~50% possible", "*might / may / could* + verb", "He *might be* at the gym. He *could be* asleep."],
          ["~95% sure it's NOT true", "*can't* + verb", "That *can't be* Luis. He's in Canada."],
          ["in progress now", "*must / might / can't be* + -ing", "They *must be having* dinner."]
        ],
        note: "The opposite of *must* for deduction is *can't*, not *mustn't*. *Mustn't* means prohibition."
      },
      {
        title: "Degrees of certainty: past",
        head: ["Certainty", "Modal + have + participle", "Example"],
        rows: [
          ["~95% sure", "*must have* + participle", "The ground is wet. It *must have rained*."],
          ["possible", "*might / may / could have* + participle", "She *might have missed* the bus."],
          ["~95% sure NOT", "*can't / couldn't have* + participle", "He *can't have stolen* it. He was with me."]
        ],
        note: "In speech, *have* is reduced: *must've* /ˈmʌstəv/, *might've*, *can't've*. Never write *must of*!"
      },
      {
        title: "Other ways to speculate",
        head: ["Expression", "Example"],
        rows: [
          ["*I bet…* / *I'm sure…*", "*I bet* she forgot."],
          ["*It's likely / unlikely that…*", "*It's unlikely that* aliens built the pyramids."],
          ["*There's no way…*", "*There's no way* he did it alone."],
          ["*Perhaps / Maybe / Presumably*", "*Presumably*, the thief knew the code."]
        ]
      }
    ],
    watchOut: [
      ["He mustn't be at home; the lights are off.", "He can't be at home; the lights are off."],
      ["She must went home early.", "She must have gone home early."],
      ["They must of forgotten.", "They must have forgotten."],
      ["It can be John at the door. (possibility now)", "It could be / might be John at the door."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *must, might* or *can't* (+ *have* if it's the past).",
      items: [
        "Ana's phone is off. She [[must|might]] be in the cinema.",
        "He [[can't]] be hungry. He's just eaten two tortas!",
        "The window is broken. Someone [[must have]] thrown a stone.",
        "I'm not sure where my keys are. I [[might have|may have|could have]] left them at work."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a podcast episode, *Unsolved*, about a strange case in Puebla.",
      title: "Unsolved: the vanishing painting",
      script: [
        { who: "Host", line: "Welcome to Unsolved. Today, a case from 1987. A colonial painting disappeared from a locked church in Puebla overnight. I'm here with Detective Ochoa, who investigated the case, and Lucero, a journalist." },
        { who: "Detective Ochoa", line: "The church was locked at nine p.m. and opened at six a.m. There were no broken windows and the lock was intact. So whoever did it must have had a key." },
        { who: "Lucero", line: "Or they might have hidden inside before the church was locked. It's a huge building with lots of corners." },
        { who: "Detective Ochoa", line: "That's possible, but the painting was three meters wide. One person can't have carried it out alone. There must have been at least two people." },
        { who: "Host", line: "Some people say it was the priest himself." },
        { who: "Lucero", line: "I don't think so. He can't have been involved. He was at a hospital with his mother that night. Several nurses saw him." },
        { who: "Detective Ochoa", line: "My theory is that it was an inside job. The sacristan had a key and disappeared a week later. He must have sold it to a private collector." },
        { who: "Lucero", line: "Or he might have been frightened that people would blame him. We just don't know. The painting could be hanging in someone's living room right now." }
      ],
      activities: [
        {
          type: "sort", title: "How certain are they?",
          prompt: "Listen. Is each statement presented as almost certain, possible, or almost impossible?",
          bins: ["Almost certain (must)", "Possible (might / could)", "Almost impossible (can't)"],
          items: [
            { text: "The thief had a key.", bin: 0 }, { text: "There were at least two people.", bin: 0 }, { text: "The sacristan sold it.", bin: 0 },
            { text: "The thief hid inside before closing.", bin: 1 }, { text: "The sacristan was frightened.", bin: 1 }, { text: "The painting is in a living room now.", bin: 1 },
            { text: "One person carried it alone.", bin: 2 }, { text: "The priest was involved.", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The painting disappeared in the 1980s.", a: true },
            { s: "One of the windows was broken.", a: false },
            { s: "The painting was very large.", a: true },
            { s: "The priest was at a hospital that night.", a: true },
            { s: "The sacristan disappeared the next morning.", a: false },
            { s: "The police found the painting years later.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a popular science magazine about a famous mystery.",
      title: "The Nazca Lines: who drew them, and why?",
      text: [
        { body: "In the Peruvian desert, there are hundreds of enormous drawings cut into the ground: a monkey, a hummingbird, a spider, and long straight lines that run for kilometers. They were made by the Nazca people between 500 BCE and 500 CE, but they can only be fully appreciated from the air. So how did people without planes create them so precisely?" },
        { body: "In the 1960s, some writers claimed that the lines must have been landing strips for alien spacecraft. Scientists reject this idea. \"The ground is soft,\" explains one archaeologist who has studied the lines for decades. \"A spaceship can't have landed there. It would have sunk!\"" },
        { body: "Most researchers now believe the Nazca must have used simple tools: wooden stakes and ropes to measure and copy small drawings on a large scale. Experiments have shown that a small team could have made a large figure in a few days." },
        { body: "The purpose is still debated. The lines might have been paths for religious processions, or they may have been connected to water, which was precious in the desert. Some figures could have been messages to the gods, meant to be seen from the sky. What is certain is that the climate helped: with almost no rain or wind, the lines have survived for two thousand years." }
      ],
      activities: [
        {
          type: "match", title: "Theories and opinions",
          prompt: "Match each idea with how the article presents it.",
          pairs: [
            ["The lines were alien landing strips.", "Scientists say this can't be true."],
            ["The Nazca used stakes and ropes.", "Most researchers think this must be true."],
            ["A small team made a figure in days.", "Experiments show this could have happened."],
            ["The lines were paths for processions.", "This is one possible purpose."],
            ["The dry climate preserved the lines.", "This is presented as certain."]
          ]
        },
        {
          type: "rewrite", title: "Rewrite with a modal",
          prompt: "Rewrite each sentence using the modal in parentheses + *have* + participle.",
          items: [
            { q: "I'm sure the Nazca used ropes. (must)", a: ["The Nazca must have used ropes."] },
            { q: "It's impossible that a spaceship landed there. (can't)", a: ["A spaceship can't have landed there."] },
            { q: "Perhaps the lines were paths. (might)", a: ["The lines might have been paths."] },
            { q: "It's possible that the figures were messages to the gods. (could)", a: ["The figures could have been messages to the gods."] },
            { q: "I'm sure the climate helped. (must)", a: ["The climate must have helped."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice speculating, then write your own theory about a mystery.",
      activities: [
        {
          type: "gap", title: "What happened?",
          prompt: "Look at the situation and complete with a modal + *have* + the verb in parentheses.",
          items: [
            "Leo's eyes are red and he's yawning. He [[must have stayed]] up late. (stay)",
            "Paola didn't answer my message. She [[might have been|may have been|could have been]] busy. (be)",
            "Toño got 10 on the exam, but he never studies. He [[must have cheated|can't have studied]]… or he's a genius! (cheat)",
            "The car is still here. They [[can't have left|couldn't have left]] yet. (leave)",
            "My wallet isn't in my bag. I [[might have dropped|may have dropped|could have dropped|must have dropped]] it on the bus. (drop)"
          ]
        },
        {
          type: "tiles", title: "Build the deductions",
          items: [
            { a: "She must have forgotten about the meeting." },
            { a: "They can't be at home right now." },
            { a: "He might have taken the wrong bus." },
            { a: "It must be raining in the mountains." },
            { a: "You can't have seen him yesterday." }
          ]
        },
        {
          type: "write", title: "My theory",
          prompt: "Choose a mystery (the Nazca Lines, a ghost story from your town, a strange event you experienced, or the vanishing painting). Write a short article: describe the facts, rule out some explanations, and give your own theory with reasons.",
          minWords: 120, maxWords: 180,
          model: "Every year, people in my grandparents' town report hearing music at midnight near the old hacienda, which has been empty for fifty years. Some say it must be the ghost of the owner's daughter, who loved to play the piano. However, it can't be a piano, because the instrument was sold in the 1970s. Others think that teenagers might be playing a joke, but the sound has been heard for decades, so it can't have been the same group. In my opinion, the wind must be passing through the broken windows and creating the sound. It might also have been amplified by the shape of the valley. Whatever the explanation, the legend is a great story for Day of the Dead.",
          bank: ["Some people believe…", "However, it can't be…", "It must have been…", "It might / could have…", "This theory is unlikely because…", "In my opinion,…", "Whatever the explanation,…"],
          checklist: [
            "I described the **facts** of the mystery.",
            "I used present modals (*must be, can't be*) and past modals (*must have been*).",
            "I ruled out at least one theory with *can't*.",
            "I gave reasons for my opinion."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. *Must have* sounds like /mʌstəv/ and *might have* like /maɪtəv/.",
          items: [
            "She must have forgotten about the meeting.",
            "They can't be at home right now.",
            "He might have taken the wrong bus.",
            "It must be raining in the mountains.",
            "You can't have seen him yesterday.",
            "The climate must have helped."
          ]
        },
        {
          type: "speak", title: "Explain a mystery",
          prompt: "Record yourself for about 90 seconds. Present a famous or local mystery, explain two theories, rule one out, and say what you think must have happened.",
          language: ["One of the greatest mysteries is…", "According to one theory,…", "This can't be true because…", "It's more likely that…", "Personally, I think … must have…"],
          seconds: 120,
          checklist: ["present the mystery clearly?", "explain two theories?", "use past modals of deduction?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can make deductions about the present with *must, might, could, can't*.", review: "Explanation: degrees of certainty, present" },
    { can: "I can speculate about the past with modal + *have* + participle.", review: "Explanation: degrees of certainty, past; Reading activity 2" },
    { can: "I know that the opposite of *must* (deduction) is *can't*.", review: "Explanation: watch out!" },
    { can: "I can use other expressions: *I bet, it's unlikely that, presumably*.", review: "Explanation: other ways to speculate" },
    { can: "I can follow a discussion where people speculate about a case.", review: "Listening: the vanishing painting" },
    { can: "I can present and discuss theories about a mystery in writing or speaking.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
