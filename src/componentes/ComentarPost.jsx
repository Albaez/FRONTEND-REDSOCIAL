import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ComentarPost = ({ publicacionId }) => {
  const navigate = useNavigate();

  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const handleChange = (event) => {
    setComentario(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "http://localhost:3000/api/comentario";

    if (comentario.trim() === "") {
      // Validación de campo vacío
      return;
    }

    const datosFormulario = {
      publicacion_id: publicacionId,
      contenido: comentario,
    };

    try {
      const result = await axios.post(url, datosFormulario);
      const resultData = result.data;
      navigate('/src/componentes/CrearPost.jsx');
    } catch (err) {
      // Manejo de error
    }
  };

  const handleDelete = async (id) => {
    const url = `http://localhost:3000/api/comentario/${id}`;

    try {
      await axios.delete(url);
      // Actualizar la lista de comentarios después de eliminar
      const updatedComentarios = comentarios.filter((comentario) => comentario.id !== id);
      setComentarios(updatedComentarios);
    } catch (err) {
      // Manejo de error
    }
  };

  useEffect(() => {
    const url = "http://localhost:3000/api/comentario";

    const fetchComentarios = async () => {
      try {
        const result = await axios.get(url);
        const comentariosData = result.data;
        setComentarios(comentariosData);
      } catch (err) {
        // Manejo de error
      }
    };

    fetchComentarios();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comentario}
          onChange={handleChange}
          placeholder="Escribe tu comentario..."
        ></textarea>
        <button type="submit">Comentar</button>
      </form>

      <div>
        {comentarios.map((comentario) => (
          <div key={comentario.id}>
            <p>{comentario.contenido}</p>
            <p>{comentario.usuario_id}</p>
            <p>{comentario.fecha_comentario}</p>
            <button onClick={() => handleDelete(comentario.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};