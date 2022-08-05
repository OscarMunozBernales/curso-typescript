/**
 * Unknown type
 * Este tipo de dato es la mejora de any, ya que nos da la flexibilidad que en ocasiones queremos pero sin apagar por completo el análisis de código estático. 
 * Unknown nos fuerza a hacer una verificación de tipo.
 */


let anything : any;
anything = '';
anything = 1;
anything = [];
anything = false;
anything = {};

if ( typeof anything === 'string' ){
    anything.toLowerCase();
}
anything.toLowerCase();

// DIFERENCIAS !!!!

let unknown: unknown;
unknown = '';
unknown = 1;
unknown = [];
unknown = true;
unknown = {};

if( typeof unknown === 'string' ) {
    unknown.toLowerCase();
}
// unknown.toLowerCase();