/*Class kavramı */
class araba {
  constructor(renk) {
    this.renk=renk;
    this.hiz=0;
  }

  hizlandir() {
    this.hiz+=10;
  }
}

class MotorluAraba extends Araba {
  constructor(renk,motor) {
    super(renk);
    this.motor=motor;
  }
}
let arababir= new MotorluAraba("kırmizi","V8");
console.log(arababir.renk);


let araba = new araba("siyah");
araba.hizlandir();
console.log(araba.hiz);