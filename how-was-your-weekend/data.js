window.UNIT = {
  slug: "how-was-your-weekend",
  title: "How Was Your Weekend?",
  level: "B1",
  minutes: 55,
  focus: ["past simple: regular verbs", "irregular verbs", "was / were", "Did you…?", "last weekend, on Saturday"],

  presentation: {
    scene: "🎬⚽🍕🎶",
    situation: "It's Monday morning at BUAP. Before class, two friends talk about their **weekend**. What did they do?",
    warmup: {
      prompt: "What did you do last weekend? Choose everything you did.",
      options: ["I stayed at home", "I watched a movie", "I played soccer", "I visited my family", "I went to a party", "I studied", "I cleaned my room", "I went shopping", "I slept a lot", "I worked"],
      response: "Nice! You're already using the past simple."
    },
    dialogueTitle: "Monday morning",
    dialogue: [
      { who: "Carla", line: "Hi, Beto! *How was* your weekend?" },
      { who: "Beto", line: "It *was* great, thanks. On Saturday I *played* soccer with my cousins." },
      { who: "Carla", line: "Cool! *Did* you *win*?" },
      { who: "Beto", line: "No, we *didn't*. We *lost* three to one! What about you?" },
      { who: "Carla", line: "I *went* to a concert on Sunday. My sister *bought* the tickets." },
      { who: "Beto", line: "Wow! *Was* it good?" },
      { who: "Carla", line: "Yes, it *was* amazing. We *danced* all night, but I *didn't sleep* much!" }
    ]
  },

  objectives: [
    "I can talk about past activities with regular and irregular verbs.",
    "I can use *was* and *were* to describe the past.",
    "I can ask and answer questions with *Did you…?* and *How was…?*",
    "I can tell a short story about my weekend in order."
  ],

  explanation: {
    vocabTitle: "Weekend activities",
    vocab: [
      { word: "stayed at home", icon: "🏠" }, { word: "watched a movie", icon: "🎬" }, { word: "played soccer", icon: "⚽" },
      { word: "visited my grandparents", icon: "👵" }, { word: "cleaned my room", icon: "🧹" }, { word: "cooked dinner", icon: "🍳" },
      { word: "went to a party", icon: "🎉" }, { word: "went shopping", icon: "🛍️" }, { word: "ate out", icon: "🍕" },
      { word: "had a barbecue", icon: "🍖" }, { word: "saw a concert", icon: "🎶" }, { word: "did my homework", icon: "📚" },
      { word: "slept late", icon: "😴" }, { word: "rode my bike", icon: "🚲" }, { word: "met my friends", icon: "👫" }
    ],
    grammar: [
      {
        title: "Past simple: regular verbs",
        intro: "Add **-ed** to the verb. It's the same for all people (I, you, he, she, we, they).",
        head: ["Rule", "Examples"],
        rows: [
          ["most verbs + *-ed*", "play → *played*, watch → *watched*, visit → *visited*"],
          ["verbs ending in -e + *-d*", "dance → *danced*, like → *liked*"],
          ["consonant + y → *-ied*", "study → *studied*, try → *tried*"],
          ["short verb: double the consonant", "stop → *stopped*, plan → *planned*"]
        ],
        note: "Pronunciation: *watched* /t/, *played* /d/, *visited* /ɪd/."
      },
      {
        title: "Common irregular verbs",
        head: ["Verb", "Past", "Verb", "Past"],
        rows: [
          ["go", "*went*", "have", "*had*"],
          ["eat", "*ate*", "see", "*saw*"],
          ["buy", "*bought*", "get", "*got*"],
          ["do", "*did*", "make", "*made*"],
          ["meet", "*met*", "ride", "*rode*"],
          ["sleep", "*slept*", "lose", "*lost*"]
        ]
      },
      {
        title: "Negatives, questions and was / were",
        head: ["Form", "Example"],
        rows: [
          ["didn't + base verb", "I *didn't go* out. (NOT didn't went)"],
          ["Did + subject + base verb?", "*Did* you *see* the game? – Yes, I *did*. / No, I *didn't*."],
          ["Wh- + did + subject + verb?", "*What did* you *do*? *Where did* you *go*?"],
          ["I / he / she / it + *was*", "The party *was* fun. It *wasn't* expensive."],
          ["you / we / they + *were*", "We *were* tired. *Were* you at home?"]
        ]
      }
    ],
    watchOut: [
      ["I didn't went to the party.", "I didn't go to the party."],
      ["Did you watched the game?", "Did you watch the game?"],
      ["I goed to the park.", "I went to the park."],
      ["We was very tired.", "We were very tired."]
    ],
    check: {
      type: "gap", title: "Quick check", prompt: "Write the verb in the past simple.",
      items: [
        "On Saturday I [[visited]] my aunt. (visit)",
        "We [[went]] to the cinema. (go)",
        "[[Did]] you have a good time? – Yes, it [[was]] fun!"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to the podcast *Teen Weekends*. Three students talk about last weekend.",
      title: "Teen Weekends podcast",
      script: [
        { who: "Host", line: "Welcome to Teen Weekends! Today we have three guests. Rodrigo, how was your weekend?" },
        { who: "Rodrigo", line: "It was really busy. On Saturday morning I worked at my uncle's shop. In the afternoon I played basketball. I was so tired that I slept for eleven hours!" },
        { who: "Host", line: "Wow! And you, Fernanda?" },
        { who: "Fernanda", line: "My weekend was quiet. I stayed at home and studied for a math test. On Sunday my mom and I cooked enchiladas for the family. They were delicious." },
        { who: "Host", line: "Sounds nice. Did you go out at all?" },
        { who: "Fernanda", line: "No, I didn't. It rained all weekend." },
        { who: "Host", line: "And finally, Marcos?" },
        { who: "Marcos", line: "I went to Puebla with my parents. We visited my grandparents and ate mole. Then we saw a little festival in the square. We didn't get home until Sunday night." }
      ],
      activities: [
        {
          type: "sort", title: "Who did what?",
          prompt: "Put each activity under the right person.",
          bins: ["Rodrigo", "Fernanda", "Marcos"],
          items: [
            { text: "worked at a shop", bin: 0 }, { text: "played basketball", bin: 0 }, { text: "slept for 11 hours", bin: 0 },
            { text: "studied for a test", bin: 1 }, { text: "cooked enchiladas", bin: 1 }, { text: "stayed at home", bin: 1 },
            { text: "went to Puebla", bin: 2 }, { text: "ate mole", bin: 2 }, { text: "saw a festival", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Listen for the verbs",
          prompt: "Listen again and complete with the past form you hear.",
          items: [
            "On Saturday morning Rodrigo [[worked]] at his uncle's shop.",
            "He [[was]] very tired.",
            "Fernanda's weekend [[was]] quiet.",
            "She [[didn't]] go out because it [[rained]].",
            "Marcos [[visited]] his grandparents and [[saw]] a festival."
          ]
        }
      ]
    },

    reading: {
      intro: "Read Sebastián's blog post about a weekend that went wrong.",
      title: "The worst weekend ever (but it was funny!)",
      text: [
        { body: "Last Saturday was my best friend's birthday. We planned a picnic in Chapultepec Park. I got up early and made sandwiches. My friend Ale bought a big cake." },
        { body: "We arrived at the park at eleven, but there was a problem: I didn't bring the sandwiches! They were in my kitchen. Then, at one o'clock, it started to rain. We ran to a café and waited for an hour." },
        { body: "When the rain stopped, we went back to the park and ate the cake. It was a little wet, but we laughed a lot. In the end, it was a really good day." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          items: [
            { s: "The picnic was for a friend's birthday.", a: true },
            { s: "Sebastián forgot the cake.", a: false },
            { s: "It rained at one o'clock.", a: true },
            { s: "They went home after the rain.", a: false },
            { s: "Sebastián says it was a good day.", a: true }
          ]
        },
        {
          type: "match", title: "Find the past form in the text",
          prompt: "Match each verb with its past form from the text.",
          pairs: [["get up", "got up"], ["make", "made"], ["buy", "bought"], ["stop", "stopped"], ["run", "ran"], ["eat", "ate"]]
        }
      ]
    },

    writing: {
      intro: "Practice questions and negatives, then write about your weekend.",
      activities: [
        {
          type: "tiles", title: "Make questions about the weekend",
          items: [
            { a: "How was your weekend?" },
            { a: "What did you do on Saturday?" },
            { a: "Did you go to the party?" },
            { a: "Where did you have lunch?" },
            { a: "Were your friends at the concert?" },
            { a: "I didn't watch the game." }
          ]
        },
        {
          type: "rewrite", title: "Find and fix the mistake",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "Yesterday I go to the market.", a: ["Yesterday I went to the market."] },
            { q: "We didn't saw the movie.", a: ["We didn't see the movie."] },
            { q: "Did she visited her aunt?", a: ["Did she visit her aunt?"] },
            { q: "My parents was at home.", a: ["My parents were at home."] },
            { q: "I studyed for three hours.", a: ["I studied for three hours."] },
            { q: "Where you went on Sunday?", a: ["Where did you go on Sunday?"] }
          ]
        },
        {
          type: "write", title: "My weekend",
          prompt: "Write a post about last weekend. Say what you did on Saturday and Sunday, who you were with, and how it was. Include one thing you didn't do.",
          minWords: 60, maxWords: 100,
          model: "Last weekend was relaxing. On Saturday morning I cleaned my room and helped my mom in the kitchen. In the afternoon I met my friends at the mall. We ate pizza and watched a horror movie. It was scary but funny! On Sunday I didn't go out. I stayed at home, did my homework and played video games with my brother. It was a good weekend.",
          bank: ["Last weekend was…", "On Saturday morning", "In the afternoon", "In the evening", "On Sunday", "I didn't…", "It was fun / boring / amazing", "with my family / friends"],
          checklist: ["I wrote about Saturday **and** Sunday.", "I used at least **three** irregular verbs.", "I used *didn't* + base verb once.", "I used *was* or *were* to say how it was."]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice the weak *was* in questions: /wəz/.",
          items: [
            "How was your weekend?",
            "Did you go to the party?",
            "Where did you have lunch?",
            "Were your friends at the concert?",
            "I didn't watch the game.",
            "I studied for three hours."
          ]
        },
        {
          type: "speak", title: "Tell the story of your weekend",
          prompt: "Record a one-minute story about last weekend (or your best weekend this year). Tell it in order: start, middle, end.",
          language: ["First,", "Then,", "After that,", "In the end,", "It was…", "I felt…"],
          seconds: 80,
          checklist: ["tell the story in order?", "use at least five past verbs?", "say how you felt or how it was?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use regular past verbs like *played, studied, stopped*.", review: "Explanation: regular verbs" },
    { can: "I can use common irregular verbs like *went, ate, saw, bought*.", review: "Explanation: irregular verbs; Reading activity 2" },
    { can: "I can use *was* and *were* correctly.", review: "Explanation: was / were" },
    { can: "I can make negatives with *didn't* + base verb.", review: "Writing activity 2" },
    { can: "I can ask and answer *Did you…?* and *How was…?*", review: "Speaking activity 1: listen and repeat" },
    { can: "I can tell a short story about my weekend.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
