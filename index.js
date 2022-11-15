const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {

  return (seconds) => {
   let time = parseInt(seconds) * 60
    let timer = setInterval(function () {
      let sec = time%60
      let minutes = time/60%60
      let hour = time/60/60%60
      if (time <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
      } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${sec}`;
        timerEl.innerHTML = strTimer;
      }
      --time;
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();


inputEl.addEventListener('input', (ev) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = ev.target.value.replace(/[^0-9\.]/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
