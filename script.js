// api key and search endpoint

const randomUrl = "https://dog.ceo/api/breeds/image/random/";


function displayResults(responseJson) {
    console.log(responseJson);
    $(".results-img").empty();

    for (let i = 0; i < responseJson.message.length; i++)
        $(".results-img").append(
            `<li><img src="${responseJson.message[i]}" class="results-img"></li>`
        )
        //display the results section
    $('#results').removeClass('hidden');
}

function getImages(imgNum) {
    let newUrl = randomUrl + imgNum;

    fetch(newUrl)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}


// watch the form submit button

function watchForm() {
    $("form").submit(event => {
        event.preventDefault();
        const imgNum = $("#max-results").val();
        getImages(imgNum);
    })

}



$(watchForm);