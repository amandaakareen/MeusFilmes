import { useState, useEffect } from "react";
import axios from "axios";
import css from "../css.css";

export function Cadastrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [senha, setSenha] = useState("");

  const url = "http://localhost:8080/cadastro";

  function addUsuario() {
    const usuario = {
      nome,
      email,
      nascimento,
      senha,
    };

    axios.post(url, usuario).then(() => {
      setNome("");
      setEmail("");
      setNascimento("");
      setSenha("");
      alert("Usuario adicionado com sucesso!");
    });
  }

  function verificarCampos() {
    if (nome === "") {
      alert("preencha o campo NOME");
      return;
    }
    if (email === "") {
      alert("preencha o campo EMAIL");
      return;
    }
    if (nascimento === "") {
      alert("preencha o campo NASCIMENTO");
      return;
    }
    if (senha === "") {
      alert("preencha o campo SENHA");
      return;
    }
    addUsuario();
  }

  return (
    <div className="divTotal">
      <header>
        <h1> Criar uma nova conta</h1>
      </header>

      <div className="input">
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Nascimento</label>
        <input
          type="text"
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
        />
        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div className="botao">
        <button
          className="botao"
          onClick={() => {
            verificarCampos();
          }}
        >
          cadastre-se
        </button>
      </div>
      <div className="botao">
        <a href="/login">fazer login</a>
      </div>
    </div>
  );
}
