// إضافة تأثير عند تمرير الفأرة على الروابط
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    link.addEventListener('mouseout', () => {
        link.style.boxShadow = 'none';
    });
});
