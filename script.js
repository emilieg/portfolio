$(function(){
    $("#welcome-typer").typed({
        // strings: ["Welcome.", "My name is Emilie :) ", "I <3 to build things for the web.", "Have a look around."],
        stringsElement: $('#typed-strings'),
        typeSpeed: 100,
        // contentType: 'text'
        contentType: 'html'
    });
});    

$(function(){
    $('#wrapper').fullpage({
        //Navigation
        menu: '#menu',
        anchors:['welcome-section','about-section', 'skills-section', 'projects-section', 'contact-section'],
        navigation: false,
        slidesNavigation: true,
        css3: true,
        scrollingSpeed: 1000,
        responsiveWidth: 800,
        responsiveHeight: 300
    });
});






