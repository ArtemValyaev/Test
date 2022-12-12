$(function(){
            var navbar = $(".navbar");
            var show = $(".navbar-collapse");

            $('.navbar-toggler').click(function () {
                                  
                navbar.css('background', 'rgba(0,0,0)');

            });


            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
  			
                if (scroll >= 975) {
                    navbar.css('position', 'fixed');
                    navbar.css('background', 'rgba(0,0,0)');
                }

            });
 });