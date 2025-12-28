function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(id);
  page.classList.add('active');

  // Reload all GIFs on this page
  page.querySelectorAll('.giftImg').forEach(img => {
    const src = img.src;
    img.src = '';
    setTimeout(() => { img.src = src; }, 10);
  });
}

function noClicked() { showPage('surePage'); }
function tryAgain() { showPage('page1'); }

function yesClicked() {
  heartBurst();
  setTimeout(() => showPage('giftsPage'), 600);
}

function openGift(num) { showPage('gift' + num); }

function goBack() {
  const current = document.querySelector('.page.active');
  current.classList.add('fade-out');
  setTimeout(() => {
    current.classList.remove('fade-out');
    showPage('giftsPage');
  }, 1000);
}

function goToStart() {
  const current = document.querySelector('.page.active');
  current.classList.add('fade-out');
  setTimeout(() => {
    current.classList.remove('fade-out');
    showPage('page1');
  }, 1000);
}

/* Floating hearts */
const heartsContainer = document.getElementById("hearts");
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 500);

/* Heart burst */
function heartBurst() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.className = "burst-heart";
    heart.innerHTML = "❤";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.setProperty("--x", (Math.random() - 0.5) * 300 + "px");
    heart.style.setProperty("--y", (Math.random() - 0.5) * 300 + "px");
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
  }
}
