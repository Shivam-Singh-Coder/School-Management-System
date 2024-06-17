function legend(l, t) {
    a = $(t).val();
    if (a.trim() == '')
        $(l).css('visibility', 'hidden');
    else
        $(l).css('visibility', 'visible');
}
function flchk(id) {
    var k = $(id).val().trim();
    if (k == '') {
        $(id).removeAttr('type')
        $(id).val('Field Is Mandatory!')
        $(id).css({ "border": "solid 1px red", "color": "red" });
        flag = false
    }
}
function fgchk(id) {
    var k = $(id).val();
    if (k.trim() == 'Field Is Mandatory!') {
        $(id).val('')
        $(id).css({ "border": "solid 1px black", "color": "black" });
        flag = false;
    }
}

$('#t1,#t8').on('keypress', function (e) {
    // alert('hii')
    if ((e.which == 32) && e.target.selectionStart == 0)
        return false;
    else if (!(e.which >= 65 && e.which <= 90 || e.which >= 97 && e.which <= 122 || e.which == 32)) {
        $(this).siblings('span').html('Only Alphabate allowed')
        e.preventDefault()
        return false;
    }
    else if (e.which == 32 && $(this).val().slice(-1) == ' ') {
        e.preventDefault();
    }
    else
        $(this).siblings('span').html('')
});

$(document).ready(function () {
    $('#optionField,#one,#two,#three').focusout(function () {
        var selectedOption = $('#optionField :selected').text();
        console.log(selectedOption)
        if(selectedOption == '------- Select Teacher Name With Id --------'){
            $(this).siblings('span').html('Please Select an option')  
            e.preventDefault()
        }
        else if (selectedOption != '------- Select Teacher Name With Id --------') {
            $(this).siblings('span').html('');

        }
    });
});


$(document).ready(function() {
    var x = new Date();
    var h = x.getHours();
    var m = x.getMinutes();
    var Hour = h < 10 ? "0" + h : h;
    var Minute = m < 10 ? "0" + m : m;
    document.getElementById("t6").value = Hour + ":" + Minute;
});

// ---------------------------------------
