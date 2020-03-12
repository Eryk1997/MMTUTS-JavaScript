class Person{
    constructor(name, eyeColor, age){
        this.name = name;
        this.eyeColor = eyeColor;
        this.age = age;
    }

    getName() {return this.name;}
    getEyeColor() {return this.eyeColor;}
    getAge() {return this.age;}

    setName(name){this.name = name;}
    setEyeColor(color){this.eyeColor = color;}
    setAge(age){this.age = age;}
}

let user = new Person('Eryk', 'green', 22);
console.log(user.getName());
user.setAge(25);
user.setName("Wojtek");
console.log(user.getName());
console.log(user.getAge());