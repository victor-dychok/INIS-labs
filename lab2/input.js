const draggableElements = document.querySelectorAll('.target');
const workSpace = document.querySelector('#workspace');
let positionX;
let positionY;
let escFunction;
let touchStartX;
let touchStartY;
let isDraged = false;
let object;
let objectDoubleTouch;

for(let i = 0; i < draggableElements.length; i++)
    {
        draggableElements[i].draggable = true;

        
        
        workspace.addEventListener("dragover", (e) => {
            e.preventDefault();
            });
        workspace.addEventListener("drop", () => {
            drop = true;
            });
        

        workSpace.addEventListener('touchstart', (e) => {
            if (e.targetTouches[1] != undefined)
            {
                object.onmousemove = null;
                object.style.left = touchStartX;
                object.style.top = touchStartY;
            }
            if (isDraged)
            {
                object.onmousemove = null;
                object.ontouchend = null;
                object.style.left = touchStartX;
                object.style.top = touchStartY;
                touchStartX = null;
                touchStartY = null;
                isDraged = false;
            }
            if (e.target != workSpace)
            {
                object = e.target;
                touchStartX = e.target.style.left;
                touchStartY = e.target.style.top;
                object.ontouchmove = (e) => {    
                    isDraged = true;
                    draggableElements[i].style.top = e.targetTouches[0].pageY - object.offsetHeight/2 + 'px';
                    draggableElements[i].style.left = e.targetTouches[0].pageX - object.offsetWidth/2 + 'px';
                }
                object.ontouchend = () => {
                    isDraged = false;
                    touchStartX = null;
                    touchStartY = null;
                    object.ontouchmove = null;
                }
            }
        })



        draggableElements[i].addEventListener('dragend', (e)=>{
            if (drop)
            {
                draggableElements[i].style.top = e.pageY - positionY + 'px';
                draggableElements[i].style.left = e.pageX - positionX + 'px';
                drop = false;
            }
        })
        draggableElements[i].addEventListener('dragstart', (e)=>{
            positionX = e.offsetX;
            positionY = e.offsetY;
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
            objectDoubleTouch = e.target;
            touchStartX = objectDoubleTouch.style.left;
            touchStartY = objectDoubleTouch.style.top;
                positionX = e.offsetX;
                positionY = e.offsetY;
            workSpace.onmousemove = (e)=>
            {
                draggableElements[i].style.top = e.pageY - positionY + 'px';
                draggableElements[i].style.left = e.pageX - positionX + 'px';
            }
        })
        
        document.addEventListener('keydown', function(e) {
            switch (e.keyCode) {
                case 37:
                    draggableElements[0].style.left = 0 + 'px';
                    break;
                case 38:
                   alert('up');
                    break;
                case 39:
                    draggableElements[0].style.left = 100 + 'px';
                    break;
                case 40:
                    alert('down');
                    break;
            }
        });

        
    }
