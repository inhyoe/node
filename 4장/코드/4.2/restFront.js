async function getUser() { // 로딩 시 사용자 가져오는 함수
    try {
      const res = await axios.get('/users');
      // GET /users 요청 , 쿼리스트링 없음(모든 사용자 가져오겠다.)
      const users = res.data;

      const list = document.querySelector('#list'); // getElementById

      list.innerHTML = ''; // id가 list인 div태그의 내용을 지움
      // users: {id : name}형태, {12312312: 김영진, , 223321: 이영진, ....}
      // Object.values(users) ==> ['김영진','이영진']
      // Object.keys(users) ==> ['1233213',223321]
      // 사용자마다 반복적으로 화면 표시 및 이벤트 연결


      Object.keys(users) // users 데이터에서 키값들의 배열.
      .forEach(function (key,index,array) { // **예제 : for:each로 바꿔보자
        const userDiv = document.createElement('div'); // div태그를 열고 닫는 객체
        const span = document.createElement('span');  // span태그를 열고 닫는 객체
        span.textContent = users[key]; //span태그 안에 user의 key값을 넣어주는 객체 <span>users[12312312](---> 김영진)</span>
        const edit = document.createElement('button'); // button태그 생성
        edit.textContent = '수정';  // <button onclick = 'async () => {}'>수정<button>
        edit.addEventListener('click', async () => { // 수정 버튼 클릭
          const name = prompt('바꿀 이름을 입력하세요');
          if (!name) {
            return alert('이름을 반드시 입력하셔야 합니다');
          }
          try {
            await axios.put('/user/' + key, // Put /user/12132132
             { name } // 요청바디
             );
            getUser();
          } catch (err) {
            console.error(err);
          }
        });
        const remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.addEventListener('click', async () => { // 삭제 버튼 클릭
          try {
            await axios.delete('/user/' + key);
            // button onclick = async() => {} //삭제
            getUser();
          } catch (err) {
            console.error(err);
          }
        });
        userDiv.appendChild(span); // <div><span>김영진</span></div>
        userDiv.appendChild(edit);
        // <div><span>김영진 </span></div>
        userDiv.appendChild(remove);
        list.appendChild(userDiv);
        console.log(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  window.onload = getUser; // 화면 로딩 시 getUser 함수호출
  // window.addEventListener('load',getUser)
  // onload --> load 이벤트가 발생하면 실행되는 이벤트 핸들러 함수를 등록
  // 최초의 실행되는 것으로 인지.: java의 main메소드 역할.
  // onclick, onmouseclick, onmousemove 등등 ..  하드디스크 -> 메모리 쌓아올린다는 말을 load라고 함. 
  // **중요 html엘리먼트객체 .innerHTML, innerTEXT, textContents -> 차이점을 알아야함

  // 폼 제출(submit) 시 실행
  // restFront.html의 <form> 중에 아이디가 form인 객체(form태그)
//   document.getElementById('form').addEventListener( old
    document.querySelector('#form').addEventListener(//new
        'submit',
        //callback
        async (e) => { // form태그에서 submit한 event객체
        e.preventDefault(); // 새로고침 방지 (브라우저의 원래기능 방지.)
        const name = e.target.username.value;
        // target- form태그에 발생한 submit 처리를 위해 
        // input태그 (id - username)의 값(value)을 이용
        if (!name) { // ""이면 (빈문자열이 이면) (입력이 없으면)
        return alert('이름을 입력하세요');
        }
        // name에 문자열이 있음
        try {
            
        await axios.post( // POST /user 사용자 등록
            '/user', // url - 요청 주소
             { name }); // {name : name}, 요청 (body)
             // 비구조화 할당.
             // post /user요청 name 데이터를 등록하라고 요청
        getUser();
        } catch (err) {
        console.error(err);
        }
        e.target.username.value = ''; // 빈칸으로 되돌림.
  });