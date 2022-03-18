const svr = require('express')
const path = require('path')
const app = svr()
//app.use call defualt
//next = next function 
//(session cokkie)
app.use((req, res, next) => {
    console.log("hello wellcome")
    next()
})
app.get('/', (req, res) => {
    res.send('wellcome')
})

app.get('/admin', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
    next()
})

app.use((req, res) => {
    console.log('end')
})

//same end point get and post
app.post('/admin', (req, res) => {
    res.send('account created')
})

app.listen(3500, () => {
    console.log('server listening port http//:localhost:300')
})


//npm i exprss