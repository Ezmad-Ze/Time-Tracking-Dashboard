//day, week, month
const calendar = document.querySelectorAll('.calendar');
//lists
const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');
//work
const workTime = document.querySelector('.work-time');
const workPreTime = document.querySelector('.work-pre-time');
//play
const playTime = document.querySelector('.play-time');
const playPreTime = document.querySelector('.play-pre-time');
//study
const studyTime = document.querySelector('.study-time');
const studyPreTime = document.querySelector('.study-pre-time');
//exercise
const exerTime = document.querySelector('.exer-time');
const exerPreTime = document.querySelector('.exer-pre-time');
//social
const socialTime = document.querySelector('.social-time');
const socialPreTime = document.querySelector('.social-pre-time');
//self-care
const selfTime = document.querySelector('.self-time');
const selfPreTime = document.querySelector('.self-pre-time');

//fetch JSON
fetch('data.json').then(function (response) {
	return response.json();	
}).then(function (data) {
	datas(data);
}).catch(function (err) {
	console.log('error' + err);
});
//Display Data
function datas(data) {
	daily.addEventListener('click', ()=>{
		daily.style.color='#fff'
		daily.style.opacity='1'
		dailyData(data);
	})
	weekly.addEventListener('click', ()=>{
		daily.style.color='#bdc1ff'
		daily.style.opacity='0.5'
		weeklyData(data);
	})
	monthly.addEventListener('click', ()=>{
		daily.style.color='#bdc1ff'
		daily.style.opacity='0.5'
		monthData(data);
	})
}

//Load Data
window.addEventListener('load',()=>{
	daily.style.color='#fff'
	daily.style.opacity='1'
})

//Daily Data
function dailyData(data) {
	calendar.forEach(calendar =>{
		calendar.innerHTML=`day`;
	})
	workTime.innerHTML = data[0].timeframes.daily.current;
	playTime.innerHTML = data[1].timeframes.daily.current;
	studyTime.innerHTML = data[2].timeframes.daily.current;
	exerTime.innerHTML = data[3].timeframes.daily.current;
	socialTime.innerHTML = data[4].timeframes.daily.current;
	selfTime.innerHTML = data[5].timeframes.daily.current;

	workPreTime.innerHTML = data[0].timeframes.daily.previous;
	playPreTime.innerHTML = data[1].timeframes.daily.previous;
	studyPreTime.innerHTML = data[2].timeframes.daily.previous;
	exerPreTime.innerHTML = data[3].timeframes.daily.previous;
	socialPreTime.innerHTML = data[4].timeframes.daily.previous;
	selfPreTime.innerHTML = data[5].timeframes.daily.previous;
}

//Weekly Data
function weeklyData(data) {
	calendar.forEach(calendar =>{
		calendar.innerHTML=`week`;
	})
	workTime.innerHTML = data[0].timeframes.weekly.current;
	playTime.innerHTML = data[1].timeframes.weekly.current;
	studyTime.innerHTML = data[2].timeframes.weekly.current;
	exerTime.innerHTML = data[3].timeframes.weekly.current;
	socialTime.innerHTML = data[4].timeframes.weekly.current;
	selfTime.innerHTML = data[5].timeframes.weekly.current;

	workPreTime.innerHTML = data[0].timeframes.weekly.previous;
	playPreTime.innerHTML = data[1].timeframes.weekly.previous;
	studyPreTime.innerHTML = data[2].timeframes.weekly.previous;
	exerPreTime.innerHTML = data[3].timeframes.weekly.previous;
	socialPreTime.innerHTML = data[4].timeframes.weekly.previous;
	selfPreTime.innerHTML = data[5].timeframes.weekly.previous;
}

//Monthly Data
function monthData(data) {
	calendar.forEach(calendar =>{
		calendar.innerHTML=`month`;
	})
	workTime.innerHTML = data[0].timeframes.monthly.current;
	playTime.innerHTML = data[1].timeframes.monthly.current;
	studyTime.innerHTML = data[2].timeframes.monthly.current;
	exerTime.innerHTML = data[3].timeframes.monthly.current;
	socialTime.innerHTML = data[4].timeframes.monthly.current;
	selfTime.innerHTML = data[5].timeframes.monthly.current;

	workPreTime.innerHTML = data[0].timeframes.monthly.previous;
	playPreTime.innerHTML = data[1].timeframes.monthly.previous;
	studyPreTime.innerHTML = data[2].timeframes.monthly.previous;
	exerPreTime.innerHTML = data[3].timeframes.monthly.previous;
	socialPreTime.innerHTML = data[4].timeframes.monthly.previous;
	selfPreTime.innerHTML = data[5].timeframes.monthly.previous;
}