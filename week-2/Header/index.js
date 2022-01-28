const isScrollingDown = (element,prevPagePos) =>{

    element.onscroll = () => {
        var currentPagePos = window.pageYOffset;
    
        if (prevPagePos > currentPagePos) return true
        
        else nav.style.top='-200px';
    
        prevPagePos = currentPagePos;
    }
}
const header = document.querySelector('.tr-header');
const containers = document.querySelectorAll('.container');
const mainContent = document.querySelector('.container main');
let initialScrollPositions = {};
containers.forEach(container =>{
    initialScrollPositions[container.id] = 0;
    container.addEventListener('scroll', e =>{
        const currentScrollPosition = e.target.scrollTop;
        console.log(currentScrollPosition);
        if(currentScrollPosition > initialScrollPositions[container.id]){
            container.className+=' hide-nav';
        } else{
            container.classList.remove('hide-nav')
        }

        initialScrollPositions[container.id] = currentScrollPosition;

    })
})
