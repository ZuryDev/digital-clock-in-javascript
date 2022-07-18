const showWatch = () =>{
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();
    document.getElementById('hour').innerHTML = `${hr}:${min}:${seg}`
}

setInterval(showWatch, 1000);