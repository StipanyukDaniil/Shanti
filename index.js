
$(document).ready(function(){
        $("#nav").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });

    });
    $(document).ready(function(){
        $("#btn").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });

    });


    $(window).scroll(function(){
        if($(window).scrollTop() > $("#slide").height()){
            $(".header").css({'background' : '#3f014f', 'transform' : '10s'});

        };
    });

    $(window).scroll(function(){
        if($(window).scrollTop() < $("#slide").height()){
            $(".header").css("background","")

        };
    });

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides (slideIndex += n);
}

function currentSlide(n) {
    showSlides (slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("reviews");
    var dots = document.getElementsByClassName("dot");

    if (n>slides.length){
        slideIndex =1
    }
    if (n< 1){
        slideIndex=slides.length
    }
    for (i=0; i< slides.length ; i++){
        slides[i].style.display='none';
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className= dots[i].className.replace("activeS","")
    }
    slides[slideIndex-1].style.display='block';
    dots[slideIndex-1].className+= "  activeS";
}
// const carousel = document.querySelector(".module__slider"),
// arrowIcons = document.querySelector(".module__slider");

// let isDragStart = false, prevPageX, prevScrollLeft;

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragStart) return;
//     e.preventDefault();
//     let positionDiff = e.pageX - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
// }

// const dragStop = () => {
//     isDragStart = false;
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mouseup", dragStop);