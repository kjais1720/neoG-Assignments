const dialogOpenBtns = document.querySelectorAll(".tr-dialog-open-btn");
const dialogCloseBtns = document.querySelectorAll(".tr-dialog-close-btn");
const dialogOverlays = document.querySelectorAll(".tr-dialog-wrapper");
const dialogBox = document.querySelector(".tr-dialog-box");
const dialogbtns = document.querySelectorAll(".tr-dialog-buttons button")
dialogOpenBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const targetDialog = document.getElementById(btn.getAttribute('data-target'));
        targetDialog.classList.add('active');
    })
})

dialogOverlays.forEach(wrapper=>{
    wrapper.addEventListener('click', e => {
    wrapper.classList.remove('active');
    })
})

dialogBox.addEventListener('click',e =>{
    e.stopPropagation();
})

dialogbtns.forEach (btn => {
    btn.addEventListener('click',()=>{
        btn.parentNode.parentNode.parentNode.classList.remove('active');
    })
})

dialogCloseBtns.forEach(btn => {
    btn.addEventListener('click', ()=> btn.parentNode.parentNode.classList.remove('active'))
})

// dialogOverlay.addEventListener('click', e=>{
//     cl(e.target)
//     if(e.target !== dialogBox){
//         dialogOverlay.classList.remove('active');
//     }
// })