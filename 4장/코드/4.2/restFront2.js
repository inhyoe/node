const users = res.data;
Object.keys(users)
.map((key)=>{
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
})