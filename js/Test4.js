const responsiveHistory = isOpened => {
    const button = document.getElementById('calc-HistoryButton');
    const responsiveAnimationOpen = () => {
        let numberRightPosition = 100;
        let numberLeftPosition = -4;
        const animationLoop = setInterval(() => {
            if (numberLeftPosition < 0){
                numberLeftPosition = numberLeftPosition + 2;
                button.style.left = numberLeftPosition+ 'px';
            }
            else if(numberLeftPosition >= 0 && numberRightPosition != 0){
                console.log(numberRightPosition)
                numberRightPosition = numberRightPosition - 2;
                button.style.left = 'unset';
                button.style.right = numberRightPosition + '%';
            }
            else if (numberRightPosition == 0) {
                clearInterval(animationLoop);
            }
        }, 5);
    }
    const responsiveAnimationClose = () => {
        let numberRightPosition = 0;
        const animationLoop = setInterval(() => {
            if (numberRightPosition <= 94){
                console.log(numberRightPosition)
                numberRightPosition = numberRightPosition + 1;
                button.style.right = numberRightPosition + '%';
            }
            else if(numberRightPosition == 96){
                button.style.left = '-4px';
                button.style.right = 'unset';
                clearInterval(animationLoop);
            }
        }, 5);
    }
    if (!isOpened){
        responsiveAnimationOpen();
        button.setAttribute('onclick', 'responsiveHistory(true)');
    }
    else if (isOpened){
        responsiveAnimationClose();
        button.setAttribute('onclick', 'responsiveHistory(false)');
    }
}