window.UNIT = {
  slug: "applying-for-a-job",
  title: "Applying for a Job",
  level: "B2",
  minutes: 60,
  speakers: { "Interviewer": "f", "Santiago": "m", "Career Adviser": "f", "Renata": "f", "Bruno": "m", A: "f", B: "m" },
  focus: ["verb + -ing: enjoy, avoid, consider…", "verb + to-infinitive: decide, hope, manage…", "verbs with both: remember, stop, try, forget", "preposition + -ing: interested in working", "interviews, CVs and cover letters"],

  presentation: {
    scene: "💼📝🤝🎯",
    situation: "Santiago, a recent BUAP graduate in marketing, is having a video interview with an international company that has an office in Puebla.",
    warmup: {
      prompt: "What's most important to you in a job? Choose your top priorities.",
      options: ["a good salary", "flexible hours", "working from home", "learning new skills", "a friendly team", "traveling", "helping people", "job security", "being creative", "a short commute", "opportunities to grow", "a good boss"],
      response: "Good priorities! In this unit you'll learn to talk about work and present yourself in an interview."
    },
    dialogueTitle: "The video interview",
    dialogue: [
      { who: "Interviewer", line: "So, Santiago, why did you *decide to apply* for this position?" },
      { who: "Santiago", line: "I've always *enjoyed working* with international brands, and I'm really *interested in learning* about digital campaigns." },
      { who: "Interviewer", line: "Tell me about a challenge you've faced." },
      { who: "Santiago", line: "During my internship, our budget was cut in half. I *managed to finish* the campaign on time by *using* free tools and *asking* the design team for help." },
      { who: "Interviewer", line: "Impressive. Would you *consider moving* to Mexico City if needed?" },
      { who: "Santiago", line: "I'd *prefer to stay* in Puebla, but I wouldn't *mind traveling* regularly." },
      { who: "Interviewer", line: "Great. Do you have any questions for us?" },
      { who: "Santiago", line: "Yes. I'd *like to know* what training opportunities you offer. I *hope to keep* improving my data analysis skills." }
    ]
  },

  objectives: [
    "I can use verbs followed by *-ing* and verbs followed by *to* + infinitive.",
    "I can understand the change of meaning with *remember, forget, stop* and *try*.",
    "I can use *-ing* after prepositions (*interested in, good at, look forward to*).",
    "I can answer interview questions and write a cover letter."
  ],

  explanation: {
    vocabTitle: "The world of work",
    vocab: [
      { word: "CV / résumé", icon: "📄" }, { word: "cover letter", icon: "✉️" }, { word: "internship", icon: "🧑‍💻" },
      { word: "applicant", icon: "🙋" }, { word: "shortlist", icon: "📋" }, { word: "salary", icon: "💰" },
      { word: "benefits", icon: "🎁" }, { word: "deadline", icon: "⏰" }, { word: "teamwork", icon: "🤝" },
      { word: "skills", icon: "🛠️" }, { word: "strengths and weaknesses", icon: "⚖️" }, { word: "hire", icon: "✅" },
      { word: "fire / dismiss", icon: "🚪" }, { word: "resign", icon: "👋" }, { word: "promotion", icon: "📈" }
    ],
    grammar: [
      {
        title: "Verb + -ing or verb + to?",
        head: ["Verb + -ing", "Verb + to-infinitive"],
        rows: [
          ["*enjoy, avoid, mind, consider, suggest, finish, practice, keep, can't stand, give up*", "*decide, hope, manage, plan, agree, refuse, offer, promise, expect, afford, learn, seem*"],
          ["I *enjoy working* in teams.", "I *decided to apply*."],
          ["Would you *consider moving*?", "I *managed to finish* on time."]
        ],
        note: "*like, love, hate, prefer, start, begin, continue* can take both with little change: *I like working / to work*. But *would like / would love / would prefer* always take *to*: *I'd like to know…*"
      },
      {
        title: "Change of meaning",
        head: ["Verb", "+ -ing", "+ to-infinitive"],
        rows: [
          ["*remember*", "a memory of the past: *I remember meeting* her in 2019.", "a duty: *Remember to send* your CV."],
          ["*forget*", "a past experience: *I'll never forget seeing* the ocean.", "not do a duty: *I forgot to call* the company."],
          ["*stop*", "end an activity: *He stopped smoking*.", "stop in order to do: *He stopped to answer* the phone."],
          ["*try*", "an experiment: *Try restarting* the computer.", "make an effort: *I tried to open* the door, but it was locked."]
        ]
      },
      {
        title: "Preposition + -ing",
        head: ["Expression", "Example"],
        rows: [
          ["*interested in*", "I'm *interested in learning* more."],
          ["*good at*", "She's *good at solving* problems."],
          ["*look forward to*", "I *look forward to hearing* from you."],
          ["*be used to*", "I'm *used to working* under pressure."],
          ["*before / after / by / without*", "*By using* free tools, I saved money."]
        ],
        note: "In *look forward to* and *be used to*, *to* is a preposition, so it's followed by *-ing*: *I look forward to meeting you* (not *to meet*)."
      }
    ],
    watchOut: [
      ["I look forward to hear from you.", "I look forward to hearing from you."],
      ["I enjoy to work in teams.", "I enjoy working in teams."],
      ["I'm interested in work here.", "I'm interested in working here."],
      ["I would like working abroad.", "I would like to work abroad."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the *-ing* form or *to* + infinitive of the verb in parentheses.",
      items: [
        "I've decided [[to apply]] for the job. (apply)",
        "Would you mind [[waiting]] a few minutes? (wait)",
        "She's very good at [[organizing|organising]] events. (organize)",
        "Don't forget [[to bring]] a copy of your CV. (bring)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a career adviser talking to two students about their job search.",
      title: "At the careers office",
      script: [
        { who: "Career Adviser", line: "Renata, how's the job search going?" },
        { who: "Renata", line: "Not great. I've sent about thirty applications, but I keep getting automatic rejections. I'm thinking of giving up and doing a master's instead." },
        { who: "Career Adviser", line: "Don't give up yet. Have you tried adapting your CV for each job? Companies use software that looks for keywords." },
        { who: "Renata", line: "No, I've been sending the same one. I'll try changing it." },
        { who: "Career Adviser", line: "Good. And Bruno, you had an interview last week, right?" },
        { who: "Bruno", line: "Yes, at a car company. I think it went well, but I forgot to ask about the salary, and I couldn't stop talking when I was nervous!" },
        { who: "Career Adviser", line: "That's normal. Next time, try to pause and breathe before answering. And remember to send a thank-you email within 24 hours." },
        { who: "Bruno", line: "Oh no, I didn't do that. Is it too late?" },
        { who: "Career Adviser", line: "Send it today. I remember getting a job once just because I was the only candidate who wrote a thank-you note." }
      ],
      activities: [
        {
          type: "match", title: "Advice and problems",
          prompt: "Match each person's problem with the adviser's advice.",
          pairs: [
            ["Renata keeps getting automatic rejections.", "Try adapting your CV for each job."],
            ["Renata is thinking of doing a master's.", "Don't give up yet."],
            ["Bruno couldn't stop talking.", "Try to pause and breathe before answering."],
            ["Bruno didn't send a thank-you email.", "Send it today."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Renata has sent about thirty applications.", a: true },
            { s: "Renata has been adapting her CV for each job.", a: false },
            { s: "Bruno remembered to ask about the salary.", a: false },
            { s: "The adviser says to send a thank-you email within 24 hours.", a: true },
            { s: "The adviser once got a job thanks to a thank-you note.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a cover letter that a graduate sent to a company.",
      title: "A cover letter",
      text: [
        { body: "Dear Ms. Treviño," },
        { body: "I am writing to apply for the position of Junior Environmental Analyst advertised on your website. I recently graduated in Environmental Engineering from BUAP, and I am very interested in working for a company that is committed to sustainability." },
        { body: "During my studies, I managed to complete an internship at the Puebla State Water Commission, where I was responsible for analyzing water samples and preparing reports. I enjoyed working with a multidisciplinary team, and I learned to use specialized software such as ArcGIS. I also volunteered to organize a river clean-up campaign, which involved coordinating more than 200 volunteers." },
        { body: "I am used to working under pressure and meeting tight deadlines. I am fluent in Spanish and English, and I am currently learning German. I would welcome the opportunity to contribute to your projects and to continue developing my skills." },
        { body: "I have attached my CV and would be happy to provide references. I look forward to hearing from you." },
        { body: "Yours sincerely, Ximena Ortega" }
      ],
      activities: [
        {
          type: "sort", title: "-ing or to?",
          prompt: "Sort the expressions from the letter by the form that follows them.",
          bins: ["followed by -ing", "followed by to + infinitive"],
          items: [
            { text: "interested in…", bin: 0 }, { text: "enjoyed…", bin: 0 }, { text: "used to (be used to)…", bin: 0 }, { text: "look forward to…", bin: 0 },
            { text: "managed…", bin: 1 }, { text: "learned…", bin: 1 }, { text: "volunteered…", bin: 1 }, { text: "would be happy…", bin: 1 }
          ]
        },
        {
          type: "tf", title: "Understanding the letter",
          prompt: "Are these sentences true or false?",
          items: [
            { s: "Ximena studied environmental engineering.", a: true },
            { s: "She did her internship at a private company.", a: false },
            { s: "She coordinated more than 200 volunteers.", a: true },
            { s: "She speaks German fluently.", a: false },
            { s: "She has attached her CV.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice verb patterns, then write your own cover letter.",
      activities: [
        {
          type: "gap", title: "Remember, stop, try, forget",
          prompt: "Complete with the *-ing* form or *to* + infinitive. Think about the meaning!",
          items: [
            "I remember [[visiting]] this office when I was a child. (visit)",
            "Please remember [[to sign]] the contract before Friday. (sign)",
            "On the way to the interview, I stopped [[to buy]] a coffee. (buy)",
            "My computer was frozen, so I tried [[restarting]] it. It worked! (restart)",
            "I'll never forget [[meeting]] my first boss. (meet)"
          ]
        },
        {
          type: "rewrite", title: "Correct the CV sentences",
          prompt: "Each sentence has one mistake in the verb pattern. Write the correct sentence.",
          items: [
            { q: "I am interested in apply for this job.", a: ["I am interested in applying for this job.", "I'm interested in applying for this job."] },
            { q: "I look forward to meet you.", a: ["I look forward to meeting you."] },
            { q: "I enjoy to work with people.", a: ["I enjoy working with people."] },
            { q: "I managed finishing the project on time.", a: ["I managed to finish the project on time."] },
            { q: "I am used to work long hours.", a: ["I am used to working long hours.", "I'm used to working long hours."] }
          ]
        },
        {
          type: "write", title: "My cover letter",
          prompt: "Find (or imagine) a job you'd like. Write a cover letter: why you're applying, your relevant experience and skills, and a polite closing. Use at least eight different verb patterns.",
          minWords: 150, maxWords: 220,
          model: "Dear Mr. Salazar, I am writing to apply for the position of English Teacher at your language school, which I saw advertised on LinkedIn. I have always enjoyed helping people learn, and I am particularly interested in teaching teenagers. Over the last two years, I have managed to combine my studies with volunteering at a community center, where I taught conversation classes to adults. I learned to adapt my lessons to different levels and I am used to working with large groups. I am good at creating interactive materials and I would love to bring these ideas to your school. I would be happy to attend an interview at any time. I look forward to hearing from you. Yours sincerely, Daniela Pérez",
          bank: ["I am writing to apply for…", "I am particularly interested in…ing", "I have always enjoyed…ing", "I managed to…", "I am used to…ing", "I am good at…ing", "I would welcome the opportunity to…", "I look forward to hearing from you."],
          checklist: [
            "I used at least **eight** verb patterns correctly.",
            "I used *-ing* after prepositions.",
            "I used formal language (no contractions).",
            "I organized the letter: reason → experience → skills → closing."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Speak clearly and confidently, as in an interview.",
          items: [
            "I'm interested in applying for this job.",
            "I look forward to meeting you.",
            "I enjoy working with people.",
            "I managed to finish the project on time.",
            "I'm used to working long hours.",
            "Would you consider working on weekends?"
          ]
        },
        {
          type: "speak", title: "Elevator pitch",
          prompt: "Record a 60-90 second \"elevator pitch\": a short presentation of yourself to a potential employer. Say who you are, what you're good at, what you've managed to achieve, and what you hope to do.",
          language: ["Hi, I'm… and I've just graduated in…", "I'm passionate about…ing", "I've managed to…", "I'm particularly good at…ing", "I'm hoping to…", "I'd love to…"],
          seconds: 120,
          checklist: ["present yourself clearly?", "use verb patterns correctly?", "mention achievements?", "keep it between 60 and 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I know common verbs followed by *-ing*.", review: "Explanation: verb + -ing or to?" },
    { can: "I know common verbs followed by *to* + infinitive.", review: "Explanation: verb + -ing or to?" },
    { can: "I understand the change of meaning with *remember, forget, stop, try*.", review: "Explanation: change of meaning; Writing activity 1" },
    { can: "I use *-ing* after prepositions, including *look forward to*.", review: "Explanation: preposition + -ing; Writing activity 2" },
    { can: "I can understand advice about job searching.", review: "Listening: at the careers office" },
    { can: "I can write a cover letter and do a job interview in English.", review: "Writing activity 3 and Speaking activities" }
  ]
};
