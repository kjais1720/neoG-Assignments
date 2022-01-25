
const container = document.querySelector('.tr-chips-input-wrapper')
const input = document.querySelector('.tr-chips-input-wrapper input');
const chips = document.querySelectorAll('tr-chip-wrapper');
if(container && input){
    
    let removeChip = chip => container.removeChild(chip);

    let createNewChip = text => {
        const newChip = document.createElement('button');
            newChip.innerHTML = `
                <span>${text}</span>
                <i class="close-icon fas fa-times-circle"></i>
            `
            newChip.className = "tr-chip-wrapper";
        return newChip
    }

    let addListenersToChips = () => {
        const chipsCloseIcons = document.querySelectorAll('.tr-chip-wrapper .close-icon')
        chipsCloseIcons.forEach(closeIcon => closeIcon.addEventListener('click',()=>{
            closeIcon.parentNode.parentNode.removeChild(closeIcon.parentNode);
        }))
    }

    document.addEventListener('keydown',e=>{
        if(e.key==="Enter" && input.value !== ''){
            const newChip = createNewChip(input.value);            
            container.insertBefore(newChip,input);
            addListenersToChips();
            input.value='';
        }

        if(e.key === "Backspace" && input.value === ''){
            let chipToRemove = document.querySelectorAll(".tr-chip-wrapper");
            chipToRemove = chipToRemove[chipToRemove.length-1];

            removeChip(chipToRemove);
        }
    })
    addListenersToChips();
    

}