$(function(){
    // $("#welcome").typed({
        // strings: ["Welcome.", "My name is Emilie.", "I like building things for the web <3.", "Feel free to look around."],
        // stringsElement: $('#typed-strings'),
        // typeSpeed: 100,
        // contentType: 'html', 
              // calback: function () {         
              //   $('#wrapper').fullpage({
              //       //Navigation
              //       menu: '#menu',
              //       anchors:['welcome-section','about-section', 'skills-section', 'projects-section', 'contact-section'],
              //       navigation: false,
              //       slidesNavigation: true,
              //       css3: true,
              //       scrollingSpeed: 1000,
              //       responsiveWidth: 800,
              //       responsiveHeight: 300
              //   });
              // } 
    // });


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







