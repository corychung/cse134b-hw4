// Theme picker JS placed separately to prevent collision between form-no-js and form-with-js

let selectedTheme = "light";
function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    console.log("LOAD");
    if (savedTheme) {
        setTheme(savedTheme);
    }
    else {
        setTheme("light");
    }
    document.getElementById(savedTheme).checked = true;
});

function light_theme() {
    selectedTheme = "light";
    setTheme("light");
    localStorage.setItem("theme", selectedTheme);
    console.log("LIGHT");
}

function dark_theme() {
    selectedTheme = "dark";
    setTheme("dark");
    localStorage.setItem("theme", selectedTheme);
    console.log("DARK");
}