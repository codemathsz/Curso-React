import './App.css';
import HelloWorld from './components/HelloWorld';// importando componente 
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <SayMyName nome="Matheus" />
      <SayMyName nome="Kaique"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Rodrigo" 
        idade="35" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"
        />
    </div>
  )
}

export default App;
