const playdate=require("./playdata.json");
const songs=require("./songs.json");
const songlist=songs.songs;
const datalist=playdate.data;

datalist.sort((a,b)=>{
  return b.count-a.count;
});

for(let i=0;i<datalist.length;i++){

  let data=datalist[i];

  let found=songlist.find((song)=>{
    return song.id==data.id;
  });
  const title=found.title;
  const count1=data.count;

  console.log(`${i+1}位:${title}\t${count1}`);
}