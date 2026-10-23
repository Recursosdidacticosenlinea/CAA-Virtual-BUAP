window.UNIT = {
  slug: "what-would-you-like-to-eat",
  title: "What Would You Like to Eat?",
  level: "B1",
  minutes: 50,
  focus: ["countable / uncountable nouns", "a, an, some, any", "How much? How many?", "I'd like…", "Would you like…?"],

  presentation: {
    scene: "🌮🥗🍎🥤",
    situation: "It's lunchtime at the **school cafeteria**. Daniela is hungry, but she only has 60 pesos. What would she like to eat?",
    warmup: {
      prompt: "What do you usually eat for lunch? Choose everything you like.",
      options: ["tacos", "rice", "salad", "a sandwich", "soup", "chicken", "fruit", "pasta", "beans", "water", "juice", "a soda"],
      response: "Yum! Now let's learn how to order food and talk about quantities."
    },
    dialogueTitle: "At the cafeteria",
    dialogue: [
      { who: "Cook", line: "Hi! *What would you like?*" },
      { who: "Daniela", line: "*I'd like* two chicken tacos, please." },
      { who: "Cook", line: "Sure. *Would you like some* salsa?" },
      { who: "Daniela", line: "Yes, please. Just *a little*. And do you have *any* fruit?" },
      { who: "Cook", line: "We have *some* apples and *a* banana. *How many* apples would you like?" },
      { who: "Daniela", line: "Just one apple, please. *How much* is it?" },
      { who: "Cook", line: "The tacos are forty pesos and the apple is ten. Fifty pesos in total." }
    ]
  },

  objectives: [
    "I can name common food and drinks.",
    "I can tell countable and uncountable nouns apart.",
    "I can use *a, an, some, any, How much…?* and *How many…?*",
    "I can order food politely with *I'd like…* and *Would you like…?*"
  ],

  explanation: {
    vocabTitle: "Food and drinks",
    vocab: [
      { word: "an apple", icon: "🍎" }, { word: "a banana", icon: "🍌" }, { word: "an egg", icon: "🥚" },
      { word: "a sandwich", icon: "🥪" }, { word: "tomatoes", icon: "🍅" }, { word: "carrots", icon: "🥕" },
      { word: "tortillas", icon: "🫓" }, { word: "rice", icon: "🍚" }, { word: "bread", icon: "🍞" },
      { word: "cheese", icon: "🧀" }, { word: "meat", icon: "🥩" }, { word: "milk", icon: "🥛" },
      { word: "water", icon: "💧" }, { word: "juice", icon: "🧃" }, { word: "soup", icon: "🍲" }
    ],
    grammar: [
      {
        title: "Countable and uncountable nouns",
        head: ["", "Countable (you can count them)", "Uncountable (you can't count them)"],
        rows: [
          ["Examples", "an apple, two apples, three eggs", "rice, water, bread, cheese, milk"],
          ["Singular", "*a* banana, *an* egg", "— (no a/an): rice, *some* rice"],
          ["Plural", "bananas, eggs", "— (no plural): ✗ rices"],
          ["To count them", "two sandwiches", "a *bottle of* water, a *piece of* bread, a *bowl of* soup"]
        ]
      },
      {
        title: "Some, any, how much, how many",
        head: ["Form", "Example"],
        rows: [
          ["*some* in positive sentences", "There's *some* milk. I have *some* apples."],
          ["*any* in negatives and questions", "We don't have *any* bread. Do you have *any* eggs?"],
          ["*some* in offers and requests", "Would you like *some* juice? Can I have *some* water?"],
          ["*How many* + countable plural", "*How many* tacos would you like?"],
          ["*How much* + uncountable", "*How much* rice do we need?"],
          ["*How much* is it? (price)", "*How much* is the salad? – It's 35 pesos."]
        ]
      },
      {
        title: "Ordering food",
        head: ["Waiter / cook", "Customer"],
        rows: [
          ["*What would you like?*", "*I'd like* a cheese sandwich, please."],
          ["*Would you like* something to drink?", "Yes, *I'd like* an orange juice. / No, thank you."],
          ["*Anything else?*", "No, that's all, thanks."],
          ["That's 50 pesos.", "Here you are."]
        ],
        note: "*I'd like* = I would like. It's more polite than *I want*."
      }
    ],
    watchOut: [
      ["I'd like a rice.", "I'd like some rice."],
      ["How many water do you drink?", "How much water do you drink?"],
      ["We don't have some eggs.", "We don't have any eggs."],
      ["I want a coffee.", "I'd like a coffee, please."]
    ],
    check: {
      type: "gap", title: "Quick check", prompt: "Complete with *a, an, some, any, much* or *many*.",
      items: [
        "Can I have [[an]] orange and [[some]] water, please?",
        "We don't have [[any]] cheese.",
        "How [[many]] eggs do you need?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to Iker and his dad. They're writing a shopping list for the weekend.",
      title: "The shopping list",
      script: [
        { who: "Dad", line: "OK, Iker, let's check the kitchen. Do we have any eggs?" },
        { who: "Iker", line: "Yes, we have some, but only two. We need a dozen." },
        { who: "Dad", line: "Right, twelve eggs. How much rice is there?" },
        { who: "Iker", line: "There isn't any rice. We need one kilo." },
        { who: "Dad", line: "And milk? We drink a lot of milk." },
        { who: "Iker", line: "There's a little milk. Let's buy two cartons." },
        { who: "Dad", line: "How many tomatoes do we need for the salsa?" },
        { who: "Iker", line: "Six tomatoes and some onions. Oh, and we don't have any bread." },
        { who: "Dad", line: "OK, one bag of bread. Would you like anything else?" },
        { who: "Iker", line: "Some bananas, please! And can we buy a bottle of juice?" }
      ],
      activities: [
        {
          type: "gap", title: "Complete the shopping list",
          prompt: "Write the number or quantity you hear.",
          items: [
            "Eggs: [[12|twelve|a dozen]]",
            "Rice: [[1|one|one kilo|1 kilo]] kilo",
            "Milk: [[2|two]] cartons",
            "Tomatoes: [[6|six]]",
            "Bread: [[1|one]] bag",
            "Juice: [[1|one|a]] bottle"
          ]
        },
        {
          type: "tf", title: "True or false?",
          items: [
            { s: "They have no eggs at home.", a: false },
            { s: "There isn't any rice.", a: true },
            { s: "They have a lot of milk at home.", a: false },
            { s: "They need onions for the salsa.", a: true },
            { s: "Iker would like some apples.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the menu of the school cafeteria *La Cuchara*.",
      title: "La Cuchara · Today's menu",
      text: [
        { author: "Breakfast (7:00–10:00)", body: "Two eggs with beans and tortillas — 45 pesos · A bowl of fruit with yogurt — 30 pesos · A cheese sandwich — 25 pesos" },
        { author: "Lunch (12:00–4:00)", body: "Chicken soup with rice — 40 pesos · Three tacos (meat or potato) — 45 pesos · Green salad with cheese — 35 pesos · Pasta with tomato sauce — 38 pesos" },
        { author: "Drinks", body: "A bottle of water — 12 pesos · Orange juice — 20 pesos · A glass of milk — 15 pesos · Coffee — 18 pesos" },
        { author: "Notes", body: "Sorry, we don't have any desserts today. Vegetarian? Ask for potato tacos or the salad. We don't sell any sodas." }
      ],
      activities: [
        {
          type: "sort", title: "Countable or uncountable?",
          prompt: "Sort the food words from the menu.",
          bins: ["Countable", "Uncountable"],
          items: [
            { text: "egg", bin: 0 }, { text: "taco", bin: 0 }, { text: "tortilla", bin: 0 }, { text: "sandwich", bin: 0 }, { text: "potato", bin: 0 },
            { text: "rice", bin: 1 }, { text: "cheese", bin: 1 }, { text: "milk", bin: 1 }, { text: "yogurt", bin: 1 }, { text: "coffee", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Answer with the menu",
          prompt: "Answer the questions with a short sentence and the price.",
          items: [
            { q: "How much is the chicken soup?", a: ["It's 40 pesos.", "It is 40 pesos.", "40 pesos", "It's forty pesos."] },
            { q: "How many tacos are in one order?", a: ["Three.", "There are three tacos.", "There are 3 tacos.", "3", "three tacos"] },
            { q: "Are there any desserts today?", a: ["No, there aren't.", "No, there aren't any.", "No, there aren't any desserts.", "No"] },
            { q: "How much is a glass of milk?", a: ["It's 15 pesos.", "It is 15 pesos.", "15 pesos", "It's fifteen pesos."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice ordering, then plan a healthy lunch.",
      activities: [
        {
          type: "tiles", title: "Order at the cafeteria",
          items: [
            { a: "What would you like to eat?" },
            { a: "I'd like some chicken soup, please." },
            { a: "Would you like something to drink?" },
            { a: "How much is the salad?" },
            { a: "We don't have any bread." },
            { a: "How many tacos would you like?" }
          ]
        },
        {
          type: "rewrite", title: "Make it polite",
          prompt: "Rewrite the sentences with *I'd like…* or *Would you like…?*",
          items: [
            { q: "I want a glass of water.", a: ["I'd like a glass of water.", "I'd like a glass of water, please.", "I would like a glass of water."] },
            { q: "Do you want some rice?", a: ["Would you like some rice?"] },
            { q: "Give me two tacos.", a: ["I'd like two tacos.", "I'd like two tacos, please.", "I would like two tacos, please.", "I would like two tacos."] },
            { q: "Do you want a dessert?", a: ["Would you like a dessert?"] },
            { q: "I want some cheese on my salad.", a: ["I'd like some cheese on my salad.", "I'd like some cheese on my salad, please.", "I would like some cheese on my salad."] }
          ]
        },
        {
          type: "write", title: "My ideal school lunch",
          prompt: "The cafeteria wants students' ideas for a new menu. Write your ideal lunch: what food and drinks you'd like, how much of each, and why. Use countable and uncountable nouns.",
          minWords: 50, maxWords: 90,
          model: "For my ideal school lunch, I'd like a bowl of vegetable soup and some rice. I'd also like two chicken tacos with some salsa, but not too much! For dessert, I'd like an apple or some fruit with yogurt. To drink, I'd like a bottle of water, not soda. I think this lunch is healthy and delicious, and it isn't expensive.",
          bank: ["I'd like…", "a bowl of", "a glass of", "a bottle of", "some", "two / three", "For dessert,", "To drink,", "because it's healthy / cheap / delicious"],
          checklist: ["I used *I'd like* at least twice.", "I used *a / an* with countable nouns.", "I used *some* or *a bowl / glass / bottle of* with uncountable nouns.", "I said why I chose this food."]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Notice *would you* sounds like /wʊdʒu/.",
          items: [
            "What would you like to eat?",
            "I'd like some chicken soup, please.",
            "Would you like something to drink?",
            "How much is the salad?",
            "How many tacos would you like?",
            "We don't have any bread."
          ]
        },
        {
          type: "speak", title: "What's in my kitchen?",
          prompt: "Record a one-minute video tour or voice note about your kitchen or fridge (you can imagine it). Say what food there is, what there isn't, and what you need to buy.",
          language: ["There's some…", "There are some…", "There isn't any…", "There aren't any…", "We need…", "We have a lot of / a little / a few…"],
          seconds: 75,
          checklist: ["use *There's / There are some*?", "use *There isn't / aren't any*?", "mention countable and uncountable food?", "say what you need to buy?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 15 kinds of food and drinks.", review: "Explanation: the vocabulary cards" },
    { can: "I can tell countable and uncountable nouns apart.", review: "Explanation: countable and uncountable; Reading activity 1" },
    { can: "I can use *some* and *any* correctly.", review: "Explanation: some and any" },
    { can: "I can ask *How much…?* and *How many…?*", review: "Listening: The shopping list" },
    { can: "I can order food politely with *I'd like…*", review: "Writing activity 2 and Speaking activity 1: listen and repeat" },
    { can: "I can describe the food I have and the food I need.", review: "Speaking activity 2" }
  ]
};
