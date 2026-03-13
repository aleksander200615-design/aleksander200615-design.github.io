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
var levels = [
    new Level("Центральное смещение внимания 2 (Central Fixation Bias 2)",
        7.5,
        [
            new ImageArea('images/level 1-a/61f3fc8083311f19eb196c459dd0c84_4',  0.025, 0.025, 0.475, 0.475),
            new ImageArea('images/level 1-a/Безымянный',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('images/level 1-a/право низ',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('images/level 1-a/симм', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('left_top',   0.025, 0.025, 0.975, 0.975),
            new CaptureArea('ca_3circles',   0.025, 0.025, 0.475, 0.475),
            new CaptureArea('left_down',     0.525, 0.025, 0.975, 0.475),
            new CaptureArea('2_circles', 0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_pravo_niz',  0.525, 0.525, 0.975, 0.975),
        ],
    ),
];
var currentLevel = null;
var levels = [
    new Level("Социальная значимость: лица (Faces)",
        7.5,
        [
            new ImageArea('images/level 2/1697484750_klev-club-p-kartinki-mashini-s-lyudmi-21',  0.025, 0.025, 0.475, 0.475),
            new ImageArea('images/level 2/istockphoto-517524429-170667a',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('images/level 2/sharik',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('images/level 2/Рисунок2', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('guy_and_car',   0.025, 0.025, 0.975, 0.975),
            new CaptureArea('smilling',   0.025, 0.025, 0.475, 0.475),
            new CaptureArea('2_circles',     0.525, 0.025, 0.975, 0.475),
            new CaptureArea('kamen', 0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_pravo_niz',  0.525, 0.525, 0.975, 0.975),
        ],
    ),
];
var currentLevel = null;var levels = [
    new Level("Социальная значимость: лица (Faces)2",
        7.5,
        [
            new ImageArea('images/level 2-a/man',  0.025, 0.025, 0.475, 0.475),
            new ImageArea('images/level 2-a/Рисунок4',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('images/level 2-a/Рисунок5',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('images/level 2-a/Рисунок6', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('man',   0.025, 0.025, 0.975, 0.975),
            new CaptureArea('another_man',   0.025, 0.025, 0.475, 0.475),
            new CaptureArea('desert',     0.525, 0.025, 0.975, 0.475),
            new CaptureArea('forest', 0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_pravo_niz',  0.525, 0.525, 0.975, 0.975),
        ],
    ),
];
var currentLevel = null;var levels = [
    new Level("Биологическая значимость (Food)",
        7.5,
        [
            new ImageArea('images/level 3/Рисунок7',  0.025, 0.025, 0.475, 0.475),
            new ImageArea('images/level 3/Рисунок8',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('images/level 3/Рисунок9',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('images/level 3/', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('apple',   0.025, 0.025, 0.975, 0.975),
            new CaptureArea('cake',   0.025, 0.025, 0.475, 0.475),
            new CaptureArea('burger',     0.525, 0.025, 0.975, 0.475),
            new CaptureArea('kluch', 0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_pravo_niz',  0.525, 0.525, 0.975, 0.975),
        ],
    ),
];
var currentLevel = null;var levels = [
    new Level("Биологическая значимость (Food)2",
        7.5,
        [
            new ImageArea('images/level 3-a/Рисунок11',  0.025, 0.025, 0.475, 0.475),
            new ImageArea('images/level 3-a/Рисунок12',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('images/level 3-a/Рисунок13',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('images/level 3-a/Рисунок14', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('yougurt',   0.025, 0.025, 0.975, 0.975),
            new CaptureArea('vegies',   0.025, 0.025, 0.475, 0.475),
            new CaptureArea('bottles',     0.525, 0.025, 0.975, 0.475),
            new CaptureArea('another_burger', 0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_pravo_niz',  0.525, 0.525, 0.975, 0.975),
        ],
    ),
];
var currentLevel = null;var levels = [
    new Level("Текст vs изображение(Text vs images)",
        7.5,
        [
            new ImageArea('images/level 4/Рисунок15',  0.025, 0.025, 0.475, 0.475),
            new ImageArea('images/level 4/Рисунок16',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('images/level 4/Рисунок17',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('images/level 4/Рисунок18', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('type_machine',   0.025, 0.025, 0.975, 0.975),
            new CaptureArea('maybe',   0.025, 0.025, 0.475, 0.475),
            new CaptureArea('modern',     0.525, 0.025, 0.975, 0.475),
            new CaptureArea('stones', 0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_pravo_niz',  0.525, 0.525, 0.975, 0.975),
        ],
    ),
];
var currentLevel = null;var levels = [
    new Level("Текст vs изображение(Text vs images)2",
        7.5,
        [
            new ImageArea('images/level 4-a/Рисунок19',  0.025, 0.025, 0.475, 0.475),
            new ImageArea('images/level 4-a/Рисунок20',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('images/level 4-a/Рисунок21',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('images/level 4-a/Рисунок22', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('the_end',   0.025, 0.025, 0.975, 0.975),
            new CaptureArea('big',   0.025, 0.025, 0.475, 0.475),
            new CaptureArea('nyan_cat',     0.525, 0.025, 0.975, 0.475),
            new CaptureArea('steve', 0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_pravo_niz',  0.525, 0.525, 0.975, 0.975),
        ],
    ),
];
var currentLevel = null;var levels = [
    new Level("Визуальная салентность и контраст (silence)",
        7.5,
        [
            new ImageArea('images/level 5/Рисунок23',  0.025, 0.025, 0.475, 0.475),
            new ImageArea('images/level 5/Рисунок24',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('images/level 5/Рисунок25',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('images/level 5/Рисунок26', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('black_star',   0.025, 0.025, 0.975, 0.975),
            new CaptureArea('umbrella',   0.025, 0.025, 0.475, 0.475),
            new CaptureArea('tree',     0.525, 0.025, 0.975, 0.475),
            new CaptureArea('wall', 0.025, 0.525, 0.475, 0.975),
            new CaptureArea('ca_pravo_niz',  0.525, 0.525, 0.975, 0.975),
        ],
    ),
];var currentLevel = null;var levels = [
    new Level("Визуальная салентность и контраст (silence)2",
        7.5,
        [
            new ImageArea('images/level 5-a/Рисунок27',  0.025, 0.025, 0.475, 0.475),
            new ImageArea('images/level 5-a/Рисунок28',  0.525, 0.025, 0.975, 0.475),
            new ImageArea('images/level 5-a/Рисунок29',  0.025, 0.525, 0.475, 0.975),
            new ImageArea('images/level 5-a/Рисунок30', 0.525, 0.525, 0.975, 0.975),
        ],
        [
            new CaptureArea('umbrella_rainbow',   0.025, 0.025, 0.975, 0.975),
            new CaptureArea('wall_black',   0.025, 0.025, 0.475, 0.475),
            new CaptureArea('gigga_black_star',     0.525, 0.025, 0.975, 0.475),
            new CaptureArea('grey_tree', 0.025, 0.525, 0.475, 0.975),
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
