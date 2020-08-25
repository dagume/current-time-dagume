const now = new Date();
const horas = now.getHours();
const letrasHoras = [
	"Doce",
	"Una",
	"Dos",
	"Tres",
	"Cuatro",
	"Cinco",
	"Seis",
	"Siete",
	"Ocho",
	"Nueve",
	"Diez",
	"Once",
	"Doce",
	"Una",
	"Dos",
	"Tres",
	"Cuatro",
	"Cinco",
	"Seis",
	"Siete",
	"Ocho",
	"Nueve",
	"Diez",
	"Once"
]

const currentTime = () => {
	if (horas >= 6 && horas <= 11 ) {
			return console.log(`Hora actual: ${letrasHoras[horas]} de la Mañana`)
	}  
	if (horas == 12) {
			return console.log(`Hora actual: ${letrasHoras[horas]} del Mediodía`)
	}  
	if (horas >= 13 && horas <= 18) {
			return console.log(`Hora actual: ${letrasHoras[horas]} de la Tarde`)
	}  
	if (horas >= 19 && horas <= 23 || horas == 0) {
			return console.log(`Hora actual: ${letrasHoras[horas]} de la Noche`)
	}  
	if (horas >= 1 && horas <= 5) {
			return console.log(`Hora actual: ${letrasHoras[horas]} de la Madrugada`)
	}  
};
module.exports = { currentTime };
