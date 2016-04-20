angular.module('erdMat.services', [])

.factory('HomeSrv', function() {
    var slide = {
        myInterval : 3000,
        noWrapSlides : false,
        active : 0,
        slides : [
            {image: 'images/cim1.jpg'},
            {image: 'images/cim2.jpg'},
            {image: 'images/cim3.jpg'},
            {image: 'images/cim4.jpg'}
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
        {homePage:"http://agondolkodasorome.hu/"},
        {homePage:"http://www.zalamat.hu/"},
        {homePage:"http://erdosiskola.mik.uni-pannon.hu/"}
    ];
    var sponsors = [
        {homePage:"http://www.morpho.hu"}
    ];
    return {
        getPartners: function() {
            return partners;
        },
        getSponsors: function() {
            return sponsors;
        }
    };
})
