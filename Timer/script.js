const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');




const needTime = '5 Sep 2022';

function countdown() {
	const studyTimeDate = new Date(needTime);
	const currentDate = new Date();
	const diff = (studyTimeDate - currentDate) / 1000;

	const seconds = Math.floor(diff) % 60;
	const minutes = Math.floor(diff / 60) % 60;
	const hours = Math.floor(diff / 3600) % 24;
	const days = Math.floor(diff / 3600 / 24);

	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours;
	minsEl.innerHTML = formatTime(minutes);
	secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
	return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);