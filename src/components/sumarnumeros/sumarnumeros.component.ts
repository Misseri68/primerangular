import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sumarnumeros',
  templateUrl: './sumarnumeros.component.html',
})


//Si no queremos inicializar right away podemos usar "!" , por ejemplo public suma!:number


export class SumarnumerosComponent {
  @ViewChild("cajanumero1") cajaNumero1Ref: ElementRef;
  @ViewChild("cajanumero2") cajaNumero2Ref: ElementRef;
  public suma: number;

  constructor(){
    this.cajaNumero1Ref = new ElementRef(0);
    this.cajaNumero2Ref = new ElementRef(0);
    this.suma = 0;
  }

  sumarNumeros():void{
    let num1 = parseInt(this.cajaNumero1Ref.nativeElement.value);
    let num2 = parseInt(this.cajaNumero2Ref.nativeElement.value);
    this.suma = num1 + num2
  }
}
