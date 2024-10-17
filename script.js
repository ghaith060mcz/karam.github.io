// إضافة تأثير عند التمرير على الروابط
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

// تفعيل تأثير اللمعان للأيقونة
const tiktokIcon = document.querySelector('.tiktok-icon');

function triggerShineEffect() {
    tiktokIcon.classList.add('shining');
    setTimeout(() => {
        tiktokIcon.classList.remove('shining');
    }, 1000);
}

// تكرار التأثير كل 2 ثانية
setInterval(triggerShineEffect, 2000);
