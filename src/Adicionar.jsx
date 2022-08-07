import { useState } from "react";
import axios from "axios";
import css from "./css.css";
export function Adicionar() {
  const [nome, setNome] = useState("");
  const [datadeLançamento, setDatadeLançamento] = useState("");
  const [genero, setgenero] = useState("");
  const [diretor, setDiretor] = useState("");

  const url = "http://localhost:3000/Filmes";

  function addFilme() {
    const filme = {
      nome: nome,
      lançamento: datadeLançamento,
      genero: genero,
      diretor: diretor,
    };

    axios.post(url, filme).then(() => {
      setNome("");
      setDatadeLançamento("");
      setgenero("");
      setDiretor("");
    });
  }

  function add() {
    if (nome === "") {
      alert("Preencha o campo!");
      return;
    }
    if (datadeLançamento === "") {
      alert("Preencha o campo!");
      return;
    }
    if (genero === "") {
      alert("Preencha o campo!");
      return;
    }
    if (diretor === "") {
      alert("Preencha o campo!");
      return;
    }
    addFilme();
    alert("Filme adicionado com sucesso!!");
  }

  return (
    <div className="divTotal">
      <header>
        <h1>Adicione um novo filme!</h1>
      </header>

      <div className="input">
        <label htmlFor="nomedofilme">Nome do Filme</label>
        <input
          id="nomedofilme"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="datadelançamento">Data de lançamento</label>
        <input
          id="datadelançamento"
          type="text"
          value={datadeLançamento}
          onChange={(e) => setDatadeLançamento(e.target.value)}
        />
        <label htmlFor="genero">Gênero</label>
        <input
          id="genero"
          type="text"
          value={genero}
          onChange={(e) => setgenero(e.target.value)}
        />
        <label htmlFor="diretor">Diretor</label>
        <input
          id="diretor"
          type="text"
          value={diretor}
          onChange={(e) => setDiretor(e.target.value)}
        />
      </div>

      <div className="botao">
        <button
          onClick={() => {
            add();
          }}
        >
          Adicionar
        </button>
      </div>
      <div className="botao">
        <a className="voltarParaLista" href="/">
          Voltar para lista
        </a>
      </div>
    </div>
  );
}
