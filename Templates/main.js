// Main Code for the website startes from here ----------------------------------------------------------------------------------------------------------------------------------------------------- //


// Profile Details || Next BTN ----------------------------------------------------//
$('.btnNext').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});

// Next of Kin  || ----------------------------------------------------------------//

// Table Append & Prepand 
$(document).ready(function() {
    var i = 1;
    $("#add_row").click(function() {
        $('#addr' + i).html("<td>" + (i + 1) +
            "</td><td><input name='name0' type='text'  placeholder='Name' class='form-control'  /> </td><td><input   name='relation0' type='text' placeholder='Relationship'  class='form-control input-md'></td><td><input type='date' name='dob0'  class='form-control'/></td><td><input type='text'  name='ppno0' placeholder='PP No.' class='form-control'/></td>"
        );
        $('#tab_logic').append('<tr id="addr' + (i + 1) + '"></tr>');
        i++;
    });
    $("#delete_row").click(function() {
        if (i > 1) {
            $("#addr" + (i - 1)).html('');
            i--;
        }
    });
});

// Next & Prev Btn

$('.btnNext2').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious2').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


// Passport Details || ------------------------------------------------------------- // 
// Next & Prev Btn

$('.btnNext3').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious3').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


// CONTINUOUS DISCHARGE CERTIFICATE / SEAMEN BOOK ----------------------------------//
// Next & Prev Btn
$('.btnNext4').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious4').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


// ACADEMIC QUALIFICATIONS --------------------------------------------------------//
// Next & Prev Btn
$('.btnNext5').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious5').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


//LICENCE / CERTIFICATES OF COMPETENCY ---------------------------------------------//
// Next & Prev btn
$('.btnNext6').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious6').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


// STCW AND OTHER CERTIFICATES -------------------------------------------------------//
// Next & Prev Btn
$('.btnNext7').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious7').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});

// Adding and Removing
function adding() {
    document.getElementById("addx10").hidden = false;
}

function remov() {
    document.getElementById("addx10").hidden = true;
}


// REFERENCES -----------------------------------------------------------//
// Next & Prev Btn
$('.btnNext8').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious8').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


//HOW DID YOU COME TO KNOW ABOUT US? ---------------------------------------//
// Next & Prev Btn
$('.btnNext9').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious9').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


// Personal Details ------------------------------------------------------//
// Next & Prev btn
$('.btnNext10').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious10').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


$('.btnNext11').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious11').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


$('.btnNext12').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious12').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


$('.btnNext13').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious13').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


$('.btnNext14').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious14').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


$('.btnNext15').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious15').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});

// On-Shore Services
// On-shore Service Append Code
$('.btnNext16').click(function() {
    $('.nav-pills > .active').next('button').tab('show');
});
$('.btnPrevious16').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});



$(document).ready(function() {
    var y = 1;
    $("#add_row5").click(function() {
        $('#adder' + y).html("<td>" + (y + 1) +
            "</td><td><input type='text' name='empl0" +
            "'   class='form-control'/></td> <td><input type='text' name='title0" +
            "' class='form-control'/> </td> <td><input type='text' name='works0" +
            "' class='form-control'/> </td> <td><input type='text' name='machine0" +
            "' class='form-control'/> </td> <td><input type='text' name='pers0" +
            "' class='form-control'/> </td> <td><input type='text' name='size0" +
            "' class='form-control'/> </td> <td><input type='date' name='from0" +
            "' class='form-control'/> </td> <td><input type='date' name='to0" +
            "' class='form-control'/> </td> <td><input type='text' name='any0" +
            "' class='form-control'/> </td>");
        $('#tab_logic5').append('<tr id="adder' + (y + 1) + '"></tr>');
        y++;
    });
    $("#delete_row5").click(function() {
        if (y > 1) {
            $("#adder" + (y - 1)).html('');
            y--;
        }
    });
});



// Decleration -------------------------------------------------------------------------------------------//
$('.btnPrevious17').click(function() {
    $('.nav-pills > .active').prev('button').tab('show');
});


"+i+ "
$(document).ready(function() {
    var i = 1;
    $("#add_row4 ").click(function() {
        $('#addy' + i).html("<td><input type='text' name='empl" + "' placeholder='Enter employer' class='form-control' /> </td> <td> < input type = 'text' name = 'rspl0" + "' placeholder='eg: THOME / AURUS' class='form-control' /> </td> <td> <input type = 'text' name = 'vessel0" + "' placeholder='SOUTHPORT / OIL TANKER' class='form-control' /></td> <td > < select class = 'form-control' name = 'stream_motor0" + "' id=''><option value=''></option><option value='steam'>Steam</option><option value='motor'>Motor</option></select></td> < td > < input type = 'number'name = 'dwt0" + "' placeholder='eg: 115000' class='form-control' /></td> < td > < input type = 'text' name = 'rank0" +
            "' placeholder='eg: Master / Cadet' class='form-control' /></td> < td > < input type = 'text' name = 'engine0" +
            "' class='form-control' /></td> < td > < input type = 'text' name = 'bhp0" +
            "' class='form-control' /></td> < td > < input type = 'text'  name = 'man_ums0" +
            "' placeholder='eg: UMS / MANNED' class='form-control' /></td> <  td > < input type = 'date'  name = 'fromdt0" + "' class='form-control' /></td> <  td > < input type = 'date'  name = 'todt0" +
            "' pattern='' class='form-control' /></td> <  td > < input type = 'number'     name = 'total0" + "' placeholder='eg:3.2' class='form-control' /></td>");
        $('#tab_logic4').append(' <  tr id = "addy' + (i + 1) + '" > < /tr>');
        i++;
    });
    $("#delete_row4").click(function() {
        if (i > 1) {
            $("#addy" + (i - 1)).html('');
            i--;
        }
    });
});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}