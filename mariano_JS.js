document.getElementById("popupButton").addEventListener("click", function () {
    var popupText = document.getElementById("popupText");
    popupText.style.display = (popupText.style.display === "block") ? "none" : "block";
});