import { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setnombre] = useState("");
  const [propietario, setPropietario] = useState('');
  const [email, setemail] = useState('');
  const [alta, setalta] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Enviando Formulario");
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
            onChange={e=> setPropietario(e.target.value)}
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
            onChange={e=> setemail(e.target.value)}
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
            onChange={e=>setalta(e.target.value)}
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
            onChange={e => setDescripcion(e.target.value)}
          />
        </div>

        <button className="bg-indigo-600 cursor-pointer w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 ">
          Agregar paciente
        </button>
      </form>
    </div>
  );
};

export default Formulario;
