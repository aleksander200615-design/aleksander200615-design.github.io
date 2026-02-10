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
}

function pauseWebGazer() {
    webgazer.pause();
    showStatus('На паузе');
}

function resumeWebGazer() {
    webgazer.resume();
    showStatus('Продолжено');
}

function endWebGazer() {
    webgazer.end();
    showStatus('Остановлено');
    isReady = false;
}

function handleWebGazerCoordinates(data, timestamp) {
    if (data == null) return;
    const x = data.x;
    const y = data.y;
    console.log(`Взгляд: x=${Math.round(x)}, y=${Math.round(y)}, время=${timestamp}`);
}

window.onbeforeunload = function() {
    webgazer.end();
}