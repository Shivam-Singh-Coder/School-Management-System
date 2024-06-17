$(document).ready(function () {
    $('input ,textarea').focusin(function (e) {
        $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');
        $(this).css('border', '1px solid skyblue');
        $(this).css('box-shadow', '2px 2px 4px skyblue');
    });


    $('input,textarea').focusout(function (e) {
        if ($(this).val() == '') {
            $(this).siblings('.l_move').css('top', '45%');
            $(this).siblings('.l_move').css('left', '5rem');
            // $(this).siblings('label').css('color', 'red');
            $(this).css('border', 'black');
            $(this).css('box-shadow', '0px 0px 2px 2px rgba(0, 0, 0,0.1)');
        }
    });
});

function call(i, a) {
    // alert('ok')
    var t = $(a).val()
    if (i == 1 && t == '') {
        $(a).val('this is mandatory*')
        $(a).siblings('label').css('top', '2.1rem');
        $(a).siblings('label').css('left', '4rem');
        // $(a).siblings('label').css({ 'color': 'red' });
        $(a).siblings('i').css({ 'color': 'red' });
        $(a).css({ 'color': 'red', 'border': '2px solid red' });



        // $('.sname').siblings('label').css('display', 'block')

    }
    else if (i == 2 && t == 'this is mandatory*') {
        $(a).val('')
        // $(a).siblings('label').css({ 'top': '45%' })
        $(a).css({ 'color': 'black' });
        $(a).siblings('label').css({ 'color': 'black' });
        $(a).siblings('i').css({ 'color': 'black' });


    }

}

function previous(name) {
    $(name).keydown(function (e) {
        if (e.which == 8) {
            $(name).siblings('span').html('')
        }
    });
    $(name).focusout(function (e) {

        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32)) {
            
            $(this).siblings('span').html('')

        }
    });
    $(name).keypress(function (e) {
        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32)) {
            // $(name).val('')
            $(name).siblings('span').html('Only Alphabets are Allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');
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
            $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');
        }
        else {
            $(name).siblings('span').html('')
            $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');
            $(this).css({ 'border': 'none' })
        }

    })
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
            $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');
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
            $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');
        }
        else {
            $(name).siblings('span').html('')
            $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');
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
            $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');
            e.preventDefault();
        }
        else if (!((e.which >= 48 && e.which <= 57))) {
            $(no).siblings('span').html('Only Digits are Allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');
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
            $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');

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
            $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');
            e.preventDefault();
        }
        else if (!((e.which >= 48 && e.which <= 57))) {
            $(no).siblings('span').html('Only Digits are Allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
            $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');
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
            $(this).siblings('.l_move').css('top', '2.1rem');
        $(this).siblings('.l_move').css('left', '4rem');

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


function address(name) {
    $(name).keydown(function (e) {
        if (e.which == 8) {
            $(name).siblings('span').html('')
        }
    });
    $(name).keypress(function (e) {
        if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32 || e.which == 44 || e.which == 45 || (e.which >= 48 && e.which <= 57))) {
            // $(name).val('')
            $(name).siblings('span').html('Only Alphabets are Allowed').css({ 'color': 'red', 'font-size': '1.5rem' })
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
        }
    })
}

