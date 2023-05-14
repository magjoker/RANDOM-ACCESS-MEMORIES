$(function() {

    let standardizedTime;

    function yLaHora() {
        standardizedTime = dayjs().hour();
        $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY h:mm:ss:SSS a"));
        setInterval(yLaHora, 100);
        blocksOfColor();
        };

yLaHora();


    $(".saveBtn").click(function() {
    let whatTimeisIt = $(this).parent().attr("id");
    let theTask = $(this).prev().val();
    localStorage.setItem(whatTimeisIt, theTask);
    });



    function blocksOfColor() {
        let pluralForCanvas = $(".time-block");
        pluralForCanvas.each(function() {
            let pluralForCanvas = $(this).data("hour");
            if(pluralForCanvas === standardizedTime) {
                $(this).addClass("present");
            } else if (pluralForCanvas < standardizedTime) {
                $(this).addClass("past");
            } else if (pluralForCanvas > standardizedTime) {
                $(this).addClass("future");
            }
        });
    };

blocksOfColor();


function rememberTheTask() {
    let todoItems = $(".description");
    todoItems.each(function(index) {
        let llave = "hour-" + (index + 9);
        $(this).val(localStorage.getItem(llave));
    });
}
rememberTheTask();







});