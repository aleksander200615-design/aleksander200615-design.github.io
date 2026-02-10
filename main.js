window.saveDataAcrossSessions = true;

let isReady = false;

function showStatus(msg) {
    document.getElementById('status').innerHTML = `Статус: ${msg}`;
}

function startWebGazer() {
    showStatus('Запуск... Разреши доступ к камере и кликай для калибровки');
    webgazer
        .setRegression('ridge')
        .setGazeListener(handleWebGazerCoordinates)
        .showVideoPreview(true)
        .showPredictionPoints(true)
        .applyKalmanFilter(true)
        .begin()
        .then(() => {
            showStatus('Работает! Кликай для калибровки.');
            isReady = true;
        })
        .catch(err => {
            showStatus('Ошибка: ' + err);
            console.error(err);
        });
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("hide").disabled = false;
    document.getElementById("show").disabled = true;
    document.getElementById("end").disabled = false;
    initCaptureAreas();
}

function pauseWebGazer() {
    webgazer.pause();
    showStatus('На паузе');
    document.getElementById("pause").disabled = true;
    document.getElementById("resume").disabled = false;
}

function resumeWebGazer() {
    webgazer.resume();
    showStatus('Продолжено');
    document.getElementById("pause").disabled = false;
    document.getElementById("resume").disabled = true;
}

function endWebGazer() {
    webgazer.end();
    showStatus('Остановлено');
    isReady = false;
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("hide").disabled = true;
    document.getElementById("show").disabled = true;
    document.getElementById("end").disabled = true;
}

function resetWebGazer() {
    webgazer.clearData();
}

var lastCheck = 0.0;

function handleWebGazerCoordinates(data, timestamp) {
    if (data == null) return;
    let timeDelta = (timestamp - lastCheck)/1000;
    lastCheck = timestamp;
    let x = data.x;
    let y = data.y;
    //console.log(`Взгляд: x=${Math.round(x)}, y=${Math.round(y)}, время=${timestamp}`);
    checkCaptureAreas(x, y, timeDelta);
}

function hideVideo() {
    webgazer.showVideo(false);
    document.getElementById("hide").disabled = true;
    document.getElementById("show").disabled = false;
}

function showVideo() {
    webgazer.showVideo(true);
    document.getElementById("hide").disabled = false;
    document.getElementById("show").disabled = true;
}

window.onbeforeunload = function() {
    webgazer.end();
}