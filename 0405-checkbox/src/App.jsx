import React from 'react';

const App = () => {
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState([]);

  function handleChange({target}){
    setCores([...cores, target.value])
  }

  return (
    <form>
      <label>
        <input 
          type="checkbox" 
          value="Termos" 
          checked={termos} 
          onChange={({target}) => setTermos(target.checked)}
          />
        Aceito os termos.
      </label>*/
      <label>
        <input 
          type="checkbox" 
          value="Termos" 
          //checked={termos} 
          onChange={handleChange}
          />
        Azul
      </label>
      <label>
        <input 
          type="checkbox" 
          value="Termos" 
          //checked={termos} 
          onChange={handleChange}
          />
        Vermelho
      </label>
    </form>
  )
}

export default App
