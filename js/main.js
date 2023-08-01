$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

$("#jogos").click(function() {
    if ($("#jogos").attr('checked') == true) {
      $("#divBlock").attr('display', 'inline');
    } else {
      $("#divBloqueio").attr('display', 'none');
    }
  });