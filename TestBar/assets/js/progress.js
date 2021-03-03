var progressv = [
    document.getElementById('0'),
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5')
];

var percent = [
    document.getElementById('10'),
    document.getElementById('11'),
    document.getElementById('12'),
    document.getElementById('13'),
    document.getElementById('14'),
    document.getElementById('15')
];

let requestURL = '/config/skills.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const progress = request.response;
    populateProgress(progress);
};

function populateProgress(jsonObj) {
    for (let i = 0; i < jsonObj.progress.length; i++) {
        progressv[i].setAttribute("data-done",jsonObj.progress[i].value);
        progressv[i].style.width = progressv[i].getAttribute('data-done') + '%';
        percent[i].textContent = progressv[i].getAttribute('data-done') + '%';
        progressv[i].style.opacity = 1;
    }
}