document.addEventListener("DOMContentLoaded", function () {

    console.log("Sandor Tescon Aqua website loaded successfully.");

});

// ========================================
// SANDOR TESCON AQUA - WEBSITE SCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Sandor Tescon Aqua website loaded successfully.");

});


// ========================================
// JQUERY TEST
// ========================================

$(document).ready(function () {

    console.log("jQuery loaded successfully.");

});

// ========================================
// SMOOTH SCROLLING
// ========================================

$('a[href^="#"]').on('click', function (event) {

    const target = $(this).attr('href');

    if (target && target.length > 1 && $(target).length) {

        event.preventDefault();

        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 600);

    }

});