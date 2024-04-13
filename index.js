// Array donde se van a agregar las Personas 
const listaPersonas = []

// Clases 
class Personas {
    // Atributos 
    nombre;
    apellido; 
    numId;
    estadoCivil;

    constructor(nombre, apellido, numId, estadoCivil){
        this.nombre = nombre;
        this.apellido = apellido;
        this.numId = numId;
        this.estadoCivil = estadoCivil;
    }

    // Metodos 
    cambioEstadoCivil(nuevoEstadoCivil) {
        this.estadoCivil = nuevoEstadoCivil;
        return console.log("Se cambio su estado Civil a: " + this.estadoCivil);
    }
}


class Empleado extends Personas {
    // Atributos
    añoIncorporacion;
    numDespacho;

    constructor(nombre, apellido, numId, estadoCivil, añoIncorporacion, numDespacho) {
        super(nombre, apellido, numId, estadoCivil);
        this.añoIncorporacion = añoIncorporacion;
        this.numDespacho = numDespacho;
    }

    // Metodos
    reasignacionDespacho(nuevoDespacho) {
        this.numDespacho = nuevoDespacho;
        return console.log("Su nuevo despacho es el: " + this.numDespacho);
    }
}


class Estudiante extends Personas {
    // Atributos
    curso;

    constructor(nombre, apellido, numId, estadoCivil, curso) {
        super(nombre, apellido, numId, estadoCivil);
        this.curso = curso;
    }

    // Metodos
    cambiarCurso(nuevoCurso) {
        this.curso = nuevoCurso;
        return console.log("Su nuevo curso es: " + this.curso);
    }
}


class Profesor extends Empleado {
    // Atributos
    departamento;

    constructor(nombre, apellido, numId, estadoCivil, añoIncorporacion, numDespacho, departamento) {
        super(nombre, apellido, numId, estadoCivil, añoIncorporacion, numDespacho);
        this.departamento = departamento;
    }

    // Metodos
    cambioDepartamento(nuevoDepartamento) {
        this.departamento = nuevoDepartamento;
        return console.log("Su nuevo departamento es: " + this.departamento);
    }
}


class PersonalServicio extends Empleado {
    // Atributos
    seccion;

    constructor(nombre, apellido, numId, estadoCivil, añoIncorporacion, numDespacho, seccion){
        super(nombre, apellido, numId, estadoCivil, añoIncorporacion, numDespacho);
        this.seccion = seccion;
    }

    // Metodos
    cambioSeccion(nuevaSeccion) {
        this.seccion = nuevaSeccion;
        return console.log("Su nueva sección es: " + this.seccion);
    }
}


class CentroEducativo {
    // Metodo para agregar una persona
    altaPersona() {
        // Ingreso de datos por parte del usuario
        const tipoPersona = prompt("Ingrese el tipo de persona (Estudiante, Profesor, Personal de servicio)");
        const nombre = prompt("Ingrese el Nombre");
        const apellido = prompt("Ingrese el Apellido");
        const estadoCivil = prompt("Ingrese el Estado Civil");

        // Asignacion de un numero aleatorio para 'Id' y 'Numero de Despacho' 
        const numId = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
        const numDespacho = Math.floor(Math.random() * (20 - 1 + 1) + 1);

        switch(tipoPersona) {
            case "estudiante" || "Estudiante":
                // Ingreso de los datos especificos de cada tipo de Persona
                const curso = prompt("Ingrese el Curso");

                // Instancia de la Clase
                const nuevoEstudiante = new Estudiante(nombre, apellido, numId, estadoCivil, curso);

                // Lo agrega a la lista
                listaPersonas.push(nuevoEstudiante);
                break

            case "profesor" || "Profesor":
                // Ingreso de los datos especificos de cada tipo de Persona
                const departamento = prompt("Ingrese el Departamento");

                // Instancia de la Clase
                const nuevoProfesor = new Profesor(nombre, apellido, numId, estadoCivil, 2024, numDespacho, departamento);

                // Lo agrega a la lista
                listaPersonas.push(nuevoProfesor);
                break

            case "personal de servicio" || "Personal de servicio":
                // Ingreso de los datos especificos de cada tipo de Persona
                const seccion = prompt("Ingrese la Sección");

                // Instancia de la Clase
                const nuevoPersonalServicio = new PersonalServicio(nombre, apellido, numId, estadoCivil, 2024, numDespacho, seccion);

                // Lo agrega a la lista
                listaPersonas.push(nuevoPersonalServicio);
                break

            default:
                console.log("No se puede agregar ese tipo de Persona");
                break
        }
    }

    // Metodo para eliminar una persona
    bajaPersona() {
        // Ingreso del ID para eliminar a la Persona
        const id = prompt("Ingrese el id de la persona");

        // Recorre por cada elemento de la lista
        listaPersonas.map(p => {
            // Compara el id ingresado con el de cada elemento
            if(p.numId == id) {
                // Devuelve el indice del elemento
                const indice = listaPersonas.indexOf(p);
                
                // Lo elimina de la lista
                listaPersonas.splice(indice, 1);
            }
        });

        console.log(listaPersonas);
    }

    // Metodo para mostrar la lista de personas
    imprimirInfo() {
        // Recorre por cada elemento de la lista
        listaPersonas.map(i => {
            // Crea una etiqueta <p>
            var nuevoElemento = document.createElement("p");

            // Imprime todos los datos de los elementos
            nuevoElemento.textContent = `Nombre: ${i.nombre} | Apellido: ${i.apellido} | N° Id: ${i.numId} | Estado Civil: ${i.estadoCivil} | curso: ${i.curso} | Año Incorporación: ${i.añoIncorporacion} | N° Despacho: ${i.numDespacho} | Departamento: ${i.departamento} | Sección: ${i.seccion}`;

            // Lo agrega a HTML
            document.body.appendChild(nuevoElemento);
        });
    }
}
