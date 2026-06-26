(function () {
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
