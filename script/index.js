function startTimer(duration, display) {
    let timer = duration;
    let interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        display.querySelector('.sale__time__minutes').textContent = String(minutes).padStart(2, '0');
        display.querySelector('.sale__time__seconds').textContent = String(seconds).padStart(2, '0');

        if (--timer < 0) {
            timer = duration; 
        }
    }, 1000); 
}

document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.sale__time'); 
    const duration = 10 * 60; 
    startTimer(duration, display); 
});
let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', (e) => {
    const balls = document.querySelectorAll('.parallax-ball');
    const mouseX = e.clientX;
    const mouseY = e.clientY; 

    window.requestAnimationFrame(() => {
        balls.forEach((ball, index) => {
            const speed = (index + 1) * 0.05;
            const offsetX = (mouseX - window.innerWidth / 2) * speed;
            const offsetY = (mouseY - window.innerHeight / 2) * speed;

            ball.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });
});

$(".single-item").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
