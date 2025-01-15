document.addEventListener('DOMContentLoaded', function () {
    //elements
    const form = document.querySelector('.memeForm');
    const memesDiv = document.querySelector('.meme'); //last div

    //prevent default and gets the values from the inputs
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        //values from the inputs
        const topText = document.querySelector('input[placeholder="Top Text"]').value;
        const bottomText = document.querySelector('input[placeholder="Bottom Text"]').value;
        const imageUrl = document.querySelector('input[type="url"]').value;

        //create the meme with the values and the function createMeme()
        createMeme(topText, bottomText, imageUrl);

        //makes the form go empty again
        form.reset();
    });

    //function to create a new meme
    function createMeme(topText, bottomText, imageUrl) {
        //new div with the meme elements
        const meme = document.createElement('div');//new div
        meme.className = 'meme-itself';//meme class for the meme

        //create meme components
        const image = document.createElement('img');
        image.src = imageUrl;
        image.className = 'meme-image';

        const topTextDiv = document.createElement('div');
        topTextDiv.className = 'meme-text top-text';
        topTextDiv.textContent = topText;

        const bottomTextDiv = document.createElement('div');
        bottomTextDiv.className = 'meme-text bottom-text';
        bottomTextDiv.textContent = bottomText;

        //create delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'X';
        deleteButton.onclick = function () {
            meme.remove();
        };

        //add everything to the meme container
        meme.appendChild(image);
        meme.appendChild(topTextDiv);
        meme.appendChild(bottomTextDiv);
        meme.appendChild(deleteButton);

        //add the meme to the page
        memesDiv.appendChild(meme);
    }
});