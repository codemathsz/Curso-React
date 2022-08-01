import './App.css';
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';// importando componente 
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <SayMyName nome="Matheus" />
      <SayMyName nome="Kaique"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Rodrigo" 
        idade="35" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"
        />
        <Frase/>
        <List/>
    </div>
  )
}

export default App;
