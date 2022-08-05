
(() => {
    // const tiposDeDatos: Array<String> = [
    //     "null", // tipo null
    //     "string", // tipo string
    //     "number", // tipo número, puede ser entero o racionales
    //     "boolean", // tipo booleano
    //     "undefined", // tipo undefined
    //     "[]", //de tipo array
    //     "Symbol('abc')", // de tipo symbol
    //     "{}", // tipo objeto
    //     "function(a){ return a; }" // tipo funcion
    // ]
    
    //EJEMPLOS
    
    const variable1: string = "Hola mundo!";
    const variable2: number = 1;
    const variable3: undefined = undefined;
    const variable4: boolean = true;
    const variable5: Array<number> = [ 1, 3, 4,];
    const variable6: Array<boolean> = [ true, false ];
    const variable7: (string | number | boolean)[] = ['', 1, false];
    
    // TAMBIEN PODEMOS EXPRESAR EL VALOR QUE QUEREMOS QUE RETORNE  UNA FUNCIÓN.
    const function1 = () : string => {
        return "Hola mundo!";
    }
    
    const function2 = () : number => {
        return 1;
    }
    
    const function3 = () : boolean => {
        return false;
    }
    const function4 = () : Array<number> => {
        return [1, 2, 3];
    }
    
    // DE LA MISMA FORMA PODEMOS TIPAR LOS PARAMETROS DE LAS FUNCIONES
    
    const parametros1 = ( numero1: number, numero2: number ) : number => {
        return numero1 + numero2;
    }
})()