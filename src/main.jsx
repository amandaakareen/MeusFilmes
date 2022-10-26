import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { ListaFilmes } from "./paginas/ListaFilmes";
import { Adicionar } from "./paginas/Adicionar";
import { Editar } from "./paginas/Editar";
import { Cadastrar } from "./paginas/CadastrarUsuario";
import { Login } from "./paginas/LoginUsuario";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/lista" element={<ListaFilmes />} />
        <Route path="/adicionar" element={<Adicionar />} />
        <Route path="/editar/:id" element={<Editar />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
