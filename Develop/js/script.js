var date = moment().format('dddd , MMMM do YYYY, h:mm a');
$("#currentDay").html(date);



var rows = document.getElementsByClassName("row");
var currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {

    var
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
  }
  

var text = "";

var saveEvent = function() {
    
    $(".saveBtn").on("click", function(){
        
        var text = $(this).siblings(".description").val();
        var date = $(this).parent().attr("id")
        localStorage.setItem(date, text);

    })

    $("#8 .description").val(localStorage.getItem("8"))
    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))
    


  };
saveEvent(text);






