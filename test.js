function Person(name) {
  this.name = name; // 초기화
  this.introduce = function () {
    // 초기화
    return "My name is " + this.name;
  };
}
const p1 = new Person("egoing");
console.log(p1);

const p2 = new Person("leezche");
console.log(p2.introduce());
