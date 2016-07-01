jQuery(document).ready(function($){

  window.addEventListener('scroll', function(e) {
    if ( window.scrollY > 65 ) {
      $('.navbar').addClass('navbar-bg')
    } else {
      $('.navbar').removeClass('navbar-bg')
    }
  })
})
