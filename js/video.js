let match = 1
const base = 'https://docs.google.com/spreadsheets/d/1KWi_JviCwOHwk8ICm3P5Pz512ulvox6Txj_3y4X_z_c/gviz/tq?'
const query = encodeURIComponent('Select *  ')
const url = base + '&tq=' + query;
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
        let data
        const response = await fetchWithTimeout(url, {
          timeout: 6000
        })
        .then(res => res.text())
        .then(rep =>{
            data = JSON.parse(rep.substr(47).slice(0,-2));
        });
        console.log(data.table.rows)
        console.log(data.table.rows[0].c[match+1]?.v)
        document.querySelector('.sblue').innerHTML = data.table.rows[5].c[6]?.v
        document.querySelector('.sred').innerHTML = data.table.rows[5].c[1]?.v
        document.querySelector('.b1').innerHTML = data.table.rows[2].c[5]?.v
        document.querySelector('.b2').innerHTML = data.table.rows[3].c[5]?.v
        document.querySelector('.b3').innerHTML = data.table.rows[4].c[5]?.v
        document.querySelector('.r1').innerHTML = data.table.rows[2].c[0]?.v
        document.querySelector('.r2').innerHTML = data.table.rows[3].c[0]?.v
        document.querySelector('.r3').innerHTML = data.table.rows[4].c[0]?.v
        
        getData()
      } catch (error) {
        // Timeouts if the request takes
        // longer than 6 seconds
        console.log(error.name === 'AbortError');
      }  

}


function start() {
    let minute = 0;
    let second = 3;
    let operation = 1
    document.querySelector(".timer").style.fontSize = `4vw`
    countdown(minute, second, operation)
     
    // countdown(minute, second)
    

}
function countdown(minute, second, operation) {
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
                var mend = new  Audio('match_end.mp3')
                mend.play()
                document.querySelector(".timer").innerHTML = "GAME OVER";
                clearInterval(timer)
            }
            if (operation === 1) {
                document.querySelector(".timer").innerHTML = ""
                document.querySelector(".timer").style.fontSize = `0.3vw`
                var mstart = new  Audio('match_start.wav')
                mstart.play()
                document.querySelector(".timer").innerHTML = "START"

                document.querySelector(".timer").style.fontSize = `4vw`

                minute = 2
                second = 30
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
        this.document.querySelector('.logo').classList.toggle('score_anima')
        this.document.querySelector('.timer').classList.toggle('score_anima')
    }
    if (e.key === 'b')
    {

    }

})
