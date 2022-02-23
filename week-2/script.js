const mainSidebar = document.querySelector("aside.tr-drawer-main");
// const hamburgers = document.querySelectorAll(".tr-hamburger");
   

// hamburgers.forEach(btn=>btn.addEventListener('click', e => {
//     let toggleTarget = btn.getAttribute('data-target')
//     document.getElementById(toggleTarget).classList.toggle('active')
//     e.stopPropagation();
// })
// )

mainSidebar.addEventListener('click',e=>{
    e.stopPropagation();
});

document.body.addEventListener('click',(e)=>{
    console.log(e.target);
    if(mainSidebar.className.includes('active') && mainSidebar.className.includes('tr-modal-drawer')){
        if(e.target !== mainSidebar) mainSidebar.classList.remove('active')
    }
    e.stopPropagation();
})


const toggleComponentBtns = document.querySelectorAll('.togglePreviewComponent');
const tabToggleBtns = document.querySelectorAll('.main-demo-content .tabs-btn-list .tab-btn');
let currentActiveBlock = 1;

let hideCurrentActiveBlocks = blockNumber => {
    document.getElementById(`preview-block-${blockNumber}`).classList.add('hide');
    document.getElementById(`code-block-${blockNumber}`).classList.add('hide');
}

let showBlocks = blockNumber =>{
    document.getElementById(`preview-block-${blockNumber}`).classList.remove('hide');
    document.getElementById(`code-block-${blockNumber}`).classList.remove('hide');
}

toggleComponentBtns.forEach(btn => {
    btn.addEventListener('click',()=>{
        let targetBlockNumber = btn.getAttribute('data-target');
        console.log(targetBlockNumber, currentActiveBlock)
        hideCurrentActiveBlocks(currentActiveBlock);
        showBlocks(targetBlockNumber);
        currentActiveBlock = targetBlockNumber;
    })
})

let currentTabId = 'preview-blocks' 
tabToggleBtns.forEach(btn => {
    btn.addEventListener('click',()=>{
        const targetTab = btn.getAttribute("data-target");
        document.getElementById(currentTabId).classList.add('hide');
        document.getElementById(targetTab).classList.remove('hide')
        currentTabId = targetTab;
    })
})

const copyButton = document.querySelector('.copy-btn');
const codBlocks = document.querySelectorAll('.code-block');
copyButton.addEventListener('click',()=>{
    codBlocks.forEach(block => {
        if(!block.className.includes('hide')){
            // navigator.clipboard.writeText(block.childNodes[0].innerHTML)
            var range = document.createRange();
            range.selectNode(block);
            window.getSelection().removeAllRanges(); // clear current selection
            window.getSelection().addRange(range); // to select text
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
        }
    })
})