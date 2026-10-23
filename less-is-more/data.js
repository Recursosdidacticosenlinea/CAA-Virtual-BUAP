window.UNIT = {
  slug: "less-is-more",
  title: "Less Is More",
  level: "C2",
  minutes: 60,
  speakers: { "Rebeca": "f", "Gerardo": "m", "Host": "f", "Novelist": "m", "Editor": "f", A: "f", B: "m" },
  focus: ["ellipsis: I'd love to (go), but I can't.", "substitution: so, not, one(s), do so", "I think so / I hope not / I'm afraid so", "So do I / Neither have I / Nor would she", "cohesion and natural, economical English"],

  presentation: {
    scene: "✂️💬🧩🎯",
    situation: "Rebeca and Gerardo are planning a weekend trip to Real de Catorce with friends. Their conversation is fast, natural and full of shortcuts.",
    warmup: {
      prompt: "Which of these short answers do you already use in English? Choose all that apply.",
      options: ["I think so.", "I hope not.", "Me neither.", "So do I.", "I'd love to.", "I guess so.", "Not really.", "I'm afraid not.", "If you like.", "I'd rather not.", "Nor can I.", "I suppose so."],
      response: "Great! In this unit you'll learn how native speakers avoid repetition, and how to sound much more natural."
    },
    dialogueTitle: "Planning the trip",
    dialogue: [
      { who: "Gerardo", line: "Are you coming to Real de Catorce this weekend?" },
      { who: "Rebeca", line: "*I'd love to*, but I'm not sure I *can*. I might have to work on Saturday." },
      { who: "Gerardo", line: "Can't you swap shifts with someone?" },
      { who: "Rebeca", line: "*I've tried to*. Nobody wants to. Is Lalo going?" },
      { who: "Gerardo", line: "*I think so*. He said he would if he finished his thesis chapter." },
      { who: "Rebeca", line: "And Carmen? She hates long bus trips." },
      { who: "Gerardo", line: "*So do I*, but it's worth it. We're taking the night bus. Do you have a sleeping bag?" },
      { who: "Rebeca", line: "I have an old *one*. Will it be cold?" },
      { who: "Gerardo", line: "*I'm afraid so*. It gets really cold in the desert at night. *If you do* come, bring a thick jacket." },
      { who: "Rebeca", line: "OK. I'll ask my boss again. *Fingers crossed*." }
    ]
  },

  objectives: [
    "I can use ellipsis to avoid repeating verbs and clauses.",
    "I can use substitution with *so, not, one(s), do so*.",
    "I can respond with *So do I / Neither do I / I think so / I hope not*.",
    "I can recognize and use ellipsis and substitution to make texts more cohesive."
  ],

  explanation: {
    vocabTitle: "Short responses",
    vocab: [
      { word: "I think so.", icon: "🤔" }, { word: "I don't think so.", icon: "🙅" }, { word: "I hope so.", icon: "🤞" },
      { word: "I hope not.", icon: "🙏" }, { word: "I'm afraid so.", icon: "😬" }, { word: "I'm afraid not.", icon: "😔" },
      { word: "I suppose so.", icon: "🤷" }, { word: "So do I.", icon: "👍" }, { word: "Neither do I.", icon: "👎" },
      { word: "I'd love to.", icon: "😍" }, { word: "I'd rather not.", icon: "😶" }, { word: "If you like.", icon: "🙂" },
      { word: "Not if I can help it.", icon: "🛑" }, { word: "So I hear.", icon: "👂" }, { word: "If so,…", icon: "➡️" }
    ],
    grammar: [
      {
        title: "Ellipsis (leaving words out)",
        head: ["Full version", "With ellipsis"],
        rows: [
          ["I'd love to go, but I can't go.", "I'd love *to*, but I *can't*."],
          ["She said she would call, and she did call.", "She said she would call, and she *did*."],
          ["I've never been to Japan, but I'd like to go to Japan.", "I've never been to Japan, but I'd like *to*."],
          ["Some students passed and some students didn't pass.", "Some students passed and some *didn't*."]
        ],
        note: "Keep the auxiliary or *to*: *I'd like to* (not *I'd like*). With *be*, keep *be*: *He isn't ready, but he will be.*"
      },
      {
        title: "Substitution",
        head: ["Substitute", "Replaces", "Example"],
        rows: [
          ["*so*", "a positive clause", "Will it rain? – *I think so*. / *If so*, we'll stay in."],
          ["*not*", "a negative clause", "Will it be expensive? – *I hope not*."],
          ["*one / ones*", "a countable noun", "I need a new phone. This *one* is broken."],
          ["*do so*", "a verb phrase (formal)", "Applicants who wish to apply must *do so* by May 1."],
          ["*the same / that*", "an idea", "I'd do *the same*. / *That's* what I said."]
        ],
        note: "Common verbs with *so / not*: *think, hope, expect, suppose, imagine, believe, be afraid*. Use *I don't think so* (more natural than *I think not*)."
      },
      {
        title: "Agreeing with so / neither / nor",
        head: ["Statement", "Agree", "Disagree"],
        rows: [
          ["I *love* jazz.", "*So do I.*", "*I don't.*"],
          ["I *haven't* finished.", "*Neither / Nor have I.*", "*I have.*"],
          ["She *can* swim.", "*So can he.*", "*He can't.*"],
          ["We *wouldn't* go.", "*Neither would they.*", "*They would.*"]
        ],
        note: "Copy the auxiliary from the statement and invert: *So + auxiliary + subject*."
      }
    ],
    watchOut: [
      ["I'd love, but I'm busy.", "I'd love to, but I'm busy."],
      ["Will he come? – I think yes.", "Will he come? – I think so."],
      ["I don't like coffee. – So do I.", "I don't like coffee. – Neither do I."],
      ["I have a blue pen and a red.", "I have a blue pen and a red one."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "Is it going to rain tomorrow? – I hope [[not]].",
        "I've never been to Peru. – Neither [[have]] I.",
        "I don't need a new laptop; my old [[one]] works fine.",
        "Are you coming to the party? – I'd love [[to]], but I can't."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an interview with a novelist about writing realistic dialogue.",
      title: "How real people talk",
      script: [
        { who: "Host", line: "Your dialogue is famous for sounding real. What's the secret?" },
        { who: "Novelist", line: "Mainly, leaving things out. Real people almost never speak in complete sentences. If one character asks \"Are you coming tonight?\", the other doesn't say \"Yes, I am coming tonight.\" They say \"Yeah, I think so\" or \"Might do\" or just \"Probably.\"" },
        { who: "Host", line: "But don't editors complain?" },
        { who: "Novelist", line: "Some did, at first. One editor wanted me to add full sentences everywhere. I refused to. Then the book won a prize, and she stopped asking me to." },
        { who: "Host", line: "Ha! What else?" },
        { who: "Novelist", line: "Substitution. Instead of repeating a noun, people use \"one\", or \"that\", or \"it\". \"Which bag? The red one.\" Also those little echo responses: \"So did I\", \"Neither have I\". They show the characters are listening to each other." },
        { who: "Host", line: "Any advice for students learning English?" },
        { who: "Novelist", line: "Listen to how people really speak, then try to do so yourself. If you sound too complete, you sound like a textbook. If you don't, you sound like a person." }
      ],
      activities: [
        {
          type: "match", title: "What's been left out?",
          prompt: "Match each elliptical phrase from the interview with its full meaning.",
          pairs: [
            ["I refused to.", "I refused to add full sentences."],
            ["She stopped asking me to.", "She stopped asking me to add full sentences."],
            ["The red one.", "The red bag."],
            ["Try to do so yourself.", "Try to speak like that yourself."],
            ["If you don't,…", "If you don't sound too complete,…"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the statements true or false?",
          items: [
            { s: "The novelist thinks real people usually speak in complete sentences.", a: false },
            { s: "An editor once asked him to add full sentences.", a: true },
            { s: "He followed the editor's advice.", a: false },
            { s: "He says echo responses show that characters are listening.", a: true },
            { s: "He believes sounding too complete makes you sound like a textbook.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short extract from a contemporary short story. Notice how much is left unsaid.",
      title: "Fiction: The last bus",
      text: [
        { body: "\"You're not seriously going to walk,\" said Inés." },
        { body: "\"I might.\" Tomás zipped up his jacket. \"It's only three kilometers.\"" },
        { body: "\"Three kilometers in the rain. At midnight.\" She looked at him. \"Your mother would kill me if anything happened.\"" },
        { body: "\"She'd kill me first.\" He smiled. \"Look, if a taxi passes, I'll take one. If not, I'll walk. Simple.\"" },
        { body: "\"Have you got an umbrella, at least?\"" },
        { body: "\"I had one. Left it on the bus.\" He shrugged. \"The last one, actually. That's why I'm in this situation.\"" },
        { body: "Inés sighed. She'd known him for fifteen years and he'd never once taken her advice. Nor, she suspected, would he start tonight. \"Text me when you get home.\"" },
        { body: "\"I will.\"" },
        { body: "He didn't, of course. But at 1:15 a.m. her phone lit up: a photo of a wet, smiling face and the words *Made it. Told you so.*" }
      ],
      activities: [
        {
          type: "rewrite", title: "Recover the missing words",
          prompt: "Write the full version of each phrase from the story.",
          items: [
            { q: "\"I might.\" (I might…)", a: ["I might walk.", "I might walk home."] },
            { q: "\"If not, I'll walk.\" (If a taxi…)", a: ["If a taxi doesn't pass, I'll walk.", "If a taxi does not pass, I'll walk."] },
            { q: "\"I will.\" (I will…)", a: ["I will text you when I get home.", "I'll text you when I get home."] },
            { q: "\"He didn't, of course.\" (He didn't…)", a: ["He didn't text her, of course.", "He didn't text her when he got home, of course."] }
          ]
        },
        {
          type: "tf", title: "Understanding the story",
          prompt: "Are these statements true or false?",
          items: [
            { s: "Tomás decides to stay at Inés's house.", a: false },
            { s: "He left his umbrella on the bus.", a: true },
            { s: "Inés has known Tomás for a long time.", a: true },
            { s: "Tomás usually follows Inés's advice.", a: false },
            { s: "He got home safely.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice economy, then rewrite a wordy text.",
      activities: [
        {
          type: "rewrite", title: "Cut the repetition",
          prompt: "Rewrite each sentence using ellipsis or substitution.",
          items: [
            { q: "I wanted to call you, but I didn't call you.", a: ["I wanted to call you, but I didn't.", "I wanted to, but I didn't."] },
            { q: "My old car was slow, but my new car is fast.", a: ["My old car was slow, but my new one is fast."] },
            { q: "Is the museum open on Monday? I believe that it is open on Monday.", a: ["Is the museum open on Monday? I believe so.", "I believe so."] },
            { q: "She can speak German, and her brother can speak German too.", a: ["She can speak German, and so can her brother."] },
            { q: "I haven't seen the film, and Pedro hasn't seen the film either.", a: ["I haven't seen the film, and neither has Pedro.", "I haven't seen the film, and nor has Pedro.", "I haven't seen the film and neither has Pedro."] }
          ]
        },
        {
          type: "tiles", title: "Natural responses",
          items: [
            { a: "I'd love to, but I can't." },
            { a: "I don't think so." },
            { a: "Neither have I." },
            { a: "If so, we'll leave early." },
            { a: "I'm afraid not." }
          ]
        },
        {
          type: "write", title: "Write a natural dialogue",
          prompt: "Write a short scene (a dialogue between two or three people) about a small conflict or decision: missing a bus, choosing a restaurant, breaking bad news. Make it sound real by using ellipsis, substitution and echo responses. Add a few lines of narration.",
          minWords: 160, maxWords: 230,
          model: "\"Are you sure you want to tell him tonight?\" Lucía asked. \"I have to. If I don't, someone else will.\" Marta poured two cups of coffee and pushed one across the table. \"Does he suspect anything?\" \"I don't think so. Or if he does, he hasn't said.\" They heard the key in the door. \"Want me to stay?\" \"Would you?\" \"Of course.\" Diego came in, dropped his bag and looked at them both. \"What's wrong? You two look terrible.\" \"Sit down,\" said Marta. \"I'd rather not.\" \"Please.\" He did, slowly. \"Is it about the job?\" \"I'm afraid so.\" He closed his eyes. \"I knew it. So did you, I suppose,\" he said to Lucía. \"I didn't, actually. Not until today.\"",
          bank: ["I'd love to…", "I don't think so.", "I'm afraid so.", "If so / If not,…", "So did I / Neither have I", "the other one", "He did, slowly.", "Would you?"],
          checklist: [
            "I used at least **four** examples of ellipsis.",
            "I used *so / not / one* as substitutes.",
            "I used at least **two** echo responses (*So do I, Neither have I*).",
            "The dialogue sounds natural, not like a textbook."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Short answers are quick and natural.",
          items: [
            "I'd love to, but I can't.",
            "I don't think so.",
            "Neither have I.",
            "If so, we'll leave early.",
            "I'm afraid not.",
            "I wanted to call you, but I didn't."
          ]
        },
        {
          type: "speak", title: "Natural conversation",
          prompt: "Record a 2-minute natural conversation (with a partner, or play both roles) about plans for a trip or event. Use as much ellipsis and substitution as possible, as real speakers do.",
          language: ["Are you coming? – I might.", "I'd like to, but…", "If so,…", "The blue one.", "So did I.", "I'm afraid not.", "Want to…? (ellipsis of Do you)"],
          seconds: 150,
          checklist: ["use at least eight ellipsis or substitution examples?", "avoid unnecessary repetition?", "sound spontaneous?", "speak for about two minutes?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use ellipsis to avoid repeating verbs and clauses.", review: "Explanation: ellipsis; Writing activity 1" },
    { can: "I can substitute with *so, not, one(s), do so*.", review: "Explanation: substitution" },
    { can: "I can respond with *So do I / Neither have I* correctly.", review: "Explanation: agreeing; Speaking activity 1: listen and repeat" },
    { can: "I can use *I think so / I hope not / I'm afraid so*.", review: "Explanation: vocabulary cards" },
    { can: "I can recover missing information in texts with ellipsis.", review: "Reading: The last bus" },
    { can: "I can write and speak naturally and economically.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
