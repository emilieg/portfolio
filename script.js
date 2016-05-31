$(function(){
    $("#welcome").typed({
        // strings: ["Welcome.", "My name is Emilie.", "I like building things for the web <3.", "Feel free to look around."],
        stringsElement: $('#typed-strings'),
        typeSpeed: 50,
        contentType: 'html',
    });
//nav links to section
// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 850);
//     return false;
// });

    $('#wrapper').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['about', 'skills-section', 'projects', 'contact-section'],
        navigation: false,
        navigationPosition: 'right',
        // navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        //added fixedElements for menu
        // fixedElements: '#menu',

        //Scrolling
        css3: true,
        scrollingSpeed: 800,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,








    });








});









