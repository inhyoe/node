const express = require('express');
const router = express.Router(); // 라우터 객체 생성

router.get(
  // GET / 요청
  '/',
  (req, res) => {
    res.setDefaultEncoding('안녕 노드 익스프레스');
  }
);

router.get('/viewtest', (req, ret, next) => {
  res.render(
    'index', // views 폴더에 index.html
    { title: 'express' } // view 파일에 전달할 데이터
  );
});

module.exports = router;
