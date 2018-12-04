function DrawCaptcha(captchaValue) {
    var canvas = document.querySelector('#captcha-img');
    var width = canvas.width;
    var height = canvas.height;
    var ctx = canvas.getContext('2d');

    ctx.clearRect ( 0, 0, width, height);

    var lastX = 0, lastY = 0;
    var i;
    for (i = 0; i < 30; i++) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);

        if (i % 2 == 0) {
            ctx.strokeStyle = "lightblue";
        }
        else {
            ctx.strokeStyle = "red";
        }

        lastX = Math.floor(Math.random() * width);
        lastY = Math.floor(Math.random() * height);
        ctx.lineTo(lastX, lastY);
        ctx.stroke();
    }

    ctx.strokeStyle = "black";
    ctx.font = "24px monospace bold";
    ctx.fillText(captchaValue, 5, 20);
}