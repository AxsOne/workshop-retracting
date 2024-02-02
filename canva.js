document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var fps = 30;
    var interval = 1000 / fps;
    setInterval(gameLoop, interval);
    
    function drawCircle(centerX, centerY, radius, color) {
        var canvas = document.getElementById("canvas");
        
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            ctx.strokeStyle = color;
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();
        } else {
            console.error("Canvas not supported!");
        }
    }
    
    function drawLine(startX, startY, endX, endY, color) {
        var canvas = document.getElementById("canvas");
        
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            ctx.strokeStyle = color;
            ctx.lineWidth = 10;
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        } else {
            console.error("Canvas not supported!");
        }
    }
    
    function clear_screen(color = "red") {
        var canvas = document.getElementById("canvas");
        
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = color
            ctx.fillRect(0, 0, 380, 280)
        } else {
            console.error("Canvas not supported!");
        }
    }
    
    function gameLoop() {
        clear_screen();
        drawLine(30, 80, 30, 10, "black");
        drawLine(30, 80, 30, 10, "black");
        drawLine(30, 100, 30, 140, "black");
        drawLine(30, 150, 30, 210, "black");
        drawLine(30, 250, 30, 240, "black");
        drawCircle(200, 150, 50, "green");
    }
});


