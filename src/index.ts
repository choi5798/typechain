interface Human{ // interface는 ts 에서만 동작함, js에서는 동작 X
    // 예) 블록체인에서 한 블록을 interface로 정의함
    name:string;
    age:number;
    gender:string;
}

const person = {
    name: "Jerry",
    age: 24,
    gender: "male"
}

const sayHi = (person:Human):string => {
    return (`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`)
}

console.log(sayHi(person))

export {};
