let clickCount = 0;
const button = document.getElementById('clickButton');
const photo = document.getElementById('hiddenPhoto');
const clickCountText = document.getElementById('clickCountText');

button.addEventListener('click', () => {
    clickCount++;
    clickCountText.textContent = `Tıklama Sayısı: ${clickCount}`;
    if (clickCount >= 10) {
        photo.style.display = 'block';
        button.disabled = true;  // Butonu devre dışı bırak
        button.textContent = 'Fotoğrafı Görebilirsiniz!';
    }
});
