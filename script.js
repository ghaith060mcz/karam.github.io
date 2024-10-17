document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

const tiktokIcon = document.getElementById('tiktokIcon');

// وظيفة لتفعيل وإزالة تأثير اللمعان
function triggerShineEffect() {
    tiktokIcon.classList.add('shining'); // أضف الـ class

    // أزل الـ class بعد انتهاء الأنيميشن (1 ثانية)
    setTimeout(() => {
        tiktokIcon.classList.remove('shining');
    }, 1000);
}

// تكرار التأثير كل ثانية
setInterval(triggerShineEffect, 2000);
