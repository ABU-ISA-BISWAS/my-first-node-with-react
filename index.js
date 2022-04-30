const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});
const users =[
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
      
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
      
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org"
     
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca"
      
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info"
      
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
     
    }
    
  ];
app.get('/users', (req, res) => {
  if(req.query.name){
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user=>user.name.toLowerCase().includes(search));
    res.send(matched);
  }
  else{
    res.send(users);
  }
    
  });

  app.get('/user/:id', (req, res) => {
      const id = parseInt(req.params.id);
      const user = users.find(u => u.id === id);
    res.send(user);
  });
  app.post('/user',(req,res)=>{
    const user = req.body;
    user.id = users.length +1;
    users.push(user);
    res.send(user);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});