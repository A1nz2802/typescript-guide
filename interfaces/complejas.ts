(() => {

  //* Cuando necesite hacer una implementación de un método (puesto que la interface sólo marca como debe lucir el objeto),
  //* entonces sería mejor implementar una clase en lugar de una interface
  interface Client {
    name: string,
    age?: number,
    address: Address,
    getFullAddress( id: string ): string,
  }

  interface Address {
    id: number,
    zip: string,
    city: string
  }

  const client: Client = {
    name: 'Fernando',
    age: 25,
    address: {
      id: 123,
      zip: 'JYS 321',
      city: 'Otawa'
    },
    getFullAddress( id: string ) {
      return this.address.city;
    }
  }

  const client2: Client = {
    name: 'Melissa',
    age: 30,
    address: {
      city: 'Toronto',
      id: 120,
      zip: 'KZG 132'
    },
    getFullAddress( id: string ) {
      return this.address.city;
    }
    
  }

  //* Las interfaces son como clases tontas o simples
  //* Las interfaces NO crean instancias
  //* Las interfaces solo dictan como deben lucir tus objetos
})()