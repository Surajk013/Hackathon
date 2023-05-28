export default class bullets
{
        const container = document.getElementById('game-container');
    const ship = document.getElementById('ship');
    const bullets = [];

    document.addEventListener('keydown', function (event) {
        if (event.key == ' ') {
            console.log("space bar is pressed")
            const bullet = document.createElement('div');
            bullet.classList.add('bullet');
            bullet.style.left = ship.offsetLeft + ship.offsetWidth / 2 - 2.5 + 'px';
            bullet.style.top = ship.offsetTop - 10 + 'px';
            container.appendChild(bullet);
            bullets.push(bullet);
        }
    });

    function moveBullets() {
        for (let i = bullets.length - 1; i >= 0; i--) {
            const bullet = bullets[i];
            bullet.style.top = parseInt(bullet.style.top) - 5 + 'px';

            if (parseInt(bullet.style.top) < 0) {
                bullet.remove();
                bullets.splice(i, 1);
            }
        }
    }

setInterval(moveBullets, 10);

}