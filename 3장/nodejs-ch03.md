# 3. 노드 기능 알아보기

## 3.1 REPL사용하기
* cmd창에서 node + 엔터로 입력
  * 프롬프트가 '>' 표시됨
  * js소스코드 입력
* 종료 : ctrl + c(2번) or exit사용


## 3.2 JS 파일 실행
* 긴 소스코드는 REPL로 실행시키기 어렵다.
* 긴 소스코드는 js파일로 작성하고 cmd창에서
  - node실행시킬파일.js

## 3.3 모듈 설정

* 하나의 소스코드로 서비스 실행되는 경우는 거의 없음
  - 관리를 위해 모듈 개념 사용
  - 모듈(module) : 특정 기능을 수행하는 함수 또는 변수의 집합 --> 재사용 가능 --> 소스코드의 재사용성을 높임 
* 모듈 정의
  - module.exports
* 모듈 사용
  - require(사용모듈경로)
* 모듈일지라도 확장자 js
  - ES6이후 모듈을 구분하기 위해 확장자 mjs
  - moudle.exports 
  ---> export default 모률로 사용할 객체

  - require(사용모듈경로)
   ---> import{변수명} from 사용모듈 경로
        React, Vue에서 사용

## 3.4 노드의 내장객체
- 따로 설치하지 않고 사용 가능

### 3;4.1 global
* 전역객체 , 브라우저-window객체와 같은 역할.
  - window.setTimeout ==> setTimeout
  - global.setTimeout() --> setTimeout()
* global키워드 생략가능
* [global.]console.log() 
* 모든 js에서 공유하는 객체
- 공유데이터 사용시키기 가능: 사용을 권장아지 않음
* js에서는 실행중 객체에 동적으로 속성 추가 가능

### 3.4.2 console객체
* [global],clg 객체
  - 주로 디버깅용 : 변수값 확인 에러 내용 확인
  - 소스코드의 실행시간 조사
    consloe.time(식별문자열) : 실행시킨 조사 시작
    console.timeEnd(식별문자열) : 실행시간 조사 종료&표시

### 3.4.3 타이머
* set+머시기 함수 : 반환값은 타이머 ID이다.
  - setTimeout(콜백,밀리초) : 한번만 타이머 작동
  - setInterval(콜백,밀리초) : 밀리초단위로 여러번
  - setImmediate(콜백) : 즉시로 실행
    - setTimeout(콜백,0) : 사용하는것을 권장하지 않음 (질문) : 아예다른가?

* clear+머시기(타이머ID) : 해당 타이머의 실행 중지
  - clearTimeout(콜백,밀리초) : 
  - clearInterval(콜백,밀리초) : 
  - clearImmediate(콜백) : 클리어 이미디에이트를 사용하면 전에 사용하던 setImmediate는 실행x

  ```js
  const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');

  }, 1500);

  const interval = setInterval(() => {
    let a = 1;
    console.log(`${a}초마다 실행`);
    a++;
  }, 1000);

  const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다');
  }, 3000);

  setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
  }, 2500);

  const immediate = setImmediate(() => {
    console.log('즉시 실행');
  });

  const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다');
  });

  clearImmediate(immediate2);
  ```


### 3.4.4 __filename, __dirname
* __filename : 현재 파일의 경로(파일명 포함)
* __dirname : 현재 파일의 디렉토리 경로(파일명 불포함)
  - 경로구분자
    - 윈도우: \
    - 맥,리눅스 : / 

## 3.4.5 module, exports, require
* 모듈만들기
  - module.exports에 객체를 모듈로 사용할 객체정의해서 대입
    - 모듈이라는 객체안에 exports를 하는것
  - exports로도 모듈 만들기 가능
    - exports 객체 (문제점질문) 
    - 속성으로만 정의하기 권장.
  - module.exports ==> exports ==> true

- 노드에서 this 사용 유의하기
 - 최상위스코프 (anonymous)에서 this : module.exports
 - 함수내의 this : global객체
  - 화살표 함수내의 this는 module.exports객체
 - 참고 : 동일한 소스코드의 브라우저에서 실행
  - 최상위스코프(anonymous) this : window객체
  - 함수내의 this : window객체
  - 화살표함수내의 this : window객체
 - 정리 : 화살표 함수내의 this는 화살표 함수를 감싸고 있는 스코프(context)의 this

* require(경로) : 함수 호출, 반환 --> 모듈 exports해 둔 객체
  - require.cache  -> 속도를 빠르게 하기 위함 (캐시메모리)
    - 모듈을 다시 로드하지 않고 캐쉬에 있는 정보르 ㄹ이용
  - require.main   -> 
    - 현재 실행되고 있는 모듈.

* require시 주의사항 : 순환참조 - 상호 require
  * 피해야 함

### 3.4.6 process
* process, thread
* process개체
  - 현재 실행되고 있는 노드 프로세스 정보
  - node.exe가 메인 메모리에 로드된 후의 정보

### 3.4.6.1 process.env
* 노드 프로세스가 실행되고 있는 환경의 정보
* 환경 시스템(os)의 환경변수를 참조
* 환경정보의 수정,추가,삭제 가능
* env에 정보 추가
  * 키 = 값형태로 추가를 함.
* 주요한 비밀 정보를 process.env에 젖아하여 사용할 필요 
 - db서버의 접속 Id, pw등 


### 3.4.6.2 process.nextTick(콜백)
* task
  - setTimeout(콜백,0);
  - setImmediate(콜백);

* micro task ( 더 빨리 실행된다 ) 
  - process.nextTick(콜백);
  - Promise.resolve().then(콜백);

