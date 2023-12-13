const express=require('express')
const path=require('path')
const database = require('./database');
const bodyParser = require('body-parser');


const PORT=8080
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')))


app.use("/db",(req,res)=>{
    console.log(database.query(`select * from users`,(err,result,fields)=>{
        if(err){
            return console.log(err);
        }

    }));
})

app.post('/submit-signup', (req, res) => {
    // Handle form sign up submission and interact with the database
    const formData = req.body;
    console.log("USER SENT: ", formData);

    database.query('INSERT INTO users (email, password) VALUES (?, ?)', [formData.email, formData.password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        console.log(result  )
        res.redirect('/index.html'); 
    });
    

    // database.query('INSERT INTO users SET ?', formData, (err, result) => {
    //     if (err) {
    //         return res.status(500).json({ error: err.message });
    //     }

    //     return res.json({ success: true, result });
    // });
});


app.post('/submit-login', (req, res) => {
    // Handle form login submission and interact with the database
    const formData = req.body;
    console.log("USER SENT: ", formData);

    // Assuming your database connection is properly defined
    database.query('SELECT * FROM users WHERE email=? AND password=?', [formData.lUName, formData.lPswd], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        console.log(result);
        // Assuming the redirection path is correct
        res.redirect('/index.html');
    });
});
    // database.query('INSERT INTO users SET ?', formData, (err, result) => {
    //     if (err) {
    //         return res.status(500).json({ error: err.message });
    //     }

    //     return res.json({ success: true, result });


app.use((req,res)=>{
    res.status(404);
    res.send("<h1><span style='color:purple'>404:</span> Resource not found!</h1>")
})




app.listen(PORT,()=>{
    console.log(`Server is now listening on the port ${PORT}`)
   
})

