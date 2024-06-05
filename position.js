// window.addEventListener('scroll',function(){
//     let sidebar=document.getElementById('scroll_1')
//     if(window.pageXOffset>=10){
//         sidebar.className.add('sticky')
//     }
//     else{
//         sidebar.classList.remove('sticky')
//     }
// })


window.addEventListener("scroll",function(){
    let navbar=document.getElementById("scroll_1");
    if(window.pageYOffset>=950){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky")
    }
});
