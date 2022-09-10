/* arrays */
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const consonantArrOne = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Y', 'Z'];
const vowelArr = ['A', 'E', 'I', 'O', 'U'];
const consonantArrTwo = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'];

/* access document */
const consonantOne = document.getElementById('consonant-one');
const vowel = document.getElementById('vowel');
const consonantTwo = document.getElementById('consonant-two');

// get a random letter from an array
const getRandomLetter = arr => {
  let num = Math.floor(Math.random() * arr.length);
  return arr[num];
}

/* functions to replace the letters */
const replaceLetter = (arr) => {
  let newP = document.createElement('p');
  let newRandomLetter = getRandomLetter(arr);
  newP.textContent = newRandomLetter;
  if(arr == consonantArrOne) {
    consonantOne.replaceChild(newP, consonantOne.firstElementChild);
  } else if(arr == vowelArr) {
    vowel.replaceChild(newP, vowel.firstElementChild);
  } else if(arr == consonantArrTwo) {
    consonantTwo.replaceChild(newP, consonantTwo.firstElementChild);
  }


  
}


/* event listeners */
consonantOne.addEventListener('click', function(){
  replaceLetter(consonantArrOne);
});

vowel.addEventListener('click', function(){
  replaceLetter(vowelArr);
});

consonantTwo.addEventListener('click', function(){
  replaceLetter(consonantArrTwo);
});

/* consonantOne.addEventListener('click', function() {
  let newP = document.createElement('p');
  let newLetter = getRandomLetter(consonantArrOne);
  newP.textContent = newLetter;
  consonantOne.replaceChild(newP, consonantOne.firstElementChild);
}); */