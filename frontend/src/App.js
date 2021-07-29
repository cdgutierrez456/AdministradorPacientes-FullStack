import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import clienteAxios from './config/axios';

// Componentes
import Pacientes from './components/Paciente';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {

  // State de la app
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsulta] = useState(true);

  useEffect(() => {
    if(consultar) {
      const consultarAPI = () => {
        clienteAxios.get('/pacientes')
          .then(respuesta => {
            // State en el resultado
            guardarCitas(respuesta.data);

            // Deshabilitando la consulta
            guardarConsulta(false);
          })
          .catch(error => {
            console.log(error);
          })
      }
      consultarAPI();
    }
  }, [consultar]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Pacientes citas={citas} />}
        />
        <Route
          exact
          path='/nueva'
          component={() => <NuevaCita guardarConsulta={guardarConsulta} />}
        />
        <Route
          exact
          path='/cita/:id'
          component={Cita}
        />
      </Switch>
    </Router>
  );
}

export default App;
