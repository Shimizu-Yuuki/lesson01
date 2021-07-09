const array1=[];
const array2=[];
//const array3=[];

for(let i=2;i<process.argv.length;i++){
  array1.push(process.argv[i]);
}

let split=array1[0].split(",");

for(let i=0;i < split.length;i++){
  let order=split[i].toLowerCase().indexOf(array1[1]);
  if(order !== -1){
    array2.push(split[i]);
  }
  array2.sort(
    function(a,b){
      return(a<b ? -1:1);
    }
  );
  
}
const result=array2.join();
console.log(result);
