function CaptureArea(x0, y0, x1, y1) {
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.timeCounter = 0;
}

var captureAreas = {};

function initCaptureAreas() {
    captureAreas = {};
    document.querySelectorAll('.capture-area').forEach((element)=>{
        console.log('Element ' + element);
        console.log(typeof element);
        console.log(element.id);
        let rect = element.getBoundingClientRect();
        captureAreas[element.id] = new CaptureArea(rect.left, rect.top, rect.right, rect.bottom);
    });
}

function checkCaptureAreas(x, y, timeDelta) {
    for (let elementId in captureAreas) {
        let captureArea = captureAreas[elementId];
        if (captureArea.x0 <= x && x <= captureArea.x1) {
            if (captureArea.y0 <= y && y <= captureArea.y1) {
                captureArea.timeCounter += timeDelta;
                document.getElementById(elementId).textContent = Math.round(captureArea.timeCounter*100)/100 + 's';
            }
        }
    }
}