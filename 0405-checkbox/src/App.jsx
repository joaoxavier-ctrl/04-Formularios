import React from 'react';

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const App = () => {
  const [cores, setCores] = React.useState([]);
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];


  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
   <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: 'capitalize'}}>
        <input 
          type="checkbox"
          value={cor}
          checked={handleChecked(cor)}
          onChange={handleChange}
        />
        {cor}
      </label>
      ))}
   </form>
  );
};


export default App
