import * as $ from "jquery";

$( document ).ready(function() {
    const loginButton = $('#login-button');
    const logoutButton = $('#logout-button');

    const addInvalidFeedback = (formElement : JQuery, message : string) => {
        formElement.addClass('is-invalid');
        if (!$(`#${formElement.attr('id')}-invalid-feedback`).length) {
            $('<div/>', {
                "id": `${formElement.attr('id')}-invalid-feedback`,
                "class": 'invalid-feedback',
                "html": message
            }).insertAfter(formElement);
        }
    };

    const removeInvalidFeedback = (formElement : JQuery) => {
        formElement.removeClass('is-invalid');
        $(`#${formElement.attr('id')}-invalid-feedback`).remove();
    };

    loginButton.on('click', function (e) {
        e.preventDefault();
        const email : JQuery = $('#email');
        const password : JQuery = $('#password');
        let stop : boolean= false;
        if ((<string>email.val()).trim() === '') {
            addInvalidFeedback(email, "Please enter an email");
            stop = true;
        } else {
            removeInvalidFeedback(email)
        }

        if ((<string>password.val()).trim() === '') {
            addInvalidFeedback(password, "Please enter a password");
            stop = true;
        } else {
            removeInvalidFeedback(password);
        }
        if (stop) return;


        $('#login-panel').fadeOut('fast', ()=>{
            $('#welcome-panel').fadeIn('fast', () => {
                email.val('');
                password.val('');
            });
        });

    });

    logoutButton.on('click', () => {
        $('#welcome-panel').fadeOut('fast', ()=>{
            $('#login-panel').fadeIn('fast');
        });
    });

});
