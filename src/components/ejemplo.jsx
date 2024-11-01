import {React} from 'react'

const Ejemplo = (parametros) => {
    parametros.video.nuevo = "hola";
    return ( 
        <>
        <parametros.componente {...parametros}>

        </parametros.componente>
        </>
  
);
}
 
export default Ejemplo;

<>

</>