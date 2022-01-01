//* Los namespaces son como pequeñas clases en las cuales podemos almecenar funcionas, vaariables
//* Y solo exponemos ( con export ) lo que queramos que pueda ser visible en otros entornos
//* Se utiliza mucho para la creación de librerias/frameworks
namespace Validations {

  export const validateText = ( text: string ): boolean => {
    return ( text.length > 3 ) ? true : false;
  };

  export const validateDate = ( myDate: Date ): boolean => {
    return ( isNaN( myDate.valueOf() ))
      ? false
      : true;
  }

}

console.log( Validations.validateText('Bra') );