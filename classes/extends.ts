(() => {

  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ){
      console.log('Constructor Avenger Llamado!');
    };

    protected getFullName() {
      return `${ this.name } ${ this.realName }`;
    };
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant:boolean,
    ){
      super( name, realName );
      console.log('Constructor Xmen Llamado');
    }

    get fullName(): string {
      return `${ this.name } - ${ this.realName }`
    }

    set fullName( name: string ) {

      if ( name.length < 3 ) {
        throw new Error('El nombre debe de ser mayor de 3 letras')
      } 

      this.name = name;
    }

    getFullNameDesdeXmen() {
      console.log( super.getFullName() );
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);
  console.log( wolverine.fullName );

  wolverine.fullName = 'Br'
  console.log( wolverine.fullName );

  // wolverine.getFullNameDesdeXmen();

  //* protected: Acceder a métodos y propiedades dentro de clases que extiendan de la clase que tenga la propiedad/método protected.
  //* protected: Métodos/propiedades que sólo funcionan dentro de clases que extiendan de la misma.
  //* private: Métodos/propiedades que solo pueden ser accedidos desde la clase en la cual se define.
})()