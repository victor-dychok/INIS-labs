const draggableElements = document.querySelectorAll('.target');
const workSpace = document.querySelector('#workspace');
let positionX;
let positionY;
let escFunction;

for(let i = 0; i < draggableElements.length; i++)
    {
        draggableElements[i].draggable = true;
        draggableElements[i].addEventListener('dragend', (e)=>{
            draggableElements[i].style.top = e.pageY - positionY + 'px';
            draggableElements[i].style.left = e.pageX - positionX + 'px';
        })
        draggableElements[i].addEventListener('dragstart', (e)=>{
            positionX = e.offsetX;
            positionY = e.offsetY;
            document.addEventListener('keyup', escFunction = (e) => {
                if (e.key == "Escape")
                    {
                        
                    }
            })
        })
        
        draggableElements[i].addEventListener('click', (e)=>{
            e.stopPropagation();
            workSpace.onmousemove = null;
            for (let j = 0; j < draggableElements.length; ++j)
            {
                if (j == i)
                    draggableElements[j].style.background = 'blue';
                else
                    draggableElements[j].style.background = 'red';
            }
        })
        
        workSpace.addEventListener('click', (e) => {
            workSpace.ontouchmove = null;
            draggableElements[i].style.background = 'red';
        })
        
        draggableElements[i].addEventListener('dblclick', (e)=>{
                positionX = e.offsetX;
                positionY = e.offsetY;
            workSpace.onmousemove = (e)=>
            {
                draggableElements[i].style.top = e.pageY - positionY + 'px';
                draggableElements[i].style.left = e.pageX - positionX + 'px';
            }
        })
        
        draggableElements[i].addEventListener('touchmove', (e)=>
            {
                draggableElements[i].style.top = e.targetTouches[0].pageY - draggableElements[i].offsetHeight/2 + 'px';
                draggableElements[i].style.left = e.targetTouches[0].pageX - draggableElements[i].offsetWidth/2 + 'px';
            
        })
        
        draggableElements[i].addEventListener('touchstart', (e)=>{
            if(e.target.style.background == 'blue'){
                workSpace.ontouchmove=(e)=>
                {     
                    draggableElements[i].style.top = e.targetTouches[0].pageY - draggableElements[i].offsetHeight/2 + 'px';
                    draggableElements[i].style.left = e.targetTouches[0].pageX - draggableElements[i].offsetWidth/2 + 'px';
                }
            }
        })
        
    }




















