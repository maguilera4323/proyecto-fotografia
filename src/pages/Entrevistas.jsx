import { ListaEntrevistas } from '../components/ListaEntrevistas';
import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHTTP';
import '../components/estilos-entrevistas.css';

export function Entrevistas() {
  const [datos, setDatos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  let api = helpHttp();
  let url = "http://localhost:4500/entrevistas";

  useEffect(() => {
    api.get(url).then((res) => {
      setDatos(res);
    });
  }, []);


  return (
    <>
      <h1 className="mt-5 text-center">Entrevistas</h1>
      <br />
        <hr />
        <div class="news-container">
          <ListaEntrevistas datos={datos} />
        </div>
        <br />
    </>
  );
}
