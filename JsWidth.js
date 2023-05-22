
let section3 = document.querySelector('.three');
let spans = document.querySelectorAll('.progress span');


//method one
// window.onscroll = function () {
//     if (window.scrollY >= section3.offsetTop - 130) {
//         spans.forEach((span) => increaseWidth(span))
//     }
// }

// function increaseWidth(span) {
//     let goal = span.dataset.width;
//     let count = setInterval(() => {
//         span.style.width = goal;
//         if (span.style.width == goal) {
//             clearInterval(count)
//         }
//     }, 2000 / goal)
// }


//short method 

window.onscroll = function () {
    if (window.scrollY >= section3.offsetTop - 130) {
        spans.forEach((span) => span.style.width = span.dataset.width)
    }
}