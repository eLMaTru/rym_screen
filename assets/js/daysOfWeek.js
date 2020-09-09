
function loadDaysOfWeek() {

  if (window.sessionStorage.getItem("dayOfWeekApi") == null){
       requestDayOfWeek();
    }else{

      if ((getCorrectDate() >= 12 && getCorrectDate() < 16) || (getCorrectDate() >= 19 && getCorrectDate() < 22)){
              requestDayOfWeek();
       }else{
           var data  = JSON.parse(window.sessionStorage.getItem("dayOfWeekApi"));
           fillValue(data);
       }

    }

}

function fillValue(data){
   $.each(data, function (index, value) {

         var result = value.winningNumbers;
         var lottery = value.lottery;
         var day = value.day;
         var createdDate = value.createdDate;
         var drawingDate = value.drawingDate;


         var resultParts = result.split(",");

         var ballPrimera = $(" <button type='button' style=' margin-right: 6px;' class='btn btn-warning ball'></button>");
         var spanResultPrimera = $("<span class='ball-number'></span>");

         var ballSegunda = $(" <button type='button' style=' margin-right: 6px;' class='btn btn-warning ball'></button>");
         var spanResultSegunda = $("<span class='ball-number'></span>");

         var ballTercera = $(" <button type='button' class='btn btn-warning ball'></button>");
         var spanResultTercera = $("<span class='ball-number'></span>");

         //asignar valor
         spanResultPrimera.append(resultParts[0]);
         spanResultSegunda.append(resultParts[1]);
         spanResultTercera.append(resultParts[2]);


         ballPrimera.append(spanResultPrimera);
         ballSegunda.append(spanResultSegunda);
         ballTercera.append(spanResultTercera);

         var td = lottery + "_" + day;
         var tdElement = $("." + td);

         if (tdElement.attr("class") != "full") {

            tdElement.empty();
            tdElement.append(ballPrimera);
            tdElement.append(ballSegunda);
            tdElement.append(ballTercera);
            tdElement.attr("class", "text-center full");

         }

         var tdTitleDay = $("." + day);
         if (tdTitleDay.attr("class") != "full") {
            tdTitleDay.empty();
            tdTitleDay.append(addNumberOfDays(day, createdDate));
            $(tdTitleDay).addClass('full');
            tdTitleDay.attr("class", "text-center full");

         }

         updateTodayOldResultsColor(createdDate, ballPrimera, ballSegunda, ballTercera);


      });
}

function requestDayOfWeek(){
       var endpoint = "http://34.198.173.130/banca-online/v1/general//days/of/week";
   $.ajax({
      url: endpoint
   }).then(function (data) {
       window.sessionStorage.setItem("dayOfWeekApi",JSON.stringify(data));
       fillValue(data);
   
   });
}



function addNumberOfDays(day, date) {

   var result;
   var datePart = date.split("-");

   switch (day) {
      case "MONDAY":
         result = "LUNES " + datePart[2];
         break;
      case "TUESDAY":
         result = "MARTES " + datePart[2];
         break;
      case "WEDNESDAY":
         result = "MIERCOLES " + datePart[2];
         break;
      case "THURSDAY":
         result = "JUEVES " + datePart[2];
         break;
      case "FRIDAY":
         result = "VIERNES " + datePart[2];
         break;
      case "SATURDAY":
         result = "SABADO " + datePart[2];
         break;
      case "SUNDAY":
         result = "DOMINGO " + datePart[2];
         break;
      default:
      // code block
   }
   return result;

}

function updateTodayOldResultsColor(dbDate, ball_1, ball_2, ball_3) {

   var today = new Date().toDateString().split(" ");

   dbDate = dbDate.trim().replace(/-/g, " ");
   var shortToday = today[3] + " " + today[1] + " " + today[2];

   var db = new Date(dbDate).toDateString();
   var td = new Date(shortToday).toDateString();

   if (db.localeCompare(td) == 0) {

      $(ball_1).addClass('updated-results');
      $(ball_2).addClass('updated-results');
      $(ball_3).addClass('updated-results');
   }
}

loadDaysOfWeek();

function getCorrectDate(){

  // this time
  var thisTime = new Date();
  var hour = thisTime.getHours();
  return hour;
}


