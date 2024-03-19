import axios from "axios";
import { useState } from "react";


export const Registro = () => {

    // Logica de la vista
    const url = 'http://localhost:3000/api/usuario'
    //Hooks: Componente nativo de REACT que se encarga de enlazar el contenido de la vista (HTML) la logica del componente en si

    const [usuario, setUsuario] = useState();

    const [correo_electronico, setCorreo_electronico] = useState();

    const [nombre_completo, setNombre_completo] = useState();

    const [contrasena, setContrasena] = useState();

    const [ContrasenaConfirm, setContrasenaConfirm] = useState();

    const usuarioHandler = (event) => {

        const { name, value } = event.target;
        setUsuario(value);

    }

    const correo_electronicoHandler = (event) => {

        const { name, value } = event.target;
        setCorreo_electronico(value);

    }

    const nombre_completoHandler = (event) => {

        const { name, value } = event.target;
        setNombre_completo(value);

    }

    const contrasenaHandler = (event) => {

        const { name, value } = event.target;
        setContrasena(value);

    }

    const ContrasenaConfirmHandler = (event) => {

        const { name, value } = event.target;
        setContrasenaConfirm(value);

    }

    const submitHandler = async () => {

        event.preventDefault();
        const data = {
            usuario: usuario,
            correo_electronico: correo_electronico,
            contrasena: contrasena,
            nombre_completo: nombre_completo,
            ContrasenaConfirm:  ContrasenaConfirm
        }

        const result = await axios.post(url, data);
        const resultData = (await result).data;

        console.log(result);
        console.log(resultData);

    }


    return (
        <>
            <div className='container mt-5' >
                <form onSubmit={submitHandler}>
                    <fieldset>
                        <legend>Registro de Usuarios</legend>

                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Usuario</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext"
                                    name="usuario" placeholder="Ingresa Usuario" 
                                    onChange={usuarioHandler}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" onChange={correo_electronicoHandler} name="correo_electronico" placeholder="Ingrese Correo" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="nombre_completo"
                                    onChange={nombre_completoHandler} placeholder="Ingrese Nombre Completo" />
                            </div>
                        </div>


                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Contrasena</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext" name="contrasena" onChange={contrasenaHandler} placeholder="Ingrese Contrasena" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Confirmación</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext"
                                    name="ContrasenaConfirm" onChange={ContrasenaConfirmHandler} placeholder="Confirme su Contraseña" />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-danger w-100">Crear Usuario</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}