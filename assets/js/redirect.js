var host_base = "http://34.198.173.130";
var properties = undefined;

$.getJSON("assets/json/properties.json", function (data) {
    properties = data;
});
if (properties !== undefined) {
    host_base = properties["host"];
}

console.log("host_base: " + host_base);

function requestFullUrl(shortUrl) {
    var urlParts = shortUrl.split('?');
    var shortToken = urlParts[1].split('=')[1];

    var endpoint = host_base +
        "/banca-online/v1/consortium/device/token?shortToken=" + shortToken;

    $.ajax({
        url: endpoint
    }).then(function (data) {
        if (data === null || data === "") {
            $('#error-section').css('display', 'inline');
            $('#loading-section').css('display', 'none');

        } else { window.open(data, (target = "_self")); }

    });
}

function redirectToFullUrl(shortUrl) {
    console.log(shortUrl);
    requestFullUrl(shortUrl);
}