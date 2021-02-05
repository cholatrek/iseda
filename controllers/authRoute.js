const express  = require('express');
const router =  express.Router();
const fetch = require('node-fetch')

// iser sign up
router.post('/signup', async(req,res)=>{
    console.log(req.body);
   
    const urlApi = 'https://green-marketng.herokuapp.com/user/signup'; 
    const entry = {

            "firstname": "kolawole",
            "lastname": "oluwasegun",
            "email": "skolly1lhl5sk0mlkkl@gnoimakil.comeikfr",
            "username": "skoll;ljoflj[lmokllyemksepl",
            "dateofbirth": "12-07-2009",
            "password": "kollybright150",
            " address": "house 5, stateline",
            "phoneNo": "08037685376",
            "address": "House 5"
    }

        try{

           await fetch(urlApi, {
            method : 'POST',
            body:JSON.stringify(entry),
            headers: { 'Content-Type': 'application/json' },
            // redirect: 'follow'
           })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                // console.log(res.json);
                if(data.message == 'this mail already exist'){
                    console.log('error');
                    req.flash('message', data.message)
                    res.render('about',{
                        title:'about',
                        message : req.flash('message')
                    })
                }
                if(data.message =='User created ' ){
                    console.log('error')
                    req.flash('message', data.message)
                    res.redirect('/');
                }
                // console.log(data.message)
                //    if(res.status == 200){
                //       console.log('great')
                //  }
    
                 req.flash('message', data.message)
                //  res.redirect('/')
              
            })


        }catch(err){
            // res.send('already encountered an error')
            console.log(err)
        }

       
        
    
})


// router.post('/login', (req,res)=>{
//     // res.render('about', {
//     //     title : 'like emmanuel'
//     // })
//     res.redirect('/about')
// })


// sign in a user 
router.post('/login', async(req,res)=>{

   

    const urlApi = 'https://green-marketng.herokuapp.com/user/login';
    const entry = {
        'email' : req.body.email,
        'password' : req.body.password
    }
   
           

    try{

        await fetch(urlApi, {
            method:'POST',
            body : JSON.stringify(entry),
            headers: { 'Content-Type': 'application/json' }

        })
        // .then(res = res.json())
        .then( data =>  {
            console.log("The status of the message is " + data.status);
            
            if(data.status == 200 ){
                console.log(data);
                req.flash('message' , 'successful')
                  // res.redirect('/contact')
                res.render('index', {
                    title : 'about',
                    message : req.flash('message')          
                })
              
            }
            
        // })
        

        })

      

    }catch(err){
        
    }
    


})





module.exports = router;