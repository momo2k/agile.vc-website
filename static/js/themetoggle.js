function setTheme(mode) {
    localStorage.setItem("theme-storage", mode);
    var toggleBtn = document.getElementById("dark-mode-toggle");
    var favicon = document.getElementById("favicon");
    var logo = document.querySelector('.main img');
    
    if (mode === "light") {
        var darkModeStyle = document.getElementById("darkModeStyle");
        if (darkModeStyle) darkModeStyle.disabled = true;
        
        // Light mode → show MOON in Agile Blue
        if (toggleBtn) {
            toggleBtn.innerHTML = `<svg class="feather" viewBox="0 0 24 24" fill="none" stroke="#1976A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>`;
            toggleBtn.setAttribute('data-theme', 'light');
            toggleBtn.blur();
        }
        
        // Light mode → light favicon (relative to base)
        if (favicon) {
            var link = document.createElement('a');
            link.href = 'favicon-light.png';
            favicon.href = link.href;
        }
        
        // Light mode → color logo
        if (logo) {
            var logoLink = document.createElement('a');
            logoLink.href = 'agile-logo.png';
            logo.src = logoLink.href;
        }
    } else if (mode === "dark") {
        var darkModeStyle = document.getElementById("darkModeStyle");
        if (darkModeStyle) darkModeStyle.disabled = false;
        
        // Dark mode → show SUN in text color
        if (toggleBtn) {
            toggleBtn.innerHTML = `<svg class="feather" viewBox="0 0 24 24" fill="none" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>`;
            toggleBtn.setAttribute('data-theme', 'dark');
            toggleBtn.blur();
        }
        
        // Dark mode → dark favicon (relative to base)
        if (favicon) {
            var link = document.createElement('a');
            link.href = 'favicon-dark.png';
            favicon.href = link.href;
        }
        
        // Dark mode → monochrome logo
        if (logo) {
            var logoLink = document.createElement('a');
            logoLink.href = 'agile-logo-mono.png';
            logo.src = logoLink.href;
        }
    }
}

function toggleTheme() {
    if (localStorage.getItem("theme-storage") === "light") {
        setTheme("dark");
    } else if (localStorage.getItem("theme-storage") === "dark") {
        setTheme("light");
    }
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = localStorage.getItem("theme-storage") || "light";
    setTheme(savedTheme);
});
