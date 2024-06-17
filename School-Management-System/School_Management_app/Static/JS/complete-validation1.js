$(document).ready(function () {
    $('input ,textarea').focusin(function () {
        // alert('ok')
        $(this).siblings('.l_move').css({ 'top': '-.8rem' });
        $(this).css('border', '1px solid skyblue');
        // $(this).css('box-shadow', '2px 2px 4px skyblue');
    });


    $('input,textarea').focusout(function () {
        if ($(this).val() == '') {
            $(this).siblings('.l_move').css({ 'top': '.8rem' });
            $(this).css('border', 'black');
            // $(this).css('box-shadow', '0px 0px 2px 2px rgba(0, 0, 0,0.1)');
        }
    });
});

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
    document.getElementById("time").value = Hour + ":" + Minute;
});
$(function () {
    $('.pview').click(function () {
        $(this).siblings('.pop-op').css({ 'scale': '1' })

    })
    $('.cut').click(function () {
        $('.pop-op').css({ 'scale': '0' })
    })
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

function call(i, a) {
    // alert('ok')
    var t = $(a).val()
    if (i == 1 && t == '') {
        $(a).val('this is mandatory*')
        $(a).siblings('label').css({ 'top': '-.8rem' })
        $(a).css({ 'color': 'red', 'border': '2px solid red' });
        $(this).siblings('span').html('')



        // $('.sname').siblings('label').css('display', 'block')

    }
    else if (i == 2 && t == 'this is mandatory*') {
        $(a).val('')
        // $(a).siblings('label').css({ 'top': '35%' })
        $(a).css({ 'color': 'black' });

    }

}
function alphabets(name) {
    $(name).keydown(function (e) {
        if (e.which == 8) {
            $(name).siblings('span').html('')
            $(this).siblings('i').css({ 'color': 'black' })
            $(this).siblings('label').css({ 'color': 'black' })
            $(this).css({ 'border': 'none' })
        }
    });
    $(name).focusout(function (e) {

        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32)) {
            // $(this).css({ 'border': '2px solid green' })
            // $(this).siblings('i').css({ 'color': 'red' })
            // $(this).siblings('label').css({ 'color': 'red' })
            $(this).siblings('span').html('')
            // $(this).siblings('label').css({'display':'block'})

        }
    });
    $(name).keypress(function (e) {
        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32)) {
            // $(name).val('')
            $(name).siblings('span').html('Only Alphabets are Allowed').css({ 'color': 'red', })
            $(name).siblings('label').css({ 'top': '-.8rem' })
            $(this).css({ 'border': '2px solid red' })
            $(this).siblings('i').css({ 'color': 'red' })
            $(this).siblings('label').css({ 'color': 'red' })
            return false;
        }
        else if (e.which == 32) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === ' ')
                e.preventDefault();
        }
        else if (e.which == 8) {
            $(name).siblings('span').html('')
            $(name).siblings('label').css({ 'top': '-.8rem' })
        }
        else {
            $(name).siblings('span').html('')
            $(name).siblings('label').css({ 'top': '-.8rem' })
            $(this).css({ 'border': 'none' })
            $(this).siblings('i').css({ 'color': 'green' })
            $(this).siblings('label').css({ 'color': 'green' })
        }

    })
}


