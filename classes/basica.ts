(() => {

  class Avenger {
    
    //* private name: string = 'Name Default :P'; - private: Estas propiedades sólo pueden usarse dentro de la clase
    //* public team: string; - public: Atributo de la clase que puede invocarse dentro y fuera de la función
    //* public realName?: string;
    static avgAge: number = 35; //* static: propiedad estática, puede invocarse sin instanciar a la clase, ej Avenger.avgAge 
    static getAvgAge() {
      return this.name;
    }

    constructor( 
      private name: string, 
      private team: string, 
      public realName?: string,
      
    ) {}

    public bio() {
      return `${ this.name } (${ this.team })`
    }

  }

  const antman: Avenger = new Avenger('Antman','Capitan', 'Scott Lang'); //* Instanciando una clase
  // console.log( antman );

  console.log( Avenger.getAvgAge() );

})()