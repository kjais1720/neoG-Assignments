
const hamburgers = document.querySelectorAll("main .tr-hamburger");
const sidebars = document.querySelectorAll("main aside.tr-drawer");

hamburgers.forEach(btn=>btn.addEventListener('click', e => {
        let toggleTarget = btn.getAttribute('data-target')
        document.getElementById(toggleTarget).classList.toggle('active')
        e.stopPropagation();
    })
)

sidebars.forEach(drawer=>drawer.addEventListener('click',e=>{
        e.stopPropagation();
    })
)

// document.body.addEventListener('click',(e)=>{
//     if(sidebars[2].className.includes('active') && sidebars[2].className.includes('tr-modal-drawer')){
//         if(e.target !== sidebars[2]) sidebars[2].classList.remove('active')
//     }
//     e.stopPropagation();
// })