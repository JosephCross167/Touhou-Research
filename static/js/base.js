let option = document.getElementsByTagName("a");
for (let i = 0; i < option.length; i++) 
{
    option[i].addEventListener("mouseover", function() {
        option[i].style.textDecoration = "underline";
    });
    option[i].addEventListener("mouseout", function() {
        option[i].style.textDecoration = "none";
    });
}   