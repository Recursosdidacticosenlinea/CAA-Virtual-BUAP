window.UNIT = {
  slug: "where-are-you-going",
  title: "Where Are You Going?",
  level: "B1",
  minutes: 55,
  focus: ["comparatives: bigger, more expensive", "superlatives: the biggest, the most…", "better / the best", "as … as"],

  presentation: {
    scene: "🏖️🏔️🏙️✈️",
    situation: "The school vacation is coming. Andrea and Luis are choosing a place to go with their families. **Which place is better** for them?",
    warmup: {
      prompt: "What's important for you on vacation? Choose everything that matters.",
      options: ["cheap", "relaxing", "exciting", "warm weather", "cold weather", "close to home", "good food", "beaches", "mountains", "museums", "nightlife", "nature"],
      response: "Great! Now let's compare places."
    },
    dialogueTitle: "Beach or city?",
    dialogue: [
      { who: "Andrea", line: "*Where are you going* this vacation, Luis?" },
      { who: "Luis", line: "We can't decide: Oaxaca or Puerto Escondido. Puerto Escondido is *hotter* and *more relaxing*." },
      { who: "Andrea", line: "But Oaxaca is *more interesting*. It has *the best* food in Mexico!" },
      { who: "Luis", line: "That's true. And the bus to Oaxaca is *cheaper* and *faster*." },
      { who: "Andrea", line: "We're going to Mérida. It's *the hottest* place I know, but the beaches near it are *the most beautiful*." },
      { who: "Luis", line: "Mérida is *farther* than Oaxaca, right?" },
      { who: "Andrea", line: "Yes, much farther! We're flying. It's *more expensive*, but it's *not as tiring as* the bus." }
    ]
  },

  objectives: [
    "I can compare two places with comparative adjectives.",
    "I can say which place is the best, the biggest, the most… with superlatives.",
    "I can use irregular forms: *good – better – the best, bad – worse – the worst, far – farther – the farthest*.",
    "I can give my opinion and choose a vacation place."
  ],

  explanation: {
    vocabTitle: "Adjectives to describe places",
    vocab: [
      { word: "hot", icon: "🌡️" }, { word: "cold", icon: "🥶" }, { word: "big", icon: "🏙️" },
      { word: "small", icon: "🏘️" }, { word: "cheap", icon: "💸" }, { word: "expensive", icon: "💎" },
      { word: "crowded", icon: "👥" }, { word: "quiet", icon: "🤫" }, { word: "beautiful", icon: "🌅" },
      { word: "interesting", icon: "🏛️" }, { word: "relaxing", icon: "🧘" }, { word: "exciting", icon: "🎢" },
      { word: "dangerous", icon: "⚠️" }, { word: "safe", icon: "🛡️" }, { word: "far", icon: "🧭" }
    ],
    grammar: [
      {
        title: "Comparatives: comparing two things",
        head: ["Adjective", "Rule", "Example"],
        rows: [
          ["short (1 syllable)", "+ *-er* than", "Mérida is *hotter than* Puebla. Cancún is *bigger than* Tulum."],
          ["ending in -y", "y → *-ier* than", "The beach is *busier than* the town."],
          ["long (2+ syllables)", "*more* + adjective + than", "Tulum is *more expensive than* Oaxaca."],
          ["irregular", "good → *better*, bad → *worse*, far → *farther*", "The food here is *better than* at home."],
          ["not as … as", "*not as* + adjective + *as*", "The bus is *not as fast as* the plane."]
        ],
        note: "One-syllable adjectives ending in consonant-vowel-consonant double the last letter: hot → hotter, big → bigger."
      },
      {
        title: "Superlatives: the number one in a group",
        head: ["Adjective", "Rule", "Example"],
        rows: [
          ["short", "*the* + *-est*", "It's *the hottest* city in the country."],
          ["ending in -y", "*the* + *-iest*", "Saturday is *the busiest* day."],
          ["long", "*the most* + adjective", "This is *the most beautiful* beach I know."],
          ["irregular", "*the best*, *the worst*, *the farthest*", "Oaxaca has *the best* food!"]
        ],
        note: "Use *in* with places and groups: *the biggest city in Mexico*, *the best student in the class*."
      }
    ],
    watchOut: [
      ["Mérida is more hot than Puebla.", "Mérida is hotter than Puebla."],
      ["Oaxaca is more cheaper.", "Oaxaca is cheaper."],
      ["It's the most big city.", "It's the biggest city."],
      ["The food is more good here.", "The food is better here."]
    ],
    check: {
      type: "gap", title: "Quick check", prompt: "Write the correct form of the adjective.",
      items: [
        "The plane is [[faster]] than the bus. (fast)",
        "Tulum is [[more expensive]] than Oaxaca. (expensive)",
        "This is [[the best]] vacation of my life! (good)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a travel agent helping the Medina family choose between three places.",
      title: "At the travel agency",
      script: [
        { who: "Agent", line: "Good morning! So, you have three options: Veracruz, San Cristóbal and Los Cabos." },
        { who: "Mrs. Medina", line: "Which one is the cheapest?" },
        { who: "Agent", line: "Veracruz is the cheapest. It's also the closest, only five hours by bus." },
        { who: "Mr. Medina", line: "And the weather? We don't want a very hot place." },
        { who: "Agent", line: "San Cristóbal is the coldest. It's in the mountains, so it's cooler than Veracruz and Los Cabos." },
        { who: "Mrs. Medina", line: "The kids want beaches. Which beaches are the most beautiful?" },
        { who: "Agent", line: "Los Cabos has the most beautiful beaches, but it's the most expensive option. It's also the farthest." },
        { who: "Mr. Medina", line: "Hmm. Veracruz has beaches too, and it's cheaper. Is it more crowded?" },
        { who: "Agent", line: "In July, yes. It's busier than San Cristóbal, but the food is excellent." },
        { who: "Mrs. Medina", line: "OK, I think Veracruz is the best option for us." }
      ],
      activities: [
        {
          type: "match", title: "Which place is it?",
          prompt: "Match the place with the description.",
          pairs: [
            ["Veracruz", "the cheapest and the closest"],
            ["San Cristóbal", "the coldest, in the mountains"],
            ["Los Cabos", "the most expensive and the farthest"],
            ["the family's choice", "Veracruz"]
          ]
        },
        {
          type: "gap", title: "Complete what the agent says",
          prompt: "Listen again and complete with comparatives or superlatives.",
          items: [
            "Veracruz is [[the cheapest]].",
            "San Cristóbal is [[cooler]] than Veracruz and Los Cabos.",
            "Los Cabos has [[the most beautiful]] beaches.",
            "In July, Veracruz is [[busier]] than San Cristóbal."
          ]
        }
      ]
    },

    reading: {
      intro: "Read the reviews on a travel website for students.",
      title: "Student Travel Reviews",
      text: [
        { author: "Mariana ★★★★★ · Guanajuato", body: "Guanajuato is the most colorful city I know. It's smaller than Mexico City and much quieter. The streets are narrow and steep, so wear comfortable shoes! The hostels are cheaper than in the capital." },
        { author: "Kevin ★★★☆☆ · Cancún", body: "The beaches are amazing, the most beautiful I've seen. But Cancún is more expensive than other places, and the hotel zone is the most crowded area. For students, Holbox is a better option: it's calmer and cheaper." },
        { author: "Paola ★★★★☆ · Chihuahua", body: "The Copper Canyon is bigger and deeper than the Grand Canyon! It's the best place for nature lovers. The train is slower than the bus, but the views are better. In winter it's the coldest place I visited." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          items: [
            { s: "Guanajuato is bigger than Mexico City.", a: false },
            { s: "Hostels in Guanajuato are cheaper than in the capital.", a: true },
            { s: "Kevin thinks Holbox is better for students than Cancún.", a: true },
            { s: "The Copper Canyon is smaller than the Grand Canyon.", a: false },
            { s: "The train is faster than the bus.", a: false }
          ]
        },
        {
          type: "sort", title: "Comparative or superlative?",
          prompt: "Sort the phrases from the reviews.",
          bins: ["Comparative (two things)", "Superlative (the number one)"],
          items: [
            { text: "smaller than", bin: 0 }, { text: "much quieter", bin: 0 }, { text: "more expensive than", bin: 0 }, { text: "calmer and cheaper", bin: 0 }, { text: "bigger and deeper", bin: 0 },
            { text: "the most colorful", bin: 1 }, { text: "the most beautiful", bin: 1 }, { text: "the most crowded", bin: 1 }, { text: "the best place", bin: 1 }, { text: "the coldest", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Build comparisons, then write a review of a place you know.",
      activities: [
        {
          type: "tiles", title: "Build the comparisons",
          items: [
            { a: "Puebla is bigger than Tlaxcala." },
            { a: "The plane is more expensive than the bus." },
            { a: "This is the most beautiful beach in Mexico." },
            { a: "Summer is the hottest season." },
            { a: "The train is not as fast as the plane." },
            { a: "Which city is the best for students?" }
          ]
        },
        {
          type: "rewrite", title: "Compare with the information",
          prompt: "Write one sentence. Use the adjective given.",
          items: [
            { q: "Bus: 600 pesos. Plane: 2,500 pesos. (cheap) → The bus…", a: ["The bus is cheaper than the plane."] },
            { q: "Monterrey: 40 °C. Toluca: 22 °C. (hot) → Monterrey…", a: ["Monterrey is hotter than Toluca."] },
            { q: "Museum A: interesting. Museum B: very interesting. (interesting) → Museum B…", a: ["Museum B is more interesting than Museum A."] },
            { q: "Mexico City is number 1 for size in Mexico. (big) → Mexico City…", a: ["Mexico City is the biggest city in Mexico.", "Mexico City is the biggest city in the country."] },
            { q: "Hotel A: good. Hotel B: very good. (good) → Hotel B…", a: ["Hotel B is better than Hotel A."] },
            { q: "The bus is slow. The plane is fast. (not as … as) → The bus…", a: ["The bus is not as fast as the plane.", "The bus isn't as fast as the plane."] }
          ]
        },
        {
          type: "write", title: "Review a place you know",
          prompt: "Write a review of a place you visited (a city, a town, a beach, a park). Compare it with another place and say what is the best or the worst thing about it. Would you recommend it to other students?",
          minWords: 60, maxWords: 100,
          model: "★★★★☆ Cuetzalan, Puebla. Cuetzalan is a small town in the mountains. It's cooler and quieter than the city of Puebla, and the air is cleaner. The best thing is the waterfalls: they're the most beautiful I know. The worst thing is the rain, it's wetter than other places! Hotels are cheaper than in Puebla. I recommend it for a relaxing weekend.",
          bank: ["It's bigger / smaller than", "It's more … than", "It's not as … as", "The best thing is", "The worst thing is", "the most … I know", "I recommend it because"],
          checklist: ["I used at least **three** comparatives.", "I used at least **two** superlatives.", "I used *better* or *the best* correctly.", "I gave a recommendation."]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice the weak *than*: /ðən/.",
          items: [
            "The bus is cheaper than the plane.",
            "Summer is the hottest season.",
            "The train is not as fast as the plane.",
            "Which city is the best for students?",
            "The plane is more expensive than the bus.",
            "This is the most beautiful beach."
          ]
        },
        {
          type: "speak", title: "My favorite place in Mexico",
          prompt: "Record a one-minute recommendation of your favorite place in Mexico. Compare it with another place and say what makes it the best.",
          language: ["My favorite place is…", "It's … than…", "It has the best / the most…", "The best time to go is…", "You should go because…"],
          seconds: 75,
          checklist: ["use at least two comparatives?", "use at least two superlatives?", "say why people should go?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form comparatives of short adjectives (*hotter, cheaper*).", review: "Explanation: comparatives" },
    { can: "I can use *more … than* with long adjectives.", review: "Explanation: comparatives; Writing activity 2" },
    { can: "I can use superlatives: *the biggest, the most beautiful*.", review: "Explanation: superlatives; Reading activity 2" },
    { can: "I can use *better, the best, worse, the worst* correctly.", review: "Explanation: irregular forms" },
    { can: "I can use *not as … as* to compare.", review: "Explanation: not as … as" },
    { can: "I can compare places and recommend one.", review: "Writing activity 3 and Speaking activity 1: listen and repeat" }
  ]
};
