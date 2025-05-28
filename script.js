$(document).ready(function () {
  $('.title').on('click keypress', function (e) {
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      $('.container').addClass('open');
      $('.title').attr('aria-pressed', 'true');
      $('.endtext').attr('aria-hidden', 'false');
    }
  });

  $('.close').on('click keypress', function (e) {
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      $('.container').removeClass('open');
      $('.title').attr('aria-pressed', 'false');
      $('.endtext').attr('aria-hidden', 'true');
    }
  });
});
