(() => {
  
  //* Implementar interfaces en una clase
  
  interface Xmen {
    name: string;
    realName: string;
    mutantPower( id: number ):string;
  }

  interface Human {
    age: number;

  }

  //* No podemos extender desde una clase a una interface
  //* En su lugar debemos usar implements

  //* La palabra reservada implements se utiliza para obligar
  //* a una clase que implemente las interfaces
  class Mutant implements Xmen, Human {
    
    constructor( 
      public age:number, 
      public name:string, 
      public realName:string 
    ) {
      this.age = age,
      this.name = name,
      this.realName = realName
    }

    mutantPower( id: number ): string {
        return this.name + ' ' + this.realName;
    }
  }

})()