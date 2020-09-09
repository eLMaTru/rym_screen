var prices;

/**
 * This function make a call to a banca-online-api end-point to retrieve the last currencies prices
 * @author Jorge De Los Santos
 * @since feb-11-2020
 * @return {String} - A Json with contains currencies prices
 */
function getCurrencyPrices() {

    if (window.sessionStorage.getItem("currencyApi") == null){
       
        var endpoint =
        "http://34.198.173.130/banca-online/v1/general/currency"

            $.ajax({
                url: endpoint
            }).then(function (data) {
                window.sessionStorage.setItem("currencyApi",JSON.stringify(data));
                prices = data;
                fillCurrencyPrices();
            });

    }else{
          prices = JSON.parse(window.sessionStorage.getItem("currencyApi"));
          fillCurrencyPrices();
    }

    return prices;
}

/**
 * This function fill the currency prices
 * @author Jorge De Los Santos
 * @since feb-11-2020
 */
function fillCurrencyPrices() {


    var dollar_tdp = $("#dollar_tdp");
    var euro_tdp = $("#euro_tdp");
    //var gourde_tdp = $("#gourde_tdp");

    var dollar_ydp = $("#dollar_ydp");
    var euro_ydp = $("#euro_ydp");
    //var gourde_ydp = $("#gourde_ydp");

    var tdp1 = parseFloat(prices[0]['dollar']);
    var tdp2 = parseFloat(prices[0]['euro']);
   // var tdp3 = parseFloat(prices[0]['gourde']);

    var ydp1 = parseFloat(prices[1]['dollar']);
    var ydp2 = parseFloat(prices[1]['euro']);
   // var ydp3 = parseFloat(prices[1]['gourde']);

    var dollar_difference = tdp1 - ydp1;
    var euro_difference = tdp2 - ydp2;
   // var gourde_difference = tdp3 - ydp3;

    var difference_up = "<i class='fa fa-arrow-circle-up' style='color: red; margin-left: 10px;''></i>";
    var difference_down = "<i class='fa fa-arrow-circle-down' style='color: green; margin-left: 10px;''></i>";

    var variation1 = tdp1 > ydp1 ? 'Sube  ' + '<b>' + dollar_difference.toFixed(2) + '</b>' + difference_up : 'Baja  ' + '<b>' + Math.abs(dollar_difference).toFixed(2) + '</b>' + difference_down;
    var variation2 = tdp2 > ydp2 ? 'Sube  ' + '<b>' + euro_difference.toFixed(2) + '</b>' + difference_up : 'Baja  ' + '<b>' + Math.abs(euro_difference).toFixed(2) + '</b>' + difference_down;
    //var variation3 = tdp3 > ydp3 ? 'Tasa Sube  ' + '<b>' + gourde_difference.toFixed(2) + '</b>' + difference_up : 'Tasa Baja  ' + '<b>' + Math.abs(gourde_difference).toFixed(2) + '</b>' + difference_down;

    variation1 = tdp1 == ydp1 ? 'Sin variación' : variation1;
    variation2 = tdp2 == ydp2 ? 'Sin variación' : variation2;
    //variation3 = tdp3 == ydp3 ? 'Sin variación' : variation3;

    $(dollar_tdp).html('<b>' + tdp1.toFixed(2) + '</b>');
    $(euro_tdp).html('<b>' + tdp2.toFixed(2) + '</b>');
    //$(gourde_tdp).html('<b>' + tdp3.toFixed(2) + '</b>');

    $(dollar_ydp).html(variation1);
    $(euro_ydp).html(variation2);
    //$(gourde_ydp).html(variation3);

}

function updateCurrencyPrices() {
    getCurrencyPrices();
}