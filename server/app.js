
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport')

const strategy = require('./routes/passport-jwt')

//Routes
const envTest = require('./routes/admin/envTest')
const adminWords = require('./routes/admin/words')
const getWord = require('./routes/assess/wordRoute')
const adminSpellingTests = require('./routes/admin/spellingTests')
const adminAssessments = require('./routes/admin/assessments')
const signup = require('./routes/user/signup')
const login = require('./routes/user/login')


const app = express()

//configure auth
passport.use(strategy)

// configure body parser
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static('frontend/build')) 

  app.use('/api/envtest', envTest) 
  app.use('/api/words', adminWords)
  app.use('/api/spellingtests', adminSpellingTests)
  app.use('/api/getword', getWord)
  app.use('/api/assessments', adminAssessments)
  app.use('/signup', signup)
  app.use('/login', login)

//if you dont have this and the use static above then Safari doesn't work
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });

module.exports = {app}