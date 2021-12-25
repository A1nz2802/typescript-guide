(() => {
  // Utilizando una función cuyo tipo de dato de retorno es never
  const error = ( message: string ):(never|number) => {
    // Never es una función que terminará con un error.
    if ( false ) {
      throw new Error( message );
    }

    return 1;
  
  };

  error('Auxilio!');
  console.log('hola mundo!')
})()