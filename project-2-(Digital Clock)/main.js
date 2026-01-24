function updateClock(){
    const now =new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let milliseconds=now.getMilliseconds();
    let ampm=hours >= 12?"PM":"AM";

    hours=hours%12;
    hours=hours===0?12:hours

    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;
   milliseconds = milliseconds.toString().padStart(3, "0");


    document.getElementById("time").innerText=`${hours}:${minutes}:${seconds} :${milliseconds} `;
    document.getElementById("ampm").innerText=ampm;

     const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const day=days[now.getDay()];
    const date=now.getDate();
    const month=months[now.getMonth()];
    const year=now.getFullYear();

    document.getElementById("day-date").innerText=`${day}, ${date} ${month} ${year}`

    if(now.getHours()>=6 && now.getHours()<18){
        document.body.className="day";
    }
    else{
        document.body.className="night"
    }
}
setInterval(updateClock,10) ;
updateClock();