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
        const base = 'https://docs.google.com/spreadsheets/d/1FlHBhreAQ5ANk4wPLTGNdqjfPvhDk0Cf_Dv11jf0jzA/gviz/tq?'
        const output = document.querySelector('.output')
        
        const query = encodeURIComponent('Select A,B,C LIMIT 22 ')
        const url = base + '&tq=' + query;
        let data;
        const response = await fetchWithTimeout(url,{
            timeout: 10000
        })
        .then(res => res.text())
        .then(rep =>{
            data = JSON.parse(rep.substr(47).slice(0,-2));
            output.innerHTML='';
        });

        
            const row = document.createElement('tr');
            const thead = document.createElement('thead')
            output.append(thead);
            thead.append(row)
            console.log(data.table.rows)
            data.table.cols.forEach((heading)=>{
                const cell = document.createElement('th');
                cell.textContent = heading.label;
                row.append(cell);
            })
            const tbody = document.createElement('tbody')
            output.append(tbody)
            data.table.rows.forEach((main)=>
            {
                const container = document.createElement('tr');
                tbody.append(container);
                main.c.forEach((ele)=>
                {
                    const cell = document.createElement('th');
                    cell.textContent = ele?.v;
                    container.append(cell);
                    
                })
            })
            getData()
        // })
        
    } catch (error) {
        console.log(error.name === 'AbortError');
    }
  
  

}

window.addEventListener('keypress', function (e) 
{
    if (e.key === 'Enter') 
    {
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
    if (e.code === 'KeyA')
    {
        this.document.querySelector('tbody').classList.toggle('tbody_anima')
    }

})
