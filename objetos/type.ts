(() => {

  //* type se utiliza para obligar o poner reglas (constraints) al objeto o variable que estamos definiendo
  //* funciona como un tipo común y corriente (string,number,etc)

  type Hero = {
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