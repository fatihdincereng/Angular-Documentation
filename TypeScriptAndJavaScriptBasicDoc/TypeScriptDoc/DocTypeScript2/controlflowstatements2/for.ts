for (let i = 0; i < 10; i++) {
    //console.log(i);
}

var dizi:any=[2,4,6,8];
for (const i in dizi) {
}

for(let i=1;i<11;i++){
}
function ikiyebol(value){
    return value / 2;
}
var arrayim:Array<number> =[4,8,16,24];
var yeniarrayim=arrayim.map(ikiyebol);
for ( let t in yeniarrayim){
    console.log(yeniarrayim[t]);
}
