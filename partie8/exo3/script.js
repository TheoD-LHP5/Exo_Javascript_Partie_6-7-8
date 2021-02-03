let firstParagraph = document.getElementById("firstParagraph");
let secondParagraph = document.getElementsById("secondParagraph");
let paragraphs = document.getElementsByTagName("p");
let paragraphArray = [...paragraphs];

window.onscroll = () => {
    paragraphs.forEach(element => {
        if (window.scrollY >= element.getBoundingClientRect().top){
            element.style.visibility = "visible";
        }
    });
}

// window.onscroll = function (){
//     if (window.scrollY >= firstParagraph.getBoundingClientRect().top){
//         firstParagraph.style.visibility = "visible";
//     }
// };