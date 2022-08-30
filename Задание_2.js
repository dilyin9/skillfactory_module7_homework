let isHasProperty = function(str1, object){
  let bool = object.hasOwnProperty(str1);
  return bool
}

let stroka = "prop1";
let obj = {
  prop2: "22",
  prop1: "33"
}
console.log(isHasProperty(stroka, obj));