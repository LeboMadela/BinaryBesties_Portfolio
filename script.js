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
