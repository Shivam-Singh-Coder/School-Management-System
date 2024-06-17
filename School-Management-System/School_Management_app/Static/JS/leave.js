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


$(document).ready(function () {
    Tdate();
});
function Tdate() {
    var x = new Date();
    dd = x.getDate();
    yy = x.getFullYear();
    mm = x.getMonth() + 1;
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    y = yy + "-" + mm + "-" + dd; 
    $("#t6,#t5").val(y);
    $("#t6,#t5").attr('max', y);
}


$('#tt').on('keypress', function (e) {
    if ((e.which == 32) && e.target.selectionStart == 0)
        return false;
    else if (!(e.which >= 65 && e.which <= 90 || e.which >= 97 && e.which <= 122 || e.which == 32)) {
        $(this).siblings('span').html('Only Alphabate allowed')
        e.preventDefault()
        return false;
    }
    else if (e.which == 32 && $(this).val().slice(-1) == ' '){
        e.preventDefault();
    }
    else
        $(this).siblings('span').html('')
});

$(document).ready(function () {
    $('#optionField').focusout(function () {
        var selectedOption = $('#optionField :selected').text();
        console.log(selectedOption)
        if(selectedOption == '------ Select Leave Type -----'){
            $(this).siblings('span').html('Please Select an option')   
            e.preventDefault()
            // $(this).css('border','1px solid red;')
            // console.log('yes')
        }
        else if (selectedOption != '------ Plz Select Leave Type -----') {
            $('this').siblings('span').html('');
            // console.log('no')
        }
    });
});