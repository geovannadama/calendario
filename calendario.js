function colorirData(){
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let td = calendar.getElementsByTagName('td')[parseInt(days)+5];
    td.style.backgroundColor = color;
}

//getElementsByTagName
//Qual elemento/tag os dias estão escritos?
//Como mudar estilo css com Javascript
