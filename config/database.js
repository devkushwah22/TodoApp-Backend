const { error } = require("console");
const mongoose = require("mongoose");

// aur usme apna mongodb ka url dena hoga like(process.env.DATABASE_URL)...but question aata hai ye .env file process me kaise aai, to sahi bataau to wo aai nhi hai humko .env ko process me daalna hoga uske liye humko .env library install krni hogi
require("dotenv").config();

// mongoose ke connect karne ke liye humkko ek dbConnect function banana hoga,

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then( () => console.log("DB Ka connection is Successful"))      // success hone pr
    .catch((error) => { 
        console.log("Issue in DB Ka connection"); 
        console.error(error.message );
        process.exit(1); 
        
        
        
    });
};

// ye humne apne module ko backend me export kar diya
module.exports = dbConnect;