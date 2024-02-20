document.addEventListener('DOMContentLoaded', function () {
    const imageSelect = document.getElementById('imageSelect');
    const displayedImage = document.getElementById('displayedImage');
    const changeCustomColorBtn = document.getElementById('changeCustomColorBtn');
    const changeRandomColorBtn = document.getElementById('changeRandomColorBtn');
    const studentIdTag = document.getElementById('studentId');

    // Populate options for select tag
    const images = ['../img/img1.jpg', '../img/img2.jpg', '../img/img3.jpg', '../img/img4.jpg' , '../img/img5.jpg']; 
    images.forEach(image => {
        const option = document.createElement('option');
        option.text = image;
        option.value = image;
        imageSelect.add(option);
    });

    // Change background color based on user input
    changeCustomColorBtn.addEventListener('click', function () {
        const userInput = prompt("Enter a number between 0 and 100:");
        const studentId = "200550743";
        studentIdTag.textContent = studentId;
        const parsedInput = parseFloat(userInput);

        if (isNaN(parsedInput) || parsedInput < 0 || parsedInput > 100) {
            document.body.style.backgroundColor = 'red';
        } else if (parsedInput >= 0 && parsedInput < 20) {
            document.body.style.backgroundColor = 'green';
        } else if (parsedInput >= 20 && parsedInput < 40) {
            document.body.style.backgroundColor = 'blue';
        } else if (parsedInput >= 40 && parsedInput < 60) {
            document.body.style.backgroundColor = 'orange';
        } else if (parsedInput >= 60 && parsedInput < 80) {
            document.body.style.backgroundColor = 'purple';
        } else {
            document.body.style.backgroundColor = 'yellow';
        }
    });

    // Change background color randomly
    changeRandomColorBtn.addEventListener('click', function () {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        const studentId = "200550743"; 
        studentIdTag.textContent = studentId;
        if (randomValue >= 0 && randomValue < 20) {
            document.body.style.backgroundColor = 'green';
        } else if (randomValue >= 20 && randomValue < 40) {
            document.body.style.backgroundColor = 'blue';
        } else if (randomValue >= 40 && randomValue < 60) {
            document.body.style.backgroundColor = 'orange';
        } else if (randomValue >= 60 && randomValue < 80) {
            document.body.style.backgroundColor = 'purple';
        } else {
            document.body.style.backgroundColor = 'yellow';
        }
    });

    // Display selected image
    imageSelect.addEventListener('change', function () {
        const selectedImage = imageSelect.value;
        if (selectedImage) {
            displayedImage.src = 'img/' + selectedImage;
        } else {
            displayedImage.src = '';
        }
    });
});
