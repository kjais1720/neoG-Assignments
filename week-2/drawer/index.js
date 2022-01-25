
const toggleSidebar = document.querySelectorAll(".tr-hamburger");
const sidebar = document.querySelectorAll("aside.tr-drawer");

toggleSidebar.forEach(btn=>btn.addEventListener('click', e => {
        let toggleTarget = btn.getAttribute('data-target')
        document.getElementById(toggleTarget).classList.toggle('active')
        e.stopPropagation();
    })
)

sidebar.forEach(drawer=>drawer.addEventListener('click',e=>{
        e.stopPropagation();
    })
)

document.body.addEventListener('click',(e)=>{
    if(sidebar[2].className.includes('active') && sidebar[2].className.includes('tr-modal-drawer')){
        if(e.target !== sidebar[2]) sidebar[2].classList.remove('active')
    }
    e.stopPropagation();
})