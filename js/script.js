
    $(document).ready(function(){
    $('.header-bottom-icon-menu').click(function(event) {
        $('.header-bottom-icon-menu,.header-nav-list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header-nav-menu-list').click(function(event){
        $('.header-bottom-icon-menu,.header-nav-list').removeClass('active');
        $('body').removeClass('lock')
    });
});
// $(document).ready(function(){
//     $('.header-bottom-icon-menu').on('click', function(e) {
//         e.preventDefault();
//         $('.header-nav-list').slideToggle();
//     })
// })

    function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
    $(document).ready(function(){
    $('.popular-bottom-row').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },  
            
        ]
    });
});



  