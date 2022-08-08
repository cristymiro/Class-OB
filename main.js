class Estudiante{
    constructor(nombre,asignaturas){
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }
    obtenDatos(){
        console.log(`El nombre es ${this.nombre} y las asignaturas son ${this.asignaturas}`)
    }
}

let estudiante_1 = new Estudiante('Cris', ['Javascript ', 'Html ' , 'CSS']);
console.log(estudiante_1);
estudiante_1.obtenDatos();

