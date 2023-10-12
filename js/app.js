// Variables
const imputNombre = document.querySelector('#cursoNombre');
const btnVerInscritos = document.querySelector('.header__btn');
const datosCurso  = document.querySelector('.header__datos_curso');
const listaInscritos = document.querySelector('.main__list-estds');

const estudiantes = [];
const cursos = [];
const horarios = [];

// Clases

class Estudiante {
    constructor(codigo, nombre, carrera) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.carrera = carrera;
    }
}

class Curso {
    constructor(codigo, nombre, especialidad, duracion, creditos) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.duracion = duracion;
        this.creditos = creditos;
    }
}

class Horario {
    constructor(codigoCurso, codigoEstudiante, dia, horaini, horafin) {
        this.codigoCurso = codigoCurso;
        this.codigoEstudiante = codigoEstudiante;
        this.dia = dia;
        this.horaini = horaini;
        this.horafin = horafin;
    }
}


// Función para cargar datos del almacenamiento local
function cargarDatos() {
    const data = localStorage.getItem('horariosAppData');
    if (data) {
        const parsedData = JSON.parse(data);
        estudiantes = parsedData.estudiantes || [];
        cursos = parsedData.cursos || [];
        horarios = parsedData.horarios || [];
    }
}

// Función para guardar datos en el almacenamiento local
function guardarDatos() {
    const data = JSON.stringify({ estudiantes, cursos, horarios });
    localStorage.setItem('horariosAppData', data);
}

// Cargar datos al inicio de la aplicación
cargarDatos();



// Eventos

imputNombre.addEventListener('blur', validarFormulario);
btnVerInscritos.addEventListener('click', verInscritos);

// Funciones

function validarFormulario(e) {
    console.log(e.target.value);
}

function verInscritos() {
    console.log('Ver inscritos');
}

