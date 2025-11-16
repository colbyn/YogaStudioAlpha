document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('site-nav-full-width');
    if (!btn || !nav) {
        console.log("⚠️ missing elements to setup menu toggle functionality")
    };
    
    let scrollY = 0;
    let closing = false;
    
    function lockScroll() {
        scrollY = window.scrollY || document.documentElement.scrollTop || 0;
        document.documentElement.classList.add('nav-open');
        document.body.classList.add('scroll-lock');
        // document.body.style.top = `-${scrollY}px`;
    }
    
    function unlockScroll() {
        document.documentElement.classList.remove('nav-open');
        document.body.classList.remove('scroll-lock');
        const y = Math.abs(parseInt(document.body.style.top || '0', 10)) || 0;
        document.body.style.top = '';
        window.scrollTo(0, y);
    }
    
    function openNav() {
        if (nav.classList.contains('open')) return;
        nav.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        lockScroll();
    }
    
    function closeNav() {
        if (!nav.classList.contains('open') || closing) return;
        closing = true;
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    
        // wait for the slide-out to finish before unlocking scroll
        const onEnd = (e) => {
            if (e.propertyName !== 'transform') return;
            nav.removeEventListener('transitionend', onEnd);
            closing = false;
            unlockScroll();
        };
        nav.addEventListener('transitionend', onEnd);
    }
    
    btn.addEventListener('click', () => {
        btn.classList.add('tap');
        setTimeout(() => btn.classList.remove('tap'), 150);
        nav.classList.contains('open') ? closeNav() : openNav();
    });
    
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('open')) closeNav();
    });
    
    nav.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (a) closeNav();
    });
});