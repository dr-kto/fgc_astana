const api_url = 'https://sheet2api.com/v1/0pNr4Oq1SZeR/fgc-match'
async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 1000 } = options;
    
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal  
    });
    clearTimeout(id);
    return response;
  }
async function getData() 
{
    try {
        const response = await fetchWithTimeout(api_url, {
          timeout: 6000
        });
        const data = await response.json();
        document.querySelector('.sblue').innerHTML = data[0].bscore
        document.querySelector('.sred').innerHTML = data[0].rscore
        document.querySelector('.b1').innerHTML = data[0].bt1
        document.querySelector('.b2').innerHTML = data[0].bt2
        document.querySelector('.b3').innerHTML = data[0].bt3
        document.querySelector('.r1').innerHTML = data[0].rt1
        document.querySelector('.r2').innerHTML = data[0].rt2
        document.querySelector('.r3').innerHTML = data[0].rt3
        
        console.log(data[0].bscore)
        getData()
      } catch (error) {
        // Timeouts if the request takes
        // longer than 6 seconds
        console.log(error.name === 'AbortError');
      }  

}


function start() {
    let minute = 0;
    let second = 10;
    let operation = 1
    document.querySelector(".timer").style.fontSize = `4vw`
    countdown(minute, second, operation)
     
    // countdown(minute, second)
    

}
function countdown(minute, second, operation) {
    document.querySelector(".timer").style.fontSize = `4vw`
    var total = minute*60+second;
    
    var timer = setInterval(function() {
        
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
            if (operation === 2) {
                document.querySelector(".timer").style.fontSize = `2vw`
                document.querySelector(".timer").innerHTML = "GAME OVER";
                clearInterval(timer)
            }
            if (operation === 1) {
                document.querySelector(".timer").style.fontSize = `0.3vw`
                var horn = new  Audio('horn.wav')
                horn.play()
                document.querySelector(".timer").innerHTML = "START"

                document.querySelector(".timer").style.fontSize = `4vw`

                minute = 0
                second = 31
                operation = 2
                countdown(minute, second, operation)
                clearInterval(timer)
            }
            
            
            
        }
        if(total === 30) {
            var horn = new  Audio('horn.wav')
                horn.play()
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
    if (e.code === 'Space')
    {
        getData()
    } 
    if (e.code === 'KeyS')
    {
        this.document.querySelector('.logo').classList.add('score_anima')
        this.document.querySelector('.timer').classList.add('score_anima')
    }
    if (e.key === 'b')
    {

    }

})
