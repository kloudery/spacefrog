(function() {
  'use strict';

  $('.day-of-year').text(moment().format('DDD'));
  $('.day-of-month').text(moment().format('D'));
  $('.week-of-year').text(moment().format('w'));
  $('.day-of-week').text(moment().format('d'));
  $('.week-year').text(moment().format('gg'));
  $('.hour-of-day').text(moment().format('H'));
  $(function() {
    // Pull price & dispay modal on wordpress click
    $("#upgrade").click(function() {
      $('#wordpressmodal').modal();
    });
  });
}());
