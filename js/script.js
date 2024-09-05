document.getElementById('botaoMascote').addEventListener('click', function () {
    var mascoteContainer = document.getElementById('mascoteContainer');
    var mascoteVideo = document.getElementById('mascote');
    var botaoCliqueAqui = document.getElementById('botaoCliqueAqui');

    if (mascoteContainer.style.display === 'none' || mascoteContainer.style.display === '') {
        mascoteContainer.style.display = 'block';
        mascoteVideo.play();
    } else {
        mascoteContainer.style.display = 'none';
        mascoteVideo.pause();
        mascoteVideo.currentTime = 0;
        botaoCliqueAqui.style.display = 'none';
        mascoteVideo.style.width = '150px';
    }
});

document.getElementById('mascote').addEventListener('ended', function () {
    var mascoteVideo = document.getElementById('mascote');
    var botaoCliqueAqui = document.getElementById('botaoCliqueAqui');

    mascoteVideo.style.animation = 'mascoteDiminuir 0.5s forwards';
    botaoCliqueAqui.style.display = 'block';
});

document.getElementById('botaoCliqueAqui').addEventListener('click', function () {
    window.location.href = './index7.html';
});




document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu-item');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuToggle.classList.toggle('active');

        if (menu.classList.contains('active')) {
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transitionDelay = `${index * 0.1}s`;
                    item.classList.add('show');
                }, index * 100);
            });
        } else {
            menuItems.forEach((item, index) => {
                item.style.transitionDelay = `${(menuItems.length - index - 1) * 0.1}s`;
                item.classList.remove('show');
            });
        }
    });


    menuItems.forEach(item => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = item.getAttribute('data-text');
        document.body.appendChild(tooltip);

        item.addEventListener('mouseenter', (e) => {
            const rect = item.getBoundingClientRect();
            tooltip.style.left = `${rect.left - tooltip.offsetWidth - 8}px`;
            tooltip.style.top = `${rect.top + rect.height / 2 - tooltip.offsetHeight / 2}px`;
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateX(0)';
        });

        item.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateX(-10px)';
        });
    });


    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuItems.forEach((item) => {
                item.classList.remove('show');
            });
        }
    });
});

document.getElementById('audio-button').addEventListener('click', function() {
    var audio = document.getElementById('page-audio');
    var audioIcon = document.getElementById('audio-icon');

    if (audio.paused) {
        audio.play();
        audioIcon.src = './img/botaoaudio.png';
    } else {
        audio.pause();
        audioIcon.src = './img/botaoaudiomutado.png'; 
    }
});
