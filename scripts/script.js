
  // Get DOM elements
  const toggleButton = document.getElementById("darkModeToggle");
  const themeIcon = document.getElementById("theme-icon");

  // Load saved theme on page load
  window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeIcon.textContent = "☀️";
    }
  };

  // Toggle dark mode
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeIcon.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

