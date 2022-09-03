function start() {
    document.querySelector(".timer").innerHTML = "START"
    document.querySelector(".timer").style.fontSize = `4vw`

    var minute = 0;
    var sec = 10;
    var total = minute*60+sec;
    
    timer = setInterval(function() {
        
        var tmin = Math.floor(total/60);
        var tsec = Math.floor(total%60);
        if(tmin< 10)
        {
            tmin = "0"+tmin
        }
        if(tsec<10)
        {
            tsec = "0"+tsec
        }
        document.querySelector(".timer").innerHTML = tmin + ":" + tsec;
        if(total <= 0)
        {
            document.querySelector(".timer").style.fontSize = `2vw`
            document.querySelector(".timer").innerHTML = "GAME OVER";
            clearInterval(timer)
        }
        total--;
        if (tsec == 00) {
        tmin --;
        tsec = 60;
        if (tmin == 0) {
            tmin = 2;
        }
        }
    }, 1000);
}
window.addEventListener('keypress', function (e) 
{
    if (e.key === 'Enter') 
    {
        start()
    }   
})