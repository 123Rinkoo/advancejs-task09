class Student {
    constructor(name, age, phonenumber, boardMarks) {
        this.name = name;
        this.age = age;
        this.phone = phonenumber;
        this.marks = boardMarks;
    }
    eligibility(minmarks) {
        return (minage)=>{
            if(this.marks>minmarks && this.age>=minage)
            {
                console.log(`${this.name} is eligible for placement`);
            }
            else
            {
                console.log(`${this.name} is not eligible for placement`);
            }
        } 
        
    }
}
let obj1 = new Student("rinkoo", 22, 9876543213, 76);
obj1.eligibility(40)(18);
let obj2 = new Student("beena", 21, 8178443229, 75);
obj2.eligibility(40)(18);
let obj3 = new Student("hina", 18, 9638527415, 80);
obj3.eligibility(40)(18);
let obj4 = new Student("qwer", 23, 7894561235, 30);
obj4.eligibility(40)(18);
let obj5 = new Student("vbnm", 19, 8527419638, 24);
obj5.eligibility(40)(18);