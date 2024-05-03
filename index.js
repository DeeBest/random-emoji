const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const emojiBtn = document.getElementById('emoji-button');
const emojiName = document.getElementById('emoji-name');

const emojis = [];

async function getEmojis() {
  let response = await fetch(
    'https://emoji-api.com/emojis?access_key=9cf21ebb3f9af2cd41df8c1495b8ed56fcaeb7b3'
  );

  let result = await response.json();

  for (let i = 0; i < 1500; i++) {
    emojis.push({
      emojiCharacter: result[i].character,
      emojiUniCodeName: result[i].unicodeName,
    });
  }
}

getEmojis();

emojiBtn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * emojis.length);

  emojiBtn.textContent = emojis[randomNumber].emojiCharacter;
  emojiName.textContent = emojis[randomNumber].emojiUniCodeName;
});
