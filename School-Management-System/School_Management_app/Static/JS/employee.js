$(document).ready(function () {
    $('input ,textarea').focusin(function () {
        // alert('ok')
        $(this).siblings('.l_move').css({ 'top': '1.1rem' });
        $(this).css('border', '1px solid skyblue');
        $(this).css('box-shadow', '2px 2px 4px skyblue');
    });


    $('input,textarea').focusout(function () {
        if ($(this).val() == '') {
            $(this).siblings('.l_move').css({ 'top': '38%' });
            $(this).css('border', 'black');
            $(this).css('box-shadow', '0px 0px 2px 2px rgba(0, 0, 0,0.1)');
        }
    });
});


$(function () {
    $('.pview').click(function () {
        $(this).siblings('.pop-op').css({ 'scale': '1' })

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
        $(a).siblings('label').css({ 'top': '1.1rem' })
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
        }
    });
    $(name).focusout(function (e) {

        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32)) {
            $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')

        }
    });
    $(name).keypress(function (e) {
        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32)) {
            // $(name).val('')
            $(name).siblings('span').html('Only Alphabets are Allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(name).siblings('label').css({ 'top': '1.1rem' })
            $(this).css({ 'border': '2px solid red' })
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
            $(name).siblings('label').css({ 'top': '1.1rem' })
        }
        else {
            $(name).siblings('span').html('')
            $(name).siblings('label').css({ 'top': '1.1rem' })
            $(this).css({ 'border': 'none' })
        }

    })
}


