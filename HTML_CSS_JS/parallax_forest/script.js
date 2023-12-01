"use strict";

let text=document.getElementById('text');
let cloud1=document.getElementById('cloud1');
let cloud2=document.getElementById('cloud2');
let sun=document.getElementById('sun');
let mount=document.getElementById('mount');
let water=document.getElementById('water');
let btn=document.getElementById('btn');
let header=document.getElementById('header');

window.addEventListener('scroll', function(){
    let value=window.scrollY;
    text.style.top=50+value*-.1+'%';
    cloud2.style.top=value*-1.5+'px';
    cloud2.style.left=value*2+'px';
    cloud1.style.top=value*-1.5+'px';
    cloud2.style.top=value*-5+'px';
    btn.style.marginTop=value*1.5+'px';
    sun.style.marginTop=value*-.12+'px';
    mount.style.top=value*.25+'px';
    header.style.top=value*.5+'px';
})
