$(document).ready(function () {
    var x = new Date();
    var y = x.getFullYear();
    var m = x.getMonth() + 1;
    var Month = y + "-" + (m < 10 ? "0" + m : m);

    document.getElementById("month").value = Month;
});
$(document).ready(function () {
    var x = new Date();
    var h = x.getHours();
    var m = x.getMinutes();
    var Hour = h < 10 ? "0" + h : h;
    var Minute = m < 10 ? "0" + m : m;
    $(".time").val(Hour + ":" + Minute);
});

$(function () {
    $('.src-data').click(function () {
        // alert('ok')
        $('.data').css({ 'scale': '1  ' })
        $('.reg-form').css({ 'height': '15rem', 'overflow': 'hidden' })

    })
    $('.cut').click(function () {
        $('.pop-op').css({ 'scale': '0' })
    })
});


$(function () {
    $('input[type="text"]').keypress(function (e) {
        if ((e.which == 32)) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === ' ')
                e.preventDefault();
        }
        else {
            // alert('ok')
            $(this).siblings('span').html('')
            // $(this).siblings('i').css({ '/color': 'green' })
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).css({ 'border': 'none' })
        }

    });
    $('input[type="text"]').keyup(function (e) {
        if (e.which == 8) {
            $(this).siblings('span').html('')
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).css({ 'border': 'none' })
        }

    });
    $('input[type="text"]').focusout(function (e) {
        $(this).css({'color':'black'})
        if ($(this).val() == '') {
            $(this).siblings('span').html('This is mandatory*').css({ 'color': 'red', })
            // $(this).val('This is mandatory*').css({'color':'red'})
            $(this).siblings('label').css({ 'color': '#0c0170' })
            // $(a).siblings('label').css({ 'top': '-.8rem' })
            e.preventDefault();
        }
        else {
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).css({ 'border': 'none' })
            $(this).siblings('span').html('')
        }
        // 

    });
    $('input[type="text"]').focusin(function (e) {
        if ($(this).val() == 'This is mandatory*') {
            $(this).val('')
        }
        $(this).css({'color':'black'})
    })
})
function alphabets(name) {
    $(name).keypress(function (e) {
        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || (e.which == 32) || e.which == 46)) {
            // $(name).val('')
            $(name).siblings('span').html('Only Alphabets are Allowed').css({ 'color': 'red', })
            $(this).siblings('label').css({ 'color': 'red' })
            return false;
        }
        else if ((e.which == 46)) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === '.')
                e.preventDefault();
        }
        else {
            $(name).siblings('span').html('')
            // $(name).siblings('label').css({ 'top': '-.8rem' })
            $(this).css({ 'border': 'none' })
            $(this).siblings('label').css({ 'color': 'green' })

        }

    })
}
function number(no) {
    $(no).keypress(function (e) {
        var len = $(this).val().length
        if (len==10) {
            $(no).siblings('span').html('Maximum 10 digits are allowed').css({ 'color': 'red' })
            e.preventDefault();
        }
        else if (!((e.which >= 48 && e.which <= 57))) {
            $(no).siblings('span').html('Only Digits are Allowed').css({ 'color': 'red' })
            $(this).siblings('label').css({ 'color': 'red' })
            e.preventDefault();
        }
        else if (e.which == 48) {
            if (e.target.selectionStart === 0)
                return false;
        }
        else {
            $(no).siblings('span').html('')
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).css({ 'border': 'none' })

        }
    })
    $(no).focusout(function (e) {
        var len = $(this).val().length
        if (len < 10 ) {
            $(no).siblings('span').html('Minimum 10 digits are required').css({ 'color': 'red' })
            $(this).siblings('label').css({ 'color': 'red' })
        }
        else if (len == 10) {
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).siblings('span').html('')
        }
        else if (len == 0 && ($(this).siblings('span').html('') == 'Only Digits are Allowed')) {
            // $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')
        }
        else if ($(this).val() == '') {
            $(this).val('This is mandatory*')
            // $(a).siblings('label').css({ 'top': '-.8rem' })
            $(this).siblings('span').html('')
            e.preventDefault();


            // $('.sname').siblings('label').css('display', 'block')

        }
        
    });
   
}
function pincode(no) {
    $(no).keypress(function (e) {
        var len = $(this).val().length
        if (len==6) {
            $(no).siblings('span').html('Maximum 6 digits are allowed').css({ 'color': 'red' })
            // $(no).siblings('label').css({ 'top': '-.8rem' })
            e.preventDefault();
        }
        else if (!((e.which >= 48 && e.which <= 57))) {
            $(no).siblings('span').html('Only Digits are Allowed').css({ 'color': 'red' })
            // $(no).siblings('label').css({ 'top': '-.8rem' })
            $(this).siblings('label').css({ 'color': 'red' })
            e.preventDefault();
        }
        else if (e.which == 48) {
            if (e.target.selectionStart === 0)
                return false;
        }
        else {
            $(no).siblings('span').html('')
            
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).css({ 'border': 'none' })
        }
    })
    $(no).focusout(function (e) {
        var len = $(this).val().length
        if (len < 6) {
            $(no).siblings('span').html('Minimum 6 digits are required').css({ 'color': 'red' })
           
            $(this).siblings('label').css({ 'color': 'red' })

        }
        else if (len == 6) {
            
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).siblings('span').html('')
        }
        else if (len == 0 && ($(this).siblings('span').html('') == 'Only Digits are Allowed')) {
            // $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')
        }
        else if ($(this).val() == '') {
            $(this).val('This is mandatory*')
            // $(a).siblings('label').css({ 'top': '-.8rem' })
            $(this).css({ 'color': 'red'});
            $(this).siblings('span').html('')
            e.preventDefault();
        }
    });
  
}

