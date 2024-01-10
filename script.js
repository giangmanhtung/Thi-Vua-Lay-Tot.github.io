// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("intro-overlay").style.opacity = 0;

//     setTimeout(function () {
//         document.getElementById("intro-overlay").style.opacity = 1;
//     }, 500);
// });

// function closeIntro() {
//     // Close the dark overlay and the introductory overlay
//     document.getElementById("dark-overlay").style.opacity = 0;
//     document.getElementById("intro-overlay").style.opacity = 0;

//     // Hide the overlays after the transition
//     setTimeout(function () {
//         document.getElementById("dark-overlay").style.display = "none";
//         document.getElementById("intro-overlay").style.display = "none";
//     }, 500);
// }
document.addEventListener("DOMContentLoaded", function () { 
    setTimeout(function () {
        document.getElementById("dark-overlay").style.display = "block";
        document.getElementById("intro-overlay").style.display = "flex";
        document.getElementById("dark-overlay").style.opacity = 1;
        document.getElementById("intro-overlay").style.opacity = 1;
    }, 1000);
});

function closeIntro() {
    document.getElementById("dark-overlay").style.opacity = 0;
    document.getElementById("intro-overlay").style.opacity = 0;

    setTimeout(function () {
        document.getElementById("dark-overlay").style.display = "none";
        document.getElementById("intro-overlay").style.display = "none";
    }, 500);
}