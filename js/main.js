$(function(){

//3 trunks of code in here!!


//Smoothing scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Flickity slider

$('.carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

//Form Submit 

 $(".update button").on('click',function(){
    
    var inputValue=$('input').val(); 
    
    if (inputValue==""){
      alert("Please submit a valid email address");
    }
     else {
      alert("Thanks for subscribing!")
    }
  });  

});