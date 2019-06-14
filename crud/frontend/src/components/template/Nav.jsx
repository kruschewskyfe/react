import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

export default props => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home" /> Início
      </Link>
      <Link to="/users">
        <i className="fa fa-users" /> Usuários
      </Link>
      <Link to="/schedule">
        <i className="fa fa-calendar" /> Agendamentos
      </Link>
      <Link to="/stock">
        <i className="fa fa-dropbox" /> Estoque
      </Link>
      <Link to="/reports">
        <i className="fa fa-book" /> Relatórios
      </Link>
      <Link to="/config">
        <i className="fa fa-cogs" /> Configurações
      </Link>
    </nav>
  </aside>
);
