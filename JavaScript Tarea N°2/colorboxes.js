function changebackground(color) {
    document.querySelector('body').style.background = color;
}
function changebackgroundcolor() {
    document.body.style.backgroundColor = "white"
}
document.addEventListener('DOMContentLoaded', function () {
    const messageEle = document.getElementById('cdc');
    const counterEle = document.getElementById('counter');
    const maxLength = messageEle.getAttribute('maxlength');

    counterEle.innerHTML = `0/${maxLength}`;

    messageEle.addEventListener('input', function (e) {
        const target = e.target;
        const currentLength = target.value.length;
        counterEle.innerHTML = `${currentLength}/${maxLength}`;
    });
});