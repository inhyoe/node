function goToSchool() {
    return new Promise((resolve,reject) => {
        console.log("학교에 갑니다.");
        resolve("학교에 갑니다.")
    }
        );
    
}

function arriveAtSchool_asis() {
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            console.log('도착했습니다');
            resolve("학교에 도착했습니다.");
        }, 1000);
    })
    
}

function study() {
    console.log("열심히 공부를 합니다.");
}

goToSchool()
.then(arriveAtSchool_asis)
.then(study)