function number(no) {
    $(no).keydown(function (e) {
        if (e.which == 8) {
            $(no).siblings('span').html('')
            $(this).siblings('i').css({ 'color': 'black' })
            $(this).siblings('label').css({ 'color': 'black' })
            $(this).css({ 'border': 'none' })
        }
    })

    $(no).keypress(function (e) {
        var len = $(this).val().length
        if (len > 9) {
            $(no).siblings('span').html('Maximum 10 digits are allowed').css({ 'color': 'red' })
            $(no).siblings('label').css({ 'top': '-.8rem' })
            e.preventDefault();
        }
        else if (!((e.which >= 48 && e.which <= 57))) {
            $(no).siblings('span').html('Only Digits are Allowed').css({ 'color': 'red' })
            $(no).siblings('label').css({ 'top': '-.8rem' })
            $(this).css({ 'border': '2px solid red' })
            $(this).siblings('i').css({ 'color': 'red' })
            $(this).siblings('label').css({ 'color': 'red' })
            e.preventDefault();
        }
        else if (e.which == 32) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === ' ')
                e.preventDefault();
        }
        else if (e.which == 48) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === ' ')
                e.preventDefault();
        }
        else {
            $(no).siblings('span').html('')
            $(no).siblings('label').css({ 'top': '-.8rem' })
            $(this).siblings('i').css({ 'color': 'green' })
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).css({ 'border': 'none' })

        }
    })
    $(no).focusout(function (e) {
        var len = $(this).val().length
        if (len < 10 && len > 0) {
            $(no).siblings('span').html('Minimum 10 digits are required').css({ 'color': 'red' })
            $(this).css({ 'border': '2px solid red' })
            $(this).siblings('i').css({ 'color': 'red' })
            $(this).siblings('label').css({ 'color': 'red' })

        }
        else if (len == 10) {
            // $(this).css({ 'border': '2px solid green' })
            $(this).siblings('i').css({ 'color': 'green' })
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).siblings('span').html('')
        }
        else if (len == 0 && ($(this).siblings('span').html('') == 'Only Digits are Allowed')) {
            // $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')
        }



    });
}


function pincode(no) {
    $(no).keydown(function (e) {
        if (e.which == 8) {
            $(no).siblings('span').html('')
            $(this).siblings('i').css({ 'color': 'black' })
            $(this).siblings('label').css({ 'color': 'black' })
            $(this).css({ 'border': 'none' })
        }
    })
    $(no).keypress(function (e) {
        var len = $(this).val().length
        if (len > 5) {
            $(no).siblings('span').html('Maximum 6 digits are allowed').css({ 'color': 'red' })
            $(no).siblings('label').css({ 'top': '-.8rem' })
            e.preventDefault();
        }
        else if (!((e.which >= 48 && e.which <= 57))) {
            $(no).siblings('span').html('Only Digits are Allowed').css({ 'color': 'red' })
            $(no).siblings('label').css({ 'top': '-.8rem' })
            $(this).css({ 'border': '2px solid red' })
            $(this).siblings('i').css({ 'color': 'red' })
            $(this).siblings('label').css({ 'color': 'red' })
            e.preventDefault();
        }
        else if (e.which == 32) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === ' ')
                e.preventDefault();
        }
        else if (e.which == 48) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === ' ')
                e.preventDefault();
        }
        else {
            $(no).siblings('span').html('')
            $(no).siblings('label').css({ 'top': '-.8rem' })
            $(this).css({ 'border': 'none' })
            $(this).siblings('i').css({ 'color': 'green' })
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).css({ 'border': 'none' })
        }
    })
    $(no).focusout(function (e) {
        var len = $(this).val().length
        if (len < 6 && len > 0) {
            $(no).siblings('span').html('Minimum 6 digits are required').css({ 'color': 'red' })
            $(this).css({ 'border': '2px solid red' })
            $(this).siblings('i').css({ 'color': 'red' })
            $(this).siblings('label').css({ 'color': 'red' })

        }
        else if (len == 6) {
            // $(this).css({ 'border': '2px solid green' })
            $(this).siblings('i').css({ 'color': 'green' })
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).siblings('span').html('')
        }
        else if (len == 0 && ($(this).siblings('span').html('') == 'Only Digits are Allowed')) {
            // $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')
        }



    });
}

