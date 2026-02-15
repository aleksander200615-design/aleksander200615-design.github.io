function Level(duration = 5.0, imageAreas = [], captureAreas = []) {
    this.duration = duration;
    this.imageAreas = imageAreas;
    this.captureAreas = captureAreas;
    this.init = function() {
        for (let imageArea of this.imageAreas) {
            imageArea.element = document.createElement('img');
            imageArea.element.src = imageArea.url;
            imageArea.element.className = 'image-area';
            imageArea.element.style.left = imageArea.x0+'px';
            imageArea.element.style.top = imageArea.y0+'px';
            imageArea.element.style.width = (imageArea.x1-imageArea.x0)+'px';
            imageArea.element.style.height = (imageArea.y1-imageArea.y0)+'px';
            document.getElementById('calibration-area').appendChild(imageArea.element);
        }
        for (let captureArea of this.captureAreas) {
            captureArea.element = document.createElement('div');
            captureArea.element.className = 'capture-area';
            captureArea.element.style.left = captureArea.x0+'px';
            captureArea.element.style.top = captureArea.y0+'px';
            captureArea.element.style.width = (captureArea.x1-captureArea.x0)+'px';
            captureArea.element.style.height = (captureArea.y1-captureArea.y0)+'px';
            captureArea.element.id = 'captureArea:'+captureArea.name;
            document.getElementById('calibration-area').appendChild(captureArea.element);
        }
    };
    this.clear = function() {
        for (let imageArea of this.imageAreas) {
            imageArea.element.remove();
        }
        for (let captureArea of this.captureAreas) {
            captureArea.element.remove();
        }
    };
}

var levels = [
    new Level(
        7.5,
        [
            new ImageArea('cago/1/край.jpeg', 100, 100, 400, 900),
            new ImageArea('cago/2/dva-muzhchiny-smotryat-drug-na-druga.jpg', 500, 100, 1000, 900),
        ],
        [
            new CaptureArea('ca1a', 100, 100, 400, 900),
            new CaptureArea('ca1b', 500, 100, 1000, 900),
        ],
    ),
    new Level(
        7.5,
        [
            new ImageArea('cago/1/край.jpeg', 100, 100, 1000, 300),
            new ImageArea('cago/2/dva-muzhchiny-smotryat-drug-na-druga.jpg', 100, 400, 1000, 900),
        ],
        [
            new CaptureArea('ca2a', 100, 100, 1000, 300),
            new CaptureArea('ca2b', 100, 400, 1000, 900),
        ],
    ),
];

var currentLevel = null;

function runLevel(index = 0) {
    if (index === levels.length) {
        currentLevel = null;
    }
    else {
        levels[index].init();
        currentLevel = levels[index];
        setTimeout(()=>{
            levels[index].clear();
            runLevel(index+1);
        }, levels[index].duration * 1000);
    }
}
