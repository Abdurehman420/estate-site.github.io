const sidebar = document.querySelector('.sidebar');
const opens = document.querySelector('.sidebar__open');
const closes = document.querySelector('.sidebar__close');


opens.addEventListener('click' , () =>{
    sidebar.classList.add('open');
})
closes.addEventListener('click' , () =>{
    sidebar.classList.remove('open');
})






// window.addEventListener('scroll' , () =>{
//     var top = window.scrollY;

    
   
//     if(top > 400 && top < 1050){

//         opens.classList.add('show' );
//     }
//     else if (top > 1650 && top < 3100){
//         opens.classList.add('show');

//     }
//     // if (top > 3100){
//     //     opens.classList.add('blah');

//     // }
    
//     else{
//         opens.classList.remove('show');
//     }
// })


