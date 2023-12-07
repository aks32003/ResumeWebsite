$(document).ready(function() {

    var $body = $('body'),
        $header = $('#header'),
        $menuButton = $('#menuToggle');

    // Header panel.
    $header.panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'left',
        target: $body,
        visibleClass: 'header-visible'
    });

    // Initially close the header panel.
    $header.addClass('header-closed');

    // Toggle the header panel when the button is clicked.
    $menuButton.click(function() {
        $header.toggleClass('header-visible').toggleClass('header-closed');
    });

});