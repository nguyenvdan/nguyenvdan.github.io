(function () {
    // nav: hairline appears once the page is scrolled
    var bar = document.querySelector('.topbar');
    if (bar) {
        var sync = function () {
            bar.classList.toggle('scrolled', window.scrollY > 8);
        };
        sync();
        window.addEventListener('scroll', sync, { passive: true });
    }

    // cursor spotlight (pointer devices only)
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
    var glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    var shown = false;
    window.addEventListener('pointermove', function (e) {
        glow.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
        if (!shown) { glow.style.opacity = '1'; shown = true; }
    }, { passive: true });
    document.addEventListener('mouseleave', function () { glow.style.opacity = '0'; shown = false; });
})();
