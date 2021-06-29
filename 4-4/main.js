let array=[];
//let length=10;
//for(let i=0;i<length;i++){
while(array.length<10){
let random=Math.floor(Math.random()*10);
      if(!array.includes(" "+random)){
        array.push(" "+random);
      }
}
let array1=array.join("");
console.log(array1);