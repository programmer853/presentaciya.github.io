document.addEventListener('DOMContentLoaded', () => {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const content = document.getElementById('content');
    const popupOverlay = document.getElementById('popup-overlay');
    const okButton = document.getElementById('ok-button');
    const timer = document.getElementById('timer');

    let contentShown = false;
    let popupShown = false;

    video1.addEventListener('ended', () => {
        video2.disabled = false;
        video2.style.opacity = '1';
        video2.style.pointerEvents = 'auto';
        video2.nextElementSibling.textContent = 'Пожалуйста, посмотрите это видео полностью';
    });

    video2.addEventListener('ended', () => {
        if (!contentShown) {
            content.classList.remove('hidden');
            contentShown = true;
            setTimeout(showPopup, 7000);
        }
    });

    function showPopup() {
        if (!popupShown) {
            popupOverlay.classList.remove('hidden');
            startTimer();
            popupShown = true;
        }
    }

    function startTimer() {
        let seconds = 7;
        timer.textContent = seconds;
        const interval = setInterval(() => {
            seconds--;
            timer.textContent = seconds;
            if (seconds === 0) {
                clearInterval(interval);
                timer.classList.add('hidden');
                okButton.classList.remove('hidden');
            }
        }, 1000);
    }

    okButton.addEventListener('click', () => {
        popupOverlay.classList.add('hidden');
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            e.stopPropagation();
        }
    });
});