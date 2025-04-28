// JavaScript for dropdown toggle
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Toggle dropdown visibility on click
dropdownBtn.addEventListener('click', function (event) {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown if clicked outside
document.addEventListener('click', function (event) {
    if (!dropdownBtn.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});

window.onload = function () {
    const phrases = ['Web Developer', 'Web Designer', 'Photographer', 'Freelancer']; // Correctly spaced words
    let phraseIndex = 0;
    let letterIndex = 0;

    function showPhrase() {
        const container = document.querySelector('.animated-text');
        container.innerHTML = ''; // Clear the container before each new phrase

        const phrase = phrases[phraseIndex]; // Get the current phrase
        const phraseElement = document.createElement('span');
        phraseElement.classList.add('phrase');

        // Split the phrase into words and letters
        const words = phrase.split(' '); // Split by spaces to preserve the spaces

        // Loop through each word
        words.forEach((word, wordIndex) => {
            const wordElement = document.createElement('span');
            wordElement.classList.add('word');

            // Loop through each letter of the word
            word.split('').forEach(letter => {
                const letterElement = document.createElement('span');
                letterElement.textContent = letter;
                letterElement.style.opacity = 0; // Initially hide the letters
                wordElement.appendChild(letterElement);
            });

            // Append the word (with its letters) to the phrase container
            phraseElement.appendChild(wordElement);

            // Only add a space after the word if it's not the last word
            if (wordIndex < words.length - 1) {
                phraseElement.appendChild(document.createTextNode(' '));
            }
        });

        // Append the phrase (with words and spaces) to the container
        container.appendChild(phraseElement);

        // Animate each letter one by one
        const letters = phraseElement.querySelectorAll('span');
        const interval = setInterval(() => {
            letters[letterIndex].style.transition = "opacity 0.1s";
            letters[letterIndex].style.opacity = 1; // Reveal the letter
            letterIndex++;

            // Once all letters are shown, move to the next phrase
            if (letterIndex === letters.length) {
                clearInterval(interval);
                letterIndex = 0;

                // After a delay, go to the next phrase or restart from the first phrase
                setTimeout(() => {
                    phraseIndex++;

                    if (phraseIndex === phrases.length) {
                        phraseIndex = 0; // Reset back to the first phrase
                    }

                    setTimeout(() => {
                        showPhrase(); // Show the next phrase or loop back to the first
                    }, 100); // Delay before the next phrase starts
                }, 100); // Delay before hiding current phrase
            }
        }, 200); // Delay between each letter
    }

    // Start the animation by showing the first phrase
    showPhrase();
};
