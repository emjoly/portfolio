// Function to open an app
function openApp(appId, appIcon) {
  var app = document.getElementById(appId);
  app.style.display = "flex";
  addTaskbarApp(appId, appIcon);
}

// Function to close an app
function closeApp(appId) {
  var app = document.getElementById(appId);
  app.style.display = "none";
  removeTaskbarApp(appId); // Remove from taskbar when the app is closed
}

// Function to minimize an app (adds to taskbar)
function minimizeApp(appId, appIcon) {
  var app = document.getElementById(appId);
  app.style.display = "none"; // Minimize the app
  // Do not remove taskbar icon when minimized
}

// Function to toggle fullscreen
function toggleFullscreen(appId) {
  var app = document.getElementById(appId);
  app.classList.toggle("fullscreen");
}

// Function to add minimized app (with icon) to taskbar
function addTaskbarApp(appId, appIcon) {
  var taskbar = document.getElementById("taskbar");

  // Check if app is already in taskbar
  if (!document.getElementById("task-" + appId)) {
    var task = document.createElement("div");
    task.className = "task";
    task.id = "task-" + appId;

    // Add app icon to task
    var icon = document.createElement("img");
    icon.src = appIcon;
    task.appendChild(icon);

    // Click event to restore minimized app
    task.onclick = function () {
      restoreApp(appId);
    };

    taskbar.appendChild(task);
  }
}

// Function to remove app from taskbar when closed
function removeTaskbarApp(appId) {
  var task = document.getElementById("task-" + appId);
  if (task) {
    task.remove(); // Remove from taskbar when app is closed
  }
}

// Function to restore a minimized app from taskbar
function restoreApp(appId) {
  var app = document.getElementById(appId);
  app.style.display = "flex"; // Restore the app
  // Keep the taskbar icon until the app is closed
}
