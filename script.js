$(document).ready(function () {

    // add new skill
    $("#btn-add").click(function (e) { 
        e.preventDefault();
        // get name of desired new skill
        var newSkill = document.getElementById("txt-skill").value;
        // add the new skill to local memory and set to false as a default
        localStorage.setItem(newSkill,false);
        // prepend a new row, column with the new skill and button inside 
        // ugliest line ever
        $(this).before("<div class="+`"row"`+">"+ "<div class="+`"col"`+">"+"<h3>"+newSkill+"</h3>" + "<button class="+`"btn btn-primary btn-learned"`+">Learned</button>"+"</div>"+"</div><br />");
    });

    // When button is clicked its corresponding skill is marked as learned
    // also local storage variable is set to true
    $(".skills-container").on('click','.btn-learned',function (e) { 
        e.preventDefault();
        var value = $(this).siblings("h3").text().toLowerCase();
        $(this).siblings("h3").css("color","red");
        localStorage.setItem(value,true);

    });



});








