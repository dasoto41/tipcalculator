import "./App.css";
import MontoCuenta from "./MontoCuenta";
import Calificacion from "./Calificacion";

import Boton from "./Boton";
import Total from "./Total";
import { useState } from "react";

function App() {
  const [cuenta, setCuenta] = useState("");
  const [propinaUno, setPropinaUno] = useState(0);
  const [propinaDos, setPropinaDos] = useState(0);

  const propina = cuenta * ((propinaUno + propinaDos) / 2 / 100);
  function limpiar() {
    setCuenta("");
    setPropinaUno(0);
    setPropinaDos(0);
  }

  return (
    <div>
      <MontoCuenta cuenta={cuenta} onCuenta={setCuenta} />
      <Calificacion propina={propinaUno} onPropina={setPropinaUno}>
        Que te parecio la comida?
      </Calificacion>
      <Calificacion propina={propinaDos} onPropina={setPropinaDos}>
        Que le parecio la comida a tu compañer@?
      </Calificacion>

      <Total propina={propina} cuenta={cuenta} />
      <Boton limpiar={limpiar} />
    </div>
  );
}

export default App;
