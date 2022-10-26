import axios from "axios";
import { useState } from "react";
import css from "../css.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const url = "http://localhost:8080/login";

  function logarUsuario() {
    const usuario = {
      email: email,
      senha: senha,
    };
    axios
      .post(url, usuario)
      .then(() => alert("usuario logado"))
      .catch(() => alert("esse usuário não existe"));
  }
  function verificarUsuario() {
    if (email === "") {
      alert("preencha o campo email");
    }
    if (senha === "") {
      alert("preencha o campo senha");
    }
    logarUsuario();
  }

  return (
    <div className="divTotal">
      <header>
        <h1>Entrar na minha lista</h1>
      </header>
      <div className="input">
        <label>Email usuário</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <label>Senha</label>
        <input type="text" onChange={(e) => setSenha(e.target.value)} />
      </div>
      <div className="botao">
        <button
          onClick={() => {
            verificarUsuario();
          }}
        >
          Entrar
        </button>
      </div>
      <div className="botao">
        <a href="">Esqueceu a conta?</a>
        <a href="/cadastrar">Criar uma nova conta</a>
      </div>
    </div>
  );
}
