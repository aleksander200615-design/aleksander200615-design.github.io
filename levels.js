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
    new Level("Две точки",
        5.0,
        [
            new ImageArea('cago/1/край.jpeg', 0.1, 0.1, 0.9, 0.9),
        ],
        [
            new CaptureArea('ca_whole',    0.1, 0.1, 0.9, 0.9),
            new CaptureArea('ca_smalldot', 0.275, 0.55, 0.375, 0.7),
        ],
    ),
    new Level("Три круга",
        5.0,
        [
            new ImageArea('cago/1/unnamed.png', 0.05, 0.15, 0.95, 0.85),
        ],
        [
            new CaptureArea('ca_whole', 0.05, 0.15, 0.95, 0.85),
            new CaptureArea('ca_left',  0.2, 0.25, 0.4, 0.6),
            new CaptureArea('ca_mid',   0.4, 0.45, 0.575, 0.7),
            new CaptureArea('ca_right', 0.575, 0.25, 0.775, 0.6),
        ],
    ),
    new Level("Четыре человека 1",
        7.5,
        [
            new ImageArea('cago/2/img1.jpg', 0.025, 0.025, 0.475, 0.475),
            new ImageArea('cago/2/img2.jpg', 0.525, 0.025, 0.975, 0.475),
            new ImageArea('cago/2/img3.jpg', 0.025, 0.525, 0.475, 0.975),
            new ImageArea('cago/2/img4.jpg', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('ca_whole',  0.025, 0.025, 0.975, 0.975),
            new CaptureArea('ca_car',    0.025, 0.025, 0.475, 0.475),
            new CaptureArea('ca_2men',   0.525, 0.025, 0.975, 0.475),
            new CaptureArea('ca_1man',   0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_sadman', 0.525, 0.525, 0.975, 0.975),
        ],
    ),
    new Level("Четыре человека 2",
        7.5,
        [
            new ImageArea('cago/2a/img1.jpg',  0.025, 0.025, 0.475, 0.475),
            new ImageArea('cago/2a/img2.png',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('cago/2a/img3.jpg',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('cago/2a/img4.webp', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('ca_whole',   0.025, 0.025, 0.975, 0.975),
            new CaptureArea('ca_woman',   0.025, 0.025, 0.475, 0.475),
            new CaptureArea('ca_man',     0.525, 0.025, 0.975, 0.475),
            new CaptureArea('ca_talking', 0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_WHAAAT',  0.525, 0.525, 0.975, 0.975),
        ],
    ),
    new Level("Еда 1",
        7.5,
        [
            new ImageArea('cago/4/img1.jpg',  0.025, 0.025, 0.475, 0.475),
            new ImageArea('cago/4/img2.jpg',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('cago/4/img3.jpg',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('cago/4/img4.webp', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('ca_whole',   0.025, 0.025, 0.975, 0.975),
            new CaptureArea('ca_apple',   0.025, 0.025, 0.475, 0.475),
            new CaptureArea('ca_cakes',   0.525, 0.025, 0.975, 0.475),
            new CaptureArea('ca_onigiri', 0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_burger',  0.525, 0.525, 0.975, 0.975),
        ],
    ),
    new Level("Еда 2",
        7.5,
        [
            new ImageArea('cago/4a/img1.jfif', 0.025, 0.025, 0.475, 0.475),
            new ImageArea('cago/4a/img2.jpg',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('cago/4a/img3.jpg',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('cago/4a/img4.jfif', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('ca_whole',      0.025, 0.025, 0.975, 0.975),
            new CaptureArea('ca_burger',     0.025, 0.025, 0.475, 0.475),
            new CaptureArea('ca_tokpoki',    0.525, 0.025, 0.975, 0.475),
            new CaptureArea('ca_icecream',   0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_vegetables', 0.525, 0.525, 0.975, 0.975),
        ],
    ),
    new Level("Контрасты",
        7.5,
        [
            new ImageArea('cago/5/img1.jpg', 0.025, 0.025, 0.475, 0.475),
            new ImageArea('cago/5/img2.jpg', 0.525, 0.025, 0.975, 0.475),
            new ImageArea('cago/5/img3.jpg', 0.025, 0.525, 0.475, 0.975),
            new ImageArea('cago/5/img4.jpg', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('ca_whole',             0.025, 0.025, 0.975, 0.975),
            new CaptureArea('ca_umbrellas',         0.025, 0.025, 0.475, 0.475),
            new CaptureArea('ca_umbrellas_point',   0.140, 0.100, 0.325, 0.400),
            new CaptureArea('ca_landscape',         0.525, 0.025, 0.975, 0.475),
            new CaptureArea('ca_rainbow_umb',       0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_rainbow_umb_point', 0.180, 0.670, 0.330, 0.890),
            new CaptureArea('ca_bw_shards',         0.525, 0.525, 0.975, 0.975),
        ],
    ),
    new Level("Цитаты",
        10,
        [
            new ImageArea('cago/6/img1.jpg', 0.025, 0.025, 0.325, 0.975),
            new ImageArea('cago/6/img2.jpg', 0.350, 0.025, 0.650, 0.975),
            new ImageArea('cago/6/img3.jpg', 0.675, 0.025, 0.975, 0.975),
        ],
        [
            new CaptureArea('ca_whole',  0.025, 0.025, 0.975, 0.975),
            new CaptureArea('ca_quote1', 0.025, 0.025, 0.325, 0.975),
            new CaptureArea('ca_quote2', 0.350, 0.025, 0.650, 0.975),
            new CaptureArea('ca_quote3', 0.675, 0.025, 0.975, 0.975),
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
