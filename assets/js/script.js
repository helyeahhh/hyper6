

$('.slider-for').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-nav',
  centerPadding: "5%",
  centerMode: true,
  adaptiveHeight: true,
  nextArrow: '<button class="arrow-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>',
  prevArrow: '<button class="arrow-previous"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>',
  responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-for'
});

$('.testimonial-carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a></a>';
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })
  .on('setPosition', function (event, slick) {
	slick.$slides.css('height', slick.$slideTrack.height() + 'px');
});

// Accordion
if (document.readyState !== 'loading') {
    console.log("ready!");
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}

function ready() {
    var accordion = document.getElementsByTagName("dt");

    for (var i = 0; i<accordion.length; i++){
        accordion[i].addEventListener('click', function(){
            accordionClick(event);
        
        });
    }
}

var accordionClick = (eventHappened) => {
    var targetClicked =event.target;
    var classClicked = targetClicked.classList;
    while ((classClicked[0] !="description-title")){
        targetClicked = targetClicked.parentElement;
        classClicked = targetClicked.classList;
    }
    var description = targetClicked.nextElementSibling;
    var expander = targetClicked.children[0];
    if (description.style.maxHeight){
        description.style.maxHeight = null;
        expander.innerHTML = "&#43;"
        
    }
    else {
        var allDescriptions = document.getElementsByTagName("dd");
        for (var i = 0; i < allDescriptions.length; i++){
            if (allDescriptions[i].style.maxHeight){
                allDescriptions[i].style.maxHeight = null;
                allDescriptions[i].previousElementSibling.children[0].innerHTML = "&#43;"
            }
        }
        description.style.maxHeight = description.scrollHeight + "px";
        expander.innerHTML = "&#8722;";
        
    }
}

const highlightScroll = () => {
  const scrollPos =  window.pageYOffset + 100
  const links = document.querySelectorAll('nav li a')
  
  links.forEach((link, index) => {
      const sections = document.querySelectorAll('.section')
      const activeSection = sections[index]
      const compare = activeSection.offsetTop <= scrollPos && (activeSection.offsetTop + activeSection.offsetHeight > scrollPos)  
      
      if(scrollPos > 100) {
          compare ? link.classList.add('active') : link.classList.remove('active');
          document.getElementById("fixed-top").classList.add("add-style");
      } else{
        document.getElementById("fixed-top").classList.remove("add-style");
      }
      
  })
}
window.addEventListener('scroll', highlightScroll)