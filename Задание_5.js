class ElectricItems {
  //static itemCount = 0
  constructor(params) {
    this.name = params.name;
    this.isOn = params.isOn;
  }
  switcher(){
    this.isOn = !this.isOn
  }
}

class Refregirator extends ElectricItems {
  constructor(params) {
    super(params);
    this.capacity = params.capacity;
    this.mark = params.mark;
    this.isNoFrost = params.isNoFrost;
    this.hasFrozenCamera = params.hasCamera;
  }
  switcher() {
    super.switcher()
    if (this.isOn) this.capacity = params.capacity
    else this.capacity = 0
  }
}

class VacuumCleaner extends ElectricItems {
  constructor(params){
    super(params);
    this.type = params.type;
  }
  switcher() {
    super.switcher()
    if (this.isOn) this.capacity = params.capacity
    else this.capacity = 0
  }  
}

let refregirator = {
  name : "LG 5564",
  isOn : true,
  capacity : 21,
  mark: "Ji_232",
  isNoFrost : true,
  hasCamera : true
};
let vacuum = {
   name: "Xiaomi-32",
   isOn: false,
   type: "Робот-пылесос"
}

const lgFreeze = new Refregirator(refregirator);
const cleaner = new VacuumCleaner(vacuum);
console.log(lgFreeze);
console.log(cleaner);