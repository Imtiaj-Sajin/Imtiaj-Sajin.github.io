const textToType = "UI/UX Designer"; // Replace with your desired text
const typedTextElement = document.getElementById("typed-text");

function typeText() {
  typedTextElement.textContent = "";
  let index = 0;
  const typingInterval = setInterval(function () {
    typedTextElement.textContent += textToType[index];
    index++;
    if (index >= textToType.length) {
      clearInterval(typingInterval);
    }
  }, 100); // Adjust typing speed (milliseconds) as desired
}

typeText();
