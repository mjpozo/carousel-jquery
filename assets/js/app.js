
$(document).ready(function(){

	
	var cont = 0;
	showSlides();

	
	function showSlides(){
		var slides = $(".contenedor-img");

		console.log(slides.length)
		for (i=0 ; i<slides.length ; i++){
			console.log(i)
			if(cont > slides.length){
				cont=0;
			}
			$(".cont-" + i.toString()).removeClass("escondido").addClass("mostrar"); 
			cont++;
			}
			console.log("cont: " + cont)
			setTimeout(showSlides, 3000); 
		}
	
	


	/*$("#cont-img").each(function(index,element){
		console.log(typeof index)
		element.addClass("escondido");
		if (cont == index){
			element.removeClass("escondido");
		}
		cont++;
	});*/


});

/*var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}*/

/*var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 6000); // Change image every 2 seconds
}*/