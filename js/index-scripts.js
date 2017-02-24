/*(function() {
    var pagebytes = $('html').html().length;
    var kbytes = pagebytes / 1024;
    $('#loader-percent').innerHTML = kbytes;
})();*/

$(document).ready(function() {
  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 100);
});