function openEnvelope() {
  let flap = document.querySelector(".flap");
  let scrollMessage = document.querySelector(".scroll-message");
  document.querySelector(".envelope-image").style.display = "none";

  // Open the envelope flap
  flap.style.transform = "rotateX(180deg)";

  // Show the scroll message after a short delay
  setTimeout(() => {
    if (scrollMessage) {
      scrollMessage.classList.add("show");
    }
  }, 600);

  // Trigger confetti animation
  startConfetti();
}

function startConfetti() {
  const duration = 3 * 1000; // 3 seconds
  const end = Date.now() + duration;
  const confettiSettings = { target: "my-canvas" };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}
