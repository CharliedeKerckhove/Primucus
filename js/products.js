//Animated Image
var productContainer = document.getElementById("productContainer");
var images = productContainer.getElementsByClassName("Image");
var dimmer = document.getElementById("dimmer");
var enlargeImg = document.getElementById("enlargeImg");
var captiontxt = document.getElementById("caption");
var close = document.getElementById("close");
/*monitor images and run enlarge function if one is clicked*/
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", enlarge)
};
/*make dimmer element visible and enlarge the image*/
function enlarge() {
  dimmer.style.visibility = " visible";
  enlargeImg.src = this.src;
  captiontxt.innerHTML = this.alt;
}
/*if cross is clicked hide dimmer and image*/
close.onclick = function() {
  dimmer.style.visibility = "hidden";
}

//Currencies 
var sign = document.getElementsByClassName("symbol");
var amount = document.getElementsByClassName("exactPrice");
var prices = [];
var amountValues = [];
/*push ids for exactPrice class to prices array*/
for (i = 0; i < amount.length; i++) {
  prices.push(amount[i].id);
}
/*push values for exactPrice class to prices array*/
for (i = 0; i < amount.length; i++) {
  amountValues.push(amount[i].innerHTML)
}
/*when selection changes run change function*/
currencies.addEventListener("change", change);

function change() {
  xhr = new XMLHttpRequest();
/*get data from currencylayer API using access key for specific currencies I require*/
  xhr.open('GET', 'http://apilayer.net/api/live?access_key=a0e95c300b0241196076ba6964645330&format=1&currencies=USD,GBP,EUR,JPY,CAD,CHF', true);
  xhr.send(null);
/*once an option is selected the corresponding function is called*/
  var selectedValue = currencies.options[currencies.selectedIndex].value;
  if (selectedValue == 0) {
    xhr.onreadystatechange = responseMethodUSD;
  } else if (selectedValue == 1) {
    xhr.onreadystatechange = responseMethodGBP;
  } else if (selectedValue == 2) {
    xhr.onreadystatechange = responseMethodEUR;
  } else if (selectedValue == 3) {
    xhr.onreadystatechange = responseMethodJPY;
  } else if (selectedValue == 4) {
    xhr.onreadystatechange = responseMethodCAD;
  } else if (selectedValue == 5) {
    xhr.onreadystatechange = responseMethodCHF;
  }
}
/*a connection is made and the response text is turned into a string of readable data which is manipulated to take the USD to selected currency conversion rate (see responseMethodGBP)*/
function responseMethodUSD() {
  var results = [];
  var finalResults = [];

  if (xhr.readyState == 4) { // Ready
    if (xhr.status == 200) { // HTTP OK
      response = JSON.parse(xhr.responseText);
      USDUSD = response.quotes.USDUSD;
      for (i = 0; i < amountValues.length; i++) {
        results.push(amountValues[i] * USDUSD);
      }
      for (i = 0; i < results.length; i++) {
        finalResults.push(results[i].toFixed(2));
      }
      for (i = 0; i < sign.length; i++) {
        sign[i].innerHTML = "&#36 ";
      }
      for (i = 0; i < finalResults.length; i++) {
        amount[i].innerHTML = finalResults[i];
      }
    } else {
      alert('There was a problem with the request.');
    }
  }
}

function responseMethodGBP() {
  var results = [];
  var finalResults = [];

  if (xhr.readyState == 4) { // Ready
    if (xhr.status == 200) { // HTTP OK
      response = JSON.parse(xhr.responseText);
      USDGBP = response.quotes.USDGBP;
/*USDGBP value is mulitplied by all values in amountValues array and results are pushed to a results array*/
      for (i = 0; i < amountValues.length; i++) {
        results.push(amountValues[i] * USDGBP);
      }
/*results are rounded to 2 decimal places making them currency values*/
      for (i = 0; i < results.length; i++) {
        finalResults.push(results[i].toFixed(2));
      }
/*corresponding currency symbols are placed inside the sign array but within the html*/
      for (i = 0; i < sign.length; i++) {
        sign[i].innerHTML = "&#163 ";
      }
/*finalResults are placed within original elements innerHTML*/
      for (i = 0; i < finalResults.length; i++) {
        amount[i].innerHTML = finalResults[i];
      }
    } else {
      alert('There was a problem with the request.');
    }
  }
}

function responseMethodEUR() {
  var results = [];
  var finalResults = [];

  if (xhr.readyState == 4) { // Ready
    if (xhr.status == 200) { // HTTP OK
      response = JSON.parse(xhr.responseText);
      USDEUR = response.quotes.USDEUR;
      for (i = 0; i < amountValues.length; i++) {
        results.push(amountValues[i] * USDEUR);
      }
      for (i = 0; i < results.length; i++) {
        finalResults.push(results[i].toFixed(2));
      }
      for (i = 0; i < sign.length; i++) {
        sign[i].innerHTML = "&#8364 ";
      }
      for (i = 0; i < finalResults.length; i++) {
        amount[i].innerHTML = finalResults[i];
      }
    } else {
      alert('There was a problem with the request.');
    }
  }
}

function responseMethodJPY() {
  var results = [];
  var finalResults = [];

  if (xhr.readyState == 4) { // Ready
    if (xhr.status == 200) { // HTTP OK
      response = JSON.parse(xhr.responseText);
      USDJPY = response.quotes.USDJPY;
      for (i = 0; i < amountValues.length; i++) {
        results.push(amountValues[i] * USDJPY);
      }
      for (i = 0; i < results.length; i++) {
        finalResults.push(results[i].toFixed(2));
      }
      for (i = 0; i < sign.length; i++) {
        sign[i].innerHTML = "&#165 ";
      }
      for (i = 0; i < finalResults.length; i++) {
        amount[i].innerHTML = finalResults[i];
      }
    } else {
      alert('There was a problem with the request.');
    }
  }
}

function responseMethodCAD() {
  var results = [];
  var finalResults = [];

  if (xhr.readyState == 4) { // Ready
    if (xhr.status == 200) { // HTTP OK
      response = JSON.parse(xhr.responseText);
      USDCAD = response.quotes.USDCAD;
      for (i = 0; i < amountValues.length; i++) {
        results.push(amountValues[i] * USDCAD);
      }
      for (i = 0; i < results.length; i++) {
        finalResults.push(results[i].toFixed(2));
      }
      for (i = 0; i < sign.length; i++) {
        sign[i].innerHTML = "&#36 ";
      }
      for (i = 0; i < finalResults.length; i++) {
        amount[i].innerHTML = finalResults[i];
      }
    } else {
      alert('There was a problem with the request.');
    }
  }
}

function responseMethodCHF() {
  var results = [];
  var finalResults = [];

  if (xhr.readyState == 4) { // Ready
    if (xhr.status == 200) { // HTTP OK
      response = JSON.parse(xhr.responseText);
      USDCHF = response.quotes.USDCHF;
      for (i = 0; i < amountValues.length; i++) {
        results.push(amountValues[i] * USDCHF);
      }
      for (i = 0; i < results.length; i++) {
        finalResults.push(results[i].toFixed(2));
      }
      for (i = 0; i < sign.length; i++) {
        sign[i].innerHTML = "Fr. ";
      }
      for (i = 0; i < finalResults.length; i++) {
        amount[i].innerHTML = finalResults[i];
      }
    } else {
      alert('There was a problem with the request.');
    }
  }
}
