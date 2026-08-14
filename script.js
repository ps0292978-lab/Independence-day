/* =========================
   PAGE SYSTEM
========================= */

let currentPage = 1;
const totalPages = 7;

function nextPage() {

  if (currentPage >= totalPages) {
    return;
  }

  const oldPage = document.getElementById(`page${currentPage}`);
  const nextPageElement = document.getElementById(`page${currentPage + 1}`);

  oldPage.classList.remove("active");

  setTimeout(() => {
    nextPageElement.classList.add("active");
  }, 100);

  currentPage++;

  createParticles();

}


/* =========================
   TRICOLOR PARTICLES
========================= */

function createParticles() {

  const page = document.querySelector(".page.active");

  if (!page) return;

  for (let i = 0; i < 10; i++) {

    const particle = document.createElement("div");

    particle.className = "particle";

    const colors = [
      "#ff9933",
      "#ffffff",
      "#138808"
    ];

    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.animationDuration =
      (3 + Math.random() * 4) + "s";

    particle.style.animationDelay =
      Math.random() * 2 + "s";

    page.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 8000);

  }

}


/* =========================
   FLOWER PARTICLES
========================= */

function createFlowers() {

  const flowers = ["🌸", "🌺", "🌼", "🌷"];

  setInterval(() => {

    const flower = document.createElement("div");

    flower.className = "falling-flower";

    flower.innerHTML =
      flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left =
      Math.random() * 100 + "vw";

    flower.style.fontSize =
      (12 + Math.random() * 20) + "px";

    flower.style.animationDuration =
      (5 + Math.random() * 5) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 10000);

  }, 700);

}


/* =========================
   HEART PARTICLES
========================= */

function createHearts() {

  setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML =
      Math.random() > 0.5 ? "❤️" : "🤍";

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.fontSize =
      (12 + Math.random() * 18) + "px";

    heart.style.animationDuration =
      (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 9000);

  }, 1200);

}


/* =========================
   FINAL FIREWORKS
========================= */

function fireworks() {

  const colors = [
    "#ff9933",
    "#ffffff",
    "#138808"
  ];

  for (let i = 0; i < 35; i++) {

    const spark = document.createElement("div");

    spark.className = "spark";

    const angle =
      Math.random() * Math.PI * 2;

    const distance =
      80 + Math.random() * 180;

    spark.style.setProperty(
      "--x",
      Math.cos(angle) * distance + "px"
    );

    spark.style.setProperty(
      "--y",
      Math.sin(angle) * distance + "px"
    );

    spark.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    spark.style.left = "50%";
    spark.style.top = "45%";

    document.getElementById("page7")
      .appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 1800);

  }

}


/* =========================
   WATCH FINAL PAGE
========================= */

setInterval(() => {

  if (currentPage === 7) {
    fireworks();
  }

}, 2500);


/* =========================
   START ANIMATIONS
========================= */

window.addEventListener("load", () => {

  createFlowers();
  createHearts();
  createParticles();

});
