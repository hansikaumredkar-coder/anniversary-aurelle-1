const popupBackdrop = document.getElementById("popupBackdrop");
const popupTitle = document.getElementById("popupTitle");
const popupContent = document.getElementById("popupContent");
const closePopup = document.getElementById("closePopup");
const donePopup = document.getElementById("donePopup");

const memories = {
  story: {
    title: "Our Story ♡",
    content: `
      <p>Somehow, out of all the people in the world, we found each other.</p>
      <p>And every little moment since has become a favorite part of our story. ♡</p>
    `
  },

  firsts: {
    title: "Our Firsts 🌷",
    content: `
      <p>♡ The first time we talked for hours</p>
      <p>♡ Our first silly inside joke</p>
      <p>♡ The first time “I miss you” felt extra meaningful</p>
      <p class="photo-caption">Every beginning led us here.</p>
    `
  },

  moments: {
    title: "Favorite Moments 🎞️",
    content: `
      <p>Our favorite memories aren't always the big ones.</p>
      <p>They're the random laughs, the little check-ins, and the moments that feel like home.</p>
      <p class="photo-caption">A few snapshots from our little world…</p>

      <div class="photo-frame">
        <img src="images/couple-1.jpg" alt="A fictional couple sharing a happy moment">
        <p class="photo-caption">One of our favorite days ♡</p>
      </div>

      <div class="photo-frame">
        <img src="images/couple-2.jpg" alt="A fictional couple taking a cute photo together">
        <p class="photo-caption">A memory to keep forever</p>
      </div>
    `
  },

  letter: {
    title: "A Letter for You 💌",
    content: `
      <p>My favorite person,</p>
      <p>Thank you for making ordinary days feel special and for being part of so many memories I want to keep.</p>
      <p>I hope we keep finding new reasons to laugh, new places to go, and new little moments to call ours.</p>
      <p class="photo-caption">Always, Mira ♡</p>
    `
  },

  surprise: {
    title: "One More Surprise 🎁",
    content: `
      <p>If I could give you one thing, it would be the chance to see yourself through my eyes.</p>
      <p>Maybe then you'd understand how much happiness you bring into my world.</p>
      <p class="photo-caption">Happy anniversary, Aarav. ♡</p>
    `
  }
};

function openMemory(memoryKey) {
  const memory = memories[memoryKey];
  if (!memory) return;

  popupTitle.textContent = memory.title;
  popupContent.innerHTML = memory.content;
  popupBackdrop.classList.add("is-open");
  popupBackdrop.setAttribute("aria-hidden", "false");
  closePopup.focus();
}

function hidePopup() {
  popupBackdrop.classList.remove("is-open");
  popupBackdrop.setAttribute("aria-hidden", "true");
}

document.getElementById("openStory").addEventListener("click", () => {
  openMemory("story");
});

document.querySelectorAll("[data-popup]").forEach((button) => {
  button.addEventListener("click", () => {
    openMemory(button.dataset.popup);
  });
});

closePopup.addEventListener("click", hidePopup);
donePopup.addEventListener("click", hidePopup);

popupBackdrop.addEventListener("click", (event) => {
  if (event.target === popupBackdrop) {
    hidePopup();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && popupBackdrop.classList.contains("is-open")) {
    hidePopup();
  }
});
