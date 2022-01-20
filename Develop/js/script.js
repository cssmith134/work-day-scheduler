var date = moment().format('dddd , MMMM do YYYY, h:mm a');
$("#currentDay").html(date);


var text = "";

var saveEvent = function() {
    
    $(".saveBtn").on("click", function(){
        
        var text = $(".description").val();
        localStorage.setItem("text", JSON.stringify(text,));

    })
  };

saveEvent(text,);



