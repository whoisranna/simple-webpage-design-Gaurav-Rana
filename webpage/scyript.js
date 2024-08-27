document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorButton');
    
    button.addEventListener('click', () => {
        const colors = ['#FFDDC1', '#FFABAB', '#FFC3A0', '#FF677D', '#D4A5A5'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});
