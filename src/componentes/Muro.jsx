import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Muro = () => {

    const [dataMuro, setDataMuro] = useState([]);

    const navigate = useNavigate();

    const [contadorDeBorrar, setContadorDeBorrar] = useState(0);

    const getDatos = async () => {
        const url = "http://localhost:3000/api/publicacion/";
        const response = await axios.get(url);
        const datos = (await response).data;
        console.log(datos);
        setDataMuro(datos);

    }

    const borraPublicacion = async (idPost) => {

        
        const url = `http://localhost:3000/api/publicacion/${idPost}`;
        const response = await axios.delete(url);
        const datos = (await response).data;

        setContadorDeBorrar(contadorDeBorrar + 1);
        console.log(contadorDeBorrar);

    }

    const editarPublicacion = (idPublicacion) => {

        navigate(`/src/componentes/EditarPost.jsx/${idPublicacion}`);

    }

    const crearPostHandler = () => {

        navigate('/crearPost');

    }

    // siempre se ejecuta cada vez que se renderiza el componente
    useEffect(() => {

        getDatos();

    }, [contadorDeBorrar]);

    return (
        <>
            <div className="container">

                <button onClick={crearPostHandler} className="btn btn-primary  w-100" type="button" >
                    Crear Post
                </button>

                {
                    dataMuro.map((item) => (
                        <div key={item.id} className="card text-white bg-secondary mx-auto mt-3 mb-3 w-50" style={{ width: '80%' }}  >
                            <div className="card-header">
                                <label> {item.usuario} </label>

                                <button onClick={() => borraPublicacion(item.id)} className="btn btn-danger mx-2" >Borrar</button>

                                <button onClick={() => editarPublicacion(item.id)} className="btn btn-warning mx-2" >Editar</button>
                            </div>
                            <div className="card-body">
                                <p>{item.contenido}</p>
                            </div>
                        
                        </div>
                    ))
                }
            </div>
        </>
    )
}