import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import css from "./css.css";

export function Editar() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [datadeLançamento, setDatadeLançamento] = useState("");
  const [genero, setgenero] = useState("");
  const [diretor, setDiretor] = useState("");
  let navigate = useNavigate();
  const url = "http://localhost:3000/Filmes";

  useEffect(() => {
    getId();
  }, []);

  function getId() {
    axios.get(`${url}/${id}`).then((Response) => {
      setNome(Response.data.nome);
      setDatadeLançamento(Response.data.lançamento);
      setgenero(Response.data.genero);
      setDiretor(Response.data.diretor);
    });
  }

  function editarFilme() {
    const filme = {
      nome: nome,
      lançamento: datadeLançamento,
      genero: genero,
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
        <button onClick={() => editarFilme()}>Editar</button>
      </div>
      <div className="botao">
        <a href="/">Voltar para lista</a>
      </div>
    </div>
  );
}
