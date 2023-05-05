$(document).ready(function() {
  $('#status-onwork-selector').click(function() {
    $('#status-button').removeClass('onfield free').addClass('onwork');
  });

  $('#status-onfield-selector').click(function() {
    $('#status-button').removeClass('onwork free').addClass('onfield');
  });

  $('#status-free-selector').click(function() {
    $('#status-button').removeClass('onwork onfield').addClass('free');
  });
});
