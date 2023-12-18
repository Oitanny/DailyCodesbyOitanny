const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')


const PORT=8080
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')))
app.listen(PORT,()=>{
    console.log(`Server is now listening on the port ${PORT}`)
   
})
