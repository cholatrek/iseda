const express = require('express');
const router = express.Router();



// home page 
router.get('/', (req,res)=>{
    res.render('index', { 
        title : 'Homepage',
        message : req.flash('message')
    })
})

router.get('/products', (req,res)=>{
    res.render('product', { 
        title : 'Homepage'
    })
})


// about us 
router.get('/about', (req,res)=>{
    res.render('about',{
        title : "About us"
    })
})

// contact us
router.get('/contact', (req,res)=>{
    res.render('contact', {
        title : 'Contact Us'
    })

});

// search page
router.get('/search', (req,res)=>{
    res.render('search', {
        title : 'Search'
    });
});

// category page
router.get('/categories', (req,res)=>{
    res.render('categories', {
        title: 'Categories'
    })
})


// single product routee

router.get('/singleProduct', (req,res)=>{
    res.render('single', {
       title: 'Single product'   
    })
})


router.get('/coming', (req,res)=>[
    res.render('coming',{
        title : 'Coming'
    })
])

router.get('/sellerProducts/:id', (req,res)=>{
    res.render('sellerPage', {
        title: 'Seller Pages'
    })
})




module.exports = router;