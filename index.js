class Cat{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
        return `${this.name} says meow!`
    }
}

class Dog{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
        return `${this.name} says woof!`;
    }
}

class Bird{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
        if (this.sex === 'male') {
            return `It's me! ${this.name}, the parrot!`
        }
        else{
            return `${this.name} says squawk!`
        }
    }
}

let cat = new Cat("max","male")

cat.speak();

let dog = new Dog("Rox", "Female")

dog.speak();

let bird = new Bird("Rex","male")
let bird2 = new Bird("Mable","male")

bird.speak()
bird2.speak()