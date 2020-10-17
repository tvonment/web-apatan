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

document.addEventListener("DOMContentLoaded", function(){
    addSocialIcons();
});