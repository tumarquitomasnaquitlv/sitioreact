import React,{useState, Fragment} from "react";

const C03contador =() =>{
    const [valor, setValor] = useState(0);
    const [numero, setNumero] = useState(0);
    const IncrementoDos = () =>{
        setNumero(numero + 1);
        console.log("Mensaje de contador");
    }
    return(
        <Fragment>
            <button onClick={()=>setValor(valor+1)}>Contador 1</button>
            <span>Incremento de contador 1: {valor}</span>
            <hr/>
            <button onClick={()=>IncrementoDos(valor+1)}>Contador 2</button>
            <span>Incremento de contador 2: {numero}</span>

        </Fragment>
    );
}
export default C03contador