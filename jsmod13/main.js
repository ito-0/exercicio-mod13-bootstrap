document.addEventListener('DOMContentLoaded', function() {
    const modalExemplo = new bootstrap.Modal('#exemplo-modal')
    setTimeout(function() {
        modalExemplo.show()
    }, 2000)
})

var myCarousel = document.querySelector('.carousel')
var carousel = new bootstrap.Carousel(myCarousel)
