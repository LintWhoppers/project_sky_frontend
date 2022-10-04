if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.getElementById("thememode").checked = true
    document.documentElement.setAttribute('data-theme', 'night')
} else {
    document.documentElement.setAttribute('data-theme', 'cupcake')
}

function toggleTheme() {
    console.log("on Click")
    if (document.getElementById("thememode").checked) {
        localStorage.setItem('theme', 'dark')
        document.documentElement.setAttribute('data-theme', 'night')
        console.log("Set dark")
    } else {
        localStorage.setItem('theme', 'light')
        document.documentElement.setAttribute('data-theme', 'cupcake')
        console.log("Set Light")
    }
}