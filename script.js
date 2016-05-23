$(function(){
    $("#welcome").typed({
        strings: ["Welcome.", "Willkommen.", "My name is Emilie.", "^800 I like building things for the web <3.", "Feel free to look around."],
        typeSpeed: 50,
        contentType: 'html',
    });

    $('html, body').animate({
    scrollTop: $(".skills").offset().top
}, 1000);
});

//Russian unicode hex char
// &#x41F, &#x440 "&#x438", "&#x435", " &#x442",

