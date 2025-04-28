// JavaScript for dropdown toggle
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Toggle dropdown visibility on click
dropdownBtn.addEventListener('click', function (event) {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown if clicked outside of both the button and the menu
document.addEventListener('click', function (event) {
    if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});

window.onload = function () {
    const phrases = ['Web Developer', 'Web Designer', 'Photographer', 'Freelancer'];
    let phraseIndex = 0;
    let letterIndex = 0;

    function showPhrase() {
        const container = document.querySelector('.animated-text');
        container.innerHTML = ''; // Clear the container before each new phrase

        const phrase = phrases[phraseIndex];
        const phraseElement = document.createElement('span');
        phraseElement.classList.add('phrase');

        const words = phrase.split(' ');

        words.forEach((word, wordIndex) => {
            const wordElement = document.createElement('span');
            wordElement.classList.add('word');

            word.split('').forEach(letter => {
                const letterElement = document.createElement('span');
                letterElement.textContent = letter;
                letterElement.style.opacity = 0;
                wordElement.appendChild(letterElement);
            });

            phraseElement.appendChild(wordElement);

            if (wordIndex < words.length - 1) {
                phraseElement.appendChild(document.createTextNode(' '));
            }
        });

        container.appendChild(phraseElement);

        const letters = phraseElement.querySelectorAll('span');
        const interval = setInterval(() => {
            letters[letterIndex].style.transition = "opacity 0.3s ease-in-out";
            letters[letterIndex].style.opacity = 1;
            letterIndex++;

            if (letterIndex === letters.length) {
                clearInterval(interval);
                letterIndex = 0;

                setTimeout(() => {
                    phraseIndex = (phraseIndex + 1) % phrases.length;  // Move to the next phrase (loop)
                    showPhrase();  // Preload and show the next phrase
                }, 100); // Delay before transitioning to the next phrase
            }
        }, 100); // Faster delay between each letter for smoother animation
    }

    showPhrase();
};

const counters = document.querySelectorAll('.counter');
const speed = 200; // lower is faster

counters.forEach(counter => {
    const animate = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animate, 20);
        } else {
            counter.innerText = target;
        }
    };

    animate();
});

const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        themeIcon.innerHTML = `
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        `;
    } else {
        themeIcon.innerHTML = `
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        `;
    }
});