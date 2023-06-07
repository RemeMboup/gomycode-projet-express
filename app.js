const express=require("express")
const routes=require('./routes')
const app = express()

app.set('view engine','pug');
app.set('views','./views');

//  Definission des jours ou l application sera disponible
function requestDays(req, res, next){
    const requestTime = new Date();
    currentDay = requestTime.getDay()
    console.log(currentDay)
    if(currentDay>=1 && currentDay<=5){
        next()
    }
    res.status(404).send("The web application is only available during working days from Monday to Friday")
}

// Definission des heures ou l application sera disponible
function requestHours (req, res, next) {
    const requestTime = new Date();
    currentHours = requestTime.getHours()
    if(currentHours>=9 && currentHours<=17){
        next()
    }
    res.status(404).send("The web application is only available during working hours from 9 to 17")

    }

const PORT = 3000;
  
app.listen(PORT, (error) =>{
    if(!error)
         console.log("Server is Successfully Running, and App is listening on port "+ PORT)
     else 
         console.log("Error occurred, server can't start", error);
     }
 );

app.use([requestDays, requestHours])
app.use("/",routes)
