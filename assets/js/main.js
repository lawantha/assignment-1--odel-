//big slides
$(document).ready(function () {

    $(".owl-one").owlCarousel(
        {
            loop: true,
            autoplay: false,
            dots: false,
            lazyLoad: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            items: 1,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 0,
                },
                500: {
                    items: 1
                }
            }
        }
    );

});

//product slides
$(document).ready(function () {

    var $menuItems = $(".menu-item[data-group-name]");
    $menuItems.first().addClass("active");
    var $owl = $('.owl-two');

    $owl.owlCarousel(
        {
            loop: true,
            autoplay: false,
            dots: false,
            lazyLoad: true,
            items: 2,
            nav: true,
            navText: ["<i class='fas fa-angle-double-left'></i>", "<i class='fas fa-angle-double-right'></i>"],
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    autoplay: false
                },
                500: {
                    items: 2
                }
            }
        }
    );

    var isChanging = false;

    //for menu click
    $('.menu-item').click(function () {
        var target = $(this).attr('href').substring(1);

        if (!isChanging) {
            isChanging = true;
            var index = $(".car-item[data-group-name='" + target + "']").parent().index();
            console.log(target)
            console.log(index)

            $owl.trigger('to.owl.carousel', index);

            $('.menu-item').removeClass('active');
            $(this).addClass('active');

            setTimeout(function () {
                isChanging = false;
            }, 1000);
        }
    });

    //for slides changes
    $owl.on('translated.owl.carousel', function (event) {

        if (!isChanging) {
            var current = (event.item.index) - 1;
            var target = $(".owl-two .car-item").eq(current).data("group-name");

            console.log(current)
            console.log(target)

            $('.menu-item').removeClass('active');
            $('.menu-item[href="#' + target + '"]').addClass('active');
        }
    });

});

