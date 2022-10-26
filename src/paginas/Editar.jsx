import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import css from "../css.css";

export function Editar() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [lancamento, setLancamento] = useState("");
  const [genero, setGenero] = useState(0);
  const [diretor, setDiretor] = useState("");
  const [listasGeneros, setListasGeneros] = useState([]);

  let navigate = useNavigate();
  const url = "http://localhost:8080/filmes";
  const urlGeneros = "http://localhost:8080/genero";

  useEffect(() => {
    getId();
    getGenero();
  }, []);

  function getId() {
    axios.get(`${url}/${id}`).then((response) => {
      setNome(response.data.nome);
      setDatadeLançamento(response.data.lancamento);
      setGenero(response.data.genero);
      setDiretor(response.data.diretor);
    });
  }
  function getGenero() {
    axios.get(urlGeneros).then((response) => setListasGeneros(response.data));
  }

  function editarFilme() {
    const filme = {
      nome: nome,
      lançamento: lancamento,
      generoId: genero,
      diretor: diretor,
    };
    axios.put(`${url}/${id}`, filme);
    alert("Editado com sucesso!!");
    navigate("/");
  }

  return (
    <div className="divTotal">
      <header>
        <h1>Editar filme {nome}</h1>
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
          value={lancamento}
          onChange={(e) => setLancamento(e.target.value)}
        />
        <label htmlFor="genero">Gênero</label>
        <select onChange={(e) => setGenero(e.target.value)}>
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
        <button onClick={() => editarFilme()}>Editar</button>
      </div>
      <div className="botao">
        <a href="/lista">Voltar para lista</a>
      </div>
    </div>
  );
}
