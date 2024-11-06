import { Component } from "@angular/core";
@Component({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrl: "./deportes.component.css"
})
export class DeportesComponent {
    public numeros: Array<number>;
    public sports: Array<string>;
    constructor() {
        this.sports = ["Canicas", "Padel", "Petanca", "Curling", "Dardos", "Hola"];
        this.numeros = [2, 5, 6, 4, 3, 7, 9]
    }
}