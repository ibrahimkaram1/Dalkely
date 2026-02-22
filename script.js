document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       Navbar scroll effect
    ========================= */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* =========================
       Mobile menu toggle
    ========================= */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const icon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        if (icon.classList.contains('fa-bars')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });

    /* =========================
       Close menu on link click
    ========================= */
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    /* =========================
       Booking form
    ========================= */
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', e => {
            e.preventDefault();

            const btn = bookingForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'جاري الإرسال...';
            btn.disabled = true;

            setTimeout(() => {
                alert('تم استلام طلبك بنجاح ✅');
                bookingForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

});
