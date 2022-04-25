async function startAsync(age) {
  
    if (age > 20) return `${age} success`;
    else return`you are ${age}, not over than 20`;
  };


setTimeout(() => {
  startAsync(25).then( resolve =>
    console.log(resolve)
  );

  startAsync(15)
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((reject) => console.log(reject));
}, 1000);