$(function () {
        $('.pview').click(function () {
    
            $(this).siblings('.pop-op').css({ 'scale': '1' })
    
        })
        $('.cut').click(function () {
            $('.pop-op').css({ 'scale': '0' })
        })
    });

 const previewImage = (event) => {
     // Get the selected files.
     const imageFiles = event.target.files;
     // Count the number of files selected.
     const imageFilesLength = imageFiles.length;
     // If at least one image is selected, then proceed to display the preview.
     if (imageFilesLength > 0) {
         // Get the image path.
         const imageSrc = URL.createObjectURL(imageFiles[0]);
     // Select the image preview element using its ID.
     const $imagePreviewElement = $(event.target).siblings('div').children('img');
     // Assign the path to the image preview element.
     $imagePreviewElement.attr('src', imageSrc);
     // Show the element by changing the display value to "block".
     $imagePreviewElement.show();
     $(event.target).siblings('div').css({'display':'block','height':'100%'});
     $(event.target).siblings('.auto-img').css('display', 'none');
     const $labelElement = $(event.target).siblings('.l-sign');
     // Change the text of the label
     $labelElement.css({ 'background-color': 'rgba(255, 255, 255, 0)','font-family':'bold','height':'100%' ,'padding-top':'5rem'}).text("");
     const $labelElement1 = $(event.target).siblings('.l_upload');
     // Change the text of the label
     $labelElement1.css({ 'background-color': 'rgba(255, 255, 255, 0)','font-family':'bold','height':'100%','padding-top':'85%'}).text("");
     }
     const $signature = $(event.target).parent('.signature');
     // Change the height of the div
       $signature.css({'height':'6rem'});
     const $s_signature = $(event.target).parent('s_signature');
     // Change the height of the div
     $s_signature.css({'height':'8rem'});
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
    $('#date,#cdate').val(y);
    $('#date,#cdate').attr('max', y);
}
$(document).ready(function () {
    Tdate()
});
function orgname(name) {
        $(name).keydown(function (e) {
            if (e.which == 8) {
                $(name).siblings('span').html('')
            }
            $(name).focusout(function (e) {
    
                $(name).siblings('span').html('')
    
            });
        });
        $(name).keypress(function (e) {
            if (!((e.which >= 65 && e.which <= 90) || (e.which >= 48 && e.which <= 57) || (e.which >= 97 && e.which <= 122) || e.which == 32 || e.which == 44 || e.which == 45 || e.which == 46)) {
                // $(name).val('')
                // $(name).siblings('span').html('')
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
            else if (e.which == 46) {
                if (e.target.selectionStart === 0)
                    return false;
                else if ($(this).val().slice(-1) === '.')
                    e.preventDefault();
            }
            else if (e.which == 8) {
                $(name).siblings('span').html('')
            }
            else {
                $(name).siblings('span').html('')
            }
        })
    }
// $(document).ready(function () {
//     $('input ,textarea').focusin(function (e) {
//         $(this).siblings('.l_move').css('top', '2.1rem');
//         $(this).siblings('.l_move').css('left', '4rem');
//         $(this).css('border', '1px solid skyblue');
//         $(this).css('box-shadow', '2px 2px 4px skyblue');
//     });


//     $('input,textarea').focusout(function (e) {
//         if ($(this).val() == '') {
//             $(this).siblings('.l_move').css('top', '45%');
//             $(this).siblings('.l_move').css('left', '5rem');
//             // $(this).siblings('label').css('color', 'red');
//             $(this).css('border', 'black');
//             $(this).css('box-shadow', '0px 0px 2px 2px rgba(0, 0, 0,0.1)');
//         }
//     });
// });

// function call(i, a) {
//     // alert('ok')
//     var t = $(a).val()
//     if (i == 1 && t == '') {
//         $(a).val('this is mandatory*')
//         $(a).siblings('label').css('top', '2.1rem');
//         $(a).siblings('label').css('left', '4rem');
//         // $(a).siblings('label').css({ 'color': 'red' });
//         $(a).siblings('i').css({ 'color': 'red' });
//         $(a).css({ 'color': 'red', 'border': '2px solid red' });



//         // $('.sname').siblings('label').css('display', 'block')

//     }
//     else if (i == 2 && t == 'this is mandatory*') {
//         $(a).val('')
//         // $(a).siblings('label').css({ 'top': '45%' })
//         $(a).css({ 'color': 'black' });
//         $(a).siblings('label').css({ 'color': 'black' });
//         $(a).siblings('i').css({ 'color': 'black' });


//     }

// }

// function alphabets(name) {
//     $(name).keydown(function (e) {
//         if (e.which == 8) {
//             $(name).siblings('span').html('')
//         }
//     });
//     $(name).focusout(function (e) {

//         $(name).siblings('span').html('')

//     });
//     $(name).keypress(function (e) {
//         if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32)) {
//             // $(name).val('')
//             $(name).siblings('span').html('Only Alphabets are Allowed')
            
//             return false;
            
//         }
//         else if (e.which == 32) {
//             if (e.target.selectionStart === 0)
//                 return false;
//             else if ($(this).val().slice(-1) === ' ')
//                 e.preventDefault();
//         }
//         else if (e.which == 8) {
//             $(name).siblings('span').html('')
//         }
//         else {
//             $(name).siblings('span').html('')
//         }
//     })
// }


// function number(no) {
//     $(no).keydown(function (e) {
//         if (e.which == 8) {
//             $(no).siblings('span').html('')
//         }
//     });
//     $(no).keypress(function (e) {
//         var len = $(this).val().length
//         if (len > 9) {
//             $(no).siblings('span').html('Maximum 10 digits are allowed')
//             e.preventDefault();
//         }
//         else if (!((e.which >= 48 && e.which <= 57))) {
//             $(no).siblings('span').html('Only Digits are Allowed')
//             e.preventDefault();
//         }
//         else if (e.which == 32) {
//             if (e.target.selectionStart === 0)
//                 return false;
//             else if ($(this).val().slice(-1) === ' ')
//                 e.preventDefault();
//         }
//         else if (e.which == 48) {
//             if (e.target.selectionStart === 0)
//                 return false;
//             else if ($(this).val().slice(-1) === ' ')
//                 e.preventDefault();
//         }
//         else {
//             $(no).siblings('span').html('')
//         }

//     })
//     $(no).focusout(function (e) {
//         let len = $(this).val().length
//         if (len < 10 &&  len > 0) {
//             $(no).siblings('span').html('Minimum 10 digits are required')
//         }
//     });
// }
// function pincode(no) {
//     $(no).keydown(function (e) {
//         if (e.which == 8) {
//             $(no).siblings('span').html('')
//         }
//         $(no).focusout(function (e) {

//             $(no).siblings('span').html('')

//         });
//     });
//     $(no).keypress(function (e) {
//         var len = $(this).val().length
//         if (len > 5) {
//             $(no).siblings('span').html('Maximum 6 digits are allowed')
//             e.preventDefault();
//         }
//         else if (!((e.which >= 48 && e.which <= 57))) {
//             $(no).siblings('span').html('Only Digits are Allowed')
//             e.preventDefault();
//         }
//         else if (e.which == 48) {
//             if (e.target.selectionStart === 0)
//                 return false;
//         }
//         else {
//             $(no).siblings('span').html('')
//         }
//     })
//     $(no).focusout(function (e) {
//         var len = $(this).val().length
//         if (len < 6) {
//             $(no).siblings('span').html('Minimum 6 digits are required')
//         }
//     });
// }

// 
// function address(name) {
//     $(name).keydown(function (e) {
//         if (e.which == 8) {
//             $(name).siblings('span').html('')
//         }
//     });
//     $(name).keypress(function (e) {
//         if (!((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122) || e.which == 32 || e.which == 44 || e.which == 45 || (e.which >= 48 && e.which <= 57))) {
//             // $(name).val('')
//             $(name).siblings('span').html('').css({ 'color': 'red', 'font-size': '1.5rem' })
//             return false;
//         }
//         else if (e.which == 32) {
//             if (e.target.selectionStart === 0)
//                 return false;
//             else if ($(this).val().slice(-1) === ' ')
//                 e.preventDefault();
//         }
//         else if (e.which == 44) {
//             if (e.target.selectionStart === 0)
//                 return false;
//             else if ($(this).val().slice(-1) === ',')
//                 e.preventDefault();
//         }
//         else if (e.which == 45) {
//             if (e.target.selectionStart === 0)
//                 return false;
//             else if ($(this).val().slice(-1) === '-')
//                 e.preventDefault();
//         }
//         else if (e.which == 8) {
//             $(name).siblings('span').html('')
//         }
//         else {
//             $(name).siblings('span').html('')
//         }
//     })
// }
// let y;
// function Tdate() {
//     let dt = new Date();
//     let dd = dt.getDate();
//     let mm = dt.getMonth() + 1;
//     let yy = dt.getFullYear();
//     if (dd < 10) dd = "0" + dd;
//     if (mm < 10) mm = "0" + mm;
//     let y = yy + "-" + mm + "-" + dd
//     // let y =dd+"-"+mm+"-"+yy
//     $('#date').val(y);
//     $("#date").attr('max', y);
// }
// $(document).ready(function () {
//     Tdate()
// });

// const previewImage = (event) => {
//     // Get the selected files.
//     const imageFiles = event.target.files;

//     // Check if at least one image is selected.
//     if (imageFiles.length > 0) {
//         // Get the first image in the selection.
//         const selectedImage = imageFiles[0];

//         // Check if the image size is within the desired range (20KB to 50KB).
//         const minFileSize = 30 * 1024; // 20KB in bytes
//         const maxFileSize = 100 * 1024; // 50KB in bytes

//         if (selectedImage.size >= minFileSize && selectedImage.size <= maxFileSize) {
//             // Image size is within the acceptable range.

//             // Continue with the rest of the code to display the preview.
//             const imageSrc = URL.createObjectURL(selectedImage);
//             const $imagePreviewElement = $(event.target).siblings('div').children('img');
//             $imagePreviewElement.attr('src', imageSrc);
//             $imagePreviewElement.show();
//             $(event.target).siblings('div').css({ 'display': 'block', 'height': '100%' });
//             $(event.target).siblings('.auto-img').css('display', 'none');
//             const $labelElement = $(event.target).siblings('.l-sign');
//             $labelElement.css({ 'background-color': 'rgba(255, 255, 255, 0)', 'font-family': 'bold', 'height': '100%', 'padding-top': '5rem' }).text("");
//             const $labelElement1 = $(event.target).siblings('.l_upload');
//             $labelElement1.css({ 'background-color': 'rgba(255, 255, 255, 0)', 'font-family': 'bold', 'height': '100%', 'padding-top': '85%' }).text("");
//             const $signature = $(event.target).parent('.signature');
//             $signature.css({ 'height': '8rem' });
//         } else {
//             // Display an error message or handle the case where the image size is outside the acceptable range.
//             alert('Please select an image between 30KB and 100KB in size.');
//             // Optionally, you can reset the file input to clear the selection.
//             $(event.target).val('');
//         }
//     }
// };
// 

// const uploadfile = (event) => {
//     // Get the selected files.
//     const imageFiles = event.target.files;

//     // Check if at least one image is selected.
//     if (imageFiles.length > 0) {
//         // Get the first image in the selection.
//         const selectedImage = imageFiles[0];

//         // Check if the image size is within the desired range (20KB to 50KB).
//         const minFileSize = 20 * 1024; // 20KB in bytes
//         const maxFileSize = 300 * 1024; // 50KB in bytes

//         if (selectedImage.size >= minFileSize && selectedImage.size <= maxFileSize) {

//             const imageSrc = URL.createObjectURL(selectedImage);
//             const $imagePreviewElement = $(event.target).siblings('div').children('div').children('img');

//             $imagePreviewElement.attr('src', imageSrc);
//             $imagePreviewElement.show();
//             $(event.target).siblings('.pview').css({ 'display': 'block' });
//             $(event.target).siblings('label').html('Document Uploaded');

//         } else {

//             alert('Please select an image between 20KB and 50KB in size.');

//             $(event.target).val('');
//         }
//     }
// };
