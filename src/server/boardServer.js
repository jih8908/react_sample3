const express = require('express');
var cors = require('cors');
const mysql = require('mysql');
const path = require('path'); //파일 연결
const session = require('express-session');
const { Console } = require('console');
const app = express();
app.use(cors());
app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

//ejs(jsp같은 파일) 설정
app.set('view engine', 'ejs'); //디폴트로 ejs파일 잡아둠
app.set('views', path.join(__dirname, '.'));  //.은 경로, 다른 경로일 경우 /파일명

// MySQL 연결 설정
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test1234',
    database: 'test'
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack + ' db연결 실패');
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId + ' db연결 성공!');
});

app.get('/', function (req, res) {
    res.send('Hello World');

});

app.get('/boardList', function (req, res) {
    res.render('boardList', {});
});


app.get('/boardList.dox', function (req, res) {
    // MySQL 쿼리 실행
    connection.query(`SELECT boardNo, title, userId, DATE_FORMAT(CDATETIME, '%Y-%m-%d %p %h:%i') AS cdatetime FROM TBL_BOARD`, function (error, results, fields) {
        if (error) throw error;
        //var map = {msg : "성공", list : results}원랜 map으로 보내야
        res.send(results);
    });
});

app.get('/boardView/:boardNo', function (req, res) {
    var map = req.params;//params 변하는 값
    res.render('boardView', { boardNo: map.boardNo });
});

app.get('/boardView.dox', function (req, res) {
    // MySQL 쿼리 실행
    var boardNo = req.query.boardNo;//query는 받아온, pk 필요하니까 boardNo만 가져옴
    connection.query(`SELECT boardNo, title, contents, userId, DATE_FORMAT(CDATETIME, '%Y-%m-%d %p %h:%i') 
                        AS cdatetime FROM TBL_BOARD WHERE BOARDNO = ${boardNo}`, function (error, results, fields) {
        if (error) throw error;
        //var map = {msg : "성공", list : results}원랜 map으로 보내야
        res.send(results[0]);
    });
});

app.get('/boardRemove.dox', function (req, res) {
    // MySQL 쿼리 실행
    var boardNo = req.query.boardNo;//query는 받아온, pk 필요하니까 boardNo만 가져옴
    connection.query(`DELETE FROM TBL_BOARD WHERE BOARDNO = ${boardNo}`, function (error, results, fields) {
        if (error) throw error;
        res.send({ result: "success" });
    });
});



app.get('/boardEdit/:boardNo', function (req, res) {
    var map = req.params;//params 변하는 값
    res.render('boardEdit', { boardNo: map.boardNo });
});

app.get('/boardEdit.dox', function (req, res) {
    // MySQL 쿼리 실행
    var map = req.query;//query는 받아온, map에 담아둠
    console.log("userId ==> ", req.session.userId);
    connection.query(`UPDATE TBL_BOARD SET TITLE=?, CONTENTS=?, CDATETIME=NOW() WHERE BOARDNO = ?`, [map.title, map.contents, map.boardNo], function (error, results, fields) {
        if (error) throw error;
        res.send({ result: "success" });
    });
});

// app.get('/login', function (req, res) {
//     res.render('login', {});
// });

app.get('/login.dox', function (req, res) {
    // MySQL 쿼리 실행
    var map = req.query;//query는 받아온, map에 담아둠
    connection.query(`SELECT userId, userName, pwd FROM TBL_USER WHERE userId= ?`, [map.userId, map.pwd], function (error, results, fields) {


        if (error || results.length == 0) {
            res.send({ result: "fail" });

        } else {
            req.session.userId = results[0].userId;
            req.session.userName = results[0].userName;

            res.send({ result: "success" });
        }
    });
});

app.get('/boardAdd', function (req, res) {
    res.render('boardAdd', {});
});

app.get('/boardAdd.dox', function (req, res) {
    // MySQL 쿼리 실행
    var boardNo = req.query.boardNo;//query는 받아온, pk 필요하니까 boardNo만 가져옴
    connection.query(`SELECT boardNo, title, contents, userId, DATE_FORMAT(CDATETIME, '%Y-%m-%d %p %h:%i') 
                        AS cdatetime FROM TBL_BOARD WHERE BOARDNO = ${boardNo}`, function (error, results, fields) {
        if (error) throw error;
        //var map = {msg : "성공", list : results}원랜 map으로 보내야
        res.send(results[0]);
    });
});

//오타다시보자
app.get('/idCheck.dox', function (req, res) {
    // MySQL 쿼리 실행
    var map = req.query;
    connection.query(`SELECT *  FROM TBL_USER WHERE USERID = '${map.userId}'`, function (error, results, fields) {
        if (error) throw error;
        //var map = {msg : "성공", list : results}원랜 map으로 보내야
        if (results.length == 0) {
            res.send({ result: "사용 가능한 아이디입니다" });
        }
        else {
            res.send({ result: "사용 불가능한 아이디입니다" })
        }
    });
});


//개인 플젝 쿼리

//회원가입
app.get('/signup', function (req, res) {
    // MySQL 쿼리 실행
    var map = req.query;
    connection.query(`INSERT INTO TBL_USER (USERID, USERNAME, PWD, ADDR) VALUES ('${map.userId}', '${map.userName}', '${map.password}', '${map.address}')`, function (error, results, fields) {
        if (error) { res.send({ result : "실패"})}
        else {res.send({ result : "성공"})}
        //var map = {msg : "성공", list : results}원랜 map으로 보내야

    });
});

//로그인
// app.get('/login', function (req, res) {
//     res.render('login', {});
// });

app.get('/login', function (req, res) {
    var map = req.query;
    console.log(map);
    connection.query(`SELECT * FROM TBL_USER WHERE userId = ? AND pwd = ?`, [map.userId, map.pwd], function (error, results, fields) {
        if (error || results.length === 0) {
            res.send({ result: "fail" });
            return;
        } else {
            req.session.userId = results[0].USERID;
            console.log(results[0].USERID);
            req.session.pwd = results[0].PWD;
            req.session.userName = results[0].USERNAME;
            res.send({ result: "success", userId: results[0] }); // map으로 넘기기
            //res.send({ result: "success" });
        }
    });
});



app.listen(4000);

//cors : 보안정책을 풀기위한 npm (npm i cors)