function number(no) {
    $(no).keydown(function (e) {
        if (e.which == 8) {
            $(no).siblings('span').html('')
        }
    })

    $(no).keypress(function (e) {
        var len = $(this).val().length
        if (len > 9) {
            $(no).siblings('span').html('Maximum 10 digits are allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(no).siblings('label').css({ 'top': '1.1rem' })
            e.preventDefault();
        }
        else if (!((e.which >= 48 && e.which <= 57))) {
            $(no).siblings('span').html('Only Digits are Allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(no).siblings('label').css({ 'top': '1.1rem' })
            $(this).css({ 'border': '2px solid red' })
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
            $(no).siblings('label').css({ 'top': '1.1rem' })

        }
    })
    $(no).focusout(function (e) {
        var len = $(this).val().length
        if (len < 10 && len > 0) {
            $(no).siblings('span').html('Minimum 10 digits are required').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(this).css({ 'border': '2px solid red' })

        }
        else if (len == 10) {
            $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')
        }
        else if (len == 0 && ($(this).siblings('span').html('') == 'Only Digits are Allowed')) {
            // $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')
        }



    });
}
    
    function change(){
        $('#searchbox').siblings('label').text($('#search').val());
        $('.srcbox').css({'display':'block'})
        $('#searchbox').removeAttr('disabled');

        
    }
function pincode(no) {
    $(no).keydown(function (e) {
        if (e.which == 8) {
            $(no).siblings('span').html('')
        }
    })
    $(no).keypress(function (e) {
        var len = $(this).val().length
        if (len > 5) {
            $(no).siblings('span').html('Maximum 6 digits are allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(no).siblings('label').css({ 'top': '1.1rem' })
            e.preventDefault();
        }
        else if (!((e.which >= 48 && e.which <= 57))) {
            $(no).siblings('span').html('Only Digits are Allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(no).siblings('label').css({ 'top': '1.1rem' })
            $(this).css({ 'border': '2px solid red' })
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
            $(no).siblings('label').css({ 'top': '1.1rem' })

        }
    })
    $(no).focusout(function (e) {
        var len = $(this).val().length
        if (len < 6 && len > 0) {
            $(no).siblings('span').html('Minimum 6 digits are required').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(this).css({ 'border': '2px solid red' })

        }
        else if (len == 6) {
            $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')
        }
        else if (len == 0 && ($(this).siblings('span').html('') == 'Only Digits are Allowed')) {
            // $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')
        }



    });
}
function account(no) {
    $(no).keydown(function (e) {
        if (e.which == 8) {
            $(no).siblings('span').html('')
        }
    })
    $(no).keypress(function (e) {
        var len = $(this).val().length
        if (len > 13) {
            $(no).siblings('span').html('Maximum 14 digits are allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(no).siblings('label').css({ 'top': '1.1rem' })
            e.preventDefault();
        }
        else if (!((e.which >= 48 && e.which <= 57))) {
            $(no).siblings('span').html('Only Digits are Allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(no).siblings('label').css({ 'top': '1.1rem' })
            // $(this).css({'border':'2px solid red'})
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
            $(no).siblings('label').css({ 'top': '1.1rem' })
            // $(this).css({'border':'2px solid green'})
        }
    })
    $(no).focusout(function (e) {
        var len = $(this).val().length
        if (len < 11 && len > 0) {
            $(no).siblings('span').html('Minimum 11 digits are required').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(this).css({ 'border': '2px solid red' })
        }
        if (len > 11 && len <= 14) {
            $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')
        }
        else if (len == 0 && ($(this).siblings('span').html('') == 'Only Digits are Allowed')) {
            // $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')
        }
    });

}
function amount(no) {
    $(no).keydown(function (e) {
        if (e.which == 8) {
            $(no).siblings('span').html('')
        }
    })
    $(no).keypress(function (e) {
        var len = $(this).val().length
        if (!((e.which >= 48 && e.which <= 57))) {
            $(no).siblings('span').html('Only Digits are Allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(no).siblings('label').css({ 'top': '1.1rem' })
            // $(this).css({'border':'2px solid red'})
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
            $(no).siblings('label').css({ 'top': '1.1rem' })
            // $(this).css({'border':'2px solid green'})
        }
    })
    $(no).focusout(function (e) {
        var len = $(this).val().length
        // alert(len)
        if ((len > 0)) {
            $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')

        }
        else if (len > 0 && ($(this).siblings('span').html('') == 'Only Digits are Allowed')) {
            // $(this).css({ 'border': '2px solid green' })
            $(this).siblings('span').html('')
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
            $(this).siblings('span').html('Charecter must be an alphabet').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(ifsc).siblings('label').css({ 'top': '1.1rem' })
            e.preventDefault();
        }
        else if (len == 4 && (!(e.which == 48))) {
            $(this).siblings('span').html('Charecter must be 0(zero)').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(ifsc).siblings('label').css({ 'top': '1.1rem' })
            e.preventDefault();
        }
        else if (len > 5 && (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || (e.which >= 48 && e.which <= 57)))) {
            $(this).siblings('span').html('Charecter must not be any special charecter').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(ifsc).siblings('label').css({ 'top': '1.1rem' })
            e.preventDefault();
        }
        else if (e.which == 48) {
            $(this).siblings('span').html('')
            $(ifsc).siblings('label').css({ 'top': '1.1rem' })
            // e.preventDefault();
        }

        else if (len > 10) {
            $(ifsc).siblings('span').html('Maximum 11 charecter are allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(ifsc).siblings('label').css({ 'top': '1.1rem' })
            e.preventDefault();
        }

        else if (e.which == 32) {

            e.preventDefault();
        }
        $(ifsc).focusout(function (e) {
            var len = $(this).val().length
            if (len < 11 && len > 0) {
                $(ifsc).siblings('span').html('Minimum 11 charecter are required').css({ 'color': 'red', 'font-size': '1.5rem' })
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
function address(name) {
    $(name).keydown(function (e) {
        if (e.which == 8) {
            $(name).siblings('span').html('')
        }
    });
    $(name).keypress(function (e) {
        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32 || e.which == 44 || e.which == 45 || (e.which >= 48 && e.which <= 57))) {
            // $(name).val('')
            $(name).siblings('span').html('No Special Charecter allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(this).css({ 'border': '2px solid red' })
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
        }
        $(name).focusout(function (e) {

            if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32)) {
                $(this).css({ 'border': '2px solid green' })
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
const uploadfile = (event) => {
    // Get the selected files.
    const imageFiles = event.target.files;

    // Check if at least one image is selected.
    if (imageFiles.length > 0) {
        // Get the first image in the selection.
        const selectedImage = imageFiles[0];

        // Check if the image size is within the desired range (20KB to 50KB).
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
    $('#date').val(y);
    $("#date").attr('max', y);
}
$(document).ready(function () {
    Tdate()
});



