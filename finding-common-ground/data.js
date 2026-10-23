window.UNIT = {
  slug: "finding-common-ground",
  title: "Finding Common Ground",
  level: "C2",
  minutes: 60,
  speakers: { "Lic. Morales": "f", "Mr. Becker": "m", "Mediator": "f", "Neighbor 1": "m", "Neighbor 2": "f", A: "f", B: "m" },
  focus: ["diplomatic language: softening, distancing, hedging", "negotiation phrases: proposing, conceding, bargaining", "conditional offers: We'd be prepared to… provided that…", "disagreeing without conflict", "summarizing and closing a deal"],

  presentation: {
    scene: "🤝🌐⚖️📈",
    situation: "Lic. Morales represents a Puebla textile cooperative. Mr. Becker is the buyer for a German fair-trade clothing brand. They're negotiating a three-year contract by video call.",
    warmup: {
      prompt: "What do you think makes a good negotiator? Choose your top qualities.",
      options: ["patience", "preparation", "listening skills", "confidence", "flexibility", "honesty", "empathy", "knowing when to walk away", "humor", "persuasiveness", "cultural awareness", "staying calm"],
      response: "Excellent choices! In this unit you'll learn the precise, diplomatic language of negotiation and conflict resolution."
    },
    dialogueTitle: "The contract",
    dialogue: [
      { who: "Mr. Becker", line: "We're very impressed with your quality. However, the price per unit is *somewhat higher than we had anticipated*." },
      { who: "Lic. Morales", line: "*I appreciate your concern*. *Bear in mind*, though, that every piece is handwoven, and our artisans receive a fair wage." },
      { who: "Mr. Becker", line: "*That's precisely why* we want to work with you. But *we'd need to find a way* to bring the price down by around ten percent." },
      { who: "Lic. Morales", line: "Ten percent *would be difficult*. *We might be prepared to* offer a five percent discount, *provided that* you commit to a minimum of three thousand pieces per year." },
      { who: "Mr. Becker", line: "*I see where you're coming from*. *What if* we agreed on seven percent and a three-year contract instead of two?" },
      { who: "Lic. Morales", line: "*That could work*, *on condition that* payments are made within thirty days." },
      { who: "Mr. Becker", line: "*I think we can live with that*. *So, to sum up*: seven percent discount, three thousand pieces annually, three years, thirty-day payment." },
      { who: "Lic. Morales", line: "*Agreed in principle*. I'll send you the draft contract by Friday." }
    ]
  },

  objectives: [
    "I can use softening and distancing language to make requests and refusals diplomatically.",
    "I can make conditional offers and concessions in a negotiation.",
    "I can disagree firmly but without creating conflict.",
    "I can summarize agreements and manage a negotiation or mediation to a close."
  ],

  explanation: {
    vocabTitle: "Negotiation language",
    vocab: [
      { word: "a concession", icon: "🎁" }, { word: "a counter-offer", icon: "🔁" }, { word: "a deadlock", icon: "🔒" },
      { word: "a compromise", icon: "🤝" }, { word: "leverage", icon: "🏋️" }, { word: "a win-win solution", icon: "🏆" },
      { word: "a deal-breaker", icon: "🚫" }, { word: "terms and conditions", icon: "📜" }, { word: "meet someone halfway", icon: "↔️" },
      { word: "bottom line", icon: "📉" }, { word: "non-negotiable", icon: "⛔" }, { word: "flexible", icon: "🤸" },
      { word: "common ground", icon: "🌍" }, { word: "agree in principle", icon: "✍️" }, { word: "walk away", icon: "🚶" }
    ],
    grammar: [
      {
        title: "Softening and distancing",
        head: ["Direct", "Diplomatic"],
        rows: [
          ["The price is too high.", "The price is *somewhat higher than we had anticipated*."],
          ["We want a discount.", "*We were hoping* you *might* be able to offer a discount."],
          ["That's impossible.", "*That would be rather difficult* for us."],
          ["You're late with the payment.", "*It seems* the payment *hasn't yet been received*."],
          ["No.", "*I'm not sure we'd be in a position to* agree to that."]
        ],
        note: "Tools: past tenses (*We were hoping*), modals (*might, would*), qualifiers (*somewhat, rather, slightly*), passives and *seem / appear*."
      },
      {
        title: "Conditional offers and bargaining",
        head: ["Function", "Language"],
        rows: [
          ["making an offer", "*We'd be prepared to… / We could offer…*"],
          ["attaching a condition", "*…provided that / on condition that / as long as you…*"],
          ["proposing an alternative", "*What if we…? / How would you feel about…?*"],
          ["conceding", "*We could live with that. / That seems reasonable.*"],
          ["holding firm", "*I'm afraid that's non-negotiable for us.*"]
        ]
      },
      {
        title: "Disagreeing diplomatically and closing",
        head: ["Function", "Language"],
        rows: [
          ["acknowledging", "*I see where you're coming from. / I appreciate your concern.*"],
          ["disagreeing", "*I'm not entirely convinced that… / I'd see it slightly differently.*"],
          ["refocusing", "*Perhaps we could look at it from another angle.*"],
          ["summarizing", "*So, to sum up… / Let me just recap what we've agreed.*"],
          ["closing", "*Agreed in principle. / I'll send you the draft by…*"]
        ]
      }
    ],
    watchOut: [
      ["We want you to lower the price.", "We were hoping you might be able to lower the price."],
      ["Provided that you will pay in 30 days…", "Provided that you pay within 30 days…"],
      ["I don't agree with you at all.", "I'm not entirely sure I agree with that."],
      ["This is your problem.", "Perhaps we could look at how to solve this together."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the diplomatic phrases with one word.",
      items: [
        "We'd be [[prepared|willing]] to offer a discount, provided that you sign today.",
        "I see where you're [[coming]] from, but…",
        "The price is [[somewhat|slightly|rather]] higher than we had expected.",
        "So, to sum [[up]], we've agreed on three points."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a community mediator helping two neighbors resolve a conflict about noise.",
      title: "Mediation: the noisy neighbors",
      script: [
        { who: "Mediator", line: "Thank you both for coming. The aim today isn't to decide who's right, but to find a solution you can both live with. Mr. Ramírez, would you like to begin?" },
        { who: "Neighbor 1", line: "Look, I run a small carpentry workshop at home. It's my livelihood. I can't simply stop working." },
        { who: "Neighbor 2", line: "I understand that, I really do. But the noise starts at seven in the morning, and I work night shifts at the hospital. I'm not sleeping." },
        { who: "Mediator", line: "So, if I've understood correctly, Mr. Ramírez needs to work, and Ms. Cruz needs to sleep in the mornings. Is that a fair summary?" },
        { who: "Neighbor 1", line: "Yes. I suppose I could start at ten instead of seven, as long as I can work a bit later in the evening." },
        { who: "Neighbor 2", line: "That would make a huge difference. And I'd be happy with that, provided the machines are off by eight p.m." },
        { who: "Neighbor 1", line: "Eight is a little early for me. What if we said nine, but only the quieter tools after eight?" },
        { who: "Neighbor 2", line: "I think I could live with that." },
        { who: "Mediator", line: "Excellent. Let me recap: work from ten to nine, quieter tools only after eight. Shall we put that in writing and review it in a month?" }
      ],
      activities: [
        {
          type: "sort", title: "Negotiation moves",
          prompt: "Classify each sentence from the mediation.",
          bins: ["Acknowledging the other side", "Making a conditional offer", "Summarizing"],
          items: [
            { text: "I understand that, I really do.", bin: 0 }, { text: "That would make a huge difference.", bin: 0 },
            { text: "I could start at ten, as long as I can work later.", bin: 1 }, { text: "I'd be happy with that, provided the machines are off by eight.", bin: 1 },
            { text: "What if we said nine, but only quieter tools after eight?", bin: 1 },
            { text: "So, if I've understood correctly,…", bin: 2 }, { text: "Let me recap: work from ten to nine…", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the statements true or false?",
          items: [
            { s: "The mediator's aim is to decide who is right.", a: false },
            { s: "Ms. Cruz works night shifts.", a: true },
            { s: "Mr. Ramírez agrees to stop working completely.", a: false },
            { s: "They agree that work will start at ten.", a: true },
            { s: "They'll review the agreement in a year.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about the principles of negotiation.",
      title: "Separate the people from the problem",
      text: [
        { body: "One of the most influential ideas in modern negotiation theory is deceptively simple: separate the people from the problem. Negotiators, the argument goes, are human beings first. They have emotions, egos and deeply held values. When a discussion becomes a personal battle, both sides dig in, and the original issue is lost." },
        { body: "A second principle is to focus on interests, not positions. A position is what someone says they want: \"I want a ten percent discount.\" An interest is why they want it: perhaps the buyer needs to meet a budget, or wants to show their manager a good deal. Once interests are on the table, creative solutions often emerge. A longer contract, faster delivery or better payment terms might satisfy the same interest without the discount." },
        { body: "Language plays a central role. Phrases such as \"I see where you're coming from\" or \"Help me understand your concerns\" signal respect without signaling agreement. Conditional language (\"We could do that, provided that…\") turns demands into exchanges. And summarizing regularly (\"So, if I understand correctly…\") prevents misunderstandings and shows that one has genuinely listened." },
        { body: "Finally, effective negotiators know their alternatives. If the deal on the table is worse than what you could obtain elsewhere, it may be wiser to walk away. Paradoxically, knowing that you can leave often makes it easier to stay and find common ground." }
      ],
      activities: [
        {
          type: "match", title: "Key concepts",
          prompt: "Match each concept from the article with its explanation.",
          pairs: [
            ["separate the people from the problem", "don't let the discussion become personal"],
            ["a position", "what someone says they want"],
            ["an interest", "the reason behind what someone wants"],
            ["conditional language", "turning demands into exchanges"],
            ["knowing your alternatives", "understanding when it's better to walk away"]
          ]
        },
        {
          type: "tf", title: "Understanding the article",
          prompt: "Are these statements true or false according to the article?",
          items: [
            { s: "Personal conflict helps negotiators focus on the problem.", a: false },
            { s: "Interests explain the reasons behind positions.", a: true },
            { s: "A longer contract could satisfy the same interest as a discount.", a: true },
            { s: "Saying 'I see where you're coming from' means you agree completely.", a: false },
            { s: "Knowing you can walk away can make agreement easier.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice diplomatic language, then write a negotiation email.",
      activities: [
        {
          type: "rewrite", title: "Make it diplomatic",
          prompt: "Rewrite each direct sentence diplomatically, using the words in parentheses.",
          items: [
            { q: "Your price is too high. (somewhat higher than we expected)", a: ["Your price is somewhat higher than we expected.", "The price is somewhat higher than we expected."] },
            { q: "We want delivery in two weeks. (were hoping / might)", a: ["We were hoping you might be able to deliver in two weeks.", "We were hoping you might deliver in two weeks.", "We were hoping delivery might be possible in two weeks."] },
            { q: "We can't accept that. (not sure / in a position to)", a: ["I'm not sure we'd be in a position to accept that.", "I'm not sure we would be in a position to accept that.", "We're not sure we'd be in a position to accept that.", "We are not sure we would be in a position to accept that."] },
            { q: "You didn't pay the invoice. (it seems / not yet been paid)", a: ["It seems the invoice has not yet been paid.", "It seems that the invoice has not yet been paid.", "It seems the invoice hasn't yet been paid."] }
          ]
        },
        {
          type: "tiles", title: "Build the conditional offers",
          items: [
            { a: "We'd be prepared to lower the price provided that you order more." },
            { a: "What if we extended the contract to three years?" },
            { a: "I'm afraid that's non-negotiable for us." },
            { a: "Let me just recap what we've agreed." },
            { a: "I see where you're coming from." }
          ]
        },
        {
          type: "write", title: "A counter-offer email",
          prompt: "You have received a proposal from a client or supplier (price, deadline, quantity) that you cannot fully accept. Write an email that thanks them, acknowledges their position, explains your concerns diplomatically, makes a conditional counter-offer, and proposes next steps.",
          minWords: 160, maxWords: 230,
          model: "Dear Mr. Becker, Thank you for your proposal of 12 March and for the constructive conversation last week. We greatly value the opportunity to work with your company and share your commitment to fair trade. Having reviewed the terms carefully, we are, however, somewhat concerned about the proposed delivery schedule. Producing four thousand handwoven pieces within four months would place considerable pressure on our artisans and might compromise the quality you rightly expect. We would therefore like to propose an alternative. We would be prepared to deliver the full order in two phases, provided that the first payment is made upon receipt of the initial two thousand pieces. In return, we could guarantee priority production for your brand during the high season. I hope this offers a reasonable basis for agreement. Perhaps we could schedule a call next week to discuss the details? Kind regards, Laura Morales",
          bank: ["Thank you for your proposal of…", "We greatly value…", "Having reviewed…, we are somewhat concerned about…", "We would therefore like to propose…", "We would be prepared to… provided that…", "In return, we could…", "Perhaps we could schedule a call…"],
          checklist: [
            "I acknowledged the other side's position.",
            "I expressed concerns with **softening language**.",
            "I made at least **one** conditional offer (*provided that, on condition that*).",
            "I proposed clear next steps."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Sound calm and diplomatic: soften your voice.",
          items: [
            "Your price is somewhat higher than we expected.",
            "What if we extended the contract?",
            "I'm afraid that's non-negotiable for us.",
            "Let me just recap what we've agreed.",
            "I see where you're coming from.",
            "I think we can live with that."
          ]
        },
        {
          type: "speak", title: "Mediate a conflict",
          prompt: "Record yourself (about 2 minutes) as a mediator presenting a solution to a conflict (between flatmates, colleagues, neighbors or family members). Acknowledge both sides, identify interests, and propose a compromise.",
          language: ["Thank you both for…", "If I've understood correctly,…", "What you both seem to want is…", "Perhaps we could look at it from another angle.", "Would you both be willing to…?", "Let me recap…"],
          seconds: 150,
          checklist: ["acknowledge both sides fairly?", "identify interests behind positions?", "propose a compromise diplomatically?", "speak for about two minutes?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can soften requests and refusals diplomatically.", review: "Explanation: softening; Writing activity 1" },
    { can: "I can make conditional offers and concessions.", review: "Explanation: conditional offers" },
    { can: "I can disagree firmly without creating conflict.", review: "Explanation: disagreeing diplomatically" },
    { can: "I can identify interests behind positions.", review: "Reading: Separate the people from the problem" },
    { can: "I can summarize and close an agreement.", review: "Listening: mediation" },
    { can: "I can negotiate and write a counter-offer effectively.", review: "Writing activity 3 and Speaking activities" }
  ]
};
