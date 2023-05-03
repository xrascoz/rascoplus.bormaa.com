var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30,
    img = document.querySelector('.bg-img');

function animate() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    img.style.webkitTransform = translate;
    img.style.mozTransform = translate;
    img.style.transform = translate;

    window.requestAnimationFrame(animate);
}

window.addEventListener('mousemove', function (e) {
    var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;
});

window.addEventListener('click', function (e) {
    var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;
});

animate();


