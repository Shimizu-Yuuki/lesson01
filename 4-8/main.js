const str = "こはるはるここはるここはるはるここはるこはるはるはる"
let arr=[];
let str2="こはる";
let str3="はるこ";
let koharu=Number([]);
let haruko=Number([]);

for(let i=0;i<str.length;i++){
  //arr.push(str[i]);
  if(str[i]+str[i+1]+str[i+2]===str2){
    koharu +=1;
  }else if(str[i]+str[i+1]+str[i+2]===str3){
    haruko +=1;
  }
}
//console.log(arr);
console.log(`こはる:${koharu}`);
console.log(`はるこ:${haruko}`);
