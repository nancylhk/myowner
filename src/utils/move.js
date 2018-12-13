var moveFunction = function() {
    let box = document.getElementById('box');
    let speedX = 10,speedY = 8;
    //水平方向运动最大值
    let maxL = document.documentElement.clientWidth - box.offsetWidth;
    let	maxT = document.documentElement.clientHeight - box.offsetHeight;
    
    let timer = null;

    box.onmouseenter = function () {
        clearInterval(timer);
    };
    box.onmouseleave = function () {
        autoMove();
    };
    autoMove();    
    function autoMove(){
        timer = setInterval(() => {
            let 
            nextX = box.offsetLeft + speedX;
            nextY = box.offsetTop + speedY;

            //左侧边界
            if(nextX <= 0) {
                nextX = 0;
                speedX *= -1;
            }

            //上侧边界
            if(nextY <= 0) {
                nextY = 0;
                speedY *= -1;
            }

            //右侧边界
            if(nextX >= maxL) {
                nextX = maxL;
                speedX *= -1;
            }

            //底侧边界
            if(nextY >= maxT) {
                nextY = maxT;
                speedY *= -1;
            }
            box.style.left = nextX + 'px';
            box.style.top = nextY + 'px';
            
        },50);
    }
}
export {
    moveFunction
}