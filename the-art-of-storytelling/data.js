window.UNIT = {
  slug: "the-art-of-storytelling",
  title: "The Art of Storytelling",
  level: "C2",
  minutes: 60,
  speakers: { "Abuela Chela": "f", "Iker": "m", "Narrator": "m", "Writer": "f", "Interviewer": "m", A: "f", B: "m" },
  focus: ["narrative tenses: past perfect continuous, past continuous, would / used to", "fronting: Down came the rain. Into the room walked…", "vivid verbs: stagger, glimpse, mutter, creep", "show, don't tell", "pacing, suspense and point of view"],

  presentation: {
    scene: "📖🕯️🌙👻",
    situation: "It's the night of November 1st. Iker is at his grandmother's house in Cholula for Day of the Dead. Abuela Chela starts telling the story she tells every year.",
    warmup: {
      prompt: "What makes a story unforgettable? Choose the elements you think matter most.",
      options: ["a surprising ending", "a strong character", "suspense", "humor", "vivid details", "a moral", "dialogue", "a mysterious place", "an emotional moment", "a twist", "a good storyteller's voice", "being based on real events"],
      response: "Great choices! In this unit you'll learn the techniques writers and storytellers use to captivate an audience."
    },
    dialogueTitle: "Abuela's story",
    dialogue: [
      { who: "Abuela Chela", line: "It was 1968. *I had been walking* home from the market for an hour, and the sun *was setting* behind the volcano." },
      { who: "Iker", line: "And you were alone?" },
      { who: "Abuela Chela", line: "Completely alone. Then, as I reached the old bridge, *down came the rain*, heavy and cold. I *ran* under a tree." },
      { who: "Iker", line: "And that's when you saw her?" },
      { who: "Abuela Chela", line: "Patience! *Out of the mist stepped* a woman in a white dress. She didn't speak. She simply *pointed* towards the river." },
      { who: "Iker", line: "What did you do?" },
      { who: "Abuela Chela", line: "*I crept* closer, my heart pounding. In the water, *I glimpsed* something shining: my mother's gold ring, which *had been missing* for three years." },
      { who: "Iker", line: "And the woman?" },
      { who: "Abuela Chela", line: "When I turned around… *nobody was there*. Only footprints in the mud, *leading* back towards the cemetery." }
    ]
  },

  objectives: [
    "I can use a full range of narrative tenses to sequence events precisely.",
    "I can use fronting and inversion after adverbials of place for dramatic effect.",
    "I can choose vivid, precise verbs and sensory details (\"show, don't tell\").",
    "I can control pacing, suspense and point of view in spoken and written stories."
  ],

  explanation: {
    vocabTitle: "Vivid verbs",
    vocab: [
      { word: "stagger (walk unsteadily)", icon: "🥴" }, { word: "creep (move quietly)", icon: "🐾" }, { word: "dash (run quickly)", icon: "💨" },
      { word: "stroll (walk slowly)", icon: "🚶" }, { word: "glimpse (see briefly)", icon: "👁️" }, { word: "stare (look for a long time)", icon: "😳" },
      { word: "glance (look quickly)", icon: "👀" }, { word: "mutter (speak quietly)", icon: "🤫" }, { word: "yell (shout)", icon: "📣" },
      { word: "whisper", icon: "🗣️" }, { word: "tremble", icon: "🫨" }, { word: "gasp", icon: "😮" },
      { word: "slam (a door)", icon: "🚪" }, { word: "flicker (a light)", icon: "🕯️" }, { word: "echo", icon: "🔊" }
    ],
    grammar: [
      {
        title: "Narrative tenses",
        head: ["Tense", "Use in a story", "Example"],
        rows: [
          ["past simple", "main events", "She *opened* the door."],
          ["past continuous", "background, scene-setting", "Rain *was falling* and dogs *were barking*."],
          ["past perfect", "earlier events", "The ring *had disappeared* three years earlier."],
          ["past perfect continuous", "duration up to a past moment", "*I had been walking* for an hour when…"],
          ["*would / used to*", "past habits in a story", "Every Sunday, my grandfather *would tell* us stories."]
        ]
      },
      {
        title: "Fronting and inversion",
        head: ["Normal order", "Fronted (dramatic)"],
        rows: [
          ["The rain came down.", "*Down came* the rain."],
          ["A woman stepped out of the mist.", "*Out of the mist stepped* a woman."],
          ["A strange figure stood at the door.", "*At the door stood* a strange figure."],
          ["He ran away.", "*Away he ran.* (pronoun: no inversion)"]
        ],
        note: "After adverbials of place or movement, the verb comes before a noun subject. With a pronoun subject, there's no inversion: *Off she went.*"
      },
      {
        title: "Show, don't tell",
        head: ["Telling", "Showing"],
        rows: [
          ["She was scared.", "Her hands *trembled* as she reached for the handle."],
          ["The house was old.", "Paint *peeled* from the walls and the floorboards *creaked* under every step."],
          ["He was angry.", "He *slammed* the door so hard the windows *rattled*."]
        ]
      }
    ],
    watchOut: [
      ["Out of the house ran she.", "Out of the house she ran. / Out of the house ran the girl."],
      ["I walked for an hour when I saw her.", "I had been walking for an hour when I saw her."],
      ["When I arrived, the train left.", "When I arrived, the train had (already) left."],
      ["She was very very scared.", "She was terrified. / Her heart was pounding."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct narrative form.",
      items: [
        "We [[had been driving]] for six hours when the car finally broke down. (drive)",
        "When I got to the station, the last bus [[had left|had already left]]. (leave)",
        "Into the room [[walked]] a tall man in a black coat. (walk)",
        "She [[glimpsed]] a shadow at the window, but it disappeared instantly. (see briefly)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an interview with a novelist about how she builds suspense.",
      title: "Writers on writing",
      script: [
        { who: "Interviewer", line: "Your novels are famous for keeping readers awake at night. How do you build suspense?" },
        { who: "Writer", line: "Mostly by controlling time. When something important is about to happen, I slow down. Instead of writing \"She opened the door and saw the body\", I describe the sound of the key, the cold metal of the handle, her breathing. The reader is desperate to know, and I make them wait." },
        { who: "Interviewer", line: "And when do you speed up?" },
        { who: "Writer", line: "In action scenes. Short sentences. Strong verbs. She ran. He fell. The glass shattered. No adjectives, no explanations." },
        { who: "Interviewer", line: "What about point of view?" },
        { who: "Writer", line: "It's crucial. If the narrator knows everything, there's less mystery. I prefer a limited point of view: the reader only knows what one character knows. So when the character is fooled, so is the reader." },
        { who: "Interviewer", line: "Any advice for young writers?" },
        { who: "Writer", line: "Read your work aloud. If you get bored, the reader will too. And cut every word that isn't working. Stories aren't built from what you add; they're built from what you dare to leave out." }
      ],
      activities: [
        {
          type: "sort", title: "Slow down or speed up?",
          prompt: "According to the writer, which technique belongs to which effect?",
          bins: ["Slowing down (suspense)", "Speeding up (action)"],
          items: [
            { text: "describe sounds and sensations in detail", bin: 0 }, { text: "make the reader wait", bin: 0 }, { text: "describe the character's breathing", bin: 0 },
            { text: "short sentences", bin: 1 }, { text: "strong verbs", bin: 1 }, { text: "no adjectives or explanations", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the statements true or false?",
          items: [
            { s: "The writer builds suspense mainly by controlling time.", a: true },
            { s: "She uses long, descriptive sentences in action scenes.", a: false },
            { s: "She prefers a narrator who knows everything.", a: false },
            { s: "With a limited point of view, the reader can be fooled with the character.", a: true },
            { s: "She advises young writers to add more details.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the opening of a short story.",
      title: "Fiction: The Ninth Floor",
      text: [
        { body: "Nobody had used the ninth floor of the Hotel Imperial since 1985. Elena knew this because she had spent three weeks reading every newspaper archive in the city. She also knew that the lift only went as far as the eighth." },
        { body: "She had been climbing the service stairs for ten minutes when the light above her began to flicker. She paused, listening. Somewhere far below, a door slammed. Then silence, thick and absolute." },
        { body: "At the top of the stairs stood a door painted a dull, peeling green. A brass number 9, missing one screw, hung crookedly at eye level. Elena reached for the handle. It was cold, far colder than it should have been in July, and it turned without the slightest resistance, as though someone on the other side had been waiting for her." },
        { body: "Into the corridor drifted a smell she couldn't place: old roses, and something metallic beneath it. Along both walls ran a line of identical doors, all closed, all silent. All except one, at the very end, which stood a few centimeters open. And from behind it, very faintly, came the sound of someone humming a lullaby." }
      ],
      activities: [
        {
          type: "match", title: "Identify the technique",
          prompt: "Match each extract with the technique it illustrates.",
          pairs: [
            ["She had been climbing the service stairs for ten minutes when…", "past perfect continuous for duration"],
            ["At the top of the stairs stood a door…", "fronting with inversion"],
            ["It was cold, far colder than it should have been in July…", "sensory detail that creates unease"],
            ["Then silence, thick and absolute.", "a short sentence that slows the pace"],
            ["…as though someone on the other side had been waiting for her.", "a hint that builds suspense"]
          ]
        },
        {
          type: "tf", title: "Understanding the story",
          prompt: "Are these statements true or false?",
          items: [
            { s: "The ninth floor had been closed for decades.", a: true },
            { s: "Elena took the lift to the ninth floor.", a: false },
            { s: "The door handle was surprisingly warm.", a: false },
            { s: "All the doors in the corridor were closed.", a: false },
            { s: "Elena heard someone humming.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice narrative techniques, then write the next part of a story or your own.",
      activities: [
        {
          type: "rewrite", title: "Front it",
          prompt: "Rewrite each sentence with fronting and inversion, starting with the words given.",
          items: [
            { q: "A huge black dog ran into the garden. → Into the garden…", a: ["Into the garden ran a huge black dog."] },
            { q: "An old wooden chest stood in the corner. → In the corner…", a: ["In the corner stood an old wooden chest."] },
            { q: "The snow came down. → Down…", a: ["Down came the snow."] },
            { q: "She ran away. → Away…", a: ["Away she ran."] }
          ]
        },
        {
          type: "rewrite", title: "Show, don't tell",
          prompt: "Replace each \"telling\" sentence with a more vivid version using the verb in parentheses.",
          items: [
            { q: "He was nervous. (tremble: his hands…)", a: ["His hands were trembling.", "His hands trembled.", "His hands trembled slightly."] },
            { q: "She looked at the letter quickly. (glance)", a: ["She glanced at the letter."] },
            { q: "He said something quietly and angrily. (mutter)", a: ["He muttered something.", "He muttered something angrily."] },
            { q: "She walked slowly through the park. (stroll)", a: ["She strolled through the park."] }
          ]
        },
        {
          type: "write", title: "Your story",
          prompt: "Either continue *The Ninth Floor*, or write the opening of your own story (a legend from your town, a mystery, a memory). Use varied narrative tenses, at least two fronted structures, vivid verbs and sensory details. Control the pace to build suspense.",
          minWords: 200, maxWords: 300,
          model: "Elena pushed the door. It swung open with a long, painful creak. The room beyond had been frozen in time: a bed with faded pink sheets, a dressing table covered in dust, and, on the wall, a calendar still showing March 1985. The humming had stopped. She took one step inside, then another. Under her feet, broken glass crunched. On the dressing table lay a hairbrush, and tangled in its bristles was a single long black hair, shining as if it had been brushed that very morning. Elena's mouth went dry. She had been searching for answers for weeks, but now she was no longer sure she wanted them. Behind her, very slowly, the door began to close. She spun around. Nobody. In the mirror, however, stood a girl of about ten, in a white nightdress, looking straight at her. \"You took your time,\" the girl whispered.",
          bank: ["She had been…ing for… when…", "On the table lay…", "Into the room…", "Her hands trembled.", "Silence.", "She glimpsed…", "…as if…", "Behind her,…"],
          checklist: [
            "I used at least **four** different narrative tenses.",
            "I used at least **two** fronted structures.",
            "I showed emotions through actions and details instead of naming them.",
            "I varied sentence length to control the pace."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen and repeat. Tell it like a story: slow down and add drama.",
          items: [
            "Into the garden ran a huge black dog.",
            "In the corner stood an old wooden chest.",
            "Down came the snow.",
            "His hands were trembling.",
            "She glanced at the letter.",
            "Out of the mist stepped a woman."
          ]
        },
        {
          type: "speak", title: "Tell a legend",
          prompt: "Record yourself (2–3 minutes) telling a legend, ghost story or family story, as if to an audience around a fire. Use your voice: pauses, changes of speed and volume.",
          language: ["Many years ago,…", "People say that…", "Every night, she would…", "Out of the shadows…", "And then… silence.", "To this day,…"],
          seconds: 180,
          checklist: ["use narrative tenses accurately?", "use at least two fronted structures?", "vary pace and volume for effect?", "keep the audience in suspense?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use a full range of narrative tenses accurately.", review: "Explanation: narrative tenses" },
    { can: "I can use fronting and inversion for dramatic effect.", review: "Explanation: fronting; Writing activity 1" },
    { can: "I can choose vivid verbs instead of general ones.", review: "Explanation: vivid verbs; Writing activity 2" },
    { can: "I can show emotions and atmosphere instead of naming them.", review: "Explanation: show, don't tell" },
    { can: "I can analyze how writers build suspense.", review: "Listening and Reading" },
    { can: "I can tell and write a captivating story.", review: "Writing activity 3 and Speaking activities" }
  ]
};
