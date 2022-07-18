const showWatch = () =>{
    let date = new Date();
    let hr = hourFormat(date.getHours());
    let min = hourFormat(date.getMinutes());
    let seg = hourFormat(date.getSeconds());
    document.getElementById('hour').innerHTML = `${hr}:${min}:${seg}`

    const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    const days = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
    let dayWeek = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let dateText = `${dayWeek} ${day}, ${month}`;
    document.getElementById('date').innerHTML = dateText;
}

const hourFormat = (hour)=>{
    if(hour < 10)
    hour = '0' + hour;
    return hour;
}

setInterval(showWatch, 1000);