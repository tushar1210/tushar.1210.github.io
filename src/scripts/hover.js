function showImgContent(e) {
    const linkText = document.getElementsByClassName('.link-text');
    const linkImage = document.querySelector('.link-image');
    x = e.clientX;
    y = e.clientY;
    linkImage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    linkText.style.setProperty('--x',(x)+'px');
    linkText.style.setProperty('--y',(y)+'px');
}

document.addEventListener('mousemove', showImgContent);