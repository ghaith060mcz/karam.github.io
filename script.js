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
