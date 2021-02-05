const express = require('express');
const router = express.Router();

function isAuthenticated(){
//     if(1 == 1){
//         return next();
//     }else{
//         return next;
//     }
 }



router.get('/editInfo' , isAuthenticated, (req,res)=>{
    res.render('editInfo', {
        title : 'Edit info'
    })
})



// dashboard
router.get('/dashboard',  (req,res,next)=>{
    res.render('dashboard', {
        title : 'User Dashboard'
    })
});



router.get('/logout', isAuthenticated, (req,res)=>{

});

router.get('/cart',  (req,res)=>{
    res.render('cart', {
        title: 'Cart'
    })
})


router.get('checkout', (req,res)=>{
    res.render('checkout',{
        title : 'Check Out'
    })
})

router.get('/comfirm', isAuthenticated,(req,res)=>{
    res.render('confirm', {
        title : ''
    })
})


module.exports = router;
