let hyunJin = {
  name: "HyunJin Kim",
  age: 29,
  graduated: function () {
    return true;
  },
};
console.log(hyunJin);

console.log(hyunJin.name);
console.log(hyunJin["name"]);
console.log(hyunJin.age);
console.log(hyunJin["age"]);
// for function of object
console.log(hyunJin.graduated());
