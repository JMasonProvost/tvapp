const container = document.querySelector('#container');
const baseURL = 'https://soldierswifecrazylife.com/wp-content/uploads/2023/01/'

for (let i = 1; i < 10; i++) {
    const newImg = document.createElement('img');
    newImg.scr = `${baseURL}${i}.jpg`
    container.appendChild(newImg)
}


function updateTimer() {
    future = Date.parse("November 21, 2022 11:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>minutes</span></div>' +
        '<div>' + s + '<span>seconds</span></div>';
}
setInterval('updateTimer()', 1000);
