/*
 * Author: Igor J. Santos <igor@getidigital.com.br>
 */
'use strict';

/* Functions */
var toggle = function (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
};

/* Actions */
var openClose = false;

$el('.toggle-all').on('click', function () {
    openClose != openClose;

    $el('.panel .content').forEach(function (el) {
        el.style.display = openClose ? 'block' : 'none';
    });
});

$el('.panel .header').on('click', function () {
    toggle(this.nextElementSibling);
});
