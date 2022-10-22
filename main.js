// TODO: For Debug, Will remove in Production
localStorage.clear();

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.getElementById("thememode").checked = true
    document.documentElement.setAttribute('data-theme', 'halloween')
} else {
    document.documentElement.setAttribute('data-theme', 'cupcake')
}

function toggleTheme() {
    console.log("on Click")
    if (document.getElementById("thememode").checked) {
        localStorage.setItem('theme', 'dark')
        document.documentElement.setAttribute('data-theme', 'halloween')
    } else {
        localStorage.setItem('theme', 'light')
        document.documentElement.setAttribute('data-theme', 'cupcake')
    }
}
const counters = document.querySelectorAll('.counter');
const speed = 2000; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = Math.ceil(count + inc);
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
