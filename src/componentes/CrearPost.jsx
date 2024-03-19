import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

    export const CrearPost = () => {

        const navigate =  useNavigate();

        const [form, setForm] = useState({
            
            usuario_id : "", 
            usuario : "", 
            contenido : ""
            
        });

        const onChangeHandler = () => {
            const { name, value } = event.target;
            
            if (name === "contenido") {
              setForm({ ...form, [name]: value });
            }
          };
          
        
        const onSubmit = async (event) => {

            const url = "http://localhost:3000/api/publicacion";
    
            event.preventDefault();
    
            const datosFormulario = new FormData();

            datosFormulario.append( "usuario_id" , form.usuario_id);
            datosFormulario.append( "usuario" , form.usuario);
            datosFormulario.append( "contenido" , form.contenido);
            
    
            const result  = await axios.post(url, datosFormulario);
            const resultData = (await result).data;
    
            navigate('/muro')
        }
        
        return (
            <>
            <div className='container mt-5' >
                <form onSubmit={onSubmit} >
                    <fieldset>
                        <legend>Crear Post</legend>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Usuario ID</label>
                            <div className="col-sm-10">
                                <input className="form-control-plaintext"
                                    name="usuario_id"
                                    onChange={onChangeHandler} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Nombre Usuario</label>
                            <div className="col-sm-10">
                                <input className="form-control-plaintext"
                                    name="usuario"
                                    onChange={onChangeHandler} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Agregar Contenido</label>
                            <div className="col-sm-10">
                                <input className="form-control-plaintext"
                                    name="contenido"
                                    onChange={onChangeHandler} />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Crear Post</button>
                    </fieldset>
                </form>
            </div>
        </>  
            
        )
    }