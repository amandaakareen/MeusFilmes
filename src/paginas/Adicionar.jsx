import { useState, useEffect } from "react";
import axios from "axios";
import css from "../css.css";

export function Adicionar() {
  const [nome, setNome] = useState("");
  const [lancamento, setLancamento] = useState("");
  const [genero, setGenero] = useState(1);
  const [diretor, setDiretor] = useState("");
  const [listasGeneros, setListasGeneros] = useState([]);

  const url = "http://localhost:8080/filmes";
  const urlGeneros = "http://localhost:8080/genero";

  useEffect(() => {
    getGenero();
  }, []);

  function getGenero() {
    axios.get(urlGeneros).then((response) => setListasGeneros(response.data));
  }

  function addFilme() {
    const filme = {
      nome: nome,
      lancamento: lancamento,
      generoId: genero,
      diretor: diretor,
    };

    axios.post(url, filme).then(() => {
      setNome("");
      setLancamento("");
      setGenero(1);
      setDiretor("");
    });
  }

  function add() {
    if (nome === "") {
      alert("Preencha o campo!");
      return;
    }
    if (lancamento === "") {
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
        <label htmlFor="datadelançamento">Data de lançamento</label>
        <input
          id="datadelançamento"
          type="text"
          value={lancamento}
          onChange={(e) => setLancamento(e.target.value)}
        />
        <label htmlFor="genero">Gênero</label>
        <select onChange={(e) => setGenero(e.value)}>
          {listasGeneros.map((genero) => {
            return <option value={genero.id + ""}>{genero.nome}</option>;
          })}
        </select>
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
        <a className="voltarParaLista" href="/lista">
          Voltar para lista
        </a>
      </div>
    </div>
  );
}
