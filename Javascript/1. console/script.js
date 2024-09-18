console.log("안녕하세요.");
console.table({a:"a", b: "b"});

console.error('Error!');  //에러
console.warn('Warning!'); //경고


console.time('Hello');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.timeEnd('Hello'); //시간 측정해주는 코드

console.clear(); // 콘솔에 뜬 거 다 지우기