function userid(uid) {
    if ((e.which == 32)) {
            if (e.target.selectionStart === 0)
                
                e.preventDefault();
        }
       

    }

// #####----------------Vechile number validation----------#####

function veh(vno) {
    $(vno).keydown(function (e) {
        if (e.which == 11) {
            $(vno).siblings('span').html('')
        }
        else if (e.which > 3) {
            $(vno).siblings('span').html('')
        }
    })
    $(vno).keypress(function (e) {
        // alert('ok')
        var len = $(this).val().length
        if (len < 2 && (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122)))) {
            $(this).siblings('span').html('It must be an alphabet').css({ 'color': 'red' })
            // $(uid).siblings('label').css({ 'top': '-.8rem' })

            e.preventDefault();
        }
        else if (len > 1 && len < 4 && (!((e.which >= 48 && e.which <= 57)))) {
            $(this).siblings('span').html('Charecter must be a Digit').css({ 'color': 'red' })
            // $(uid).siblings('label').css({ 'top': '-.8rem' })
            e.preventDefault();
        }
        else if (len > 3 && len < 6 && (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122)))) {
            $(this).siblings('span').html('It must be an alphabet').css({ 'color': 'red' })
            // $(uid).siblings('label').css({ 'top': '-.8rem' })
            e.preventDefault();
        }
        else if (len > 5 && len < 10 && (!((e.which >= 48 && e.which <= 57)))) {
            $(this).siblings('span').html('It must be a Digit').css({ 'color': 'red' })
            // $(uid).siblings('label').css({ 'top': '-.8rem' })
            e.preventDefault();
        }
        else if (len > 9) {
            $(this).siblings('span').html('')
            // $(uid).siblings('label').css({ 'top': '-.8rem' })
            e.preventDefault();
        }

        else if (e.which == 32) {

            e.preventDefault();
        }
        else {
            $(this).siblings('i').css({ 'color': 'green' })
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).siblings('span').html('')
        }
        $(vno).focusout(function (e) {
            var len = $(this).val().length


            if (len > 5) {
                $(this).siblings('i').css({ 'color': 'green' })
                $(this).siblings('label').css({ 'color': 'green' })
                $(this).siblings('span').html('')
            }
        });

    })
}
// #####----------------Vechile number validation end----------#####
// ======================invoice nmbr validation===============
function invoice(no) {
    $(no).keydown(function (e) {
        if (e.which == 8) {
            $(no).siblings('span').html('')
            $(this).siblings('i').css({ 'color': 'green' })
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).css({ 'border': 'none' })
        }
    });
    $(no).focusout(function (e) {

        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || (e.which >= 48 && e.which <= 57) || e.which == 47)) {
            
            $(this).siblings('span').html('')
            

        }
    });
    $(no).keypress(function (e) {
        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || (e.which >= 48 && e.which <= 57) || e.which == 47)) {
            // $(name).val('')
            $(no).siblings('span').html('only alphabets, / , & Digits allowed').css({ 'color': 'red', })
            // $(name).siblings('label').css({ 'top': '-.8rem' })
            $(this).css({ 'border': '2px solid red' })
            $(this).siblings('i').css({ 'color': 'red' })
            $(this).siblings('label').css({ 'color': 'red' })
            return false;
        }
        else if ((e.which == 32)) {

            e.preventDefault();
        }
        else if ((e.which == 47)) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === '/')
                e.preventDefault();
        }
        else if (e.which == 8) {
            $(no).siblings('span').html('')
            // $(name).siblings('label').css({ 'top': '-.8rem' })
        }
        else {
            $(no).siblings('span').html('')
            // $(name).siblings('label').css({ 'top': '-.8rem' })
            $(this).css({ 'border': 'none' })
            $(this).siblings('i').css({ 'color': 'green' })
            $(this).siblings('label').css({ 'color': 'green' })
        }

    })
}
// =====================invoice validdtion end====================
function Gstno(gst) {
  
    $(gst).keypress(function (e) {
        if ((($(this).val().length < 2)) && !(e.which >= 48 && e.which <= 57)) {
            $(this).siblings("span").text("For first 2 Only Digits Are Allowed !");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
            return false;
        }
        else if ((($(this).val().length >= 2) && $(this).val().length < 7) && !((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122))) {
            $(this).siblings("span").text(" 5 Letters Are Allowed !");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
            return false;
        }
        else if ((($(this).val().length >= 7) && ($(this).val().length < 11)) && !(e.which >= 48 && e.which <= 57)) {
            $(this).siblings("span").text("Enter Four Digits !");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
            return false;
        } else if ((($(this).val().length == 11)) && !((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122))) {
            $(this).siblings("span").text("11th Character is Aplphabets");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
            return false;
        } else if ((($(this).val().length == 12)) && !((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || (e.which >= 48 && e.which <= 57))) {
            $(this).siblings("span").text("Special Character not allowed !");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
            return false;
        } else if ((($(this).val().length > 12) && ($(this).val().length < 15)) && !(e.which >= 48 && e.which <= 57)) {
            $(this).siblings("span").text("Last two character Is Digits !");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
            return false;
        }
        else if (($(this).val().length == 15)) {
            $(this).siblings("span").text("Maximum 15 Characters are Allowed !");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
            return false;
        }
        else {
            $(this).siblings("span").text("");
            $(this).css("border", "none");
            // $(this).siblings("label").css("color", "#0c0170");
            $(this).siblings('i').css({ 'color': 'green' })
            $(this).siblings('label').css({ 'color': 'green' })
            // $(this).siblings("i").css("color", "green");
        }
    });
    
  

}


function price(no) {
   
    $(no).keypress(function (e) {
        if (!((e.which >= 48 && e.which <= 57) || (e.which == 46))) {
            $(no).siblings('span').html('Only Digits are Allowed').css({ 'color': 'red' })
            $(this).css({ 'border': '2px solid red' })
            $(this).siblings('i').css({ 'color': 'red' })
            $(this).siblings('label').css({ 'color': 'red' })
            e.preventDefault();
        }
        else if (e.which == 46) {
            if (e.target.selectionStart === 0 || $(this).val().includes('.'))
                e.preventDefault();
        }
        else {
            var decimalIndex = $(this).val().indexOf('.');
            if (decimalIndex !== -1 && $(this).val().length - decimalIndex > 2)
                e.preventDefault();
            else {
                $(no).siblings('span').html('')
                $(this).css({ 'border': 'none' })
                $(this).siblings('i').css({ 'color': 'green' })
                $(this).siblings('label').css({ 'color': 'green' })
            }
        }
    })
   
   
}




const previewImage = (event) => {
    const imageFiles = event.target.files;
    if (imageFiles.length > 0) {
        const selectedImage = imageFiles[0];
        const minFileSize = 20 * 1024; // 20KB in bytes
        const maxFileSize = 100 * 1024; // 50KB in bytes

        if (selectedImage.size >= minFileSize && selectedImage.size <= maxFileSize) {
            const imageSrc = URL.createObjectURL(selectedImage);
            const $imagePreviewElement = $(event.target).siblings('div').children('img');
            $imagePreviewElement.attr('src', imageSrc);
            $imagePreviewElement.show();
            $(event.target).siblings('div').css({ 'display': 'block', 'height': '100%' });
            $(event.target).siblings('.auto-img').css('display', 'none');
            const $labelElement = $(event.target).siblings('.l-sign');
            $labelElement.css({ 'background-color': 'rgba(255, 255, 255, 0)', 'font-family': 'bold', 'height': '100%', 'padding-top': '5rem' }).text("");
            const $labelElement1 = $(event.target).siblings('.l_upload');
            $labelElement1.css({ 'background-color': 'rgba(255, 255, 255, 0)', 'font-family': 'bold', 'height': '100%', 'padding-top': '85%' }).text("");
            const $signature = $(event.target).parent('.signature');
            $signature.css({ 'height': '8rem' });
        } else {
            
            alert('Please select an image between 20KB and 100KB in size.');
            
            $(event.target).val('');
        }
    }
};
const uploadfile = (event) => {
    const imageFiles = event.target.files;
    if (imageFiles.length > 0) {
        const selectedImage = imageFiles[0];
        const minFileSize = 20 * 1024; // 20KB in bytes
        const maxFileSize = 500 * 1024; // 500KB in bytes

        if (selectedImage.size >= minFileSize && selectedImage.size <= maxFileSize) {

            const imageSrc = URL.createObjectURL(selectedImage);
            const $imagePreviewElement = $(event.target).siblings('div').children('div').children('img');

            $imagePreviewElement.attr('src', imageSrc);
            $imagePreviewElement.show();
            $(event.target).siblings('.pview').css({ 'display': 'block' });
            $(event.target).siblings('label').html('Document Uploaded');
            $(event.target).parent('div').siblings('.l_doc').css({ 'display': 'block' });

        } else {

            alert('Please select an image between 20KB and 500KB in size.');

            $(event.target).val('');
        }
    }
};
$(function () {
    $('.pview').click(function () {
        $(this).siblings('.pop-op').css({ 'scale': '1' })

    })
    $('.cut').click(function () {
        $('.pop-op').css({ 'scale': '0' })
    })
});
let y;
function Tdate() {
    let dt = new Date();
    let dd = dt.getDate();
    let mm = dt.getMonth() + 1;
    let yy = dt.getFullYear();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    let y = yy + "-" + mm + "-" + dd
    // let y =dd+"-"+mm+"-"+yy
    $('.date').val(y);
    $(".date").attr('max', y);
}
$(document).ready(function () {
    Tdate()
});
function accountno(no) {
    $(no).keydown(function (e) {
        if (e.which == 8) {
            $(this).siblings("span").text("");
            $(this).css("border", "none");
            $(this).siblings("label").css("color", "#0c0170");
            // $(this).siblings("i").css("color", "green");
        }
    });
    $(no).keypress(function (e) {
        if (!(e.which >= 48 && e.which <= 57)) {
            $(this).siblings("span").text("Only Digits Are Allowed !");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
            return false;
        } else if ($(this).val().length == 18) {
            $(this).siblings("span").text("Maximum 18 Digits Are Allowed");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
            return false;
        } else if (e.which == 48) {
            if (e.target.selectionStart === 0) return false;
        } else {
            $(this).siblings("span").text("");
            $(this).css("border", "none");
            $(this).siblings("label").css("color", "green");
            // $(this).siblings("i").css("color", "green");
        }
    });
    $(no).focusout(function (e) {
        if ($(this).val() == "") {
            $(this).siblings("span").text("This Field Is Mandatory.");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
        }
        if ($(this).val().length < 9) {
            $(this).siblings("span").text("Minimum 9 Digits Required.");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
        } else {
            $(this).siblings("span").text("");
            $(this).css("border", "none");
            $(this).siblings("label").css("color", "green");
            $(this).siblings("i").css("color", "green");
        }
    });
}
function c_accountno(no) {
    $(no).keydown(function (e) {
        if (e.which == 8) {
            $(this).siblings("span").text("");
            $(this).css("border", "none");
            $(this).siblings("label").css("color", "#0c0170");
            // $(this).siblings("i").css("color", "green");
        }

    });
    $(no).keypress(function (e) {

        if (!(e.which >= 48 && e.which <= 57)) {
            $(this).siblings("span").text("Only Digits Are Allowed !");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
            return false;
        } else if ($(this).val().length == 18) {
            $(this).siblings("span").text("Maximum 18 Digits Are Allowed");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
            return false;
        } else if (e.which == 48) {
            if (e.target.selectionStart === 0) return false;
        }
        else {
            $(this).siblings("span").text("");
            $(this).css("border", "none");
            $(this).siblings("label").css("color", "green");
            // $(this).siblings("i").css("color", "green");
        }
    });


    $(no).keyup(function (e) {
        if ($('#acc_no').val() != $(this).val()) {
            $(this).siblings("span").text("Account Number does not match");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
        }
    });

    $(no).focusout(function (e) {
        if ($(this).val() == "") {
            $(this).siblings("span").text("This Field Is Mandatory.");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
        }
        if ($(this).val().length < 9) {
            $(this).siblings("span").text("Minimum 9 Digits Required.");
            $(this).css("border", "1px solid red");
            $(this).siblings("label").css("color", "red");
            // $(this).siblings("i").css("color", "red");
        } else {
            $(this).siblings("span").text("");
            $(this).css("border", "none");
            $(this).siblings("label").css("color", "green");
            // $(this).siblings("i").css("color", "green");
        }
    });

}

function forifsc(ifsc) {
    $(ifsc).keydown(function (e) {
        if (e.which == 11) {
            $(ifsc).siblings('span').html('')
        }
        else if (e.which > 3) {
            $(ifsc).siblings('span').html('')
        }
    })
    $(ifsc).keypress(function (e) {
        // alert('ok')
        var len = $(this).val().length
        if (len < 4 && (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122)))) {
            $(this).siblings('span').html('Charecter must be an alphabet').css({ 'color': 'red' })
            // $(ifsc).siblings('label').css({ 'top': '1.1rem' })
            e.preventDefault();
        }
        else if (len == 4 && (!(e.which == 48))) {
            $(this).siblings('span').html('Charecter must be 0(zero)').css({ 'color': 'red', })
            // $(ifsc).siblings('label').css({ 'top': '1.1rem' })
            e.preventDefault();
        }
        else if (len > 5 && (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || (e.which >= 48 && e.which <= 57)))) {
            $(this).siblings('span').html('Charecter must not be any special charecter').css({ 'color': 'red', })
            // $(ifsc).siblings('label').css({ 'top': '1.1rem' })
            e.preventDefault();
        }
        else if (e.which == 48) {
            $(this).siblings('span').html('')
            // $(ifsc).siblings('label').css({ 'top': '1.1rem' })
            // e.preventDefault();
        }

        else if (len > 10) {
            $(ifsc).siblings('span').html('Maximum 11 charecter are allowed').css({ 'color': 'red', })
            // $(ifsc).siblings('label').css({ 'top': '1.1rem' })
            e.preventDefault();
        }

        else if (e.which == 32) {

            e.preventDefault();
        }
        $(ifsc).focusout(function (e) {
            var len = $(this).val().length
            if (len < 11 && len > 0) {
                $(ifsc).siblings('span').html('Minimum 11 charecter are required').css({ 'color': 'red', })
                $(this).css({ 'border': '2px solid red' })
            }
            if (len >= 11) {
                $(this).css({ 'border': '2px solid green' })
                $(this).siblings('span').html('')
            }
            else if (len == 0 && ($(this).siblings('span').html('') == 'Only Digits are Allowed')) {
                // $(this).css({ 'border': '2px solid green' })
                $(this).siblings('span').html('')
            }
        });

    })

}
function reset() {
    
    location.reload()
}
