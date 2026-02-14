function CalibrationDot()
{
    this.clicks = 0;
}

var caldots = {}

function initializeCalibrationDots() {
    let area = document.getElementById('calibration-area');
    clearCalibrationDots();
    for (let x of [0.0, 0.5, 1.0]) {
        for (let y of [0.0, 0.5, 1.0]) {
            let calibrationDot = document.createElement('div');
            calibrationDot.className = 'calibration-dot';
            calibrationDot.id = 'cd'+Math.floor(x*2)+''+Math.floor(y*2);
            let left = 16 + x * (area.clientWidth - 48);
            let top = 16 + y * (area.clientHeight - 48);
            calibrationDot.style.left = left+'px';
            calibrationDot.style.top = top+'px';
            console.log([calibrationDot.style.left, calibrationDot.style.top]);
            area.appendChild(calibrationDot);
            caldots[calibrationDot.id] = new CalibrationDot();
            calibrationDot.onclick = ()=>{
                caldots[calibrationDot.id].clicks++;
                let green = 70 + 185 * caldots[calibrationDot.id].clicks / 4.0;
                calibrationDot.style.backgroundColor = `rgb(255, ${green}, 70)`;
                if (caldots[calibrationDot.id].clicks >= 5)
                {
                    calibrationDot.remove();
                    delete caldots[calibrationDot.id];
                }
            };
        }
    }
}

function clearCalibrationDots() {
    let area = document.getElementById('calibration-area');
    area.innerHTML = '';
    caldots = {};
}