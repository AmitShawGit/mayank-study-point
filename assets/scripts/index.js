$(window).on('load',function(){
  $('.loading-bg').fadeOut('slow')
  $(".loader").fadeOut('slow');
});

window.addEventListener('scroll',function(){
  let navbar = document.querySelector("nav");
  if(window.scrollY >=30){
      navbar.classList.add('nav-dark');
  }
  else{
      navbar.classList.remove('nav-dark');
  }
});


$("#selectPDFResource").on("change",function(){
  console.log(this.value);
if(this.value === "msp"){
  $("#msp").show();
  $("#nmims").hide();
}
if(this.value === "nmims"){
  $("#msp").hide();
  $("#nmims").show();

}
if(this.value === "all"){
  $("#msp").show();
  $("#nmims").show();

}
})

/* Owl Carousel */
$('.testimonial').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
})