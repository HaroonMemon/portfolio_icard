// 1st line text number 1st line text number 1st line text number
var Html = document.querySelector(".html")
var progressHtmlValue = document.querySelector(".progress-html");

var progressHtmlStratValue = 0,
    progressHtmlEndValue = 95,
    speed_Html= 30;

var progressHtml = setInterval(() => {
    progressHtmlStratValue++;

    progressHtmlValue .textContent = progressHtmlStratValue+"%";
    Html.style.width = progressHtmlStratValue*1+"%";

    if (progressHtmlStratValue == progressHtmlEndValue) {
        clearInterval(progressHtml);
    }
}, speed_Html);

// 1st line text number 1st line text number 1st line text number

// 2nd line text number 2nd line text number 2nd line text number

var Css = document.querySelector(".css"),
    progressCssValue= document.querySelector(".progress-css");

var progressCssStratValue = 0,
    progressCssEndValue = 80,
    speed_Css= 30;

var progressCss = setInterval(() => {
    progressCssStratValue++;

    progressCssValue .textContent = progressCssStratValue+"%";
    Css.style.width = progressCssStratValue*1+"%";

    if (progressCssStratValue == progressCssEndValue) {
        clearInterval(progressCss);
    }
}, speed_Css);

// 2nd line text number 2nd line text number 2nd line text number

// 3rd line text number 3rd line text number 3rd line text number

var Bootstrap = document.querySelector(".bootstrap"),
    progressBootstrapValue= document.querySelector(".progress-bootstrap");

var progressBootstrapStratValue = 0,
    progressBootstrapEndValue = 70,
    speed_Bootstrap= 30;

var progressBootstrap = setInterval(() => {
    progressBootstrapStratValue++;

    progressBootstrapValue .textContent = progressBootstrapStratValue+"%";
    Bootstrap.style.width = progressBootstrapStratValue*1+"%";

    if (progressBootstrapStratValue == progressBootstrapEndValue) {
        clearInterval(progressBootstrap);
    }
}, speed_Bootstrap);

// 3rd line text number 3rd line text number 3rd line text number

// 4rth line text number 4rth line text number 4rth line text number

var Javascript = document.querySelector(".javascript"),
    progressJavascriptValue= document.querySelector(".progress-javascript");

var progressJavascriptStratValue = 0,   
    progressJavascriptEndValue = 60,
    speed_Javascript= 30;

var progressJavascript = setInterval(() => {
    progressJavascriptStratValue++;

    progressJavascriptValue .textContent = progressJavascriptStratValue+"%";
    Javascript.style.width = progressJavascriptStratValue*1+"%";

    if (progressJavascriptStratValue == progressJavascriptEndValue) {
        clearInterval(progressJavascript);
    }
}, speed_Javascript);

// 4rth line text number 4rth line text number 4rth line text number


// Urdu line text number Urdu line text number Urdu line text number
var Urdu = document.querySelector(".urdu")
var progressUrduValue = document.querySelector(".progress-urdu");

var progressUrduStratValue = 0,
    progressUrduEndValue = 90,
    speed_Urdu= 30;

var progressUrdu = setInterval(() => {
    progressUrduStratValue++;

    progressUrduValue .textContent = progressUrduStratValue+"%";
    Urdu.style.width = progressUrduStratValue*1+"%";

    if (progressUrduStratValue == progressUrduEndValue) {
        clearInterval(progressUrdu);
    }
}, speed_Urdu);

// Urdu line text number Urdu line text number Urdu line text number

// Hindi line text number Hindi line text number Hindi line text number

var Hindi = document.querySelector(".hindi"),
    progressHindiValue= document.querySelector(".progress-hindi");

var progressHindiStratValue = 0,
    progressHindiEndValue = 80,
    speed_Hindi= 30;

var progressHindi = setInterval(() => {
    progressHindiStratValue++;

    progressHindiValue .textContent = progressHindiStratValue+"%";
    Hindi.style.width = progressHindiStratValue*1+"%";

    if (progressHindiStratValue == progressHindiEndValue) {
        clearInterval(progressHindi);
    }
}, speed_Hindi);

// Hindi line text number Hindi line text number Hindi line text number

