const button = document.getElementById('btn');
const header = document.getElementById('result');

// Selecting dice images

const image1 = document.querySelectorAll('img')[0];
const image2 = document.querySelectorAll('img')[1];

// Generating random number for first dice

const randomNumberOne = Math.floor(Math.random() * 6) + 1;
const randomDiceImage = 'dice' + randomNumberOne + '.png';
const imageSource = 'images/' + randomDiceImage;

console.log(imageSource);
image1.setAttribute('src', imageSource);

// Generating random number for second dice

const randomNumberTwo = Math.floor(Math.random() * 6) + 1;
const randomDiceImageTwo = 'dice' + randomNumberTwo + '.png';
const imageSourceTwo = 'images/' + randomDiceImageTwo;
image2.setAttribute('src', imageSourceTwo);

// Using button to refresh the page

button.addEventListener('click', () => {
  location.reload();
});

// Generating Results

if (randomNumberOne > randomNumberTwo) {
  header.innerHTML = '🎉 Player 1 Wins 🎉';
} else if (randomNumberOne < randomNumberTwo) {
  header.innerHTML = '🎉 Player 2 Wins 🎉';
} else {
  header.innerHTML = '😒 DRAWWWWW!! 😒';
}
