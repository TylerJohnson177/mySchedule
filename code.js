$(document).ready(function ()
{
    $("button#submit").on("click", schedule)
});



function schedule()
{
    //Get the selected day
    let sunday = $("input#sunday").is(":checked");
    let monday = $("input#monday").is(":checked");
    let tuesday = $("input#tuesday").is(":checked");
    let wednesday = $("input#wednesday").is(":checked");
    let thursday = $("input#thursday").is(":checked");
    let friday = $("input#friday").is(":checked");
    let saturday = $("input#saturday").is(":checked");

    //find the selected day and display the schedule

    if(sunday)
    {
        $("p#firstRow1").text("Homework");
        $("p#firstRow2").text("3:00 - 5:30 PM");
        $("p#secondRow1").text("");
        $("p#secondRow2").text("");
        $("p#thirdRow1").text("");
        $("p#thirdRow2").text("");
    }
    else if(monday || wednesday)
    {
        $("p#firstRow1").text("Let dogs out");
        $("p#firstRow2").text("2:00 - 2:30");
        $("p#secondRow1").text("JavaScript Class");
        $("p#secondRow2").text("6:00 - 9:50 PM");
        $("p#thirdRow1").text("");
        $("p#thirdRow2").text("");
    }

    else if(tuesday || friday)
    {
        $("p#firstRow1").text("Let dogs out");
        $("p#firstRow2").text("2:00 - 2:30");
        $("p#secondRow1").text("Go Outside");
        $("p#secondRow2").text("3:00 - 4:30 PM");
        $("p#thirdRow1").text("");
        $("p#thirdRow2").text("");
    }
    else if(thursday)
    {
        $("p#firstRow1").text("Let dogs out");
        $("p#firstRow2").text("12:00 - 12:30");
        $("p#secondRow1").text("Web Server Administration Class");
        $("p#secondRow2").text("1:00 - 4:20 PM");
        $("p#thirdRow1").text("Homework");
        $("p#thirdRow2").text("7:00 - 9:00 PM");
    }
    else if(saturday)
    {
        $("p#firstRow1").text("Homework");
        $("p#firstRow2").text("2:00 - 4:30");
        $("p#secondRow1").text("");
        $("p#secondRow2").text("");
        $("p#thirdRow1").text("");
        $("p#thirdRow2").text("");
    }


}