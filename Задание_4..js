//7.4 Задание на прототипы и классы
function ElectricItems(name, isOn, capacity) {
  this.name = name,
  this.isOn = isOn,
  this.capacity = (isOn) ? capacity: 0
}
ElectricItems.prototype.changeCapacity = function(power) {
  if (this.isOn) this.capacity = power
  else this.capacity = 0
}

ElectricItems.prototype.switcher = function(){
  this.isOn = !this.isOn
}

function Refregirator(name, isOn, mark, isNoFrost, hasCamera) {
  this.name = name,
  this.isOn = isOn,
  this.mark = mark,
  this.isNoFrost = isNoFrost,
  this.hasFrozenCamera = hasCamera
}
function VacuumCleaner(name, isOn,type, capacity) {
  this.name = name,
  this.isOn = isOn,
  this.type = type
}

Refregirator.prototype = new ElectricItems()
VacuumCleaner.prototype = new ElectricItems()

const lg_ref = new Refregirator("Холодильник", false, "SG_11", true, false);
const cleaner = new VacuumCleaner("Пылесос", true, "Робот-пылесос");
cleaner.changeCapacity(322)
console.log(cleaner)