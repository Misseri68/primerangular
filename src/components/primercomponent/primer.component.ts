import { Component } from "@angular/core";

@Component({
    selector: "primer-component",
    templateUrl: './primer.component.html',
    styleUrl: './primer.component.css'
})

export class PrimerComponent{
    public titulo : string;
    public descripcion : string;
    public anyo: number;

    constructor(){
        this.titulo = "Hoy es miercoles";
        this.descripcion = "Hoy no llueve (de momento)";
        this.anyo = 2024;
    }
}