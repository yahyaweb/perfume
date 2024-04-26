document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function () {
        if (navbar.style.display === 'flex' || navbar.style.display === '') {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'flex';
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }
    });
});
$(document).ready(function() {
    // Close the navbar on page load
    $('.navbar').removeClass('open');
});
