(() => {

  //* Ejemplo de constructor privado
  //* Se utiliza para controlar la manera en la cual nuestras instancias son ejecutadas
  //* Un caso de uso, para manejar el patrón singleton

  //* Patrón Singleton: Cada vez que necesite instanciar a una clase, esta instancia siempre será la misma que se generó la primera y única vez.

  class Apocalipsis {

    static instance:Apocalipsis;

    private constructor( public name: string ) {

    }

    static callApocalipsis(): Apocalipsis {
      if ( !Apocalipsis.instance ) {
        Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único');
      }

      return Apocalipsis.instance;
    }

    changeName( newName: string ):void {
      this.name = newName;
    }

  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();
  
  console.log( apocalipsis1, apocalipsis2, apocalipsis3 );

  apocalipsis1.changeName('Xavier');

  console.log( apocalipsis1, apocalipsis2, apocalipsis3 );

})()