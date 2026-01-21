export class Persona {
    nombre;
    nacimiento;
    constructor(nom,nac) {
        this.nombre=nom;
        this.nacimiento = nac;

        this.saludar();
    }

    get edad() {
        let hoy = new Date();
        return hoy.getFullYear()-this.nacimiento;
    }

    saludar() {
        console.log("Hola, soy "+ this.nombre);
    }

    static despedirse() {
        console.log("Adios "+ this.nombre);
    }
}

export class Niño extends Persona {
    juguetes;
    camina=false;
    constructor(nom, nac, nJuguetes, camina) {
        super(nom,nac);
        this.juguetes=nJuguetes;
        this.camina=camina;
    }

    saludar() {
        super.saludar();
        console.log("Soy un niño y me llamo "+this.nombre);
    }
}