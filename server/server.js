const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
}); 

// 미들웨어
// static 파일들이 어디있습니다 명시 ( html css js 등)
app.use(express.static( path.join(__dirname, 'public')))

app.get('/', function(요청, 응답) {
	응답.sendFile( path.join(__dirname, 'public/index.html'))
})