// إضافة تأثير عند التمرير على الروابط
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });

    // تشغيل صوت عند النقر على الرابط
    link.addEventListener('click', () => {
        const clickSound = new Audio('click-sound.mp3'); // مسار الصوت
        clickSound.play();
    });
});

// نبض مستمر للأيقونات مع تأثير دوران
const tiktokIcon = document.querySelector('.tiktok-icon');

function triggerPulseEffect() {
    tiktokIcon.classList.add('pulse');
    setTimeout(() => {
        tiktokIcon.classList.remove('pulse');
    }, 2000);
}

// تكرار تأثير النبض والدوران كل 4 ثوانٍ
setInterval(triggerPulseEffect, 4000);
