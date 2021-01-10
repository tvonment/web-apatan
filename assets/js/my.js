function showmoreorless() {
    var short = document.getElementById("site-past-events-short");
    var long = document.getElementById("site-past-events-all");
    var btn = document.getElementById("site-past-events-btn");

    if (short.style.display !== "none") {
        short.style.display = "none";
        long.style.display = "inline";
        btn.innerHTML = "weniger zeigen";
    } else {
        short.style.display = "inline";
        long.style.display = "none";
        btn.innerHTML = "Alle zeigen";
    }
}

function addSocialIcons() {
    let links = document.getElementsByClassName("navbar")[0].getElementsByTagName("a");
    for (let a of links) {
        if (a.innerText.toLowerCase() === "facebook") {
            a.style.padding = "8px";
            a.innerHTML = '<img src="images/icons/social/png/021-facebook.png" alt="icon" style="width: 38px" />';
        } else if (a.innerText.toLowerCase() === "instagram") {
            a.style.padding = "8px";
            a.innerHTML = '<img src="images/icons/social/png/025-instagram.png" alt="icon" style="width: 38px" />';
        }
    }
}

function loadAppleMusicEmbed() {
    let element = document.getElementById("applemusic-wrapper");
    element.innerHTML =  '<iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="450" style="width:100%;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/ch/album/in-contrast-ep/1538748382"></iframe>';
}

function loadYoutubeVideos() {
    let elements = document.querySelectorAll('[data-youtubeid]');    ;
    for (let element of elements) {
        element.innerHTML = '<iframe height="450" style="width:100%;overflow:hidden;background:transparent;" src="https://www.youtube.com/embed/' + element.dataset.youtubeid + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
}

function loadBackgroundImages() {
    let elements = document.querySelectorAll('[data-imagesrc]');
    for (let element of elements) {
        element.style.backgroundImage = element.dataset.imagesrc;
    }
}

function loadImages() {
    let imagetags = document.querySelectorAll('[data-reloadsrc]');
    for (let img of imagetags) {
        img.src = img.dataset.reloadsrc;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    addSocialIcons();
    loadBackgroundImages();
    loadImages();
    loadAppleMusicEmbed();
    loadYoutubeVideos();
});

$('.navbar-toggler').on('click', function () {
    addSocialIcons();
})

// Smooth scroll
$('a').on('click', function (event) {
    if (event.currentTarget.hash.startsWith('#top')) {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 700);
    } else if (event.currentTarget.hash.startsWith('#')) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 700);
        event.preventDefault();
    }
});