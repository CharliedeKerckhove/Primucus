//collect inputted data
var xhr;
var firstname = document.getElementById("firstName");
var lastname = document.getElementById("lastName");
var emailaddress = document.getElementById("emailaddress");
var output = document.getElementById("output");
/*send data to link*/
function post() {
  event.preventDefault();
  xhr = new XMLHttpRequest();
/*run response function when connection is ready*/
  xhr.onreadystatechange = responseMethod;
/*POST to web address*/
  xhr.open('POST', "http://www.talade.worcestercomputing.com/mailing.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
/*create string of information to send*/
  formData = "firstname=" + firstname.value + "&lastname=" + lastname.value + "&emailaddress=" + emailaddress.value;
/*send the inputted data*/
  xhr.send(formData);
}

function responseMethod() {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
 /*once connected the response is put inside the output span*/
      output.innerHTML = xhr.responseText;
    } else {
      console.log('There was a problem with the request.');
    }
  }
}
form_Id.addEventListener("submit", post);
