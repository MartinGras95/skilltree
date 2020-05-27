$(document).ready(function () {

    // add new skill
    $("#btn-add").click(function (e) { 
        e.preventDefault();
        // get name of desired new skill
        var newSkill = document.getElementById("txt-skill").value;

        // if text box is empty, dont add
        if(newSkill !=""){
            // add the new skill to local memory and set to false as a default
            localStorage.setItem(newSkill.toLowerCase(),false);
            // prepend a new row, column with the new skill and button inside 
            // ugliest line ever
            $(this).before("<div class="+`"row"`+">"+ "<div class="+`"col"`+">"+"<h3>"+newSkill+"</h3>" + "<button class="+`"btn btn-primary btn-learned"`+">Complete</button>"+"<button class="+`"btn btn-danger btn-delete"`+">Delete</button>"+"</div>"+"</div>");
            $("#txt-skill").val('');
        }else{
            alert("Please input correct skill");
        }
    });

    // When button is clicked its corresponding skill is marked as learned
    // also local storage variable is set to true
    $(".skills-container").on('click','.btn-learned',function (e) { 
        e.preventDefault();
        var value = $(this).siblings("h3").text().toLowerCase();
        $(this).siblings("h3").css("color","red");
        localStorage.setItem(value,true);

    });

    // delete skill
    $(".skills-container").on('click','.btn-delete',function (e) { 
        e.preventDefault();
        var value = $(this).siblings("h3").text();
        // remove the elements
        $(this).parentsUntil(".skills-container").remove();
        // remove from localstorage
        localStorage.removeItem(value);
    });

    // Clear entire skill tree
    $("#btn-clear").click(function (e) { 
        e.preventDefault();
        // clear localstorage
        localStorage.clear();
        // clear all children elements of skills container except ones with perm(permanent) class
        $(".skills-container").children().not(".perm").remove();
        
    });



});








