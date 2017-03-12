var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact Us' });
});

router.post('/send', function (req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user : 'real email',
            pass : "real pass"
            // pass : 'my"annoying\'password'
        }
    });

    var mailOptions = {
        from:'"John doe"<johndoe@outlook.com>',
        to: 'techguyinfo@gmail.com',
        subject: 'Website Submission',
        text: 'You hae a new sub with the following details...Name: '+ req.body.name +'Email:' +req.body.email+ 'Message:' + req.body.message,
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            console.log(err);
            res.redirect('/');
        }else{
            console.log('Message Sent: ' + info.res);
            res.redirect('/');
        }
    });
});

module.exports = router;
