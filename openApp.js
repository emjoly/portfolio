// ouvrir app
function openApp(appId, appIcon) {
  var app = document.getElementById(appId);
  app.style.display = "flex";
  addTaskbarApp(appId, appIcon);
}

// fermer app
function closeApp(appId) {
  var app = document.getElementById(appId);
  app.style.display = "none";
  removeTaskbarApp(appId); // enelever du taskbar
}

// minimiser app + ajouter au taskbar
function minimizeApp(appId, appIcon) {
  var app = document.getElementById(appId);
  app.style.display = "none";
}

// toggle fullscreen
function toggleFullscreen(appId) {
  var app = document.getElementById(appId);
  app.classList.toggle("fullscreen");
}

// ajout du minimized app au taskbar
function addTaskbarApp(appId, appIcon) {
  var taskbar = document.getElementById("taskbar-apps");

  // si app dans taskbar
  if (!document.getElementById("task-" + appId)) {
    var task = document.createElement("div");
    task.className = "task";
    task.id = "task-" + appId;

    // ajouter icon
    var icon = document.createElement("img");
    icon.src = appIcon;
    task.appendChild(icon);

    // Click pour restorer app
    task.onclick = function () {
      restoreApp(appId);
    };

    taskbar.appendChild(task);
  }
}

// enlever app du taskbar quand on ferme
function removeTaskbarApp(appId) {
  var task = document.getElementById("task-" + appId);
  if (task) {
    task.remove();
  }
}

// restorer app du taskbar
function restoreApp(appId) {
  var app = document.getElementById(appId);
  app.style.display = "flex";
}

// update time!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function updateTime() {
  const timeElement = document.getElementById("taskbar-time");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  timeElement.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime();

// carrousel pour projets !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function prochaine(direction, btn) {
  const carousel = btn.parentElement.querySelector(".carousel-inner");
  const slides = carousel.querySelectorAll(".slide");
  let currentIndex;

  // find active slide
  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      currentIndex = index;
    }
  });

  // deactivate current
  const currentSlide = slides[currentIndex];
  currentSlide.classList.remove("active");

  // pause/reset if video
  const currentVideo = currentSlide.querySelector("video");
  if (currentVideo) {
    currentVideo.pause();
    currentVideo.currentTime = 0; // optional reset
  }

  // calculate next index
  const nextIndex = (currentIndex + direction + slides.length) % slides.length;

  // activate next
  const nextSlide = slides[nextIndex];
  nextSlide.classList.add("active");

  // play if video
  const nextVideo = nextSlide.querySelector("video");
  if (nextVideo) {
    nextVideo.play();
  }
}
