'use strict';

let usersChoice = "";

function getDogImage() {
    usersChoice = document.getElementById("userInput").value;
  fetch('https://dog.ceo/api/breed/' + usersChoice + '/images/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  if (responseJson.message === "Breed not found (master breed does not exist)") {
    document.getElementById('slap-on-the-back-message').innerHTML = "Breed doesn't exist.";
    $('.results').removeClass('hidden');
    let emptyDiv = '<div class="images-container"></div>';
    $('.images-container').replaceWith(emptyDiv);
    return;
  }
  let image = '<div class="images-container"><img src="' + responseJson.message + '" class="results-img"></div>'
  document.getElementById('slap-on-the-back-message').innerHTML = "Great choice!";
  $('.images-container').replaceWith(image);
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});