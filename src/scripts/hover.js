function showImgContent(e) {
    const linkText = document.querySelector('.link-text');
    const linkImage = document.querySelector('.link-image');
    x = e.clientX;
    y = e.clientY;
    linkImage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    linkText.style.setProperty('--x',(x)+'px');
    linkText.style.setProperty('--y',(y)+'px');
}

document.addEventListener('mousemove', showImgContent);

function touchHandle(e){
    const linkText = document.querySelector('.link-text');
    const linkImage = document.querySelector('.link-image');
    e.preventDefault();
    var touch = e.touches[0];
    var x = touch.clientX;
    var y = touch.clientY;
    linkImage.style.visibility = 'visible';
    linkImage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    linkText.style.setProperty('--x',(x)+'px');
    linkText.style.setProperty('--y',(y)+'px');
}
document.addEventListener('touchmove', touchHandle, {passive: false});

function touchEnd(e) {
    var img = document.querySelector('.link-image');
    const linkText = document.querySelector('.link-text');
    linkText.style.setProperty('--x','-100px');
    linkText.style.setProperty('--y','-100px');
    img.style.visibility = 'hidden';
}
document.addEventListener('touchend', touchEnd);