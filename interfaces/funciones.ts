(() => {

  //* Funciones dentro de interfaces
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFunction: addTwoNumbers;

  //* Aquí no le estoy indicando los parámetros que deberia usar según la interface
  addNumbersFunction = () => {
    return 10;
  }

})()