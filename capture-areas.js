function CaptureArea(name, x0, y0, x1, y1) {
    let ca = document.getElementById('calibration-area');
    this.timeCounter = 0;
    this.x0 = ca.offsetLeft + ca.clientWidth * x0;
    this.y0 = ca.offsetTop + ca.clientHeight * y0;
    this.x1 = ca.offsetLeft + ca.clientWidth * x1;
    this.y1 = ca.offsetTop + ca.clientHeight * y1;
    this.name = name;
}

function checkCaptureAreas(x, y, timeDelta, captureAreas) {
    for (let captureArea of captureAreas) {
        if (captureArea.x0 <= x && x <= captureArea.x1) {
            if (captureArea.y0 <= y && y <= captureArea.y1) {
                captureArea.timeCounter += timeDelta;
                captureArea.element.textContent = Math.round(captureArea.timeCounter*100)/100 + 's';
            }
        }
    }
}