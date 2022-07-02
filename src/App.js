import './App.css';
import Testimonio from './componentes/Testimonio';
import data from './data.json';


function App() {
  console.log(data);
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
          imagen = {data['user1'].imagen}
          nombre = {data['user1'].nombre}
          pais = {data['user1'].pais}
          trabajo = {data['user1'].trabajo}
          empresa = {data['user1'].empresa}
          testimonio = {data['user1'].testimonio}
        />
        <Testimonio 
          imagen = {data['user2'].imagen}
          nombre = {data['user2'].nombre}
          pais = {data['user2'].pais}
          trabajo = {data['user2'].trabajo}
          empresa = {data['user2'].empresa}
          testimonio = {data['user2'].testimonio}
        />
        <Testimonio
          imagen = {data['user3'].imagen}
          nombre = {data['user3'].nombre}
          pais = {data['user3'].pais}
          trabajo = {data['user3'].trabajo}
          empresa = {data['user3'].empresa}
          testimonio = {data['user3'].testimonio}
        />
      </div>
    </div>
  );
}

export default App;
