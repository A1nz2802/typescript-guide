(() => {

  //* Una interface hace lo mismo que un type
  //* La diferencia entre ambos es que las interfaces son extendibles (el extends de las clases) y type no lo es.
  //* Nota: type es muy utilizado en redux 

  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo']
  }

  let superman: Hero = {
    name: 'Clarck Kent',
    age: 60,
    powers: ['Súper velocidad', 'Súper fuerza'],
    getName() {
      return this.name;
    }
  }

})()