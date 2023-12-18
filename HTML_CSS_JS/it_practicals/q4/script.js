table2=document.getElementById('table2')
table3=document.getElementById('table3')
table4=document.getElementById('table4')
table5=document.getElementById('table5')
table6=document.getElementById('table6')
table7=document.getElementById('table7')
table8=document.getElementById('table8')
table9=document.getElementById('table9')
table10=document.getElementById('table10')

init=0;
initnum=2;
fonts=17;
array=[table2,table3,table4,table5,table6,table7,table8,table9,table10]
var purpleShades = [
    "#E6E6FA", // Lavender
    "#D8BFD8", // Thistle
    "#DDA0DD", // Plum
    "#DA70D6", // Orchid
    "#BA55D3", // MediumOrchid
    "#9932CC", // DarkOrchid
    "#8A2BE2", // BlueViolet
    "#800080", // Purple
    "#4B0082"  // Indigo
  ];
var startPrnt=setInterval(()=>{
    string=""
    for(var i=1; i<=10; i++){

        string+=`<span style="font-size:${fonts}px; font-weight:bold;">${initnum} x ${i} = ${initnum*i}</span><br>`
    }
    array[init].innerHTML=string
    array[init].style.setProperty('background-color', purpleShades[init], 'important');
    if(init==8){
        table
        clearInterval(startPrnt)
    }
    init++
    initnum++
    fonts+=2
    console.log(fonts)
    
}, 5000)