let circle = document.querySelector(".circle");
let items = document.querySelectorAll(".item")
let h1s = document.querySelectorAll("h1")
window.addEventListener("mousemove", function (dets) {
    // Get the dimensions of the circle
    const circleWidth = circle.offsetWidth
    const circleHeight = circle.offsetHeight

    // Calculate the translation values to center the circle on the cursor
    const translateX = dets.clientX - circleWidth / 2
    const translateY = dets.clientY - circleHeight / 2

    circle.style.transform = `translate(${translateX}px, ${translateY}px)`
})
items.forEach(function (item) {

    item.addEventListener("mousemove", function () {
        circle.style.width = "10vw";
        circle.style.height = "10vw";
    });

    item.addEventListener("mouseleave", function () {
        circle.style.width = "2vw";
        circle.style.height = "2vw";
    });
});