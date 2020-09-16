var advertisements = {};
var carousel_item =
    '<div class="item">' +
    '<div class="widget-box-two">' +
    '<div class="wigdet-two-content">' +
    '<div class="panel panel-color panel-warning">' +
    '<div class="panel-heading">' +
    '<h3 class="panel-title">' +
    '<i class="fa fa-tv"></i>' +
    '</h3>' +
    '</div>' +

    '<table class="table table-striped custom-table">' +
    '<tbody>' +
    '<tr>' +
    '<td>' +
    '<img' +
    ' style="width: 100%; height: 9.7em;"' +
    'src="image_url"' +
    '/>' +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';

function getAllEnabledAdvertisementsByConsortiumId(consortium_id) {
    var endpoint =
        "http://34.198.173.130/banca-online/v1/general/consortium/" + consortium_id + "/advertisements?statusId=1";


    $.ajax({
        url: endpoint
    }).then(function (data) {
        advertisements = data;
        fillConsortiumAdvertisements();
    });

}

function fillConsortiumAdvertisements() {
    var advertisement_div = $('#advertisement-div');
    var marquee_div = $('#marquee-div');
    if (advertisements != null) {
        var itemsLength = Object.keys(advertisements).length;

        for (var i = 0; i <= itemsLength; i++) {
            advertisements = Object.values(advertisements);

            if (advertisements == null) {
                continue;
            }

            var advertisement = JSON.parse(advertisements[i]);


            if (advertisement.advertisementTypeId == 1) {
                var html = carousel_item;
                html = html.replace('image_url', advertisement.imageUrl);
                advertisement_div.append(html);
            } else if (advertisement.advertisementTypeId == 2) {
                marquee_div.append(advertisement.advertisementInfo);


            } else {
                console.log('invalid advertisement');
            }
        }
    }

}

function updateAdvertisements(consortium_id) {
    getAllEnabledAdvertisementsByConsortiumId(consortium_id);
}


