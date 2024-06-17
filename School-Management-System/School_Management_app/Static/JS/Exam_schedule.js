$(document).ready(function () {
    let today = new Date();
    let day = today.getDate()
    let month = today.getMonth(true) + 1; 
    if (month < 10 ) {month = "0" + month}
    let year = today.getFullYear();
    $('#Exam_start_date').val(`${year}-${month}-${day}`);
    $('#Exam_end_date').val(`${year}-${month}-${day}`);


    $('#Duration').keypress(function (e) { 
        var charCode = e.which; 
        if (!(charCode >= 48 && charCode <= 57)){
        $(this).siblings('span').text('Only Digits are allowed')
            return false;  
        }
        else{
            $(this).siblings('span').text('')
        }   
    });
});