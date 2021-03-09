const express = require('express');
const path = require('path')
const port = 8080;
const app = express();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'))

contactList = [{
        name: 'sakshi',
        phone: '123455',
    },
    {
        name: 'kar',
        phone: '67898956'
    }

]
app.get('/', function(req, res) {
    //res.send("hey i am aapp")
    res.render('home', { title: "homey", contact_list: contactList });
})
app.post('/create_cont', function(req, res) {
    //return res.redirect('/home')
    //contactList.push({
    // name: req.body.name,
    //phone: req.body.phone
    //});
    contactList.push(req.body)
    return res.redirect('back')
})
app.get('/delete-contact', function(req, res) {
    let phone = req.query.phone;
    let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    if (contactIndex != -1) {
        contactList.splice(contactIndex, 1);
    }
    return res.redirect('back')
})
app.listen(port, function(err) {
    if (err) {
        console.log("error")
        return;
    }
    console.log("server running")
})