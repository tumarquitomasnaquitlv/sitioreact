import C01componente from "./components/C01componente";
import C02contador from "./components/C02contador";
import C03componenteConCss from "./components/C03CompCss";
import C03Contador from "./components/C03dobleestado";
import Variable from "./components/C04variable";
import Operador from "./components/C05operador";
import Matriz from "./components/C06matriz";
import MatrizOperaciones from "./components/C07matrizOperaciones";


function App(){
  return (
    <div className="App">
      <h1>Practicas React</h1>
      <Matriz/>
      <hr/>
      <Variable xVariable="Hola mundo... desde.... React"/>
      <hr/>
      <C02contador/>
      <hr/>
      
      
      
      
      
    </div>
  );
}

export default App;