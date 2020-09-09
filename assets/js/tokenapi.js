var host_base = "http://34.198.173.130";
var properties = undefined;

$.getJSON("assets/json/properties.json", function (data) {
  properties = data;
});
if (properties !== undefined) {
  host_base = properties["host"];
}
console.log('properties: ' + properties);

console.log("host_base: " + host_base);

function compareTokens() {

  console.log("Comparing token ...");
  if (window.sessionStorage.getItem("validToken") == null) {
    requestToken();
  } else {

    if (window.sessionStorage.getItem("validToken") == "false") {
      requestToken();
    } else if ((getCorrectMinute() >= 30 && getCorrectMinute() < 35)) {
      requestToken();
    }

  }
}

function requestToken() {
  var token = getUrlValue("token");
  var endpoint = host_base +
    "/banca-online/v1/consortium/validate/device/" + token;

  $.ajax({
    url: endpoint
  }).then(function (data) {
    authorizeClient(data);
  });
}

function authorizeClient(data) {
  debugger;
  window.sessionStorage.setItem("validToken", data);

  if (window.sessionStorage.getItem("validToken") == "false") {
    var url = "/disabled-token.html?token=" + getUrlValue("token");
    window.open(url, (target = "_self"));
  }
}


function getUrlValue(varName) {
  var split = $(location).attr('href').split('?');
  var value = '';
  if (split.length == 2) {
    split = split[1].split('&');
    for (var i = 0; i < split.length; i += 1) {
      var keyValue = split[i].split('=');
      if (keyValue.length == 2 && keyValue[0] == varName) {
        value = keyValue[1];
        break;
      }
    }
  }
  return value;
}

function getCorrectMinute() {

  // this time
  var thisTime = new Date();
  var minutes = thisTime.getMinutes();
  return minutes;
}

compareTokens();


