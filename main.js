document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    menuBtn.addEventListener('click', function () {

        this.classList.toggle('active');

        nav.classList.toggle('open');

        if (this.classList.contains('active')) {
            this.innerHTML = '<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        } else {
            this.innerHTML = '<svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m19 11h-18c-.265216 0-.51957-.1054-.707107-.2929-.187536-.1875-.292893-.4419-.292893-.7071 0-.26522.105357-.51957.292893-.70711.187537-.18753.441891-.29289.707107-.29289h18c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711 0 .2652-.1054.5196-.2929.7071s-.4419.2929-.7071.2929zm0-7h-18c-.265216 0-.51957-.10536-.707107-.29289-.187536-.18754-.292893-.44189-.292893-.70711s.105357-.51957.292893-.70711c.187537-.18753.441891-.29289.707107-.29289h18c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711s-.1054.51957-.2929.70711c-.1875.18753-.4419.29289-.7071.29289zm0 14h-18c-.265216 0-.51957-.1054-.707107-.2929-.187536-.1875-.292893-.4419-.292893-.7071s.105357-.5196.292893-.7071c.187537-.1875.441891-.2929.707107-.2929h18c.2652 0 .5196.1054.7071.2929s.2929.4419.2929.7071-.1054.5196-.2929.7071-.4419.2929-.7071.2929z" fill="rgb(0,0,0)"/></svg>';
        }
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('open');
            menuBtn.classList.remove('active');
            menuBtn.innerHTML = '<svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m19 11h-18c-.265216 0-.51957-.1054-.707107-.2929-.187536-.1875-.292893-.4419-.292893-.7071 0-.26522.105357-.51957.292893-.70711.187537-.18753.441891-.29289.707107-.29289h18c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711 0 .2652-.1054.5196-.2929.7071s-.4419.2929-.7071.2929zm0-7h-18c-.265216 0-.51957-.10536-.707107-.29289-.187536-.18754-.292893-.44189-.292893-.70711s.105357-.51957.292893-.70711c.187537-.18753.441891-.29289.707107-.29289h18c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711s-.1054.51957-.2929.70711c-.1875.18753-.4419.29289-.7071.29289zm0 14h-18c-.265216 0-.51957-.1054-.707107-.2929-.187536-.1875-.292893-.4419-.292893-.7071s.105357-.5196.292893-.7071c.187537-.1875.441891-.2929.707107-.2929h18c.2652 0 .5196.1054.7071.2929s.2929.4419.2929.7071-.1054.5196-.2929.7071-.4419.2929-.7071.2929z" fill="rgb(0,0,0)"/></svg>';
        });
    });

    const animateOnScroll = function () {
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fade-in');
            }
        });
    };

    animateOnScroll();

    window.addEventListener('scroll', animateOnScroll);
});