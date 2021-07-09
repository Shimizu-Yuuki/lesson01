const kobe=require("./kobe.json");
const arr=[];

function print(n){
  for(let key in n){
    let num=n[key];
    if(key==="kobe"){
      arr.push(num);
    }else if(key !=="kobe"){
      print(num);
    }
  }
}
print(kobe);
console.log(arr.join(""));
