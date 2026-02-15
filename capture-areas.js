function CaptureArea(name, x0, y0, x1, y1) {
    this.timeCounter = 0;
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
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