// Nav
document.addEventListener("DOMContentLoaded", ()=> { 
    // Form
    var contact_name_d = document.getElementById("contact-name-d");
    var contact_email_d = document.getElementById("contact-email-d");
    var contact_phone_d = document.getElementById("contact-phone-d");
    var contact_message_d = document.getElementById("contact-message-d");

    document.getElementById("contact-name").addEventListener("focus", (e)=> hidden(e, contact_name_d));
    document.getElementById("contact-name").addEventListener("blur", (e)=> show(e, contact_name_d));

    document.getElementById("contact-email").addEventListener("focus", (e)=> hidden(e, contact_email_d));
    document.getElementById("contact-email").addEventListener("blur", (e)=> show(e, contact_email_d));

    document.getElementById("contact-phone").addEventListener("focus", (e)=> hidden(e, contact_phone_d));
    document.getElementById("contact-phone").addEventListener("blur", (e)=> show(e, contact_phone_d));

    document.getElementById("contact-message").addEventListener("focus", (e)=> hidden(e, contact_message_d));
    document.getElementById("contact-message").addEventListener("blur", (e)=> show(e, contact_message_d));


    function hidden(_, element) {
        element.style.display = "none";
    }

    function show(event, element) {
        if(event.target.value != ""){
            element.style.display = "none";
            return 
        }
        element.style.display = "block";
    }

    if ((window).width() > 991){
        $('.navbar-light .d-menu').hover(()=> {
                $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
            }, function () {
                $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
            });
    }
});

// Form
// var contact_name_d = document.getElementById("contact-name-d").style.display = "none";

