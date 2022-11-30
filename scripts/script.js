$(document).ready(function(){
    $('.ban').slick({
        speed: 2000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/left_swipe.svg" alt="left-swipe"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/right_swipe.svg" alt="right-swipe"></button>',
        responsive: [{
            breakpoint: 576,
            settings: {
                speed: 1000
            }
        }
        ]
    });

    $('#datepicker').datepicker({
        showOn: "button",
        buttonImage: "images/icons/calendar.png",
        buttonImageOnly: true,
        buttonText: "Select date",
        // numberOfMonths: 2,
        minDate: 0, maxDate: "+1M +10D",
        showAnim: 'slideDown'
    });
    $.datepicker.setDefaults($.datepicker.regional["uk"]);
    $('input.date').datepicker({
        beforeShow: function(input, inst) {
            inst.dpDiv.css({
                marginTop: -input.offsetHeight + 'px',
                marginLeft: input.offsetWidth + 'px'
            });
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {

    // Tabs

    let tabs = document.querySelectorAll('.affiches__menu__item'),
        tabsContent = document.querySelectorAll('.affiches__content'),
        tabsParent = document.querySelector('.affiches__menu');

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains('affiches__menu__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


});