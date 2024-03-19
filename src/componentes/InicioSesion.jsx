import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const InicioSesion = () => {

    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        usuario: "",
        contrasena: ""
    });

    const [inicioSesion, setInicioSesion] = useState("");

    const onChangeHandler = (event) => {

        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });

    }

    const submitHandler = async (event) => {
        event.preventDefault();

       //const url = `http://localhost:3000/api/usuario/auth//${dataForm.usuario}/${dataForm.contrasena}`;

       const url = "http://localhost:3000/api/usuario/auth/" + dataForm.usuario + "/" + dataForm.contrasena;


        try {
            const result = await axios.get(url);
            const resultData = (await result).data;
            navigate('/crearPost');
        } catch (err) {
            setInicioSesion("Error de Inicio de Sesion");
        }

    }

    return (
        <>
            <div className='container mt-5' >
                <form onSubmit={submitHandler} >
                    <fieldset>
                        <legend>Inicio Sesion</legend>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Usuario</label>
                            <div className="col-sm-10">
                                <input type="usuario" className="form-control-plaintext"
                                    name="usuario"
                                    onChange={onChangeHandler} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Contraseña</label>
                            <div className="col-sm-10">
                                <input type="contrasena" className="form-control-plaintext"
                                    name="contrasena"
                                    onChange={onChangeHandler} />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Iniciar Sesion</button>
                    </fieldset>
                </form>
                <div> {inicioSesion} </div>
            </div>
        </>
    )
}