function userid(uid) {
    $(uid).keydown(function (e) {
        if (e.which == 11) {
            $(uid).siblings('span').html('')
        }
        else if (e.which > 3) {
            $(uid).siblings('span').html('')
        }
    })
    $(uid).keypress(function (e) {
        // alert('ok')
        var len = $(this).val().length
        if (len < 1 && (!((e.which == 64)))) {
            $(this).siblings('span').html('First Letter must be "@"').css({ 'color': 'red' })
            $(uid).siblings('label').css({ 'top': '-.8rem' })
            
            e.preventDefault();
        }
        else if (len > 0 && len < 5 && (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122)))) {
            $(this).siblings('span').html('Charecter must be  Alphabet').css({ 'color': 'red' })
            $(uid).siblings('label').css({ 'top': '-.8rem' })
            e.preventDefault();
        }
        else if (len > 5 && (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || (e.which >= 48 && e.which <= 57) || (e.which == 95)))) {
            $(this).siblings('span').html('Charecter mus not be any special charecter other than "_"').css({ 'color': 'red' })
            $(uid).siblings('label').css({ 'top': '-.8rem' })
            e.preventDefault();
        }
        // else if (len <= 1) {
        //     $(uid).siblings('span').html('more charecter needed').css({ 'color': 'red' })
        //     $(this).css({ 'border': '2px solid red' })
        //     $(this).siblings('i').css({ 'color': 'red' })
        //     $(this).siblings('label').css({ 'color': 'red' })
        // }


        else if (e.which == 32) {

            e.preventDefault();
        }
        else{
            $(this).siblings('i').css({ 'color': 'green' })
            $(this).siblings('label').css({ 'color': 'green' })
            $(this).siblings('span').html('')
        }
        $(uid).focusout(function (e) {
            var len = $(this).val().length
            
            
            if (len > 5) {
                $(this).siblings('i').css({ 'color': 'green' })
                $(this).siblings('label').css({ 'color': 'green' })
                $(this).siblings('span').html('')
            }
        });

    })
}
function address(name) {
    $(name).keydown(function (e) {
        if (e.which == 8) {
            $(name).siblings('span').html('')
            $(this).siblings('i').css({ 'color': 'black' })
            $(this).siblings('label').css({ 'color': 'black' })
        }
    });
    $(name).keypress(function (e) {
        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32 || e.which == 44 || e.which == 45 || (e.which >= 48 && e.which <= 57))) {
            // $(name).val('')
            $(name).siblings('span').html('No Special Charecter allowed').css({ 'color': 'red' })
            $(this).siblings('i').css({ 'color': 'red' })
            $(this).siblings('label').css({ 'color': 'red' })
            return false;
        }
        else if (e.which == 32) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === ' ')
                e.preventDefault();
        }
        else if (e.which == 44) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === ',')
                e.preventDefault();
        }
        else if (e.which == 45) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === '-')
                e.preventDefault();
        }
        else if (e.which == 8) {
            $(name).siblings('span').html('')
        }
        else {
            $(name).siblings('span').html('')
            // $(this).css({ 'border': '2px solid green' })
            $(this).siblings('i').css({ 'color': 'green' })
            $(this).siblings('label').css({ 'color': 'green' })
        }
        $(name).focusout(function (e) {

            if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32)) {
                // $(this).css({ 'border': '2px solid green' })
                $(this).siblings('i').css({ 'color': 'green' })
                $(this).siblings('label').css({ 'color': 'green' })
                $(this).siblings('span').html('')

            }
        });
    })
}



const previewImage = (event) => {
    // Get the selected files.
    const imageFiles = event.target.files;

    // Check if at least one image is selected.
    if (imageFiles.length > 0) {
        // Get the first image in the selection.
        const selectedImage = imageFiles[0];

        // Check if the image size is within the desired range (20KB to 50KB).
        const minFileSize = 20 * 1024; // 20KB in bytes
        const maxFileSize = 100 * 1024; // 50KB in bytes

        if (selectedImage.size >= minFileSize && selectedImage.size <= maxFileSize) {
            // Image size is within the acceptable range.

            // Continue with the rest of the code to display the preview.
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
            // Display an error message or handle the case where the image size is outside the acceptable range.
            alert('Please select an image between 20KB and 100KB in size.');
            // Optionally, you can reset the file input to clear the selection.
            $(event.target).val('');
        }
    }
};

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
    $('.dob').val(y);
    $(".dob").attr('max', y);
}
$(document).ready(function () {
    Tdate()
});