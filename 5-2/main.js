const JSON=require("./users.json");

const user=JSON.users;

for(let i=0;i<user.length;i++){
  if(user[i].rank == "A"){
    if(user[i].rank>=5){
      user[i]["salary"]=3000*user[i].years+120000;
    }else{
      user[i]["salary"]=3000*user[i].years+100000;
    }
  }else{
    if(user[i].rank=="B"){
      user[i]["salary"]=4000*user[i].years+140000;
    }else{
      user[i]["salary"]=5000*user[i].years+160000;
    }
  }
  user.sort(function(a,b){
    return b.salary-a.salary;
  })
}

for(let j=0;j<user.length;j++){
  console.log(`${user[j].name}:${user[j].salary}`);
}