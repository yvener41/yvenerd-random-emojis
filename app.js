const myEffect = document.querySelector("#emoji");

const emojis = [
  "🚗",
  "🚕",
  "🚌",
  "🏎",
  "🚑",
  "🚛",
  "🛴",
  "🚲",
  "🛵",
  "🚔",
  "🚟",
  "🚃",
  "🚝",
  "🚄",
  "🚂",
  "✈️",
  "🛫",
  "🛬",
  "🛩",
  "🚀",
  "🚁",
  "🛳",
  "⛴",
  "🚢",
  "⛽️",
  "🚧",
  "🗽",
  "🗼",
  "🏪",
  "🛣",
  "🌄",
  "🚦",
  "🛸",
  "🚛",
];

myEffect.addEventListener("mouseover", () => {
  myEffect.innerText = emojis[Math.floor(Math.random() * emojis.length)];
});
