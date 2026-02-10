let isReady = false;

function showStatus(msg) {
    document.getElementById('status').innerHTML = `Статус: ${msg}`;
}

function startWebGazer() {
    showStatus('Запуск... Разреши доступ к камере и кликай для калибровки');
    webgazer.setGazeListener(function(data, timestamp) {
        if (data == null) return;
        const x = data.x;
        const y = data.y;
        console.log(`Взгляд: x=${Math.round(x)}, y=${Math.round(y)}, время=${timestamp}`);
        // Здесь добавь код для записи данных в файл/сервер для физиологии
    }).begin()
        .then(() => {
            showStatus('Работает! Кликай для калибровки.');
            isReady = true;
        })
        .catch(err => {
            showStatus('Ошибка: ' + err);
            console.error(err);
        });

    webgazer.showPredictionPoints(true); // Показывает точки предсказания
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

// Проверка готовности
setInterval(() => {
    if (webgazer.isReady() && !isReady) {
        showStatus('Готов! Данные в консоли.');
    }
}, 1000);