### 3.4.6.3 process.exit(종료코드)
* 프로세스의 종료
  - 서버외의 노드 응용 프로그램에서 실행을 종료하려고 할때
  - 종료코드
    - 1: 비정상 종료
    - 0또는 인수없음: 정상 종료

## 3.5 노드의 내장 모듈
* 노드 설치시 함께 설치된 모듈, require()해야함
 
## 3.5.1 os 모듈
* require('os')

## 3.5.2 path 모듈
* 경로 정보를 다루기 위해 사용하는 모듈
* os별로 경로 구분자가 다름
  - windows : \
  - mac,linux,unix(POSIX) : /
* 파일명, 확장자 처리에 도움이 됨.
* 노드에서 최초 상대경로의 시작점 : require.main정보

### 3.5.3 url 모듈
* url 정보를 다루는 모듈
* 2가지 버전 (교과서 p119 그림 3-7)
  - old style: node 6 버전 
    - querystring 모듈 사용
  - new style(WHATWG 방식) : node 7 버전이후
    - searchPrams로 search 정보를 객체로 관리

### 3.5.4 querystring
* 기존 url객체에서 query부분을 다루기 위해서
    
### 3.5.5 crypto 모듈
* 암호화 처리 모듈
* 암호화의 종류: 2가지
  - 1. 단방향 암호화: 암호화는 가능, 복호화 불가능
      해시함수를 사용
      해시함수: 문자열을 고정된 길이의 다른 문자열로 수정하는 함수
      평문 ---> 암호문 O : 암호화 (encoding)
      암호문 ---> 평문 X : 복호화 (decoding)
      패스워드 ---> 암호화된 패스워드 O
      암호화된 패스워드 ---> 패스워드 X
      주로 사용되는 메소드 : pbkdf2. scrypt. bscrypt (교과서 424 참고)
      평문 + sault의 반복횟수를 추가하여 암호화 정도를 높임.
      응용예 : 로그인 처리
  - 2. 양방향 암호화: 암호화와 복호화가 가능한 방식
    - 인증서(공인인증서), https
    
### 3.5.6
* utility 도구

### 3.5.7 worker_threads

* 노드에서 멀티 쓰레드 방식으로 작업하게된 코딩
* isMainThread
* on,once
* new Worker(
* post Message()
*

### 3.5.8 child_process
* 멀티프로세싱 코딩
* 자바스크립트엔진 실행 중 다른 프로세스(예, 파이썬의 실행) 결과를 사용하려고 할 때 이용하는 모듈
* exec
  - shell
* spawn
  - shell, 다른 프로세스


## 3.6 FS(File system)
* fs모듈 사용
  - 파일 또는 폴더의 생성, 삭제 읽기 쓰기.
  - readFile, writeFile
  - 비동기 처리: 콜백처리, 프라미스 객체로 처리 가능, async/await실습

### 3.6.1 동기/비동기
* 노드의 대부분의 내장 모듈들은 비동기 처리
* fs 모듈
  - 비동기 처리: 메소드명() : readFile()
    - 콜백지옥 --> 프로미스처리 , async/await 처리
  - 동기처리: 메소드명Sync() : readFileSync()
    - 꼭 필요한 경우에만 사용, 싱글쓰레드 점유할 수 있기 때문
      - 시험문제
  
### 3.6.2 Buffer, Steam
 - 파일 처리 방식
  - 버퍼이용 : Buffer 객체를 만들어서 사용
    - 동양상 플레이 버퍼링 (Buffering)
    - 사용할 수 있을 정도(정해진 크기)의 데이터를 모으는 동작
    - 146p 참고
      - const 버퍼명 = Buffer.from(문자열)
      - 버퍼명.length() // 길이
      - 버퍼명.toString()
      - Buffer.concat(배열) : 문자열 합치기
      - Buffer.allow(바이트단위) : 빈 버퍼를 생설하고 바이트를 인자로 지정해주면 해당 크기의 버퍼가 생성됨.
      - 버퍼를 과하게 사용하면 메모리가 과하게 사용됨. => 이를 해결하기 위해 Stream 등장
  - 스트림이용
    - 라이브 방송(동영상 실시간 송출) (Streaming)
    - 일정한 크기로 나눠서 여러번에 걸쳐서 처리 : 버퍼의 크기를 작게 만들어 버퍼를 지속적으로 전달함
    - 읽는 스트림
    - 쓰는 스트림

### 3.6.4 쓰레드 풀

## 3.7 이벤트 처리
* event모듈 : 사용자 정의 이벤트 처리
  * 이벤트 객체를 만들고
  * 이벤트의 발생
    - 이벤트객체명.emit(이벤트명) : 이벤트를 호출하는 메서드
  * 이벤트의 핸들링
    - 이벤트객체명.on(이벤트명,콜백) : 여러번 실행되는 이벤트
    - 이벤트객체명.once(이벤트명, 콜백) : 한번만 
    - 이벤트객체명.addListener(이벤트명,콜백) : on과 기능이 같다
  * 이벤트 핸들링 취소
    - 이벤트객체명.removeListener(이벤트명,콜백)
      - 콜백은 on, addListener의 콜백과 같아야함.
    - 이벤트객체명.removeAllListener(이벤트명)
    - 이벤트객체명.off(이벤트명,콜백) : removeListener과 같다.
  * 등록된 이벤트 핸들링의 갯수
    - 이벤트객체명.listenerCount(이벤트명) : 현재 리스너가 몇개 연결되어있는지 확인
## 3.8 예외처리
  - 예외 : 처리못한 에러, 예외는 노드의 중단을 초래할 수 있어 자 처리해야함
  - try~catch()
  - 예외의 발생
    - throw new Error(에러내용)