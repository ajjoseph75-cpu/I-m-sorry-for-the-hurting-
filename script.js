const screens = [...document.querySelectorAll(".screen")];

function showScreen(id) {
  screens.forEach(screen => screen.classList.remove("active"));
  const next = document.getElementById(id);
  next.classList.add("active");
  window.scrollTo({ top:0, behavior:"smooth" });
}

document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.next);
  });
});

const breathText = document.getElementById("breathText");
let breathIn = true;

setInterval(() => {
  breathText.textContent = breathIn ? "Exhale slowly" : "Breathe in";
  breathIn = !breathIn;
}, 4000);

const revealItems = [...document.querySelectorAll(".reveal-item")];
const reflection = document.getElementById("reflection");
const ownNext = document.getElementById("ownNext");

let revealed = 0;

revealItems.forEach(item => {
  item.addEventListener("click", () => {
    reflection.textContent = item.dataset.text;

    if (!item.classList.contains("opened")) {
      item.classList.add("opened");
      revealed += 1;

      if (revealed === revealItems.length) {
        ownNext.classList.remove("hidden");
      }
    }
  });
});

const heartButton = document.getElementById("heartButton");
const heartMessage = document.getElementById("heartMessage");
const truthNext = document.getElementById("truthNext");

heartButton.addEventListener("click", () => {
  heartButton.textContent = "♥";
  heartButton.classList.add("open");
  heartMessage.textContent =
    "I want the way I listen, speak, respond, and show up to make you feel the love I say I have for you.";
  truthNext.classList.remove("hidden");
});

document.getElementById("restartButton").addEventListener("click", () => {
  showScreen("welcome");
});
