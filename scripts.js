// Hàm để ghép chữ LINH
window.onload = function () {
    const nameSpans = document.querySelectorAll('#name span');
    let delay = 0;

    nameSpans.forEach((span, index) => {
        span.style.animationDelay = `${delay}s`;
        delay += 0.5;  // Điều chỉnh độ trễ cho từng chữ
    });

    // Sau khi ghép chữ xong, chuyển sang phần chúc mừng sinh nhật
    setTimeout(() => {
        document.getElementById('birthday-message').style.display = 'block';
        startFireworks();
    }, delay * 1000); // Sau khi ghép xong chữ LINH (tính theo độ trễ)

    // Hàm tạo hiệu ứng pháo hoa
    function startFireworks() {
        const fireworksContainer = document.getElementById('fireworks');
        fireworksContainer.style.display = 'block';

        // Tạo 5 pháo hoa ngẫu nhiên
        for (let i = 0; i < 5; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.animationDuration = `${Math.random() * 2 + 1}s`;  // Thời gian nổ ngẫu nhiên
            fireworksContainer.appendChild(firework);
        }
    }
};
