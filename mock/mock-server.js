const express = require('express')
const data = require('./data.js')
const bodyParser = require('body-parser');
// const net = require('http')
// const url = require('url')
const fs = require('fs')
const app = express()

// 静态资源设置，不设置是访问不到的(index.html 页面访问用的)
// app.use('/public', express.static('public'))

app.all('*', function (req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type')
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
  if (req.method.toLowerCase() === 'options') {
    res.send(200) // 让options尝试请求快速结束
  } else {
    next()
  }
})

app.get('/api', (req, res) => {
  console.log(typeof req)
  console.log(req.route)
  res.send({ss:234})
})

app.get('/', (req, res) => {
  fs.readFile('index.html', (err, data) => {
    res.sendFile(__dirname + '/index.html')
  })
})

// 服务监听
const server = app.listen(8888, 'localhost', function (res,req) {
  console.log(res,req)
  const host = server.address().address
  const port = server.address().port
  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
