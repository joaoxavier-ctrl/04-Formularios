import React from 'react';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

const App = () => {
  //const [nome, setNome] = React.useState('');
  const [form, setForm] = React.useState({
    nome:'',
    email:'',
    senha:'',
    cep:'',
    rua:'',
    numero:'',
    bairro:'',
    cidade:'',
    estado:''
  })

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event){
    event.preventDefault();
    console.log(event);
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleChange({target}){
    const {id, value} = target;
    console.log(id, value);
    setForm({ ...form, [id]: value});
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input 
        id="nome"
        type="text" 
        name="nome"
        value={form.nome} 
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input 
        id="email"
        type="email" 
        name="email"
        value={form.email} 
        onChange={handleChange}
      />
      <label htmlFor="password">Senha</label>
      <input 
        id="password"
        type="password" 
        name="password"
        value={form.password} 
        onChange={handleChange}
      />
      <label htmlFor="cep">CEP</label>
      <input 
        id="cep"
        type="cep" 
        name="cep"
        value={form.cep} 
        onChange={handleChange}
      />
      <label htmlFor="rua">Rua</label>
      <input 
        id="rua"
        type="rua" 
        name="rua"
        value={form.rua} 
        onChange={handleChange}
      />
      <label htmlFor="numero">Numero</label>
      <input 
        id="numero"
        type="numero" 
        name="numero"
        value={form.numero} 
        onChange={handleChange}
      />
      <label htmlFor="bairro">Bairro</label>
      <input 
        id="bairro"
        type="bairro" 
        name="bairro"
        value={form.bairro} 
        onChange={handleChange}
      />
      <label htmlFor="cidade">Cidade</label>
      <input 
        id="cidade"
        type="cidade" 
        name="cidade"
        value={form.cidade} 
        onChange={handleChange}
      />
      <label htmlFor="estado">Estado</label>
      <input 
        id="estado"
        type="estado" 
        name="estado"
        value={form.estado} 
        onChange={handleChange}
      />
      <button>Enviar</button>
      {response && response.ok && <p>Usuário Criado</p>}
    </form>
  );
};

export default App
