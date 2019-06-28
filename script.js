'use strict';

function getDogImage() {
    let name = $('input:text').val();
    console.log(name);
    fetch('https://dog.ceo/api/breed/' + name + '/images/random')
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try a new breed.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    let status = responseJson.status;
    if (status == 'error') {
        alert('Something went wrong. Try a new breed.')
    } else {
        $('.results-img').replaceWith(
            `<img src="${responseJson.message}" class="results-img">`)
    }
    //display the results section
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