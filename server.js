var express = require('express');
var session = require('express-session');
var g = new(require('generate-id'));
var bodyParser = require('body-parser');

var app = express();

var sessionOptions = {
    secret: "secret",
    resave : true,
    saveUninitialized : false
};

app.use(session(sessionOptions));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var sessions = [];

app.post('/server-login', function(req, res){

    var session = req.session;

    if(req.body.username == 'admin' && req.body.password == '1234'){

        if(session.uid == null){
            session.uid = generateUid();
            sessions.push(session);
            console.log('user just got connected ' + session.uid);
        }
        else{
            console.log('user already connected ' + session.uid);
        }
    }
    else{
        session.uid == null;
    }

    res.type('application/json');
    res.send(session);
});

app.post('/server-logout', function(req, res){
    var uid = req.body.uid;
    if(uid != null){
        sessions.forEach(function(sess){
            if(sess.uid == uid){
                delete sess;
            }
        });
    }
});

function generateUid(){
    return g.generate({
        length : 256,
        include  : ["upper", "down", "numbers"]
    });
}

app.listen(3000);