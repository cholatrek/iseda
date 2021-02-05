const express= require('express');
const app= express();
const secret = require('./config/secret');
const ejs = require('ejs');
var bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

app.set('view engine', 'ejs'); 

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))


app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 

  
// routes configuration
const pageRoutes = require('./controllers/pageRoutes')
app.use('/', pageRoutes);

const userRoutes = require('./controllers/userRoute')
app.use('/', userRoutes);

const authRoutes = require('./controllers/authRoute')
app.use('/', authRoutes);


app.listen(secret.port, ()=>{
    console.log('we are already loading')
})