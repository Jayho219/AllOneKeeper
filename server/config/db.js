const mongoose = require('mongoose');
require('dotenv').config();


const connectDb = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    // mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB Connected Successfully`);
  } 
catch (err) {
    console.log("error connecting database",err);
    process.exit(0);
  }
};

connectDb();



// const connectDb = async () => {
//   try{
//       console.log(process.env.MONGOURI);
//       await mongoose.connect(process.env.MONGOURI);
//       console.log('DB Connected Successfully');
//   }
//   catch(err) {
//       console.log("error connecting database");
//       console.error(err);
//       process.exit(0);
//   }
// };

connectDb();

// const MONGODB_URI = process.env.MONGODB_URI;
// const Connection = ()=>{
//      mongoose.set('strictQuery', true);
//   mongoose.connect(MONGODB_URI,{useUnifiedTopology : true,useNewUrlParser: true})
//   .then(()=>console.log("connection successfull .."))
//   .catch((err)=>console.log("could not connect to database : error"));
// }
// Connection();

