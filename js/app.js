"use strict";

document.addEventListener('DOMContentLoaded', function () {

    // Side Navigation Animations
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const closebtn = document.getElementById('closebtn');

    openSidebarBtn.addEventListener('click', function () {
        sidebar.classList.add('active');
        overlay.style.display = 'block';
    });

    closebtn.addEventListener('click', function () {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function () {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
    });

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !openSidebarBtn.contains(event.target)) {
            sidebar.classList.remove('active');
            overlay.style.display = 'none';
        }
    });

    // Add item popup

    function showPopup() {
        var element = document.getElementById('popup');
        element.style.display = 'block';
    }
    
    function hidePopup() {
        var element = document.getElementById('popup');
        element.style.display = 'none';
    }
    
    var elements = document.getElementsByClassName("add-item-button");
    
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', showPopup, false);
    }

    const closeLink = document.getElementById('closeLink');
    closeLink.addEventListener('click', hidePopup, false)
});
