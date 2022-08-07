import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import css from "./css.css";

function App() {
  const [listasFilmes, setListasFilmes] = useState([]);
  const url = "http://localhost:3000/Filmes";

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
          <strong></strong>
        </li>
        {listasFilmes.map((filme) => {
          return (
            <li className="filme">
              <span> {filme.nome}</span> <span> {filme.lançamento}</span>
              <span> {filme.genero} </span> <span>{filme.diretor} </span>
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
    </div>
  );
}
export default App;