// English line text number English line text number English line text number

var English = document.querySelector(".english"),
    progressEnglishValue= document.querySelector(".progress-english");

var progressEnglishStratValue = 0,
    progressEnglishEndValue = 70,
    speed_English= 30;

var progressEnglish = setInterval(() => {
    progressEnglishStratValue++;

    progressEnglishValue .textContent = progressEnglishStratValue+"%";
    English.style.width = progressEnglishStratValue*1+"%";

    if (progressEnglishStratValue == progressEnglishEndValue) {
        clearInterval(progressEnglish);
    }
}, speed_English);

// English line text number English line text number English line text number

// Coding line text number Coding line text number Coding line text number

var Coding = document.querySelector(".coding"),
    progressCodingValue= document.querySelector(".progress-coding");

var progressCodingStratValue = 0,   
    progressCodingEndValue = 60,
    speed_Coding= 30;

var progressCoding = setInterval(() => {
    progressCodingStratValue++;

    progressCodingValue .textContent = progressCodingStratValue+"%";
    Coding.style.width = progressCodingStratValue*1+"%";

    if (progressCodingStratValue == progressCodingEndValue) {
        clearInterval(progressCoding);
    }
}, speed_Coding);

// Coding line text number Coding line text number Coding line text number

//  1st circle progress 1st circle progress 1st circle progress 1st circle progress

var circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

var progressStartValue = 0,
    progressEndValue = 90,
    speed = 30;

var progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#4c84ff ${progressStartValue * 3.6}deg, #e5e5e5 0deg)`

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);

//  1st circle progress 1st circle progress 1st circle progress 1st circle progress

// 2nd cricle progress 2nd cricle progress 2nd cricle progress 2nd cricle progress 

var circularProgress_2 = document.querySelector(".circular-progress_2"),
    progressValue_2 = document.querySelector(".progress-value_2");

var progressStartValue_2 = 0,
    progressEndValue_2 = 80,
    speed_2 = 30;

var progress_2 = setInterval(() => {
    progressStartValue_2++;

    progressValue_2.textContent = `${progressStartValue_2}%`
    circularProgress_2.style.background = `conic-gradient(#4c84ff ${progressStartValue_2 * 3.6}deg, #e5e5e5 0deg)`

    if (progressStartValue_2 == progressEndValue_2) {
        clearInterval(progress_2);
    }
}, speed_2);

// 2nd cricle progress 2nd cricle progress 2nd cricle progress 2nd cricle progress 

// 3rd cricle progress 3rd cricle progress 3rd cricle progress 3rd cricle progress 

var circularProgress_3 = document.querySelector(".circular-progress_3"),
    progressValue_3 = document.querySelector(".progress-value_3");

var progressStartValue_3 = 0,
    progressEndValue_3 = 90,
    speed_3 = 30;

var progress_3 = setInterval(() => {
    progressStartValue_3++;

    progressValue_3.textContent = `${progressStartValue_3}%`
    circularProgress_3.style.background = `conic-gradient(#4c84ff ${progressStartValue_3 * 3.6}deg, #e5e5e5 0deg)`

    if (progressStartValue_3 == progressEndValue_3) {
        clearInterval(progress_3);
    }
}, speed_3);

// 3rd cricle progress 3rd cricle progress 3rd cricle progress 3rd cricle progress 

// 4rth cricle progress 4rth cricle progress 4rth cricle progress 4rth cricle progress 

var circularProgress_4 = document.querySelector(".circular-progress_4"),
    progressValue_4 = document.querySelector(".progress-value_4");

var progressStartValue_4 = 0,
    progressEndValue_4 = 80,
    speed_4 = 30;

var progress_4 = setInterval(() => {
    progressStartValue_4++;

    progressValue_4.textContent = `${progressStartValue_4}%`
    circularProgress_4.style.background = `conic-gradient(#4c84ff ${progressStartValue_4 * 3.6}deg, #e5e5e5 0deg)`

    if (progressStartValue_4 == progressEndValue_4) {
        clearInterval(progress_4);
    }
}, speed_4);

// 4rth cricle progress 4rth cricle progress 4rth cricle progress 4rth cricle progress 
