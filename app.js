document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery');
    const indexContainer = document.getElementById('index');

    galleryData.forEach((cardData, index) => {
        const card = createCard(cardData);
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
});

function createCard(data) {
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

    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = data.audio;
    card.appendChild(audio);

    return card;
}
