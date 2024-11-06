import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent {

  @ViewChild("caja") cajaRef: ElementRef;

  operaciones: Array<String>;
  resultados: Array<Number>;

  constructor(){
    this.cajaRef = new ElementRef(0);
    this.operaciones = [];
    this.resultados = [];
  }


  calcularTabla():void{
    this.operaciones = [];
    this.resultados = [];
    let num = parseInt(this.cajaRef.nativeElement.value);
    for(let i=1; i<=10; i++ ){
      this.operaciones.push(i + " x " + num);
      this.resultados.push(i*num)
    }
  }

}
