//functions to open and close contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//function to display first image in slideshow upon load
var slideIndex = 1;
showSlides(slideIndex);

//function to change slide when arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//function changes slide when dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //taking all elements with class name "mySlides" and storing them variable array "slides"
    var slides = document.getElementsByClassName("mySlides");
    //taking all elements with class name "dots" and storing them variable array "dots"
    var dots = document.getElementsByClassName("dot");
    //if n is greater than lendth of array "slides", slideIndex is set to 1
    if (n > slides.length) { slideIndex = 1 };
    //if n is less than 1, slideIndez is set to length of array "slides"
    if (n < 1) { slideIndex = slides.length };
    //for loop taking array "slides" and setting display to none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //for loop taking each item in array "dots" and removes "actove" which removes active styling
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //displaying image in slideshow
    slides[slideIndex - 1].style.display = "block";
    //adding active styling to dot associated with image
    dots[slideIndex - 1].className += " active";
}

//event listener for any clicks for closing contact form
document.addEventListener("click", function (event) {
    //if a click happens on the cancel button or anywhere not in contact form and the click does not happen on any element with the contact class, 
    //then call closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") &&
        !event.target.closest(".contact")) {
        closeForm()
    }
}, false)

