const arg=process.argv[2];
const time=arg.split(':');

for(let i=0;i<time.length;i++){
  time[i]=Number(time[i]);
}

time[1]=time[1]+45;

if(time[1]>60){
  time[0]=time[0]+1;
  time[1]=time[1]-60;
}

if(time[0]>=24){
  time[0]=time[0]-24;
}
console.log(time[0]);
console.log(time[1]);