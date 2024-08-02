/* import { ListaLibros } from "../components/ListaLibros";  */
/* import { useState } from "react"; */
/* import { helpHttp } from "../helpers/helpHTTP";  */

import { Link } from 'react-router-dom'


export function Galerias(){
  /* const [datos, setDatos] = useState([]); */

  /* let api = helpHttp();
  let url = "http://localhost:4500/criticas"
  useEffect(()=>{
    api.get(url).then((res)=>{
      setDatos(res)
    })
  },[])  */

    return(
      <>
        <h1 className="mt-5 text-center">Galerías</h1>
        <br />
        <hr />
        <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <p>Hola</p>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/galerias/temas">Ver Más +</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <p>Hola</p>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/galerias/estilos">Ver Más +</Link>
                </div>
              </div>
            </div>
          </div>  

      </>
    )
  }