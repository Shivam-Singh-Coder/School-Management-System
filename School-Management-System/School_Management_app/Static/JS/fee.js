function legend(l, t) {
    a = $(t).val();
    if (a.trim() == '')
        $(l).css('visibility', 'hidden');
    else
        $(l).css('visibility', 'visible');
}
// menda==============================
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

$('#t3,#t4,#t5').on('keypress', function (e) {
    // alert('hii')
    if ((e.which == 32) && e.target.selectionStart == 0)
        return false;
    else if (!(e.which >= 65 && e.which <= 90 || e.which >= 97 && e.which <= 122 || e.which == 32)) {
        // $(span).html('<br>Only Alphabate allowed')
        $(this).siblings('span').html('Only Alphabate allowed')
        e.preventDefault()
        return false;
    }
    else if (e.which == 32 && $(this).val().slice(-1) == ' ') {
        e.preventDefault();
    }
    else
        // $(span).html('')
        $(this).siblings('span').html('')
});

$('#t7,#t9,#t11,#t13,#t15').keypress(function (e) {
    if ((e.which >= 48 && e.which <= 57)) {
        $(this).siblings('span').html('')
        // e.preventDefault();
        // return false;
    }
    // else if (e.which == 32) {
    //     if (e.target.selectionStart === 0)
    //         return false;
    //     else if ($(this).val().slice(-1) === ' ')
    //         e.preventDefault();
    // }
    else if (e.which == 48 || e.which == 46) {
        // alert('fsdhj')
        if (e.target.selectionStart === 0)
            return false;
        else if ($(this).val().slice(-1) === '.')
            e.preventDefault();
             
    }
    else {
        $(this).siblings('span').html('Only Digits are Allowed')
        return false;
    }
   
})

$(document).ready(function () {
    $('#optionField').change(function () {
        var selectedOption = $('#optionField :selected').text();
        console.log(selectedOption)
        if (selectedOption == 'Select Any Mode') {
            $('#validationMessage').html('Please select an option');
            // console.log('yes')
        }
        else if (selectedOption != 'Select Any Mode') {
            $('#validationMessage').html('');
            // console.log('no')
        }
    });
});
$(document).ready(function () {
    Tdate();
});
function Tdate() {
    var x = new Date();
    dd = x.getDate();
    yy = x.getFullYear();
    mm = x.getMonth() + 1;
    // let h= x.getHours()
    // alert(h)
    // let m=x.getMinutes()
    // alert(m)
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    y = yy + "-" + mm + "-" + dd; //for date format
    $("#t10").val(y);
    $("#t10").attr('max', y);
}
// function Tdate(){
//     var x = new Date();
//     let m = x.getMonth()
//     alert(m)
//     let y = x.getFullYear()
//     alert(y) 
//     if (m < 10) m = "0" + m;
//     if (y < 10) y = "0" + y;
//     p = m + ""
// }

$(document).ready(function ()  {
    var x = new Date();
    var y = x.getFullYear(); 
    var m = x.getMonth() + 1; 
    var Month = y + "-" + (m < 10 ? "0" + m : m);
    
    document.getElementById("t6").value = Month;
});