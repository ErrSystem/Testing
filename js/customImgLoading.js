Array.from(document.getElementsByTagName('img')).forEach(element => {
    if (element.complete) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
        element.addEventListener('load', () => {
            element.style.display = 'block';
        })
    }
})