
function verifyHours() {

    if (window.sessionStorage.getItem("hoursApi") == null){
      requestHours();
    }else{
     
         var results = window.sessionStorage.getItem("hoursApi");
         if (results == false){
              requestHours();
         }
     
    }

}

function requestHours(){

    var viewDate = new Date();
    var hours = viewDate.getHours();


        var endpoint = "http://34.198.173.130/banca-online/v1/general/verify/date?viewDate=" + hours;

      $.ajax({
        url: endpoint
      }).then(function (data) {
        if (data == false){
            var url = "/error-hours.html";
            window.open(url, (target = "_self"));
        }else{
             window.sessionStorage.setItem("hoursApi",true);
        }

      });
}


verifyHours();