(() => {
  let a = 'Brawer';
  const b = 'Brawer';

  const heroe = {
    a: 1,
    b: 2
  }

  //* heroe = {} Esto no se puede hacer porque heroe es una constante

  heroe.b = 100 //* Pero sí podemos cambiar los valores del objeto

  console.log( a, b);

  //* #########################################

  //* ¿Por qué usar funciones flecha?
  //* Porque normalmente las funciones flecha son funciones anónimas asignadas a una constate.
  //* Como son constante no se puede reescribir el valor de la constante, esto es conveniente.

  // const getName = () => {}
  
  //* ¿Por qué no usar las funciones tradicionales?
  function getName2() {
    console.log( 'viejo getName' );
  }

  getName2 = () => { console.log( 'Nuevo getName') }

  getName2()

  //* Por que puedes hacer esto, asignar una función normal a otra función.
  
})()