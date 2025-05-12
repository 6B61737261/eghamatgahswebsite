const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// Add click events to vertical bars
document.querySelector('.swiper-button-next-bar').addEventListener('click', () => {
    swiper.slidePrev();
});
document.querySelector('.swiper-button-prev-bar').addEventListener('click', () => {
    swiper.slideNext();
});

const lightbox = GLightbox({
    selector: '.glightbox',
    loop: true,
    touchNavigation: true,
    closeButton: true,
    slideEffect: 'fade',
  });
  

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Jalalidatepicker
    if (typeof jalaliDatepicker !== "undefined") {
        jalaliDatepicker.startWatch({
            separator: '/',
            minDate: "today",
            showTodayButton: true,
            autoClose: true,
            zIndex: 1000,
            dateFormat: "YYYY/MM/DD",
            calendarType: "persian",
            inputClass: "jalali-datepicker",
        });
    }

    // Contact form event
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("پیام شما با موفقیت ارسال شد (نمایشی)!");
            contactForm.reset();
        });
    }

    // Match heights of about section
    function matchHeights() {
        const textContainer = document.querySelector('.about-text-container ul');
        const imageContainer = document.querySelector('.about-image-container');
        if (textContainer && imageContainer) {
            const textHeight = textContainer.offsetHeight;
            imageContainer.style.height = `${textHeight}px`;
        }
    }

    // Run on load
    matchHeights();

    // Run on window resize
    window.addEventListener('resize', matchHeights);
});

document.addEventListener('DOMContentLoaded', function() {
    // منوی همبرگر
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', function() {
        if (mainNav.classList.contains('hidden')) {
            mainNav.classList.remove('hidden');
            mainNav.classList.add('block');
            // انیمیشن باز شدن منو
            setTimeout(() => {
                mainNav.style.maxHeight = '500px';
                mainNav.style.opacity = '1';
            }, 10);
        } else {
            // انیمیشن بسته شدن منو
            mainNav.style.maxHeight = '0';
            mainNav.style.opacity = '0';
            setTimeout(() => {
                mainNav.classList.add('hidden');
                mainNav.classList.remove('block');
            }, 300);
        }
    });

    // تغییر استایل هدر هنگام اسکرول
    const header = document.getElementById('header');
    const scrollThreshold = 50;

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('py-1');
            header.classList.add('bg-indigo-900');
            header.classList.remove('bg-gradient-to-r', 'from-indigo-700', 'to-indigo-900');
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('py-1');
            header.classList.remove('bg-indigo-900');
            header.classList.add('bg-gradient-to-r', 'from-indigo-700', 'to-indigo-900');
            header.classList.remove('shadow-lg');
        }
    }

    window.addEventListener('scroll', handleScroll);
    
    // فعال کردن لینک منو بر اساس بخش فعلی
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('bg-indigo-600', 'font-medium');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('bg-indigo-600', 'font-medium');
            }
        });
    });
    
    // اضافه کردن اسکرول نرم به لینک‌های منو
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // بستن منوی موبایل در صورت باز بودن
            if (window.innerWidth < 1024 && mainNav.classList.contains('block')) {
                mainNav.style.maxHeight = '0';
                mainNav.style.opacity = '0';
                setTimeout(() => {
                    mainNav.classList.add('hidden');
                    mainNav.classList.remove('block');
                }, 300);
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});