$(document).ready(function() {
    $('.work').each(function() {
        var overlayHeading = $(this).find('.overlay-heading');
        var overlayDescription = $(this).find('.overlay-description');
        var originalHeadingSize = parseFloat(overlayHeading.css('font-size'));
        var originalDescriptionSize = parseFloat(overlayDescription.css('font-size'));

        // Check if heading text overflows
        if (overlayHeading[0].scrollHeight > overlayHeading.innerHeight()) {
            overlayHeading.css('font-size', originalHeadingSize * 0.8 + 'px');
        }

        // Check if description text overflows
        if (overlayDescription[0].scrollHeight > overlayDescription.innerHeight()) {
            overlayDescription.css('font-size', originalDescriptionSize * 0.8 + 'px');
        }
    });
});

