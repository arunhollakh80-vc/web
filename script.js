$(function () {
  $('#year').text(new Date().getFullYear());

  function showPage() {
    var id = location.hash.replace('#', '');
    if (['home', 'resume', 'biodata', 'contact'].indexOf(id) === -1) id = 'home';
    $('.page').removeClass('current');
    $('#' + id).addClass('current');
    $('nav a').removeClass('active');
    $('nav a[href="#' + id + '"]').addClass('active');
    window.scrollTo(0, 0);
    $('.bar span').css('width', 0);
    setTimeout(function () {
      $('.bar span').each(function () { $(this).css('width', $(this).data('w') + '%'); });
    }, 50);
  }

  $(window).on('hashchange', showPage);
  showPage();

  $('#theme').click(function () {
    var dark = $('html').attr('data-theme') === 'dark';
    $('html').attr('data-theme', dark ? 'light' : 'dark');
    $(this).text(dark ? 'Dark' : 'Light');
  });

  $('.acc-btn').click(function () {
    $(this).next('.acc-panel').slideToggle(200);
    var s = $(this).find('span');
    s.text(s.text() === '+' ? '–' : '+');
  });

  $('#print').click(function () { window.print(); });

  $('#form').submit(function (e) {
    e.preventDefault();
    $('.err').text('');
    $('#status').text('');
    var ok = true;
    if ($('#name').val().trim().length < 2) { $('#e-name').text('Enter your name.'); ok = false; }
    if (!/^\S+@\S+\.\S+$/.test($('#email').val())) { $('#e-email').text('Enter a valid email.'); ok = false; }
    if ($('#msg').val().trim().length < 10) { $('#e-msg').text('Write at least 10 characters.'); ok = false; }
    if (ok) { $('#status').text('Message sent. Thank you!'); this.reset(); }
  });
});
