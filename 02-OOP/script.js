class EventEmitter {
    constructor(logger) {
        this.logger = logger;
    }
    on(eventoNombre, callback) {
        this.eventos.push([eventoNombre, callback]);
    }
    emit(eventoNombre) {
        for (let i in this.eventos) {
            if (this.eventos[i][0] == eventoNombre) {
                for (let j in this.eventos[i]) {
                    if (j != 0) {
                        this.eventos[i][j]();
                    }
                }

            }
        }
    }
    off(eventoNombre, callback) {
        for (let i in this.eventos) {
            if (this.eventos[i][0] == eventoNombre) {
                for (let j in this.eventos[i]) {
                    if (this.eventos[i][j].name == callback) {
                        this.eventos[i].splice(j, 1);
                    }
                }
            }
        }
    }
}

class ClasePelicula extends EventEmitter {

    constructor(id, titulo, año, duracion) {
        super();
        this.id = id;
        this.titulo = titulo;
        this.año = año;
        this.duracion = duracion;
        this.cast = [];
        this.eventos = [];

        this.on("play", function playListener() {
            logger.log("Se emitió el evento 'play'");
        });

        this.on("pause", function pauseListener() {
            logger.log("Se emitió el evento 'pause'");
        });

        this.on("resume", function resumeListener() {
            logger.log("Se emitió el evento 'resume'");
        });
        document.getElementById("pelis").innerHTML += `
        <div class="pelicula">
        <h2>`+ this.titulo + `</h2>
        <h3>Año: `+ this.año + `</h3>
        <h4>Duración: `+ this.duracion + `</h4>
        <button class="boton" onclick="`+ this.id + `.emit('play')">Play</button>
        <button class="boton" onclick="`+ this.id + `.emit('pause')">Pause</button>
        <button class="boton" onclick="`+ this.id + `.emit('resume')">Resume</button> 
        </div>
        `
    }

    addCast(vectorActores) {
        if (Array.isArray(vectorActores)) {
            for (let i in vectorActores) {
                this.cast.push(vectorActores[i]);
            }
        } else {
            this.cast.push(vectorActores);
        }
    }
}

class ClaseActor {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class ClaseLogger {
    constructor() { }
    log(info) {
        console.log(info);
    }
}

const pelicula1 = new ClasePelicula("pelicula1", "Avengers: Endgame", 2019, 180);
const pelicula2 = new ClasePelicula("pelicula2", "Deadpool", 2016, 108);
const pelicula3 = new ClasePelicula("pelicula3", "Guardians of the Galaxy", 2014, 120);
const pelicula4 = new ClasePelicula("pelicula4", "Joker", 2019, 120);



const actor1 = new ClaseActor("Robert Downey Jr.", 57);
const actor2 = new ClaseActor("Ryan Reynolds", 45);
const actor3 = new ClaseActor("Chriss Pratt", 43);
const actor4 = new ClaseActor("Joaquin Phoenix", 47);

