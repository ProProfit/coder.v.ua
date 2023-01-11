
/*
* Dark Theme
*
* */
let darkMode = localStorage.getItem("ThemeDark");
let darkbg_d = '<img src="/images/sun.png" alt=""sum>';
let lightbg_d = '<img src="/images/moon.png" alt="moon">';
let theme = document.getElementById("theme");
const darkModeToggle = document.querySelector("#btnTheme");
const highlighting_dark = document.querySelector("#btnTheme");
const enableDarkMode = () =>
{
    theme.href = "/css/darkmode.min.css";
    localStorage.setItem("ThemeDark", "enabled");
    document.getElementById("btnTheme").innerHTML = (darkbg_d);
};

const disableDarkMode = () =>
{
    theme.href = "/css/main.min.css";
    localStorage.setItem("ThemeDark", null);
    document.getElementById("btnTheme").innerHTML = (lightbg_d);
};
if (darkMode === 'enabled'){
    enableDarkMode();
};
darkModeToggle.addEventListener("click", () => {
        darkMode = localStorage.getItem("ThemeDark");

        if (darkMode !== "enabled")
        {	enableDarkMode();
        }
        else
        {	disableDarkMode();
        }
    }
);

