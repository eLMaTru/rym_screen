var prices;

/**
 * This function make a call to a banca-online-api end-point to retrieve the last fuels prices
 * @author Jorge De Los Santos
 * @since jan-27-2020
 * @return {String} - A Json with contains fuels prices
 */
function getFuelPrices() {

    if (window.sessionStorage.getItem("fuelApi") == null){
      requestFuel();
      console.log("cuando es null");
    }else{
       if ((getCorrectDate() > 12 && getCorrectDate() < 16) || (getCorrectDate() > 19 && getCorrectDate() < 20)){
           requestFuel();
                 console.log("dentro del tiempo");

       }else{
          prices = JSON.parse(window.sessionStorage.getItem("fuelApi"));
          fillFuelPrices();
                           console.log("fuera del tiempo");

       
       }

    }
  
   return prices;
}

function requestFuel(){
    var endpoint =
      "http://34.198.173.130/banca-online/v1/general/fuels"

   $.ajax({
      url: endpoint
   }).then(function (data) {
      prices = data; 
      window.sessionStorage.setItem("fuelApi",JSON.stringify(prices));
      fillFuelPrices();
   });
}

/**
 * This function fill the fuel prices
 * @author Jorge De Los Santos
 * @since jan-27-2020
 */
function fillFuelPrices() {

   var g_premium = $("#g_premium");
   var g_regular = $("#g_regular");
   var gsl_optimo = $("#gsl_optimo");
   var gsl_regular = $("#gsl_regular");
   var glp = $("#glp");
   var gn = $("#gn");

   var g_premium_diferent = $("#g_premium_diferent");
   var g_regular_diferent = $("#g_regular_diferent");
   var gsl_optimo_diferent = $("#gsl_optimo_diferent");
   var gsl_regular_diferent = $("#gsl_regular_diferent");
   var glp_diferent = $("#glp_diferent");
   var gn_diferent = $("#gn_diferent");

   // actual week
   var last_update = prices['fuels']['last_update'];

   // two week ago
   var twoWeek = new Date(last_update);

   twoWeek = minusAWeek(twoWeek);


   var momentDate = moment(twoWeek).format("YYYY-MM-DD");

   // variable
   var actualGPremium = prices['fuels']['items'][last_update]['Gasolina Premium'];
   var actualGRegular = prices['fuels']['items'][last_update]['Gasolina Regular'];
   var actualGLSOptimo = prices['fuels']['items'][last_update]['Gasoil Optimo'];
   var actualGLSRegular = prices['fuels']['items'][last_update]['Gasoil Regular'];
   var actualGLP = prices['fuels']['items'][last_update]['Gas Licuado (GLP)'];
   var actualGN = prices['fuels']['items'][last_update]['Gas Natural (GNV)'];

   var twoWeekAgoGPremium = prices['fuels']['items'][momentDate]['Gasolina Premium'];
   var twoWeekAgoGRegular = prices['fuels']['items'][momentDate]['Gasolina Regular'];
   var twoWeekAgoGLSOptimo = prices['fuels']['items'][momentDate]['Gasoil Optimo'];
   var twoWeekAgoGLSRegular = prices['fuels']['items'][momentDate]['Gasoil Regular'];
   var twoWeekAgoGLP = prices['fuels']['items'][momentDate]['Gas Licuado (GLP)'];
   var twoWeekAgoGN = prices['fuels']['items'][momentDate]['Gas Natural (GNV)'];

   if (actualGN == undefined){actualGN = twoWeekAgoGN;}
   if (twoWeekAgoGN == undefined){twoWeekAgoGN = actualGN;}

   //variedad de la fechas 
   var diferentsGPremiun = actualGPremium - twoWeekAgoGPremium;
   var diferentsGRegular = actualGRegular - twoWeekAgoGRegular;
   var diferentsGLSOptimo = actualGLSOptimo - twoWeekAgoGLSOptimo;
   var diferentsGLSRegular = actualGLSRegular - twoWeekAgoGLSRegular;
   var diferentsGLP = actualGLP - twoWeekAgoGLP;
   var diferentsGN = actualGN - twoWeekAgoGN;

   if (diferentsGPremiun.toFixed(2) == 0) {
      $(g_premium_diferent).html("0.00");
   } else if (diferentsGPremiun.toFixed(2) < 0) {
      $(g_premium_diferent).html('<b>' + Math.abs(diferentsGPremiun).toFixed(2) + '</b>' + " <i class='fa fa-arrow-circle-down' style='color: green; margin-left: 10px;''></i>");
   } else {
      $(g_premium_diferent).html('<b>' + Math.abs(diferentsGPremiun).toFixed(2) + '</b>' + " <i class='fa fa-arrow-circle-up'  style='color: firebrick; margin-left: 10px;''></i>");
   }

   if (diferentsGRegular.toFixed(2) == 0) {
      $(g_regular_diferent).html("0.00");
   } else if (diferentsGRegular.toFixed(2) < 0) {
      $(g_regular_diferent).html('<b>' + Math.abs(diferentsGRegular).toFixed(2) + '</b>' + " <i class='fa fa-arrow-circle-down' style='color: green; margin-left: 10px;''></i>");
   } else {
      $(g_regular_diferent).html('<b>' + Math.abs(diferentsGRegular).toFixed(2) + '</b>' + " <i class='fa fa-arrow-circle-up'  style='color: firebrick; margin-left: 10px;''></i>");
   }

  /* if (diferentsGLSOptimo.toFixed(2) == 0) {
      $(gsl_optimo_diferent).html("Sin variación");
   } else if (diferentsGLSOptimo.toFixed(2) < 0) {
      $(gsl_optimo_diferent).html("Baja " + '<b>' + Math.abs(diferentsGLSOptimo).toFixed(2) + '</b>' + " <i class='fa fa-arrow-circle-down' style='color: green; margin-left: 10px;''></i>");
   } else {
      $(gsl_optimo_diferent).html("Sube " + '<b>' + Math.abs(diferentsGLSOptimo).toFixed(2) + '</b>' + " <i class='fa fa-arrow-circle-up'  style='color: firebrick; margin-left: 10px;''></i>");
   }

   if (diferentsGLSRegular.toFixed(2) == 0) {
      $(gsl_regular_diferent).html("Sin variación");
   } else if (diferentsGLSRegular.toFixed(2) < 0) {
      $(gsl_regular_diferent).html("Baja " + '<b>' + Math.abs(diferentsGLSRegular).toFixed(2) + '</b>' + " <i class='fa fa-arrow-circle-down' style='color: green; margin-left: 10px;''></i>");
   } else {
      $(gsl_regular_diferent).html("Sube " + '<b>' + Math.abs(diferentsGLSRegular).toFixed(2) + '</b>' + " <i class='fa fa-arrow-circle-up'  style='color: firebrick; margin-left: 10px;''></i>");
   }*/

   if (diferentsGLP.toFixed(2) == 0) {
      $(glp_diferent).html("0.00");
   } else if (diferentsGLP.toFixed(2) < 0) {
      $(glp_diferent).html('<b>' + Math.abs(diferentsGLP).toFixed(2) + '</b>' + " <i class='fa fa-arrow-circle-down' style='color: green; margin-left: 10px;''></i>");
   } else {
      $(glp_diferent).html('<b>' + Math.abs(diferentsGLP).toFixed(2) + '</b>' + " <i class='fa fa-arrow-circle-up'  style='color: firebrick; margin-left: 10px;''></i>");
   }

   if (diferentsGN.toFixed(2) == 0) {
      $(gn_diferent).html("0.00");
   } else if (diferentsGN.toFixed(2) < 0) {
      $(gn_diferent).html('<b>' + Math.abs(diferentsGN).toFixed(2) + '</b>' + " <i class='fa fa-arrow-circle-down' style='color: green; margin-left: 10px;''></i>");
   } else {
      $(gn_diferent).html('<b>' + Math.abs(diferentsGN).toFixed(2) + '</b>' + " <i class='fa fa-arrow-circle-up' style='color: firebrick; margin-left: 10px;''></i>");
   }


   $(g_premium).html(actualGPremium);
   $(g_regular).html(actualGRegular);
  // $(gsl_optimo).html(actualGLSOptimo);
  // $(gsl_regular).html(actualGLSRegular);
   $(glp).html(actualGLP);
   $(gn).html(actualGN);


   var oneWeekPlusDate = plusAWeek(new Date(last_update));
   var oneDayPlusDate = plusADay(new Date(last_update));

   oneWeekPlusDate = moment(oneWeekPlusDate).format("YYYY-MM-DD");
   oneDayPlusDate = moment(oneDayPlusDate).format("YYYY-MM-DD");


   $("#panel_fuel_title").html("<i class='mdi mdi-gas-station mdi-16px'></i> Combustibles Semana del " + oneDayPlusDate + " al " + oneWeekPlusDate);


}

function updateFuelPrices() {
   getFuelPrices();
}


function validDate(date) {
   var part = date.split("-");
   var result = part[0] + "-" + part[1].replace("0", "") + "-" + part[2].replace("0", "");
   return result;
}

function minusAWeek(date) {
   date.setDate(date.getDate() - 6);
   return date;

}

function plusAWeek(date) {
   date.setDate(date.getDate() + 8);
   return date;

}

function plusADay(date) {
   date.setDate(date.getDate() + 2);
   return date;

}

function getCorrectDate(){

  // this time
  var thisTime = new Date();
  var hour = thisTime.getHours();
  return hour;
}
