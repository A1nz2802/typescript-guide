(() => {
  // Cuando quiera que isActive sea un boolean o un undefined
  // strictNullChecks
  let isActive: (boolean|undefined) = undefined;
  console.log( isActive );

  // let isActive: boolean = null;
  // En JS se admiten 4 valores booleanos: null, undefined, true y false
  // Con la restricción de TS(nullchecks) solo se aceptan true y false
})()