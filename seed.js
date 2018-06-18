const {Vegetable,db,Plot,Gardener} = require('./models')





db.sync({force: true})

.then(()=>{

  return Vegetable.bulkCreate([{name:'Bok Choy', color:'Green'},{name:'Kai Lan', color:'Green'},{name:'Broccoli',color:'Green'}])

  }).then(()=>{

  return Plot.bulkCreate({size:5,shaded:true},{size:10,shaded:false},{size:15,shaded:true})

  }).then(()=>{

 return Gardener.bulkCreate({name:'Daniel', age:50},{name:'Kenneth', age:4})

  }).then(() => {return db.close()}).catch(error => console.log(error))
