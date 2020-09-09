var results;

$.datepicker.regional['es'] = {
  closeText: 'Cerrar',
  prevText: '< Ant',
  nextText: 'Sig >',
  currentText: 'Hoy',
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
  dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
  weekHeader: 'Sm',
  dateFormat: 'dd/mm/yy',
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: ''
};

$.datepicker.setDefaults($.datepicker.regional['es']);

/**
 * This function make a call to a banca-online-api end-point to retrieve lotteries
 * results filtered by their status ID
 * @author Jorge De Los Santos
 * @since jan-24-2020
 * @param {bigint} status_id - The lottery result status ID
 * @return {String} - A Json with all results based on provided status_id
 */
function getAllResultsByStatusId(status_id) {//this function logic flow is working but need to be re ordered. The name differ when calling fillCard_1();



  if (window.sessionStorage.getItem("consumeApi") == null) {
    requestLottery(status_id);
  } else {
    if ((getCorrectDate() >= 12 && getCorrectDate() < 16) || (getCorrectDate() >= 19 && getCorrectDate() < 20)) {
      requestLottery(status_id);
    } else {
      results = JSON.parse(window.sessionStorage.getItem("consumeApi"));
      fillCard_1();
      fillCard_2();
      fillCard_3();
      fillCard_4();
      fillCard_5();
      fillCard_6();
      fillCard_7();
      fillCard_8();
    }

  }

  return results;
}

function requestLottery(status_id) {
  var endpoint =
    "http://34.198.173.130/banca-online/v1/general/all/lottery?statusId=" +
    status_id;

  $.ajax({
    url: endpoint
  }).then(function (data) {

    window.sessionStorage.setItem("consumeApi", JSON.stringify(data));

    results = data;
    fillCard_1();
    fillCard_2();
    fillCard_3();
    fillCard_4();
    fillCard_5();
    fillCard_6();
    fillCard_7();
    fillCard_8();
  });
}


/**
 * This function fill results card 1 with the updated last results
 * @author Jorge De Los Santos
 * @since jan-27-2020
 */
function fillCard_1() {
  var balls = $("#card_1").find("span");
  var date = $("#date_1");
  var result = results['QUINIELA_NY'];
  if (result == null) { result = '..., ..., ..., null' }
  var resultArray = result.split(',');

  $(balls[0]).html(resultArray[0]);
  $(balls[1]).html(resultArray[1]);
  $(balls[2]).html(resultArray[2]);

  $(date).html(formatDate(resultArray[resultArray.length - 1]));
  updateTodayResultsColor(resultArray[resultArray.length - 1], $("#card_1").find("button"));
}

function fillCard_2() {
  var balls = $("#card_2").find("span");
  var btns = $("#card_2").find("button");
  var date = $("#date_2");
  var result = results['QUINIELA_REAL'];
  if (result == null) { result = '..., ..., ..., null' }
  var resultArray = result.split(',');

  $(balls[0]).html(resultArray[0]);
  $(balls[1]).html(resultArray[1]);
  $(balls[2]).html(resultArray[2]);

  $(date).html(formatDate(resultArray[resultArray.length - 1]));
  updateTodayResultsColor(resultArray[resultArray.length - 1], $("#card_2").find("button"));
}

function fillCard_3() {
  var balls = $("#card_3").find("span");
  var date = $("#date_3");
  var result = results['GANAMAS'];
  if (result == null) { result = '..., ..., ..., null' }
  var resultArray = result.split(',');

  $(balls[0]).html(resultArray[0]);
  $(balls[1]).html(resultArray[1]);
  $(balls[2]).html(resultArray[2]);

  $(date).html(formatDate(resultArray[resultArray.length - 1]));
  updateTodayResultsColor(resultArray[resultArray.length - 1], $("#card_3").find("button"));
}

function fillCard_4() {
  var balls = $("#card_4").find("span");
  var date = $("#date_4");
  var result = results['QUINIELA_LEIDSA'];
  if (result == null) { result = '..., ..., ..., null' }
  var resultArray = result.split(',');

  $(balls[0]).html(resultArray[0]);
  $(balls[1]).html(resultArray[1]);
  $(balls[2]).html(resultArray[2]);

  $(date).html(formatDate(resultArray[resultArray.length - 1]));
  updateTodayResultsColor(resultArray[resultArray.length - 1], $("#card_4").find("button"));
}

