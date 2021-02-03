const arrayA = document.querySelectorAll("li a");

arrayA.forEach(button => button.onclick = function(event){
    event.preventDefault();
    
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
    });
});