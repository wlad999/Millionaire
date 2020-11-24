const data = {
  currency: "$",
  questions: [
    {
      earn: 500,
      answer: null,
      question:
        "In the UK, the abbreviation NHS stands for National what Service?",
      options: [
        { type: "A", option: "humanity", answer: null },
        { type: "B", option: "honour", answer: null },
        { type: "C", option: "health", truth: true, answer: null },
        { type: "D", option: "household", answer: null },
      ],
    },
    {
      earn: 1000,
      answer: null,
      question:
        "Which Disney character famously leaves a glass slipper behind at a royal ball?",
      options: [
        { type: "A", option: "Pocahontas", answer: null },
        { type: "B", option: "Sleeping Beauty", answer: null },
        { type: "C", option: "Cinderella", truth: true, answer: null },
        { type: "D", option: "Elsa", answer: null },
      ],
    },
    {
      earn: 2000,
      answer: null,
      question:
        "What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
      options: [
        { type: "A", option: "Hangar", answer: null },
        { type: "B", option: "Terminal", answer: null },
        { type: "C", option: "Concourse", answer: null },
        { type: "D", option: " Carousel ", answer: null, truth: true },
      ],
    },
    {
      earn: 4000,
      answer: null,
      question:
        "Which of these brands was chiefly associated with the manufacture of household locks?",
      options: [
        { type: "A", option: "Phillips", answer: null },
        { type: "B", option: "Flymo", answer: null },
        { type: "C", option: "Chubb", answer: null, truth: true },
        { type: "D", option: "Ronseal", answer: null },
      ],
    },
    {
      earn: 8000,
      answer: null,
      question:
        "The hammer and sickle is one of the most recognisable symbols of which political ideology?",
      options: [
        { type: "A", option: "Republicanism", answer: null },
        { type: "B", option: "Communism", answer: null, truth: true },
        { type: "C", option: "Conservatism", answer: null },
        { type: "D", option: "Liberalism", answer: null },
      ],
    },
    {
      earn: 16000,
      answer: null,
      question:
        "Which toys have been marketed with the phrase “robots in disguise”?",
      options: [
        { type: "A", option: "Bratz Dolls", answer: null },
        { type: "B", option: "Sylvanian Families", answer: null },
        { type: "C", option: "Hatchimals", answer: null },
        { type: "D", option: "Transformers", answer: null, truth: true },
      ],
    },
    {
      earn: 32000,
      answer: null,
      question: "What does the word loquacious mean?",
      options: [
        { type: "A", option: "Angry", answer: null },
        { type: "B", option: "Chatty", answer: null, truth: true },
        { type: "C", option: "Beautiful", answer: null },
        { type: "D", option: "Shy", answer: null },
      ],
    },
    {
      earn: 64000,
      answer: null,
      question:
        "Obstetrics is a branch of medicine particularly concerned with what?",
      options: [
        { type: "A", option: "Childbirth", answer: null, truth: true },
        { type: "B", option: "Broken bones", answer: null },
        { type: "C", option: "Heart conditions", answer: null },
        { type: "D", option: "Old age", answer: null },
      ],
    },
    {
      earn: 125000,
      answer: null,
      question:
        "In Doctor Who, what was the signature look of the fourth Doctor, as portrayed by Tom Baker?",
      options: [
        { type: "A", option: "Bow-tie, braces and tweed jacket", answer: null },
        {
          type: "B",
          option: "Wide-brimmed hat and extra long scarf",
          answer: null,
          truth: true,
        },
        { type: "C", option: "Pinstripe suit and trainers", answer: null },
        {
          type: "D",
          option: "Cape, velvet jacket and frilly shirt",
          answer: null,
        },
      ],
    },
    {
      earn: 250000,
      answer: null,
      question:
        "Which of these religious observances lasts for the shortest period of time during the calendar year?",
      options: [
        { type: "A", option: "Ramadan", answer: null },
        { type: "B", option: "Diwali", answer: null, truth: true },
        { type: "C", option: "Lent", answer: null },
        { type: "D", option: "Hanukkah", answer: null },
      ],
    },
    {
      earn: 500000,
      answer: null,
      question:
        "At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
      options: [
        { type: "A", option: "Bahamas", answer: null, truth: true },
        { type: "B", option: "US Virgin Islands", answer: null },
        { type: "C", option: "Turks and Caicos Islands", answer: null },
        { type: "D", option: "Bermuda", answer: null },
      ],
    },
    {
      earn: 1000000,
      answer: null,
      question: "Two Zero Two Four?",
      options: [
        { type: "A", option: "2024", answer: null, truth: true },
        { type: "B", option: "0044", answer: null, truth: true },
        { type: "C", option: "0024", answer: null, truth: true },
        { type: "D", option: "2044", answer: null, truth: true },
      ],
    },
  ],
};

const jsonData = JSON.stringify(data);
export default jsonData;
