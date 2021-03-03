window.addEventListener("mousemove", (e) => {
    console.log("ok");
    parallax(e);
});
function parallax(e) {
    layer = document.querySelector('.layer');

    const speed = layer.getAttribute('data-speed');
    
    const x = (e.pageX * speed)/100;
    const y = (e.pageY * speed)/100;
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
}