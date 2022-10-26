import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import css from "../css.css";

export function ListaFilmes() {
  const [listasFilmes, setListasFilmes] = useState([]);

  const url = "http://localhost:8080/filmes";

  useEffect(() => {
    getFilmes();
  }, []);

  function getFilmes() {
    axios
      .get(url)
      .then((Response) => setListasFilmes(Response.data))
      .catch((error) => console.error(error));
  }

  function deleteFilme(id) {
    axios.delete(`${url}/${id}`).then(() => getFilmes());
  }
  return (
    <div className="divTotal">
      <div className="usuario">Usuário: Amanda Karen</div>
      <header>
        <h1 className="icon">
          Meus filmes <i class="fa-solid fa-play"></i>
        </h1>
      </header>
      <ul>
        <li className="filme">
          <strong> Nome</strong>
          <strong> Lançamento</strong>
          <strong> Gênero</strong>
          <strong>Diretor</strong>
        </li>
        {listasFilmes.map((filme) => {
          return (
            <li className="filme">
              <span> {filme.nome}</span> <span> {filme.lancamento}</span>
              <span> {filme.genero.nome} </span> <span>{filme.diretor} </span>
              <span className="editar">
                <a href={`/editar/${filme.id}`}>
                  <i className="fas fa-pen"></i>
                </a>
                <button onClick={() => deleteFilme(filme.id)}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </span>
            </li>
          );
        })}
      </ul>
      <div className="botao">
        <a href="/adicionar">Adicionar Filme</a>
      </div>
      <div className="botao">
        <button>sair</button>
      </div>
    </div>
  );
}
