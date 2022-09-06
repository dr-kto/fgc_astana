function getData() {
  const base = 'https://docs.google.com/spreadsheets/d/1FlHBhreAQ5ANk4wPLTGNdqjfPvhDk0Cf_Dv11jf0jzA/gviz/tq?'
  const output = document.querySelector('.output')
  const query = encodeURIComponent('Select A,B,C')
  const url = base + '&tq=' + query;
  fetch(url)
  .then(res => res.text())
  .then(rep =>{
    const data = JSON.parse(rep.substr(47).slice(0,-2));
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
    data.table.rows.forEach((main)=>{
        const container = document.createElement('tr');
        tbody.append(container);
        main.c.forEach((ele)=>{
            const cell = document.createElement('th');
            cell.textContent = ele?.v;
            container.append(cell);
        })
    })
    
  })

}

getData()
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
        this.document.querySelector('tbody').classList.add('tbody_anima')
    }

})
