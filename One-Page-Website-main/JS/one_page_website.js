//opens the modal
function openModal(){
    document.getElementById("myModal").style.display="block";
}

//close the modal
function closeModal(){
    document.getElementById("myModal").style.display="none";
}

var slideIndex=1;
showSlides(slideIndex);

//next previous controls
function plusSlides(n){
    showSlides(slideIndex+=n);
}

//thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex=n);
}
//showing our slides 
function showSlides(n){
    var i; //a variable i 
    var slides = document.getElementsByClassName("mySlides");//getting the "mySlides" from the html file
    var dots = document.getElementsByClassName("demo");//the "demo" class
    var captionText = document.getElementById("caption");// the caption container text
    if(n>slides.length){slideIndex=1}//always going to show a slide picture
    if (n<1){slideIndex=slides.length}
    for(i=0; i<slides.length; i++){//incrementing our slides by 1 
        slides[i].style.display="none";
    }
    for(i=0; i<dots.length; i++){
        dots[i].className=dots[i].className.replace("active","");

    }//the display will be in block form and active
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+=" active";
    captionText.innerHTML=dots[slideIndex-1].alt;
}