function fillCard_5() {
  var balls = $("#card_5").find("span");
  var date = $("#date_5");
  var result = results['QUINIELA_NY_NOCHE'];
  if (result == null) { result = '..., ..., ..., null' }
  var resultArray = result.split(',');

  $(balls[0]).html(resultArray[0]);
  $(balls[1]).html(resultArray[1]);
  $(balls[2]).html(resultArray[2]);

  $(date).html(formatDate(resultArray[resultArray.length - 1]));
  updateTodayResultsColor(resultArray[resultArray.length - 1], $("#card_5").find("button"));
}

function fillCard_6() {
  var balls = $("#card_6").find("span");
  var date = $("#date_6");
  var result = results['LA_PRIMERA'];
  if (result == null) { result = '..., ..., ..., null' }
  var resultArray = result.split(',');

  $(balls[0]).html(resultArray[0]);
  $(balls[1]).html(resultArray[1]);
  $(balls[2]).html(resultArray[2]);

  $(date).html(formatDate(resultArray[resultArray.length - 1]));
  updateTodayResultsColor(resultArray[resultArray.length - 1], $("#card_6").find("button"));
}

function fillCard_7() {
  var balls = $("#card_7").find("span");
  var date = $("#date_7");
  var result = results['QUINIELA_NACIONAL'];
  if (result == null) { result = '..., ..., ..., null' }
  var resultArray = result.split(',');

  $(balls[0]).html(resultArray[0]);
  $(balls[1]).html(resultArray[1]);
  $(balls[2]).html(resultArray[2]);

  $(date).html(formatDate(resultArray[resultArray.length - 1]));
  updateTodayResultsColor(resultArray[resultArray.length - 1], $("#card_7").find("button"));
}

function fillCard_8() {
  var balls = $("#card_8").find("span");
  var date = $("#date_8");
  var result = results['QUINIELA_LOTEKA'];
  if (result == null) { result = '..., ..., ..., null' }
  var resultArray = result.split(',');

  $(balls[0]).html(resultArray[0]);
  $(balls[1]).html(resultArray[1]);
  $(balls[2]).html(resultArray[2]);

  $(date).html(formatDate(resultArray[resultArray.length - 1]));
  updateTodayResultsColor(resultArray[resultArray.length - 1], $("#card_8").find("button"));
}

/**
 * This function translate a date to a more friendly user format
 * results filtered by their status ID
 * @deprecated - Need be updated or replaced by jquery.ui provided function for this purpose
 * @author Jorge De Los Santos
 * @since jan-24-2020
 * @param {string} strDate - The string representation of date to be formated
 * @param {string} delimiter - The string representation of delimiter within the given date
 * @return {String} - A Json with all results based on provided status_id
 */
function translateDateToSpanish(strDate, delimiter) {
  var part = strDate.split(delimiter);
  var day, month;
  switch (part[0]) {
    case "Mon":
      day = "Lun";
      break;
    case "Tue":
      day = "Mar";
      break;
    case "Wed":
      day = "Mie";
      break;
    case "Thu":
      day = "Jue";
      break;
    case "Fri":
      day = "Vie";
      break;
    case "Sat":
      day = "Sab";
      break;
    case "Sun":
      day = "Dom";
      break;

    default:
      day = part[0];
      break;
  }

  switch (part[1]) {
    case "Jan":
      month = "Ene";
      break;
    case "Apr":
      month = "Abr";
      break;
    case "Aug":
      month = "Ago";
      break;
    case "Dec":
      month = "Dic";
      break;

    default:
      month = part[1];
      break;
  }

  strDate = day + " " + part[2] + " " + month + " " + part[3];
  return strDate;
}


function updateResults() {
  getAllResultsByStatusId(1);
}

/**
 * This function formatDate
 * @author Joel Contreras
 * @since jan-27-2020
 */
function formatDate(date) {

  var dateResult = '...';
  var rgx = /(\d{4})-(\d{2})-(\d{2})/;

  if (date != null && date.match(rgx) != null) {
    var reversedDate = date.trim().split('-').reverse();
    date = reversedDate[0] + '-' + reversedDate[1] + '-' + reversedDate[2]
    var d = new Date(date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
    dateResult = $.datepicker.formatDate('DD dd MM yy', d);
  }


  return dateResult;
}

function updateTodayResultsColor(dbDate, balls) {
  var today = new Date().toDateString().split(" ");

  dbDate = dbDate.trim().replace(/-/g, " ");
  var shortToday = today[3] + " " + today[1] + " " + today[2];

  if (new Date(dbDate).toDateString().localeCompare(new Date(shortToday).toDateString()) == 0) {
    $(balls[0]).addClass('updated-results');
    $(balls[1]).addClass('updated-results');
    $(balls[2]).addClass('updated-results');
  }
}


function getCorrectDate() {

  // this time
  var thisTime = new Date();
  var hour = thisTime.getHours();
  return hour;
}


