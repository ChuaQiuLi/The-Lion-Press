
$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#87CEFA', '#87CEFA', '#87CEFA'],
        navigation: true,
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3'],
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 0) {
                covidNum.play();
                hospNum.play();
                deathNum.play();
                text1.play();
                title.play();
                header1.play();
                header2.play();
                header3.play();

            }

            else if (destination.index == 1) {
                section2Text1.play();
                header4.play();
                section2Text2.play();
                section2Text3.play();




            }


        }




    });

    $('#centres').DataTable({
        pageLength: 5,
        responsive: true,



    });

});


var covidNum = anime({

    targets: ".covid",
    innerHTML: [0, 257510],
    easing: 'linear',
    round: 1,
    duartion: 4000

});

var hospNum = anime({

    targets: ".hospital",
    innerHTML: [0, 1365],
    easing: 'linear',
    round: 1,
    duartion: 4000

});

var deathNum = anime({

    targets: ".death",
    innerHTML: [0, 678],
    easing: 'linear',
    round: 1,
    duartion: 4000

});

var title = anime({
    targets: '.title',
    keyframes: [
        { translateY: -40 },

        { translateY: 20 },

    ],
    duration: 2000,
    easing: 'easeOutElastic(1, .8)',

});

var header1 = anime({
    targets: '.header1',
    translateY: [-1000, 0],
    opacity: [0, 1],
    easing: 'easeInBounce',
    duration: 2500

});

var header2 = anime({
    targets: '.header2',
    translateY: [-1000, 0],
    opacity: [0, 1],
    easing: 'easeInBounce',
    duration: 3500

});

var header3 = anime({
    targets: '.header3',
    translateY: [-1000, 0],
    opacity: [0, 1],
    easing: 'easeInBounce',
    duration: 5000

});

var header4 = anime({
    targets: '.header4',
    rotate: 360,
    easing: 'easeInOutCirc',
    duration: 2000,
    translateY: [-2000, 0],


});



var section2Text1 = anime({
    targets: '.section2Text1',
    translateY: [-2000, 0],
    opacity: [0, 1],
    easing: 'easeInBounce',
    duration: 4000

});

var section2Text2 = anime({
    targets: '.section2Text2',
    translateY: [-4000, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 6000

});

var section2Text3 = anime({
    targets: '.section2Text3',
    translateY: [-6000, 0],
    opacity: [0, 1],
    easing: 'easeOutInBack',
    duration: 8000

});

var section3 = anime({
    targets: '.section3',
    rotate: 3600,
    easing: 'easeInOutCirc',
    duration: 2000,
    translateY: [-2000, 0],


});

var section3Text2 = anime({
    targets: '.section3Text2',
    translateY: [-4000, 0],
    opacity: [0, 1],
    easing: 'easeInQuad',
    duration: 4000

});





const data = {
    labels: [
        '1st December 2021',
        '2nd December 2021',
        '3rd December 2021',
        '4th December 2021',
        '5th December 2021',
        '6th December 2021',
        '7th December 2021',
        '8th December 2021',
        '9th December 2021',
        '10th December 2021',
        '11th December 2021',
        '12th December 2021',
        '13th December 2021',
        '14th December 2021'

    ],


    datasets: [{
        label: 'Covid ',
        data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
        backgroundColor: ['rgb(0, 0, 139)', 'rgb(25, 25, 112)', 'rgb(15, 82, 186)', 'rgb(65, 105, 225)', 'rgb(0, 71, 171)', 'rgb(0, 0, 255)', 'rgb(0, 150, 255)', 'rgb(100, 149, 237)', 'rgb(167, 199, 231)', 'rgb(182, 208, 226)', 'rgb(135, 206, 235)', 'rgb(96, 130, 182)', 'rgb(111, 143, 175)', 'rgb(111, 143, 179)'


        ],

        hoverOffset: 4
    }]
};




const config = {
    type: 'pie',
    data: data,
};

const dailyCovid = new Chart(
    document.getElementById('dailyCovid'),
    config
);


tippy('.cck', {
    content: 'Choa Chu Kang Polyclinic',
});

tippy('.hp', {
    content: 'Hougang Polyclinic',
});

tippy('.cp', {
    content: 'Clementi Polyclinic',
});

tippy('.pr', {
    content: 'Pasir Ris Polyclinic',
});

tippy('.op', {
    content: 'Outram Polyclinic',
});

tippy('.op', {
    content: 'Outram Polyclinic',
});

tippy('.mp', {
    content: 'Marine Parade Polyclinic',
});

tippy('.mp', {
    content: 'Marine Parade Polyclinic',
});

tippy('.gp', {
    content: 'Geylang Polyclinic',
});

tippy('.gp', {
    content: 'Geylang Polyclinic',
});

tippy('.je', {
    content: 'Jurong Polyclinic',
});







