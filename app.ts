// Funciones Básicas
function sumar( a, b ){
  return a + b;
}

const sumarTs = ( a:number, b:number ):number => a + b;

const contar = ( heroes ) => {
  return heroes.length;
}

const contarTs = ( heroes:string[] ) => heroes.length;

const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

const superHeroesTs: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contarTs(superHeroesTs);

//Parametros por defecto
/* const llamarBatman = ( llamar ) => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}
 */
// llamarBatman();

const llamarBatmanTs = ( llamar:boolean = true ): void => {
  if ( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatmanTs();

// Rest?
const unirheroes = ( ...personas: string[] ): string => {
  return personas.join(", ");
}

console.log( unirheroes('Juan Nuñez', 'Alberto Arana', 'Andres Armas') );


// Tipo funcion
const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo:string[] ) => {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (n: number, s: string, b: boolean, a: string[]) => void;
noHaceNadaTampoco = noHaceNada
