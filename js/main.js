// var acc =document.getElementsByClassName("accordion__btn");
// var i;

// for(i=0;i<acc.length;i++){
//     acc[i].onclick = function(){
//         document.querySelector('.accordion__arrow').classList.toggle("active");
//         var content = this.nextElementSibling;
//         if(content.style.maxHeight){
//             content.style.maxHeight = null;
//         }else{
//             content.style.maxHeight = content.scrollHeight + 'px';
//         }
//     }
// }


document.querySelectorAll('.accordion__btn').forEach((el)=>{
    el.addEventListener('click', ()=>{
        
        const parent = el.parentNode;
        if(parent.classList.contains('active')){
            parent.classList.remove('active')
        }else{
            document.querySelectorAll('.accordion').forEach((child)=> child.classList.remove('active'))
            parent.classList.add('active')
        }

        let content = el.nextElementSibling;
        if(content.style.maxHeight){
            document.querySelectorAll('.accordion__content').forEach((el)=> el.style.maxHeight = null);
        }else{
            document.querySelectorAll('.accordion__content').forEach((el)=> el.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + 'px';
        }

    })
})
// файн верху


(function(){
    const burgerItem = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    const closeItem = document.querySelector('.header__close');
    
    burgerItem.addEventListener('click', ()=>{
        headerMenu.classList.add('header__menu--active');
    })
    closeItem.addEventListener('click',()=>{
        headerMenu.classList.remove('header__menu--active');
    })
}())


// const headerSlider=document.querySelector('.header__slider');
// var left = 0;
// var timer = 0;

// function autoSlider(){
//     timer = setTimeout(function(){
//         left-=92;
//     if(left<-512){
//         left=0;
//         clearTimeout(timer);
//     }
//     headerSlider.style.left=left+'px';
//     autoSlider();
//     },400);
// }

// autoSlider();