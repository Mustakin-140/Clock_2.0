setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');

    let hrs = new Date().getHours();
    let mins = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let am = hrs >= 12 ? "PM" : "AM";
    
    
    if(hrs > 12){
        hrs = hrs - 12;
    }
    
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    sec = (sec < 10) ? "0" + sec : sec;


    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    seconds.innerHTML = sec;
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * hrs) / 12;
    mm.style.strokeDashoffset = 440 - (440 * mins) / 60;
    ss.style.strokeDashoffset = 440 - (440 * sec) / 60;

    hr_dot.style.transform = 'rotate(${hrs * 30}deg)';
    min_dot.style.transform = 'rotate(${mins * 6}deg)';
    sec_dot.style.transform = 'rotate(${sec * 6}deg)';
})

