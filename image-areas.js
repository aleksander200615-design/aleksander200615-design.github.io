function ImageArea(url, x0, y0, x1, y1) {
    let ca = document.getElementById('calibration-area');
    this.url = url;
    this.x0 = ca.offsetLeft + ca.clientWidth * x0;
    this.y0 = ca.offsetTop + ca.clientHeight * y0;
    this.x1 = ca.offsetLeft + ca.clientWidth * x1;
    this.y1 = ca.offsetTop + ca.clientHeight * y1;
}