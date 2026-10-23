window.UNIT = {
  slug: "never-have-i-seen",
  title: "Never Have I Seen…",
  level: "C1",
  minutes: 60,
  speakers: { "Gabriela": "f", "Ismael": "m", "Narrator": "f", "Critic": "m", "Presenter": "f", "Guest": "m", A: "f", B: "m" },
  focus: ["negative inversion: Never have I…, Rarely does…", "Not only… but also…", "No sooner… than / Hardly… when", "Only after / Only when / Not until", "Under no circumstances / At no time / Little did I know"],

  presentation: {
    scene: "🌋🎭🌅✨",
    situation: "Gabriela and Ismael have just watched the sunrise from the top of Pico de Orizaba, Mexico's highest mountain. Exhausted but amazed, they record a voice note for their friends.",
    warmup: {
      prompt: "Which of these experiences would leave you speechless? Choose the ones that would impress you most.",
      options: ["a sunrise from a mountain", "a total solar eclipse", "the northern lights", "a whale up close", "a live opera", "a monarch butterfly sanctuary", "a volcanic eruption", "a world-class football final", "an ancient city at dawn", "a meteor shower"],
      response: "Spectacular choices! In this unit you'll learn to add emphasis and drama to what you say and write."
    },
    dialogueTitle: "On top of Mexico",
    dialogue: [
      { who: "Gabriela", line: "Hi everyone! We made it! *Never have I seen* anything so beautiful in my life." },
      { who: "Ismael", line: "*Not only did we reach* the summit, *but we also* got here right at sunrise." },
      { who: "Gabriela", line: "Honestly, *little did I know* how hard it would be. *Hardly had we left* the hut *when* the wind started blowing like crazy." },
      { who: "Ismael", line: "And *only when* we reached the glacier *did I realize* how high we actually were." },
      { who: "Gabriela", line: "*Rarely do you get* a view like this. You can see Popocatépetl and La Malinche from here!" },
      { who: "Ismael", line: "One piece of advice for anyone thinking of doing it: *under no circumstances should you* climb without a guide." },
      { who: "Gabriela", line: "Absolutely. *At no time did we feel* unsafe, thanks to ours. OK, the sun is rising. Bye!" }
    ]
  },

  objectives: [
    "I can use negative and restrictive adverbials with inversion for emphasis.",
    "I can use *Not only… but also*, *No sooner… than* and *Hardly… when*.",
    "I can use *Only when / Only after / Not until* with inversion in the main clause.",
    "I can recognize when inversion is appropriate (formal, dramatic or written style)."
  ],

  explanation: {
    vocabTitle: "Emphatic and descriptive language",
    vocab: [
      { word: "breathtaking", icon: "😮" }, { word: "awe-inspiring", icon: "🌌" }, { word: "unforgettable", icon: "💫" },
      { word: "overwhelming", icon: "🌊" }, { word: "unprecedented", icon: "🆕" }, { word: "remarkable", icon: "⭐" },
      { word: "summit", icon: "🏔️" }, { word: "glacier", icon: "🧊" }, { word: "exhausted", icon: "🥵" },
      { word: "at no point", icon: "🚫" }, { word: "seldom", icon: "🐢" }, { word: "scarcely", icon: "🤏" },
      { word: "by no means", icon: "✋" }, { word: "on no account", icon: "⛔" }, { word: "little did I know", icon: "🤷" }
    ],
    grammar: [
      {
        title: "Negative inversion: the pattern",
        head: ["Normal order", "Inversion (adverbial + auxiliary + subject + verb)"],
        rows: [
          ["I have never seen anything so beautiful.", "*Never have I seen* anything so beautiful."],
          ["You rarely get a view like this.", "*Rarely do you get* a view like this."],
          ["We seldom go out on weekdays.", "*Seldom do we go* out on weekdays."],
          ["I didn't know how hard it would be.", "*Little did I know* how hard it would be."]
        ],
        note: "If there's no auxiliary in the normal sentence, add *do / does / did*: *She rarely complains* → *Rarely does she complain*."
      },
      {
        title: "Time and sequence",
        head: ["Structure", "Example"],
        rows: [
          ["*No sooner had* + subject + participle + *than*", "*No sooner had we arrived than* it started to rain."],
          ["*Hardly / Scarcely had* + subject + participle + *when*", "*Hardly had I sat down when* the phone rang."],
          ["*Only when / Only after* + clause, + inversion", "*Only when* I got home *did I notice* the mistake."],
          ["*Not until* + time/clause, + inversion", "*Not until* 2010 *was the law* changed."]
        ],
        note: "With *Only when / Not until*, the inversion happens in the **second** (main) clause."
      },
      {
        title: "Emphasis and prohibition",
        head: ["Structure", "Example"],
        rows: [
          ["*Not only* + inversion, *but* … *also*", "*Not only did she* win, *but she also* broke the record."],
          ["*Under no circumstances / On no account* + inversion", "*Under no circumstances should you* share your password."],
          ["*At no time* + inversion", "*At no time did the company* inform its clients."],
          ["*In no way* + inversion", "*In no way am I* responsible for this."]
        ]
      }
    ],
    watchOut: [
      ["Never I have seen such a mess.", "Never have I seen such a mess."],
      ["Rarely she complains.", "Rarely does she complain."],
      ["Only when I arrived I understood.", "Only when I arrived did I understand."],
      ["No sooner had we left when it rained.", "No sooner had we left than it rained."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete each sentence with the missing auxiliary or word.",
      items: [
        "Never [[have]] I tasted such delicious mole.",
        "Not only [[did]] he forget my birthday, but he also lost my gift.",
        "No sooner had the concert started [[than]] the lights went out.",
        "Under no circumstances [[should|must]] you open this door."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a theater critic reviewing a new play on a cultural radio program.",
      title: "Review: *The Last Train to Puebla*",
      script: [
        { who: "Presenter", line: "Tonight we're discussing The Last Train to Puebla, which opened at the Teatro Principal last week. What did you think?" },
        { who: "Critic", line: "Rarely have I been so moved in a theater. Not only is the script brilliant, but the cast is also extraordinary. The lead actress, in particular, is a revelation." },
        { who: "Presenter", line: "Some people say the first act is slow." },
        { who: "Critic", line: "That's true, it is. But only in the second act does the audience understand why. Hardly had the curtain risen after the interval when I heard people gasping. I won't spoil it." },
        { who: "Presenter", line: "And the set design?" },
        { who: "Critic", line: "Remarkable. At no point did I feel I was in a theater. They've built an entire 1920s train station on stage. Seldom does a regional production have this level of ambition." },
        { who: "Presenter", line: "Any criticisms?" },
        { who: "Critic", line: "The music was occasionally too loud. But in no way did that ruin the experience. Under no circumstances should you miss it. It closes on the thirtieth." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are these sentences true or false according to the critic?",
          items: [
            { s: "The critic was rarely moved by the play.", a: false },
            { s: "He praises both the script and the actors.", a: true },
            { s: "He agrees the first act is slow.", a: true },
            { s: "He explains the surprise in the second act.", a: false },
            { s: "The set is a 1920s train station.", a: true },
            { s: "The loud music ruined the experience.", a: false }
          ]
        },
        {
          type: "gap", title: "Complete the critic's sentences",
          prompt: "Listen again and complete with the exact words.",
          items: [
            "[[Rarely]] have I been so moved in a theater.",
            "Not only is the script brilliant, but the cast is [[also]] extraordinary.",
            "Hardly had the curtain risen after the interval [[when]] I heard people gasping.",
            "At no point [[did]] I feel I was in a theater.",
            "Under no circumstances [[should]] you miss it."
          ]
        }
      ]
    },

    reading: {
      intro: "Read an extract from a travel memoir about the monarch butterfly sanctuaries in Michoacán.",
      title: "The forest that breathes",
      text: [
        { body: "We set off from the village before dawn, climbing through a pine forest so silent that we could hear our own hearts. Our guide, Don Celestino, had warned us that the butterflies might not be active; only when the sun warms the trees, he explained, do they begin to fly." },
        { body: "For an hour we saw nothing but branches covered in what looked like dry orange leaves. Little did we realize that each \"leaf\" was a butterfly, and that millions of them were sleeping just above our heads. No sooner had the first rays of sunlight touched the branches than the forest seemed to exhale. The air filled with orange and black wings, so many that the sound was like soft rain." },
        { body: "Never before had I felt so small, nor so privileged. These insects had flown more than four thousand kilometers from Canada and the United States, a journey that no single butterfly completes twice. Not until scientists tracked them in the 1970s did the outside world discover where they spent the winter, although the local communities had known for centuries." },
        { body: "Before leaving, Don Celestino reminded us of the rules. On no account were we to touch the butterflies or leave the path. \"Seldom do visitors understand,\" he said quietly, \"that this forest is not a museum. It is alive, and it is fragile.\"" }
      ],
      activities: [
        {
          type: "match", title: "Find the meaning",
          prompt: "Match each inverted phrase from the text with its meaning in normal word order.",
          pairs: [
            ["Only when the sun warms the trees do they begin to fly.", "They begin to fly only when the sun warms the trees."],
            ["Little did we realize that each leaf was a butterfly.", "We didn't realize at all that each leaf was a butterfly."],
            ["Never before had I felt so small.", "I had never felt so small before."],
            ["Not until scientists tracked them did the world discover…", "The world didn't discover it until scientists tracked them."],
            ["Seldom do visitors understand…", "Visitors seldom understand…"]
          ]
        },
        {
          type: "tf", title: "Understanding the text",
          prompt: "Are these sentences true or false according to the text?",
          items: [
            { s: "The butterflies were flying when the group arrived.", a: false },
            { s: "At first the butterflies looked like dry leaves.", a: true },
            { s: "Each butterfly makes the journey several times.", a: false },
            { s: "Local communities knew about the butterflies before scientists did.", a: true },
            { s: "Visitors were allowed to leave the path.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice transforming sentences, then write a dramatic description of an experience.",
      activities: [
        {
          type: "rewrite", title: "Add emphasis",
          prompt: "Rewrite each sentence starting with the words given.",
          items: [
            { q: "I have never eaten such spicy food. → Never…", a: ["Never have I eaten such spicy food."] },
            { q: "She not only sings, but she also writes her own songs. → Not only…", a: ["Not only does she sing, but she also writes her own songs.", "Not only does she sing but she also writes her own songs."] },
            { q: "We had just got home when the storm started. → No sooner…", a: ["No sooner had we got home than the storm started.", "No sooner had we gotten home than the storm started."] },
            { q: "I understood the problem only after I read the report. → Only after…", a: ["Only after I read the report did I understand the problem.", "Only after I had read the report did I understand the problem.", "Only after reading the report did I understand the problem."] },
            { q: "You must not tell anyone about this. → Under no circumstances…", a: ["Under no circumstances must you tell anyone about this.", "Under no circumstances should you tell anyone about this."] }
          ]
        },
        {
          type: "tiles", title: "Build the inversions",
          items: [
            { a: "Seldom do we see such talent." },
            { a: "Little did she know what was coming." },
            { a: "Not until midnight did they arrive." },
            { a: "At no time was the public informed." },
            { a: "Hardly had I closed my eyes when the alarm rang." }
          ]
        },
        {
          type: "write", title: "An unforgettable moment",
          prompt: "Write a vivid description of an unforgettable experience (a trip, a performance, a natural event, a personal achievement) for a travel or culture blog. Use at least five different inversion structures, but keep the text natural.",
          minWords: 160, maxWords: 230,
          model: "Never have I felt as nervous as I did on the night of my first piano recital at the Casa de la Cultura. I was fourteen, and little did I know that the evening would change the way I saw myself. No sooner had I sat down at the piano than my hands started shaking. For a terrible moment, I couldn't remember the first note. Only when I saw my grandmother smiling in the front row did I manage to breathe and begin. Not only did I play the whole piece without a mistake, but I also enjoyed it, which surprised me most of all. When I finished, the applause was overwhelming. Rarely have I felt so proud. Since then, whenever I face a challenge, I remember that night and remind myself that fear doesn't have to win.",
          bank: ["Never have I…", "Little did I know that…", "No sooner had I… than…", "Only when… did I…", "Not only did…, but… also…", "Rarely have I…", "At no point did I…"],
          checklist: [
            "I used at least **five** different inversion structures.",
            "I added *do / does / did* when necessary.",
            "I used *than* with *No sooner* and *when* with *Hardly*.",
            "My text still sounds natural, not overloaded."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Stress the first words: *NEVER have I…, LITTLE did she…*",
          items: [
            "Never have I eaten such spicy food.",
            "Seldom do we see such talent.",
            "Little did she know what was coming.",
            "Not until midnight did they arrive.",
            "At no time was the public informed.",
            "Rarely have I been so moved."
          ]
        },
        {
          type: "speak", title: "A review",
          prompt: "Record a 90-second review of a film, concert, restaurant or place you have visited. Use inversion to emphasize your strongest opinions, positive or negative.",
          language: ["Rarely have I…", "Not only is it…, but it's also…", "At no point did I…", "Under no circumstances should you…", "Only when… did I…", "Seldom does…"],
          seconds: 120,
          checklist: ["use at least four inversions?", "give a clear opinion?", "describe specific details?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use negative adverbials with inversion (*Never have I…*).", review: "Explanation: negative inversion" },
    { can: "I can use *No sooner… than* and *Hardly… when* correctly.", review: "Explanation: time and sequence" },
    { can: "I can use *Only when / Not until* with inversion in the main clause.", review: "Explanation: time and sequence; Writing activity 1" },
    { can: "I can use *Not only… but also* and *Under no circumstances*.", review: "Explanation: emphasis and prohibition" },
    { can: "I can understand inversion in literary and journalistic texts.", review: "Reading and Listening" },
    { can: "I can use inversion naturally to add drama to a story or review.", review: "Writing activity 3 and Speaking activities" }
  ]
};
