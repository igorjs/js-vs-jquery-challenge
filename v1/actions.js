/*
 * Author: Igor J. Santos <igor@getidigital.com.br>
 */
'use strict';

/* Actions */
$el('.toggle-all').on('click', function () {
    var panels = $el('.panel');
    if (panels.hasClass('open')) {
        panels.removeClass('open');
    } else {
        panels.addClass('open');
    }
});

$el('.panel .header').on('click', function () {
    this.parentNode.toggleClass('open');
});
