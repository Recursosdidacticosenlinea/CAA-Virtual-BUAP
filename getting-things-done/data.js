window.UNIT = {
  slug: "getting-things-done",
  title: "Getting Things Done",
  level: "B2",
  minutes: 60,
  speakers: { "Pilar": "f", "Héctor": "m", "Receptionist": "f", "Mechanic": "m", "Customer": "f", "Stylist": "m", A: "f", B: "m" },
  focus: ["causative: have / get something done", "I'm having my car fixed / I had my hair cut", "get someone to do something / have someone do something", "services and appointments", "unpleasant experiences: I had my phone stolen"],

  presentation: {
    scene: "🔧💇‍♀️🏠📋",
    situation: "Pilar and Héctor are moving into their first apartment in Puebla next week. There's a lot to organize, and they don't have much time.",
    warmup: {
      prompt: "Which of these do you do yourself, and which do you pay someone to do? Choose the ones you pay for.",
      options: ["cut my hair", "fix my phone", "clean my house", "paint my room", "repair my car", "wash my clothes", "make my clothes", "check my eyes", "deliver my food", "fix my computer", "print documents", "translate documents"],
      response: "Great! In this unit you'll learn to talk about services that other people do for you."
    },
    dialogueTitle: "Moving day checklist",
    dialogue: [
      { who: "Pilar", line: "OK, let's check the list. The apartment walls are horrible. Are we painting them ourselves?" },
      { who: "Héctor", line: "No way. *We're having them painted* on Monday. I already called a painter." },
      { who: "Pilar", line: "Great. And the internet?" },
      { who: "Héctor", line: "*We're getting it installed* on Tuesday morning. And *I'm having the locks changed* too. You never know who has old keys." },
      { who: "Pilar", line: "Good thinking. What about the sofa from my parents' house?" },
      { who: "Héctor", line: "*I'll get my cousin to bring* it in his truck." },
      { who: "Pilar", line: "Perfect. Oh, and *I need to get my documents photocopied* for the contract." },
      { who: "Héctor", line: "And *you should have your hair cut* before the housewarming party!" },
      { who: "Pilar", line: "Ha ha! Very funny. Maybe *I'll have it done* on Friday." }
    ]
  },

  objectives: [
    "I can use *have / get + object + past participle* to talk about services.",
    "I can use the causative in different tenses.",
    "I can use *get someone to do* and *have someone do* to talk about asking others to act.",
    "I can describe unpleasant experiences with *have something + participle* (*I had my bag stolen*)."
  ],

  explanation: {
    vocabTitle: "Services",
    vocab: [
      { word: "a plumber", icon: "🔧" }, { word: "an electrician", icon: "💡" }, { word: "a mechanic", icon: "🚗" },
      { word: "a hairdresser", icon: "💇" }, { word: "a tailor", icon: "🧵" }, { word: "a locksmith", icon: "🔑" },
      { word: "a dry cleaner's", icon: "👔" }, { word: "an optician", icon: "👓" }, { word: "a technician", icon: "💻" },
      { word: "install", icon: "📡" }, { word: "repair", icon: "🛠️" }, { word: "deliver", icon: "📦" },
      { word: "alter", icon: "✂️" }, { word: "service (a car)", icon: "⚙️" }, { word: "an estimate / a quote", icon: "🧾" }
    ],
    grammar: [
      {
        title: "Have / get something done",
        head: ["Tense", "Example"],
        rows: [
          ["present simple", "I *have my hair cut* every month."],
          ["present continuous", "We'*re having the walls painted* tomorrow."],
          ["past simple", "She *had her car repaired* last week."],
          ["present perfect", "*Have* you *had your eyes tested* recently?"],
          ["future / modal", "I'*ll get my phone fixed*. You *should have it checked*."]
        ],
        note: "Structure: *have / get* + object + past participle. *Get* is more informal and common in speech. The person who does the job is usually not important (if necessary, add *by*)."
      },
      {
        title: "Asking people to do things",
        head: ["Structure", "Example"],
        rows: [
          ["*get* + person + *to* + infinitive", "I'll *get my cousin to bring* the sofa."],
          ["*have* + person + infinitive (no *to*)", "I'll *have the technician check* it."]
        ],
        note: "*Get someone to do* often suggests persuading: *I finally got my brother to clean his room!*"
      },
      {
        title: "Unwanted experiences",
        head: ["Structure", "Example"],
        rows: [
          ["*have / get* + object + participle", "I *had my wallet stolen* on the metro."],
          ["", "He *got his nose broken* playing soccer."]
        ],
        note: "Here the subject didn't ask for the action: something bad happened to them."
      }
    ],
    watchOut: [
      ["I cut my hair at the hairdresser's.", "I had my hair cut at the hairdresser's."],
      ["I had repaired my car.", "I had my car repaired."],
      ["I'll get my brother help me.", "I'll get my brother to help me."],
      ["She's having painted her nails.", "She's having her nails painted."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form.",
      items: [
        "I don't fix my own car. I have it [[fixed|repaired]] at a garage.",
        "We're [[having|getting]] a new kitchen installed next week.",
        "Last month I had my phone [[stolen]] on the bus.",
        "I finally got my roommate [[to]] wash the dishes."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to three short conversations at different businesses.",
      title: "Around town",
      script: [
        { who: "Receptionist", line: "Good morning, Óptica Visión. How can I help you?" },
        { who: "Customer", line: "Hi, I'd like to have my eyes tested. I haven't had them checked for two years, and I'm getting headaches." },
        { who: "Receptionist", line: "We have an appointment on Thursday at five. And if you need new glasses, you can have them made here in three days." },
        { who: "Mechanic", line: "So, your car. We've changed the oil and had the brakes checked. The brakes are fine, but the battery is very old." },
        { who: "Customer", line: "Can you have it replaced today? I need the car for a trip tomorrow." },
        { who: "Mechanic", line: "Sure, but it'll cost an extra two thousand pesos. We'll have it done by four o'clock." },
        { who: "Stylist", line: "What are we doing today?" },
        { who: "Customer", line: "I want to get my hair cut short, like this photo. And I'd like to have it dyed a bit darker." },
        { who: "Stylist", line: "Great choice. Last time, did you have it done somewhere else? The ends are very damaged." },
        { who: "Customer", line: "Yes, I had it straightened at a salon near my house… big mistake!" }
      ],
      activities: [
        {
          type: "sort", title: "What's being done?",
          prompt: "Put each service in the right place.",
          bins: ["At the optician's", "At the garage", "At the hair salon"],
          items: [
            { text: "having her eyes tested", bin: 0 }, { text: "having glasses made in three days", bin: 0 },
            { text: "having the oil changed", bin: 1 }, { text: "having the brakes checked", bin: 1 }, { text: "having the battery replaced", bin: 1 },
            { text: "getting her hair cut short", bin: 2 }, { text: "having her hair dyed darker", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "The customer had her eyes checked last year.", a: false },
            { s: "The appointment is on Thursday.", a: true },
            { s: "The brakes need to be replaced.", a: false },
            { s: "The new battery will cost extra.", a: true },
            { s: "The customer was happy with her last salon.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about the rise of service apps in Mexican cities.",
      title: "The convenience economy",
      text: [
        { body: "Ten years ago, if you wanted your groceries delivered, you had to call the supermarket and wait. Today, millions of people in Mexican cities have almost everything done through an app: they get their food delivered, their clothes washed, their furniture assembled and even their dogs walked." },
        { body: "For many young professionals, this is a question of time. \"I work ten hours a day,\" says Andrea, a 29-year-old architect in Puebla. \"I have my laundry picked up on Mondays and delivered on Wednesdays. I'd rather pay than lose my whole Saturday.\"" },
        { body: "But not everyone is convinced. Critics point out that the people who do these jobs often earn low wages and have no social security. \"When you get your food delivered in twenty minutes during a storm, someone is riding a motorbike in the rain for very little money,\" says one labor researcher." },
        { body: "There's also a cost for consumers. People who have everything done for them may lose basic skills. One survey found that a third of young adults in large cities couldn't change a light bulb or sew a button. Perhaps the most valuable service is learning to do some things ourselves." }
      ],
      activities: [
        {
          type: "match", title: "Main ideas",
          prompt: "Match each paragraph with its main idea.",
          pairs: [
            ["Paragraph 1", "Today people have many services done through apps."],
            ["Paragraph 2", "Some people use these services to save time."],
            ["Paragraph 3", "Workers in these jobs often have poor conditions."],
            ["Paragraph 4", "Using services for everything may make us lose skills."]
          ]
        },
        {
          type: "rewrite", title: "Rewrite with have / get",
          prompt: "Rewrite each sentence with the causative. Use the verb in parentheses.",
          items: [
            { q: "Someone delivers Andrea's laundry on Wednesdays. (have)", a: ["Andrea has her laundry delivered on Wednesdays.", "She has her laundry delivered on Wednesdays."] },
            { q: "A company assembled our furniture. (get)", a: ["We got our furniture assembled.", "We got our furniture assembled by a company."] },
            { q: "Someone walks my dog every afternoon. (have)", a: ["I have my dog walked every afternoon."] },
            { q: "A tailor is going to sew my buttons. (have)", a: ["I'm going to have my buttons sewn.", "I am going to have my buttons sewn.", "I'm going to have my buttons sewn by a tailor."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the causative, then write a message about a busy week.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I'm having my car serviced tomorrow." },
            { a: "She had her bag stolen at the concert." },
            { a: "We should get the roof repaired soon." },
            { a: "Have you had your eyes tested recently?" },
            { a: "I got my brother to help me move." }
          ]
        },
        {
          type: "rewrite", title: "Do it yourself or have it done?",
          prompt: "Each person didn't do the job themselves. Rewrite with *had … done*.",
          items: [
            { q: "Luisa didn't cut her hair herself.", a: ["Luisa had her hair cut.", "She had her hair cut."] },
            { q: "We didn't paint the house ourselves.", a: ["We had the house painted.", "We had our house painted."] },
            { q: "Tomás didn't fix his laptop himself.", a: ["Tomás had his laptop fixed.", "He had his laptop fixed.", "Tomás had his laptop repaired."] },
            { q: "I didn't translate my diploma myself.", a: ["I had my diploma translated."] }
          ]
        },
        {
          type: "write", title: "A week of errands",
          prompt: "Write an email to a friend explaining why you're so busy this week. Describe at least five things you're having done or need to get done (at home, for your car, for an event, etc.), and one bad experience.",
          minWords: 120, maxWords: 180,
          model: "Hi Iris! Sorry I haven't answered your messages. This week is crazy! My sister is getting married on Saturday, so I'm having a dress made by a tailor in the city center. I also need to get my shoes repaired, because the heel broke last week. On Thursday, I'm having my hair and nails done at a salon near my house. To make things worse, I had my phone stolen on the bus on Monday, so I've had to get a new one and get all my contacts transferred. Oh, and I finally got my brother to fix the car, so at least we can drive to the wedding! Let's have coffee next week. Hugs!",
          bank: ["I'm having my… done", "I need to get my… repaired", "I had my… stolen / broken", "I got … to…", "To make things worse,…", "At least…"],
          checklist: [
            "I used the causative in at least **three** different tenses.",
            "I described **five** services or tasks.",
            "I used *get someone to do* at least once.",
            "I described one unpleasant experience (*I had my… stolen*)."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Stress the object and the participle: *my CAR serviced*.",
          items: [
            "I'm having my car serviced tomorrow.",
            "She had her bag stolen at the concert.",
            "We should get the roof repaired soon.",
            "Have you had your eyes tested recently?",
            "I got my brother to help me move.",
            "We had the house painted."
          ]
        },
        {
          type: "speak", title: "DIY or pay someone?",
          prompt: "Record yourself for about 90 seconds. Talk about things you do yourself and things you have done for you. Give your opinion: is it better to learn to do things yourself or pay for services?",
          language: ["I always do… myself.", "I usually have my… done.", "I've never had my… done.", "In my opinion,…", "On the one hand… on the other hand…"],
          seconds: 120,
          checklist: ["use the causative several times?", "give examples from your life?", "give a balanced opinion?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *have / get + object + participle* for services.", review: "Explanation: have / get something done" },
    { can: "I can use the causative in different tenses.", review: "Explanation: have / get something done; Writing activity 1" },
    { can: "I can use *get someone to do / have someone do*.", review: "Explanation: asking people to do things" },
    { can: "I can describe unpleasant experiences with the causative.", review: "Explanation: unwanted experiences" },
    { can: "I can book services and explain problems.", review: "Listening and Speaking activity 1: listen and repeat" },
    { can: "I can write about errands and services.", review: "Writing activity 3" }
  ]
};
