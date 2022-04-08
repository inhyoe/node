# 씨발 프로미스

## Promise를 사용하는 이유?

- 간단하다 callbackhell을 해결하기 위햐서다.

```js
    loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
          }
        });

      }
    })
  }
});
```
- 더럽다, 존나 지저분하다

## 해결방법 

- 1번째는 함수를 독립적인 동작으로 만들어 주는 것이다

```js
    loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // 모든 스크립트가 로딩되면 다른 동작을 수행합니다. (*)
  }
};
```
- 보기엔 깔끔하지만 이런 줄이 1억줄이 있다면?
- 상상만해도 끔찍하다

### 그래서 어떻게 해결하는데?

- 이를 해결하기위해 주제에서같이 Promise가 나왔다

* 선언 방법
```js
let promise = new Promise(function(resolve,reject){

})

// 화살표 함수

let promise = new Promise((resolve, reject) => {

})

```
- 항상 함수를 화살표함수로 바꾸는 연습을 하자
- 단, function에서의 this와 화살표함수에서의 this는 매우 다르다.
- 위의 더러운 코드를 프로미스로 바꿔보자
```js

    loadScript('1.js', step1);

    function step1(error, script) {
    if (error) {
        handleError(error);
    } else {
        loadScript('2.js', step2);
    }
    }

    function step2(error, script) {
    if (error) {
        handleError(error);
    } else {
        loadScript('3.js', step3);
    }
    }

    function step3(error, script) {
    if (error) {
        handleError(error);
    } else {
        // 모든 스크립트가 로딩되면 다른 동작을 수행합니다. (*)
    }
    };
    // 이 긴줄을
    let promise = new Promise((resolve, reject)=>{
        resolve(looadScript())
    })

```