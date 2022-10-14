/*
//MOSTRAR HOLA MUNDO EN CONSOLA
console.log('hola mundo');


//RECIBE UN NUMERO Y LE SUMA 1
function fcnSumarUno( numero ){
    return numero + 1;
}

//SE LLAMA A LA FUNCION
let Resultado = fcnSumarUno (5);

//SE MANDA EL RESULTADO
console.log ("Resultado: " , Resultado)
*/
// 7.
function fcnSumarUno( numero, fcnResultadoCallBack ){
    setTimeout(function(){
      //return numero + 1; 
      fcnResultadoCallBack( numero + 1 );
    }, 800);
}
/*
// LLAMAR A LA FUNCION
fcnSumarUno (5, function(nuevoValor1){
    //SE MANDA EL RESULTADO A LA CONSOLA
    console.log("Resultado:", nuevoValor1);
});

//llamar la funcion.
fcnSumarUno (5, function(nuevoValor1){
    //desplegar el resultado en consola.
    //console.log("Resultado:", nuevoValor1);
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        console.log("Resultado:", nuevoValor2);
    });
});
*/

// llamar la funcion.
fcnSumarUno (5, function(nuevoValor1){
    // desplegar el resultado en consola.
    //console.log("Resultado:", nuevoValor1);
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        //console.log("Resultado:", nuevoValor2);
        fcnSumarUno(nuevoValor2, function(nuevoValor3){
            console.log("Resultado:", nuevoValor3);
        });
    });
});