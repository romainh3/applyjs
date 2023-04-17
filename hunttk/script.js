let hunt = [];

for (let i=0 ; i<=3; i++){
        let rand;
        let test
    do{
        rand = Math.floor(Math.random() * 4) + 1;
        test = rand
    }
    while(hunt.includes(test));
    hunt.push(rand);
    
}
function hunt1(){
let p = document.getElementById("h1")
if (hunt[0]==1){
    hunt[0]='Cobayachi'
}
if (hunt[0]==2){
    hunt[0]='Eageake'
}
if (hunt[0]==3){
    hunt[0]='Zestix'
}
if (hunt[0]==4){
    hunt[0]='Evil'
}
p.innerHTML = `${hunt[0]} groupe caster sur Al'ar`
}
function lecon(){
let p = document.getElementById("h2")
if (hunt[1]==1){
    hunt[1]='Cobayachi'
}
if (hunt[1]==2){
    hunt[1]='Eageake'
}
if (hunt[1]==3){
    hunt[1]='Zestix'
}
if (hunt[1]==4){
    hunt[1]='Evil'
}
p.innerHTML = `${hunt[1]} groupe caster sur VoidReaver`
}
function hunt3(){
    let p = document.getElementById("h3")
if (hunt[2]==1){
    hunt[2]='Cobayachi'
}
if (hunt[2]==2){
    hunt[2]='Eageake'
}
if (hunt[2]==3){
    hunt[2]='Zestix'
}
if (hunt[2]==4){
    hunt[2]='Evil'
}
p.innerHTML = `${hunt[2]} groupe caster sur Solarian`
}
function hunt4(){
    let p = document.getElementById("h4")
if (hunt[3]==1){
    hunt[3]='Cobayachi'
}
if (hunt[3]==2){
    hunt[3]='Eageake'
}
if (hunt[3]==3){
    hunt[3]='Zestix'
}
if (hunt[3]==4){
    hunt[3]='Evil'
}
p.innerHTML = `${hunt[3]} groupe caster sur KaelThas`
}

document.addEventListener("DOMContentLoaded",function(){
    //sélectionner le bouton click
    let btnh1 = document.getElementById("hunt1");
    let btnlecon = document.getElementById("lecon");
    let btnh3 = document.getElementById("hunt3");
    let btnh4 = document.getElementById("hunt4");
    
    btnh1.addEventListener("click",hunt1);
    btnlecon.addEventListener("click",lecon);
    btnh3.addEventListener("click",hunt3);
    btnh4.addEventListener("click",hunt4);
});
console.log(hunt)