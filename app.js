document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery');
    const indexContainer = document.getElementById('index');

    let currentlyPlaying = null;

    galleryData.forEach((cardData, index) => {
        const card = createCard(cardData, index);
        galleryContainer.appendChild(card);

        const indexLink = document.createElement('a');
        indexLink.href = `#card${index + 1}`;
        indexLink.textContent = cardData.title;
        indexLink.addEventListener('click', (event) => {
            event.preventDefault();
            card.scrollIntoView({ behavior: 'smooth' });
        });
        indexContainer.appendChild(indexLink);
    });

    function createCard(data, index) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const image = document.createElement('img');
        image.src = data.image;
        card.appendChild(image);

        const title = document.createElement('h2');
        title.textContent = data.title;
        card.appendChild(title);

        const text = document.createElement('p');
        text.textContent = data.text;
        card.appendChild(text);

        const audioContainer = document.createElement('div');
        audioContainer.className = 'audio-container';
        
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = data.audio;

        audio.addEventListener('play', () => {
            if (currentlyPlaying && currentlyPlaying !== audio) {
                currentlyPlaying.pause();
            }
            currentlyPlaying = audio;
            card.classList.add('playing');
        });

        audio.addEventListener('pause', () => {
            card.classList.remove('playing');
        });

        audio.addEventListener('ended', () => {
            card.classList.remove('playing');
        });

        audioContainer.appendChild(audio);
        card.appendChild(audioContainer);

        return card;
    }
});
