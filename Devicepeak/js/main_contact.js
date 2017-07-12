jQuery(document).ready(function() {

    var validName = function (name) {
        if (!name) {
            return false;
        }
        var nameNum = parseInt(name, 10);
        if (nameNum) {
            return false;
        }
        var namePices = name.split(' ');
        if (namePices.length < 2) {
            return false;
        }
        if (name.length < 2) {
            return false;
        }
        return true;
    };

    var validMail = function (mail) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(mail);
    };

    $('#inputPhone').keyup(function () {
        this.value = this.value.replace(/[^0-9\.]/g,'');
    });


    var showAlert = function (alertAlarm, txtArr, type) {
        var errorMsg = txtArr.join('<br />');
        alertAlarm.html(errorMsg);
        alertAlarm.addClass(type);
        alertAlarm.removeClass('hidden');
    };

    var hideAlert = function (alertAlarm) {
        alertAlarm.removeClass('alert-danger');
        alertAlarm.addClass('hidden');
    };

    $('#contact-us').submit(function (e) {
        e.preventDefault();

        var alertAlarm = $(this).find('.alert');
        var errors = [];

        var inputName = $('#inputName').val();
        if ( !validName(inputName)){
            errors.push('Invalid full name!');
        };

        var inputMail = $('#inputMail').val();
        if ( !validMail(inputMail)){
            errors.push('Invalid Email!');
        };

        if (errors.length){
            showAlert(alertAlarm, errors, 'alert-danger');
        }else{
            hideAlert(alertAlarm);
            showAlert(alertAlarm, ['Well done!'], 'alert-success');
        }
    });

    var commentArea         = $('#contact-us textarea');
    var comAreaMaxSymbols   = commentArea.attr('maxlength');
    var symbolCount         = $('#symbol-left');

    commentArea.keyup(function () {
        var symbolsNow  = $(this).val();
        var symbolsLeft = comAreaMaxSymbols - symbolsNow.length;
        symbolCount.text('Symbols left:' + ' ' + symbolsLeft);
    });
});