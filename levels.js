function Level(name = "", duration = 5.0, imageAreas = [], captureAreas = []) {
    this.name = name;
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
    new Level("Центральное смещение внимания (Central Fixation Bias)",
        7.5,
        [
            new ImageArea('images/level 1/Безымянный.png',  0.025, 0.025, 0.475, 0.475),
            new ImageArea('images/level 1/край.jpeg',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('images/level 1/лев верх.jpeg',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('images/level 1/право низ.jpeg', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('ca_whole',   0.025, 0.025, 0.975, 0.975),
            new CaptureArea('ca_3circles',   0.025, 0.025, 0.475, 0.475),
            new CaptureArea('ca_circle_in_circle',     0.525, 0.025, 0.975, 0.475),
            new CaptureArea('ca_lev_verh', 0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_pravo_niz',  0.525, 0.525, 0.975, 0.975),
        ],
    ),
];

var currentLevel = null;

function runLevel(index = 0, callbackAfterAllLevels = ()=>{}) {
    if (index === levels.length) {
        currentLevel = null;
        callbackAfterAllLevels();
    }
    else {
        levels[index].init();
        currentLevel = levels[index];
        setTimeout(()=>{
            levels[index].clear();
            runLevel(index+1, callbackAfterAllLevels);
        }, levels[index].duration * 1000);
    }
}
