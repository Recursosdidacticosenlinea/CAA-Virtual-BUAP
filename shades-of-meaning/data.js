window.UNIT = {
  slug: "shades-of-meaning",
  title: "Shades of Meaning",
  level: "C2",
  minutes: 60,
  speakers: { "Andrea": "f", "Félix": "m", "Editor": "f", "Translator": "m", "Lecturer": "f", A: "f", B: "m" },
  focus: ["connotation: positive, neutral, negative", "near-synonyms: thin / slim / skinny / emaciated", "collocation: heavy rain, strong coffee, deeply regret", "intensity scales: like → adore, dislike → loathe", "precision in description and persuasion"],

  presentation: {
    scene: "🎨🔍📚✒️",
    situation: "Andrea works as a copywriter for a hotel group. Her editor, Félix, is reviewing her description of a new boutique hotel in Cholula.",
    warmup: {
      prompt: "Which words would you be happiest to hear about yourself? Choose your favorites.",
      options: ["determined", "stubborn", "confident", "arrogant", "curious", "nosy", "thrifty", "stingy", "relaxed", "lazy", "assertive", "bossy"],
      response: "Interesting! Notice how many pairs describe the same behavior with a positive or negative tone. That's connotation."
    },
    dialogueTitle: "The hotel description",
    dialogue: [
      { who: "Félix", line: "Andrea, you describe the rooms as \"*small*\". That's accurate, but it won't sell." },
      { who: "Andrea", line: "How about \"*cozy*\"? Or \"*intimate*\"?" },
      { who: "Félix", line: "\"Intimate\" is perfect for couples. Now, \"the hotel is *old*\"…" },
      { who: "Andrea", line: "\"*Historic*\"? \"*Charming colonial building*\"?" },
      { who: "Félix", line: "Much better. And here: \"The staff are *nosy*\"? I assume you meant something else." },
      { who: "Andrea", line: "Ha! I meant they're *attentive*. They remember your name and your coffee order." },
      { who: "Félix", line: "Exactly. Same behavior, completely different *connotation*. Be careful, though: \"*cozy*\" for a room with no window would be *misleading*." },
      { who: "Andrea", line: "True. *Persuasive*, but not *deceptive*. That's the fine line." }
    ]
  },

  objectives: [
    "I can recognize the positive, neutral or negative connotation of near-synonyms.",
    "I can choose the most precise word on an intensity scale.",
    "I can use strong and natural collocations.",
    "I can adjust word choice to persuade, describe, or criticize subtly, without being misleading."
  ],

  explanation: {
    vocabTitle: "Connotation pairs (positive ↔ negative)",
    vocab: [
      { word: "slim ↔ skinny", icon: "🧍" }, { word: "confident ↔ arrogant", icon: "😎" }, { word: "thrifty ↔ stingy", icon: "💰" },
      { word: "curious ↔ nosy", icon: "👀" }, { word: "determined ↔ stubborn", icon: "🪨" }, { word: "relaxed ↔ lazy", icon: "🛋️" },
      { word: "assertive ↔ aggressive", icon: "🗣️" }, { word: "youthful ↔ childish", icon: "🧒" }, { word: "cozy ↔ cramped", icon: "🏠" },
      { word: "historic ↔ old-fashioned", icon: "🏛️" }, { word: "frank ↔ blunt", icon: "🔨" }, { word: "unique ↔ weird", icon: "🦄" },
      { word: "cautious ↔ cowardly", icon: "🐢" }, { word: "inquisitive ↔ intrusive", icon: "🔎" }, { word: "spontaneous ↔ impulsive", icon: "⚡" }
    ],
    grammar: [
      {
        title: "Intensity scales",
        head: ["Weak", "Medium", "Strong", "Extreme"],
        rows: [
          ["*like*", "*enjoy*", "*love*", "*adore / be passionate about*"],
          ["*dislike*", "*can't stand*", "*hate*", "*loathe / detest / abhor*"],
          ["*cool*", "*cold*", "*freezing*", "*arctic / glacial*"],
          ["*surprised*", "*astonished*", "*astounded*", "*flabbergasted / dumbfounded*"],
          ["*important*", "*significant*", "*crucial*", "*vital / paramount*"]
        ],
        note: "Extreme adjectives (*freezing, astounded*) take *absolutely / utterly*, not *very*: *absolutely freezing* (not *very freezing*)."
      },
      {
        title: "Collocation",
        head: ["Strong collocation", "Unnatural"],
        rows: [
          ["*heavy* rain / traffic", "✗ strong rain"],
          ["*strong* coffee / wind / accent", "✗ powerful coffee"],
          ["*deeply* regret / *bitterly* disappointed", "✗ strongly regret"],
          ["*highly* unlikely / *fully* aware", "✗ big unlikely"],
          ["*make* a decision / *do* research / *pay* attention", "✗ do a decision"]
        ],
        note: "When two synonyms exist, collocation often decides: *a tall building*, but *a high mountain*; *a big mistake*, but *a large amount*."
      },
      {
        title: "Neutral reporting vs. loaded language",
        head: ["Neutral", "Loaded (positive)", "Loaded (negative)"],
        rows: [
          ["*protesters*", "*activists, citizens*", "*rioters, a mob*"],
          ["*the government changed the policy*", "*the government adapted*", "*the government made a U-turn*"],
          ["*an inexpensive hotel*", "*an affordable hotel*", "*a cheap hotel*"]
        ]
      }
    ],
    watchOut: [
      ["The food was very delicious.", "The food was absolutely delicious. / The food was really delicious."],
      ["There was strong rain last night.", "There was heavy rain last night."],
      ["She's very skinny, she looks great!", "She's very slim, she looks great!"],
      ["I strongly regret my decision.", "I deeply regret my decision."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the best word.",
      items: [
        "Drive carefully. There's [[heavy]] traffic on the highway.",
        "It's absolutely [[freezing]] outside. Take a coat! (cold / freezing)",
        "I [[deeply|bitterly|sincerely]] regret what I said.",
        "He's not stingy, he's just [[thrifty|careful with money|frugal]]."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a literary translator talking about the hardest part of his job.",
      title: "Lost (and found) in translation",
      script: [
        { who: "Lecturer", line: "Today our guest is a literary translator. What's the most difficult part of translating a novel?" },
        { who: "Translator", line: "Without doubt, connotation. Dictionaries give you denotation, the basic meaning. But every word carries an emotional color. Take the Spanish word \"flaco\". In English it could be \"thin\", \"slim\", \"skinny\" or even \"scrawny\", and each one tells the reader something different about the character and about the narrator's attitude." },
        { who: "Lecturer", line: "So how do you decide?" },
        { who: "Translator", line: "Context, mainly. If a grandmother affectionately calls her grandson \"flaquito\", \"skinny\" might work, because it can sound affectionate in informal English. But if a doctor uses \"flaco\" in a report, I'd need something neutral like \"underweight\"." },
        { who: "Lecturer", line: "What about intensity?" },
        { who: "Translator", line: "That's another trap. Spanish speakers often use \"increíble\" or \"horrible\" casually. If I translate every \"horrible\" as \"horrific\", the characters sound hysterical. Often \"awful\" or \"terrible\", or even just \"not great\", captures the real tone better." },
        { who: "Lecturer", line: "Do you ever feel you lose something?" },
        { who: "Translator", line: "Always. But sometimes you gain something too. The goal is not identical words, but an equivalent effect on the reader." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are these statements true or false according to the translator?",
          items: [
            { s: "Connotation is the most difficult part of his job.", a: true },
            { s: "Dictionaries mainly give denotation.", a: true },
            { s: "He would translate a doctor's 'flaco' as 'skinny'.", a: false },
            { s: "Translating every 'horrible' as 'horrific' can make characters sound exaggerated.", a: true },
            { s: "His goal is to use identical words in both languages.", a: false }
          ]
        },
        {
          type: "sort", title: "Neutral, positive or negative?",
          prompt: "Classify the English equivalents of 'flaco' by connotation.",
          bins: ["Positive", "Neutral", "Negative"],
          items: [
            { text: "slim", bin: 0 }, { text: "slender", bin: 0 },
            { text: "thin", bin: 1 }, { text: "underweight", bin: 1 },
            { text: "scrawny", bin: 2 }, { text: "bony", bin: 2 }, { text: "emaciated", bin: 2 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read two news reports about the same event. Notice how word choice changes the message.",
      title: "One protest, two stories",
      text: [
        { author: "Report A", body: "Hundreds of concerned residents gathered peacefully outside City Hall on Tuesday to voice their opposition to the planned shopping mall on the site of the city's last remaining urban forest. Organizers, many of them young families, called on authorities to reconsider a project they described as short-sighted. Officials briefly met with representatives but offered no firm commitments." },
        { author: "Report B", body: "A noisy crowd of activists blocked the entrance to City Hall on Tuesday, causing delays for workers and visitors, in an attempt to halt a shopping center that is expected to create 800 jobs. The demonstrators, some of whom are linked to opposition groups, demanded the cancellation of a project already approved by the council. Officials patiently listened to their complaints." },
        { body: "Both reports are, in a narrow sense, accurate. The difference lies almost entirely in connotation: *residents* vs. *crowd*, *gathered peacefully* vs. *blocked*, *voice their opposition* vs. *demanded*, *urban forest* vs. no mention of trees at all. Neither journalist has lied; each has chosen." }
      ],
      activities: [
        {
          type: "match", title: "Compare the choices",
          prompt: "Match each expression from Report A with its equivalent in Report B.",
          pairs: [
            ["hundreds of concerned residents", "a noisy crowd of activists"],
            ["gathered peacefully outside", "blocked the entrance to"],
            ["the planned shopping mall", "a shopping center expected to create 800 jobs"],
            ["called on authorities to reconsider", "demanded the cancellation"],
            ["offered no firm commitments", "patiently listened to their complaints"]
          ]
        },
        {
          type: "tf", title: "Interpreting bias",
          prompt: "Are these interpretations true or false?",
          items: [
            { s: "Report A is more sympathetic to the protesters.", a: true },
            { s: "Report B mentions the urban forest.", a: false },
            { s: "Report B emphasizes economic benefits.", a: true },
            { s: "According to the final paragraph, one of the journalists lied.", a: false },
            { s: "Word choice can change the reader's opinion without changing the facts.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice precision, then rewrite a text with a different slant.",
      activities: [
        {
          type: "gap", title: "Natural collocations",
          prompt: "Complete with the word that collocates best.",
          items: [
            "It is [[highly]] unlikely that the project will be finished on time.",
            "She was [[bitterly|deeply]] disappointed by the result.",
            "I'd like a [[strong]] black coffee, please.",
            "We need to [[make]] a decision by Friday.",
            "He's [[fully|well]] aware of the risks."
          ]
        },
        {
          type: "rewrite", title: "Change the connotation",
          prompt: "Rewrite each sentence, replacing the negative word with a positive near-synonym.",
          items: [
            { q: "My boss is very bossy.", a: ["My boss is very assertive.", "My boss is very decisive."] },
            { q: "Our apartment is cramped.", a: ["Our apartment is cozy.", "Our apartment is cosy.", "Our apartment is compact."] },
            { q: "My brother is stubborn.", a: ["My brother is determined.", "My brother is persistent.", "My brother is tenacious."] },
            { q: "She's a bit nosy.", a: ["She's a bit curious.", "She's a bit inquisitive.", "She is a bit curious.", "She is a bit inquisitive."] }
          ]
        },
        {
          type: "write", title: "Two slants",
          prompt: "Choose an event or place (a new metro line, a festival, a building, a new law). Write TWO short descriptions (about 100 words each): one favorable, one critical. Keep the facts identical; change only word choice.",
          minWords: 180, maxWords: 260,
          model: "(Favorable) The city's ambitious new cable car, inaugurated on Friday, links the historic center with the hillside neighborhoods of the north, offering residents a fast and affordable alternative to congested roads. The striking modern cabins, which carry up to ten passengers, provide breathtaking views of the volcanoes. Officials anticipate that more than 20,000 people will use the service daily. (Critical) The city's costly new cable car, unveiled on Friday, connects the tourist district with the northern hillsides, where many residents question whether it addresses their real needs. The cramped cabins, which squeeze in up to ten passengers, are already attracting sightseers rather than commuters. Officials claim that more than 20,000 people will use the service daily.",
          bank: ["ambitious / costly", "inaugurated / unveiled", "offering / where residents question", "striking / cramped", "anticipate / claim", "affordable / expensive", "commuters / sightseers"],
          checklist: [
            "The **facts** are the same in both texts.",
            "I changed at least **eight** words or phrases to shift the connotation.",
            "I used natural collocations.",
            "Neither text contains false information."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Stress the adjective to show the meaning.",
          items: [
            "My boss is very assertive.",
            "Our apartment is cozy.",
            "My brother is determined.",
            "It's absolutely freezing outside.",
            "There's heavy traffic on the highway.",
            "I deeply regret what I said."
          ]
        },
        {
          type: "speak", title: "Describe with precision",
          prompt: "Record a 90-second description of a person, place or experience you know well, using precise vocabulary, intensity adverbs and strong collocations. Avoid *good, bad, nice, very*.",
          language: ["utterly", "remarkably", "strikingly", "deeply", "a hint of…", "somewhat", "by no means", "it struck me as…"],
          seconds: 120,
          checklist: ["avoid vague words (*good, nice, very*)?", "use at least five strong collocations?", "use intensity scales accurately?", "speak for at least 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can recognize positive, neutral and negative connotation.", review: "Explanation: connotation pairs; Listening activity 2" },
    { can: "I can choose the right word on an intensity scale.", review: "Explanation: intensity scales" },
    { can: "I can use strong, natural collocations.", review: "Explanation: collocation; Writing activity 1" },
    { can: "I can identify loaded language and bias in texts.", review: "Reading: one protest, two stories" },
    { can: "I can change the slant of a text without changing the facts.", review: "Writing activity 3 and Speaking activity 1: listen and repeat" },
    { can: "I can describe things with precision and nuance.", review: "Speaking activity 2" }
  ]
};
