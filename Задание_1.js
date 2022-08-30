const printFunct = function(obj) {
  for (key in obj) {
    if (obj.hasOwnProperty(key)) console.log(key)
  }
}
let newObj = {
  a: 12,
  b: "tert"
}
printFunct(newObj);