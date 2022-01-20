var date = moment().format('dddd , MMMM do YYYY, h:mm a');
$("#currentDay").html(date);

var event = {}


var saveEvent = function() {
    localStorage.setItem("event", JSON.stringify(tasks));


    $(".saveBtn").on("click", function(){
   
        
    })
  };

saveEvent(event);


// var event = {};

// var saveEvent = function() {
  //  localStorage.setItem("event", JSON.stringify(event));
//}

