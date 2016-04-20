angular.module('erdMat.services', [])

.factory('HomeSrv', function() {
    var slide = {
        myInterval : 3000,
        noWrapSlides : false,
        active : 0,
        slides : [
            {image: 'http://lorempixel.com/602/200/', header:"Figyu!", text:'Ha hozzánk jársz jó lesz !'},
            {image: 'http://lorempixel.com/400/200/food', header:"Mert..", text:'Ha nem, hozzánk jársz, akkor szar lesz !'},
            {image: 'http://lorempixel.com/400/200/sports', header:"Ugye? ", text:'Én szóltam'}
        ]
    };
    var data = {
        phone: "+36/30­5171506",
        email: "erdmat@erdmat.hu",
        homePage: "www.erdmat.hu",
        coords: {latitude: 47.4113, longitude: 18.89064}
    };
    return {
        getSlide: function() {
            return slide;
        },
        getData: function() {
            return data;
        }
    };
})

.factory('PartnerSrv', function() {
    var partners =  [
        {name:"Alma Kft.", homePage:"https://www.google.hu/webhp?&ie=UTF-8#q=alma"},
        {name:"Körte BT.", homePage:"https://www.google.hu/webhp?&ie=UTF-8#q=körte"},
        {name:"Citrom RT", homePage:"https://www.google.hu/webhp?&ie=UTF-8#q=citrom"}
    ];
    return {
        getPartners: function() {
            return partners;
        }
    };
})
