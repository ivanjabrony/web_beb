function openModal(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

(function() {
    window.addEventListener('load', function() {
        const performance = window.performance;
        const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
        const footer = document.querySelector('footer');
        if (footer) {
            const p = document.createElement('p');
            p.textContent = `Page load time: ${loadTime / 1000} s`;
            footer.appendChild(p);
        }
    });

    const navLinks = document.querySelectorAll('.menu-link');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('menu-link--active');
        }
    });
}());