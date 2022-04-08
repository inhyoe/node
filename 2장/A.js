// old버전의 객체리터럴 선언

var sayNode = function () {// 함수 선언(정의)
	//sayNode() 함수 정의
	console.log('Node');
};
var es = 'ES객체속성추가';
var oldObject = { // 객체 리터럴 정의
	// 키:값
	sayJS: function () { //sayJS90 메소드 정의
		console.log('JS');
	},
	sayNodeMethod: sayNode, //키:값
	sayNode, //  키 : 값의 기호가 같으면 하나로 생략 가능
	[es + 6]: 'fantastic', // 키에 변수 사용해서 속성 정의 가능
};
oldObject[es + 6] = 'Fantastic';
oldObject.ES7 = '사랑해';
// 자바스크립트에서는 실행 중 객체에
// 속성을 추가할 수 있다.
// 속성명(키)을 동적으로 변경시켜가면서
// 추가하려면 변수 처리
// 이때 사용하는 개념: 객체 <===> 연관배열
// 연관배열: 배열의 index가 문자열인 배열
oldObject.sayNodeMethod(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES객체속성추가6); // Fantastic
console.log(oldObject.ES7);


//--------------------------------
const relationship = {
	name: 'zero',
	friends: ['nero', 'hero', 'xero'],
	logFriends: function () {
		console.log("logFriends 함수 내부의 this");
		console.log('this1', this);
		var that = this; // this는 relaionship1객체
		this.friends.forEach(function (friends, index) { // 콜백함수
			console.log(
				"객체 내부의 this"
			);
			console.log('this2', this); // this가 global객체가 된다.
			console.log(that.name, index + '번째 친구', friends);
		})
	}
}
relationship.logFriends();

const relationship2 = {
	name: 'zero',
	friends: ['nero', 'hero'],
	logFrends() {
		var that = this;
		this.friends.forEach(function (friends, index) {
			console.log('this3', this);
			console.log(this.name, friends)
		})
	}
}
const test = x => x + 7 // 괄호가 하나이면 괄호 생략 가능