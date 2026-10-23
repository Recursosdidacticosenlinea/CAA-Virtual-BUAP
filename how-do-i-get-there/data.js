window.UNIT = {
  slug: "how-do-i-get-there",
  title: "How Do I Get There?",
  level: "B1",
  minutes: 50,
  focus: ["imperatives", "turn left / go straight", "first, then, after that", "Excuse me, how do I get to…?"],

  presentation: {
    scene: "🗺️🚶‍♀️➡️🏛️",
    situation: "A new exchange student, Mia, wants to visit the **city museum** after class. She stops a student near the bus stop and asks for help.",
    warmup: {
      prompt: "How do you usually get to school? Choose all the words you use.",
      options: ["walk", "take the bus", "take the metro", "ride a bike", "drive", "take a taxi", "turn left", "turn right", "cross the street", "go straight"],
      response: "Good! These words help you give directions."
    },
    dialogueTitle: "Excuse me, how do I get to the museum?",
    dialogue: [
      { who: "Mia", line: "Excuse me, how do I get to the city museum?" },
      { who: "Leo", line: "It's easy. *Go straight* on this street for two blocks." },
      { who: "Mia", line: "Two blocks. OK." },
      { who: "Leo", line: "Then *turn left* at the pharmacy and *cross* the street." },
      { who: "Mia", line: "Turn left at the pharmacy…" },
      { who: "Leo", line: "After that, *walk past* the park. The museum is *on your right*, opposite the library." },
      { who: "Mia", line: "Great, thank you! Is it far?" },
      { who: "Leo", line: "No, it's about ten minutes on foot. *Don't take* the bus, it's very slow at this time." }
    ]
  },

  objectives: [
    "I can understand simple directions in the street.",
    "I can give directions with imperatives: *go, turn, take, cross, walk*.",
    "I can put directions in order with *first, then, after that, finally*.",
    "I can ask for directions politely: *Excuse me, how do I get to…?*"
  ],

  explanation: {
    vocabTitle: "Direction words",
    vocab: [
      { word: "go straight", icon: "⬆️" }, { word: "turn left", icon: "⬅️" }, { word: "turn right", icon: "➡️" },
      { word: "cross the street", icon: "🚸" }, { word: "walk past", icon: "🚶" }, { word: "go along", icon: "🛣️" },
      { word: "the corner", icon: "↩️" }, { word: "traffic lights", icon: "🚦" }, { word: "a block", icon: "🏢" },
      { word: "take the bus", icon: "🚌" }, { word: "get off", icon: "🚏" }, { word: "on your left", icon: "👈" },
      { word: "on your right", icon: "👉" }, { word: "opposite", icon: "↔️" }, { word: "roundabout", icon: "🔄" }
    ],
    grammar: [
      {
        title: "Imperatives: giving instructions",
        intro: "Use the **base form of the verb** with no subject. It's clear and polite in directions.",
        head: ["Form", "Example"],
        rows: [
          ["Verb (base form)", "*Turn* left at the traffic lights."],
          ["Don't + verb", "*Don't cross* here. It's dangerous."],
          ["Take + the first / second + left / right", "*Take the second right.*"],
          ["Go / walk + along / past / to", "*Walk past* the bank. *Go to* the end of the street."],
          ["Take / get off + transport", "*Take* bus 34 and *get off* at Hidalgo."]
        ],
        note: "Don't say *You turn left*. Just say *Turn left*."
      },
      {
        title: "Sequence: putting directions in order",
        head: ["Word", "Example"],
        rows: [
          ["*First,*", "*First,* go straight for two blocks."],
          ["*Then,* / *Next,*", "*Then,* turn right at the corner."],
          ["*After that,*", "*After that,* cross the street."],
          ["*Finally,*", "*Finally,* the bank is on your left."]
        ]
      },
      {
        title: "Asking for directions",
        head: ["Question", "Possible answer"],
        rows: [
          ["Excuse me, *how do I get to* the library?", "Go straight and turn left."],
          ["*Where is* the nearest bus stop?", "It's on the corner, opposite the bank."],
          ["*Is it far?*", "No, it's about five minutes on foot."],
          ["*Can you show me* on the map?", "Sure. We're here. Go this way."]
        ]
      }
    ],
    watchOut: [
      ["You go straight and you turn left.", "Go straight and turn left."],
      ["No cross the street.", "Don't cross the street."],
      ["Turn to left.", "Turn left."],
      ["How I get to the park?", "How do I get to the park?"]
    ],
    check: {
      type: "gap", title: "Quick check", prompt: "Complete with one word.",
      items: [
        "[[Turn]] right at the traffic lights.",
        "[[Don't]] take the bus. Walk, it's faster.",
        "Excuse me, how [[do]] I get to the station?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Three people ask for directions near BUAP. Listen and follow the routes.",
      title: "Asking the way",
      script: [
        { who: "Woman", line: "Excuse me, how do I get to the post office?" },
        { who: "Student", line: "Go straight along this street. Take the second right. The post office is on your left, next to the supermarket." },
        { who: "Man", line: "Hi, where's the nearest pharmacy, please?" },
        { who: "Student", line: "It's very close. Cross the street at the traffic lights, then turn left. It's on the corner." },
        { who: "Girl", line: "Excuse me, is the library far from here?" },
        { who: "Student", line: "It's about fifteen minutes on foot. First, go to the roundabout. Then turn right and walk past the park. Finally, the library is opposite the bank." },
        { who: "Girl", line: "Can I take a bus?" },
        { who: "Student", line: "Yes. Take bus 12 and get off at Reforma. Don't get off at the park, it's one stop early." }
      ],
      activities: [
        {
          type: "match", title: "Where are they going?",
          prompt: "Match each place with the directions.",
          pairs: [
            ["the post office", "take the second right; it's next to the supermarket"],
            ["the pharmacy", "cross at the traffic lights, then turn left"],
            ["the library", "go to the roundabout, turn right, walk past the park"],
            ["bus 12", "get off at Reforma"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          items: [
            { s: "The post office is next to the supermarket.", a: true },
            { s: "The pharmacy is far away.", a: false },
            { s: "The library is about fifteen minutes on foot.", a: true },
            { s: "The library is opposite the park.", a: false },
            { s: "The girl should get off the bus at the park.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the messages. Ana is going to a party at her friend's house for the first time.",
      title: "Group chat: party on Saturday",
      text: [
        { author: "Ana", body: "Hi Pablo! How do I get to your house from the metro? 🙂" },
        { author: "Pablo", body: "Easy! First, get off at Coyoacán station and take the exit to Avenida Universidad. Then turn left and go straight for three blocks." },
        { author: "Pablo", body: "After that, turn right at the big blue church. Walk past a small market. Don't turn at the first street, take the second left. That's my street, Calle Pino." },
        { author: "Pablo", body: "Finally, my house is number 24, on your right, opposite a yellow school. Ring the bell twice! 😄" },
        { author: "Ana", body: "Perfect, thanks! See you on Saturday." }
      ],
      activities: [
        {
          type: "sort", title: "Put the route in order",
          prompt: "Drag each step into the right part of the route.",
          bins: ["Beginning", "Middle", "End"],
          items: [
            { text: "get off at Coyoacán", bin: 0 }, { text: "take the exit to Av. Universidad", bin: 0 }, { text: "turn left, go straight 3 blocks", bin: 0 },
            { text: "turn right at the blue church", bin: 1 }, { text: "walk past a market", bin: 1 }, { text: "take the second left", bin: 1 },
            { text: "number 24, on your right", bin: 2 }, { text: "opposite a yellow school", bin: 2 }, { text: "ring the bell twice", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Pablo's friend got it wrong",
          prompt: "Correct each sentence so it matches Pablo's directions.",
          items: [
            { q: "Turn right at Avenida Universidad.", a: ["Turn left at Avenida Universidad.", "Turn left."] },
            { q: "Go straight for two blocks.", a: ["Go straight for three blocks."] },
            { q: "Take the first left.", a: ["Take the second left.", "Don't take the first left. Take the second left."] },
            { q: "The house is on your left.", a: ["The house is on your right."] },
            { q: "Ring the bell once.", a: ["Ring the bell twice."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Build correct directions, then write a route from your school to a place you like.",
      activities: [
        {
          type: "tiles", title: "Build the directions",
          items: [
            { a: "Turn left at the traffic lights." },
            { a: "Take the second right." },
            { a: "Don't cross the street here." },
            { a: "How do I get to the station?" },
            { a: "The bank is opposite the park." },
            { a: "After that, walk past the market." }
          ]
        },
        {
          type: "rewrite", title: "Make it an instruction",
          prompt: "Rewrite each sentence as an imperative.",
          items: [
            { q: "You go straight for two blocks.", a: ["Go straight for two blocks."] },
            { q: "You can't park here.", a: ["Don't park here."] },
            { q: "You need to take bus 12.", a: ["Take bus 12."] },
            { q: "You shouldn't walk in the park at night.", a: ["Don't walk in the park at night."] },
            { q: "You turn right at the church.", a: ["Turn right at the church."] }
          ]
        },
        {
          type: "write", title: "From school to my favorite place",
          prompt: "A new student wants to visit your favorite place near school (a café, a park, a shop…). Write a message with directions from the main entrance.",
          minWords: 50, maxWords: 90,
          model: "Hi! My favorite place is a small café called Luna. First, leave school by the main entrance and turn right. Then go straight for two blocks. After that, cross the street at the traffic lights and walk past the bank. Finally, the café is on your left, opposite the park. It's about eight minutes on foot. Don't miss the chocolate cake!",
          bank: ["First,", "Then,", "After that,", "Finally,", "turn left / right", "go straight for … blocks", "cross the street", "walk past the", "It's on your left / right", "opposite the", "It's about … minutes on foot"],
          checklist: ["I used at least **five** imperatives.", "I used *first, then, after that, finally*.", "I said where the place is (*on your left, opposite…*).", "I didn't use *you* before the verbs."]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Stress the important words: *left, right, second, opposite*.",
          items: [
            "How do I get to the station?",
            "Turn left at the traffic lights.",
            "Take the second right.",
            "Go straight for three blocks.",
            "The bank is opposite the park.",
            "Don't cross the street here."
          ]
        },
        {
          type: "speak", title: "Voice message: how to get to my house",
          prompt: "A friend is coming to your house for the first time. Record a voice message (about 1 minute) with directions from the nearest bus stop or metro station. Don't give your real address: use a nearby shop or park as the meeting point.",
          language: ["Get off at…", "Take the exit to…", "Walk past…", "Take the second left.", "Don't turn at…", "Call me when you are…"],
          seconds: 75,
          checklist: ["say where to get off?", "use five or more imperatives?", "include one *Don't…*?", "speak clearly and slowly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can understand simple directions in the street.", review: "Listening: Asking the way" },
    { can: "I can use imperatives like *go, turn, take, cross, walk*.", review: "Explanation: imperatives; Writing activity 2" },
    { can: "I can use *Don't…* to give a negative instruction.", review: "Explanation: imperatives (Don't + verb)" },
    { can: "I can put directions in order with *first, then, after that, finally*.", review: "Explanation: sequence words; Reading activity 1" },
    { can: "I can ask for directions politely.", review: "Explanation: asking for directions; Speaking activity 1: listen and repeat" },
    { can: "I can give directions to a place I know.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
