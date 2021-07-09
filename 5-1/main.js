const profiles = {
  profiles: [
    {
      name: "佐藤",
      age: 22
    },
    {
      name: "鈴木",
      age: 34
    },
    {
      name: "高橋",
      age: 42
    },
    {
      name: "田中",
      age: 15
    }
  ]
}

const profile=profiles.profiles;
profile.forEach(function(profile){
    console.log(`${profile.name}:${profile.age}`);
});