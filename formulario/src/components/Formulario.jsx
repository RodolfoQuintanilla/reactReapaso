import { useState, useEffect } from "react";
import Errores from "./Errores";

const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const [nombre, setnombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setemail] = useState("");
  const [alta, setalta] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, seterror] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setnombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setemail(paciente.email)
      setalta(alta)
      setDescripcion(descripcion)
    } 
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, alta, descripcion].includes("")) {
      seterror(true);
      return;
    }
    seterror(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      descripcion,
      id: generarId(),
    };

    // console.log(objetoPaciente);

    setPacientes([...pacientes, objetoPaciente]);

    //Reiniciar Frmulario
    setnombre("");
    setemail("");
    setPropietario("");
    setalta("");
    setDescripcion("");

    console.log(paciente);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-8 ">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center">
        Añade Pacientes y {""}
        <span className="font-bold text-indigo-600 mb-10">Administrarlos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className=" bg-white shadow-md rounded-lg py-10 px-5"
      >
        {error && (
          <Errores>
            <p>Todos los datos son obligatorios</p>
          </Errores>
        )}

        <div className="mb-5">
          <label htmlFor="mascota" className=" mb-5block text-gray-700">
            Nombre Mascota{" "}
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400"
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="Propietario" className="block text-gray-700">
            Nombre Propietario{" "}
          </label>
          <input
            id="Propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700">
            Email{" "}
          </label>

          <input
            id="email"
            type="email"
            className="border-2 w-full p-2 mt-2 text-gray-400 rounded-md"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700">
            Alta{" "}
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 text-gray-400 "
            value={alta}
            onChange={(e) => setalta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Propietario" className="block text-gray-700">
            Descripcion{" "}
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 text-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <button className="bg-indigo-600 cursor-pointer w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 ">
          {paciente.id? 'Editar Paciente' : 'Agregar Paciente' }
        </button>
      </form>
    </div>
  );
};

export default Formulario;
