import { Component, OnInit } from "@angular/core";

@Component({
    selector: "hooks-angular",
    templateUrl: './hooksangular.html'
})

export class HooksAngular implements OnInit{
    public mensaje : string;
    constructor(){
        console.log("Soy el constructor de Hooks de Angular")
        this.mensaje="hola";
    }

    cambiarMensaje() : void{
        this.mensaje="Cambiado con click"
    }

    ngOnInit():void{
        console.log("Componente inicializado tras el constructor!")
    }

    ngDoCheck():void{
        console.log("Ejecutando método ngOnCheck")
    }



}