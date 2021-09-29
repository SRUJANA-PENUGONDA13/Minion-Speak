var translateButton = document.querySelector("#translate-btn");
var translateInput = document.querySelector("#translate-input");
var translateOutput = document.querySelector("#translate-output");

translateButton.addEventListener("click", buttonClickHandler);

function buttonClickHandler(event)
{
    var text = translateInput.value;
    var baseURL = "https://api.funtranslations.com/translate/minion.json?";
    var queryParam = "text=" + text;
    var contextURL = baseURL + queryParam;
    var response = fetch(contextURL);
    response.then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))
}