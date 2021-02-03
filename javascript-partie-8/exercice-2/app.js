// const arrayA = document.querySelectorAll("li a");
//     console.log(arrayA);

// arrayA[0].onclick = function(e) {
//     e.preventDefault();
//     fable1.scrollIntoView({
//         behavior : "smooth"
//     });
// }

// arrayA[1].onclick = function(e) {
//     e.preventDefault();
//     fable2.scrollIntoView({
//         behavior : "smooth"
//     });
// }

// arrayA[2].onclick = function(e) {
//     e.preventDefault();
//     fable3.scrollIntoView({
//         behavior : "smooth"
//     });
// }

// arrayA[3].onclick = function(e) {
//     e.preventDefault();
//     fable4.scrollIntoView({
//         behavior : "smooth"
//     });
// }

// arrayA[4].onclick = function(e) {
//     e.preventDefault();
//     fable5.scrollIntoView({
//         behavior : "smooth"
//     });
// }

const arrayA = document.querySelectorAll("li a");
     console.log(arrayA);

arrayA.forEach(button => button.onclick = function(event) {
    event.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView ({
        behavior: "smooth"
    });

});