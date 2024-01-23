'use strict';
const timer = {
	months: document.getElementById('timer-month'),
	days: document.getElementById('timer-days'),
	hours: document.getElementById('timer-hours'),
	minutes: document.getElementById('timer-minutes'),
	seconds: document.getElementById('timer-seconds'),
};
const endDate = '01-01-2025';

let interval = setInterval(function countdownTimer() {
	const deadline = new Date(endDate);
	const currentDay = new Date();
	const distance = deadline.getTime() - currentDay.getTime();
	const target = {
		month: Math.floor(distance / (1000 * 60 * 60 * 24 * 30)),
		date: Math.floor(distance / (1000 * 60 * 60 * 24)),
		hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((distance / (1000 * 60)) % 60),
		seconds: Math.floor((distance / 1000) % 60),
	};
	timer.months.innerHTML = target.month;
	timer.days.innerHTML = target.date;
	timer.hours.innerHTML = target.hours;
	timer.minutes.innerHTML = target.minutes;
	timer.seconds.innerHTML = target.seconds;
	if (distance < 0) {
		clearInterval(interval);
	}
});
