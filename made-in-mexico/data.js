window.UNIT = {
  slug: "made-in-mexico",
  title: "Made in Mexico",
  level: "B1",
  minutes: 55,
  speakers: { "Guide": "f", "Tourist": "m", "Don Aurelio": "m", "Reporter": "f", "Ana Lucía": "f", A: "f", B: "m" },
  focus: ["passive voice: is made, was built", "present simple and past simple passive", "by + the person who does it", "processes: How is it made?", "Mexican products and inventions"],

  presentation: {
    scene: "🏺🎨🔥🇲🇽",
    situation: "A group of exchange students visits a Talavera workshop in Puebla. The guide explains how the famous blue and white pottery is made.",
    warmup: {
      prompt: "Which of these things are made or grown in Mexico? Choose everything you know.",
      options: ["Talavera pottery", "avocados", "cars", "tequila", "chocolate", "silver jewelry", "TVs", "coffee", "vanilla", "beer", "textiles", "video games"],
      response: "Great! Actually, they're all made or grown in Mexico! In this unit you'll learn to describe processes and products."
    },
    dialogueTitle: "At the Talavera workshop",
    dialogue: [
      { who: "Guide", line: "Welcome! This workshop *was founded* in 1824. Real Talavera *is* still *made* by hand." },
      { who: "Tourist", line: "What *is* it *made* of?" },
      { who: "Guide", line: "Two kinds of clay are mixed. The clay *is* cleaned and then it *is left* to rest for months." },
      { who: "Tourist", line: "Months? Wow. And how *are* the pieces *shaped*?" },
      { who: "Guide", line: "They *are shaped* on a wheel, like this. Then they *are dried* and *fired* in the oven for the first time." },
      { who: "Tourist", line: "And the beautiful blue designs?" },
      { who: "Guide", line: "Every design *is painted by* an artist, using natural colors. After that, the pieces *are fired* again." },
      { who: "Tourist", line: "*Is* real Talavera only *made* in Puebla?" },
      { who: "Guide", line: "Real Talavera *is produced* only in Puebla and Tlaxcala. It *was recognized* by UNESCO in 2019." }
    ]
  },

  objectives: [
    "I can describe a process with the present simple passive.",
    "I can talk about history with the past simple passive.",
    "I can use *by* to say who does or did the action.",
    "I can decide when to use the active or the passive voice."
  ],

  explanation: {
    vocabTitle: "Making things",
    vocab: [
      { word: "made of clay", icon: "🏺" }, { word: "made by hand", icon: "✋" }, { word: "grown", icon: "🌱", say: "grow, grew, grown" },
      { word: "produced", icon: "🏭" }, { word: "invented", icon: "💡" }, { word: "built", icon: "🏗️", say: "build, built, built" },
      { word: "designed", icon: "📐" }, { word: "painted", icon: "🖌️" }, { word: "exported", icon: "🚢" },
      { word: "harvested", icon: "🧺" }, { word: "mixed", icon: "🥣" }, { word: "heated", icon: "🔥" },
      { word: "dried", icon: "☀️" }, { word: "sold", icon: "🏷️", say: "sell, sold, sold" }, { word: "discovered", icon: "🔍" }
    ],
    grammar: [
      {
        title: "Passive voice: form",
        head: ["Tense", "Form", "Example"],
        rows: [
          ["present simple", "*am / is / are* + participle", "Talavera *is made* in Puebla. Avocados *are grown* in Michoacán."],
          ["past simple", "*was / were* + participle", "The cathedral *was built* in the 16th and 17th centuries."],
          ["negative", "*isn't / wasn't* + participle", "It *isn't made* in factories. They *weren't sold* online."],
          ["question", "*Is / Was* + subject + participle?", "Where *is* coffee *grown*? When *was* it *invented*?"]
        ]
      },
      {
        title: "Active or passive?",
        head: ["Active (focus on who does it)", "Passive (focus on the thing or the process)"],
        rows: [
          ["An artist *paints* each design.", "Each design *is painted* (by an artist)."],
          ["Workers *harvest* the coffee in winter.", "The coffee *is harvested* in winter."],
          ["Guillermo González Camarena *invented* a color TV system.", "A color TV system *was invented by* Guillermo González Camarena."]
        ],
        note: "Use the passive when the action or the object is more important than who does it, or when we don't know who did it. Use *by* only when the person is important."
      },
      {
        title: "Describing a process",
        head: ["Step", "Example"],
        rows: [
          ["*First,*", "*First,* the cacao beans *are harvested*."],
          ["*Then,* / *After that,*", "*Then,* they *are dried* in the sun."],
          ["*Next,*", "*Next,* the beans *are roasted* and *ground*."],
          ["*Finally,*", "*Finally,* the chocolate *is mixed* with sugar and cinnamon."]
        ]
      }
    ],
    watchOut: [
      ["Talavera is make in Puebla.", "Talavera is made in Puebla."],
      ["The church built in 1649.", "The church was built in 1649."],
      ["Coffee is grow in Veracruz.", "Coffee is grown in Veracruz."],
      ["It was painted from an artist.", "It was painted by an artist."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the passive form of the verb in parentheses.",
      items: [
        "Avocados [[are grown]] in Michoacán. (grow)",
        "The Puebla cathedral [[was built]] in the 16th and 17th centuries. (build)",
        "Each piece [[is painted]] by hand. (paint)",
        "When [[was]] chocolate [[discovered]]? (discover)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A reporter visits Don Aurelio, a mezcal producer in Oaxaca. Listen to how mezcal is made.",
      title: "From the agave to the bottle",
      script: [
        { who: "Reporter", line: "Don Aurelio, your family has made mezcal for four generations. How is it made?" },
        { who: "Don Aurelio", line: "First, the agave plants are grown for about eight years. Some wild agaves need twenty years!" },
        { who: "Reporter", line: "That's a long time. What happens next?" },
        { who: "Don Aurelio", line: "When the plants are ready, the leaves are cut and only the heart is used. We call it the piña." },
        { who: "Don Aurelio", line: "Then the piñas are cooked in a hole in the ground, with hot stones, for three or four days. That's why mezcal has a smoky taste." },
        { who: "Reporter", line: "And after that?" },
        { who: "Don Aurelio", line: "After that, the agave is crushed. In the past, this was done by a horse that pulled a big stone wheel. Now some producers use machines, but we still use the horse." },
        { who: "Don Aurelio", line: "Finally, the juice is fermented and distilled two times, and the mezcal is put in bottles." },
        { who: "Reporter", line: "And where is your mezcal sold?" },
        { who: "Don Aurelio", line: "It's sold here in the village and in Oaxaca City, and last year it was exported to Japan for the first time!" }
      ],
      activities: [
        {
          type: "tiles", title: "The process in order",
          prompt: "Listen and make passive sentences about each step.",
          items: [
            { a: "The agave plants are grown for eight years." },
            { a: "The leaves are cut." },
            { a: "The piñas are cooked in a hole." },
            { a: "The agave is crushed by a horse." },
            { a: "The juice is fermented and distilled." }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete with one word or number.",
          items: [
            "Don Aurelio's family has made mezcal for [[four|4]] generations.",
            "Some wild agaves need [[twenty|20]] years.",
            "The piñas are cooked for three or four [[days]].",
            "Mezcal has a [[smoky]] taste.",
            "Last year, his mezcal was exported to [[Japan]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about Mexican inventions and contributions to the world.",
      title: "Mexico gave it to the world",
      text: [
        { body: "**Chocolate.** Cacao was grown by the Olmecs more than 3,000 years ago. Later, it was drunk by the Aztecs as a bitter, spicy drink. In the 16th century, it was taken to Europe, where sugar was added. Today, chocolate is eaten all over the world." },
        { body: "**Color television.** In 1940, a system for color TV was invented by Guillermo González Camarena, a young engineer from Guadalajara. He was only 23 years old! His system was later used in TV cameras sent into space." },
        { body: "**The contraceptive pill.** In 1951, a key molecule for the first birth control pill was created in Mexico City by the chemist Luis Ernesto Miramontes. He was only 26 years old." },
        { body: "**Corn.** Corn wasn't invented, but it was domesticated in Mexico around 9,000 years ago, from a wild plant called teosinte. Today, it's grown in almost every country and it's one of the most important foods in the world." }
      ],
      activities: [
        {
          type: "match", title: "Match the facts",
          prompt: "Match the beginnings and the endings.",
          pairs: [
            ["Cacao was grown by", "the Olmecs."],
            ["Sugar was added to chocolate", "in Europe."],
            ["A color TV system was invented by", "Guillermo González Camarena."],
            ["A key molecule for the pill was created by", "Luis Ernesto Miramontes."],
            ["Corn was domesticated from", "a wild plant called teosinte."]
          ]
        },
        {
          type: "rewrite", title: "Active to passive",
          prompt: "Rewrite the sentences in the passive. Use *by* only when it's important.",
          items: [
            { q: "The Aztecs drank chocolate.", a: ["Chocolate was drunk by the Aztecs."] },
            { q: "González Camarena invented a color TV system.", a: ["A color TV system was invented by González Camarena.", "A color TV system was invented by Guillermo González Camarena."] },
            { q: "People eat chocolate all over the world.", a: ["Chocolate is eaten all over the world."] },
            { q: "Farmers grow corn in almost every country.", a: ["Corn is grown in almost every country."] },
            { q: "They took cacao to Europe in the 16th century.", a: ["Cacao was taken to Europe in the 16th century."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the passive, then describe a product from your region.",
      activities: [
        {
          type: "gap", title: "How are cemitas made?",
          prompt: "Complete the process with the passive of the verbs in parentheses.",
          items: [
            "First, the bread [[is cut]] in half. (cut)",
            "Then, it [[is filled]] with milanesa, avocado and Oaxaca cheese. (fill)",
            "After that, some papalo leaves [[are added]]. (add)",
            "Finally, chipotle peppers [[are put]] on top. (put)",
            "The cemita [[was created]] in Puebla more than 100 years ago. (create)"
          ]
        },
        {
          type: "sort", title: "Active or passive?",
          prompt: "Is each sentence active or passive?",
          bins: ["Active", "Passive"],
          items: [
            { text: "An artist paints the designs.", bin: 0 }, { text: "Farmers harvest coffee in winter.", bin: 0 }, { text: "The Aztecs drank chocolate.", bin: 0 },
            { text: "The designs are painted by hand.", bin: 1 }, { text: "Coffee is harvested in winter.", bin: 1 }, { text: "The church was built in 1649.", bin: 1 }
          ]
        },
        {
          type: "write", title: "A product from my region",
          prompt: "Choose a product from your town or state (food, a drink, a craft, clothing…). Write a short article: where it's made or grown, how it's made (process), and something about its history. Use at least five passive sentences.",
          minWords: 80, maxWords: 120,
          model: "Mole poblano is one of the most famous dishes in Mexico. It's made in Puebla, and it's served at weddings, birthdays and important celebrations. According to a legend, it was invented by nuns in the convent of Santa Rosa in the 17th century. More than twenty ingredients are used, including different chiles, chocolate, nuts and spices. First, the chiles are toasted and soaked. Then, all the ingredients are ground together and cooked for hours. Today, mole is sold all over the country and it's even exported to the United States.",
          bank: ["… is made / grown in", "It was invented / created", "First, … is / are", "Then,", "After that,", "Finally,", "It is sold / exported"],
          checklist: [
            "I used at least **five** passive sentences.",
            "I used the present passive for the **process**.",
            "I used the past passive for the **history**.",
            "I used sequencers: *first, then, finally*."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice the weak *is* and *are* in passive sentences.",
          items: [
            "What is it made of?",
            "The leaves are cut by hand.",
            "Chocolate is eaten all over the world.",
            "Corn is grown in almost every country.",
            "The juice is fermented and distilled.",
            "Each piece is painted by hand."
          ]
        },
        {
          type: "speak", title: "How it's made",
          prompt: "Record yourself for about one minute, like a TV documentary. Explain how something is made (a dish, a drink, a craft) step by step, and say one fact about its history.",
          language: ["Today we're going to see how… is made.", "First, … is / are…", "Then,…", "After that,…", "Finally,…", "It was invented / created in…"],
          seconds: 90,
          checklist: ["explain at least four steps?", "use the present passive?", "use the past passive for history?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form the present simple passive.", review: "Explanation: passive voice form" },
    { can: "I can form the past simple passive.", review: "Explanation: passive voice form; Writing activity 1" },
    { can: "I can change active sentences into passive sentences.", review: "Explanation: active or passive?; Reading activity 2" },
    { can: "I can use *by* to say who did the action.", review: "Explanation: active or passive?" },
    { can: "I can describe a process step by step.", review: "Explanation: describing a process; Listening" },
    { can: "I can describe a product and its history in a text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
