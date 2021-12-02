// // console.log("script is workign")
// //alert
// alert("this script works")
// //promt
// var username=prompt("give me your username:");
// alert(username);

var buttonTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(text){
    return serverURL+"?text="+text;
}
function errorHandler(error){
    console.log("Error occured:",error);
    alert("something wrong with server.Try again after some time!")
}

function clickHandler(){
    fetch(getTranslationURL(txtInput.value))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        console.log(translatedText)
        outputDiv.innerText=translatedText;
    })
    .catch(errorHandler);
}

buttonTranslate.addEventListener("click",clickHandler);



