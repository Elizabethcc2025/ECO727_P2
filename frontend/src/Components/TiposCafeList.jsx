import axios from "../api/axios";
import { useEffect, useState } from "react";

function TiposCafeList() {
    const [tiposCafe, setTiposCafe] = useState([]);
    const [formData, setFormData] = useState({
        nombre_cliente: "",
        correo_electronico: "",
        telefono_contacto: "",
        tipo_cafe_preferido: "",
        tamano_bebida: "",
        nivel_intensidad: "",
        tipo_leche: "",
        comentarios: "",
        fecha_hora_pedido: "",
    });

    const [editandoId, setEditandoId] = useState(null);

    // Obtener pedidos de café
    const getTiposCafe = async () => {
        try {
            const res = await axios.get("TiposCafe/");
            setTiposCafe(res.data);
        } catch (error) {
            console.error("Error obteniendo pedidos:", error);
        }
    };

    // Crear nuevo pedido
    const createTiposCafe = async () => {
        try {
            console.log("Datos enviados:", formData);

            const res = await axios.post("TiposCafe/", formData);

            console.log("Pedido creado correctamente");
            console.log("Respuesta:", res.data);

            resetForm();
            getTiposCafe();

        } catch (error) {
            console.error("Error completo:", error);

            if (error.response) {
                console.log("Status:", error.response.status);
                console.log("Response:", error.response.data);
            } else if (error.request) {
                console.log("No hubo respuesta del servidor");
                console.log(error.request);
            } else {
                console.log("Error:", error.message);
            }
        }
    };

    // Actualizar pedido existente
    const updateTiposCafe = async (id) => {
        try {
            await axios.put(`TiposCafe/${id}/`, formData);

            resetForm();
            setEditandoId(null);
            getTiposCafe();
        } catch (error) {
            console.error("Error actualizando:", error);
        }
    };

    // Eliminar pedido
    const deleteTiposCafe = async (id) => {
        try {
            await axios.delete(`TiposCafe/${id}/`);
            getTiposCafe();
        } catch (error) {
            console.error("Error eliminando:", error);
        }
    };

    // Reiniciar formulario
    const resetForm = () => {
        setFormData({
            nombre_cliente: "",
            correo_electronico: "",
            telefono_contacto: "",
            tipo_cafe_preferido: "",
            tamano_bebida: "",
            nivel_intensidad: "",
            tipo_leche: "",
            comentarios: "",
            fecha_hora_pedido: "",
        });
    };

    // Cargar datos en el formulario para editar
    const handleEdit = (pedido) => {
        setEditandoId(pedido.id);

        setFormData({
            nombre_cliente: pedido.nombre_cliente,
            correo_electronico: pedido.correo_electronico,
            telefono_contacto: pedido.telefono_contacto,
            tipo_cafe_preferido: pedido.tipo_cafe_preferido,
            tamano_bebida: pedido.tamano_bebida,
            nivel_intensidad: pedido.nivel_intensidad,
            tipo_leche: pedido.tipo_leche,
            comentarios: pedido.comentarios,
            fecha_hora_pedido: pedido.fecha_hora_pedido,
        });
    };

    useEffect(() => {
        getTiposCafe();
    }, []);

    return (
        <section id="TiposCafe">
            <h2>Pedidos de Café</h2>

            <form
                className="TiposCafe-form"
                onSubmit={(e) => {
                    e.preventDefault();

                    if (editandoId) {
                        updateTiposCafe(editandoId);
                    } else {
                        createTiposCafe();
                    }
                }}
            >
                <input
                    placeholder="Nombre del cliente"
                    value={formData.nombre_cliente}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            nombre_cliente: e.target.value,
                        })
                    }
                />

                <input
                    placeholder="Correo electrónico"
                    value={formData.correo_electronico}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            correo_electronico: e.target.value,
                        })
                    }
                />

                <input
                    placeholder="Teléfono de contacto"
                    value={formData.telefono_contacto}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            telefono_contacto: e.target.value,
                        })
                    }
                />

                <input
                    placeholder="Tipo de café preferido"
                    value={formData.tipo_cafe_preferido}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            tipo_cafe_preferido: e.target.value,
                        })
                    }
                />

                <input
                    placeholder="Tamaño de la bebida"
                    value={formData.tamano_bebida}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            tamano_bebida: e.target.value,
                        })
                    }
                />

                <input
                    placeholder="Nivel de intensidad"
                    value={formData.nivel_intensidad}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            nivel_intensidad: e.target.value,
                        })
                    }
                />

                <input
                    placeholder="Tipo de leche"
                    value={formData.tipo_leche}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            tipo_leche: e.target.value,
                        })
                    }
                />

                <textarea
                    placeholder="Comentarios"
                    value={formData.comentarios}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            comentarios: e.target.value,
                        })
                    }
                />

                <input
                    type="datetime-local"
                    value={formData.fecha_hora_pedido}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            fecha_hora_pedido: e.target.value,
                        })
                    }
                />

                <button type="submit">
                    {editandoId ? "Guardar cambios" : "Agregar pedido"}
                </button>

                {editandoId && (
                    <button
                        type="button"
                        className="cancelar-btn"
                        onClick={() => {
                            resetForm();
                            setEditandoId(null);
                        }}
                    >
                        Cancelar edición
                    </button>
                )}
            </form>

            <div className="table-responsive">
                <table className="TiposCafe-tabla">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre del cliente</th>
                            <th>Correo electrónico</th>
                            <th>Teléfono de contacto</th>
                            <th>Tipo de café preferido</th>
                            <th>Tamaño de la bebida</th>
                            <th>Nivel de intensidad</th>
                            <th>Tipo de leche</th>
                            <th>Comentarios</th>
                            <th>Fecha y hora de pedido</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tiposCafe.map((c) => (
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.nombre_cliente}</td>
                                <td>{c.correo_electronico}</td>
                                <td>{c.telefono_contacto}</td>
                                <td>{c.tipo_cafe_preferido}</td>
                                <td>{c.tamano_bebida}</td>
                                <td>{c.nivel_intensidad}</td>
                                <td>{c.tipo_leche}</td>
                                <td>{c.comentarios}</td>
                                <td>{c.fecha_hora_pedido}</td>
                                <td>
                                    <button onClick={() => handleEdit(c)}>
                                        ✏️ Editar
                                    </button>

                                    <button
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    `¿Estás seguro de que deseas eliminar el pedido de "${c.nombre_cliente}"?`
                                                )
                                            ) {
                                                deleteTiposCafe(c.id);
                                            }
                                        }}
                                    >
                                        🗑️ Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default TiposCafeList;