const showWatch = () =>{
    let date = new Date();
    let hr = hourFormat(date.getHours());
    let min = hourFormat(date.getMinutes());
    let seg = hourFormat(date.getSeconds());
    document.getElementById('hour').innerHTML = `${hr}:${min}:${seg}`
}

const hourFormat = (hour)=>{
    if(hour < 10)
    hour = '0' + hour;
    return hour;
}

setInterval(showWatch, 1000);