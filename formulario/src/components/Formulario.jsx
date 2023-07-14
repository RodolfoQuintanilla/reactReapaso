const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center">
        Añade Pacientes y {""}
        <span className="font-bold text-indigo-600 mb-10">Administrarlos</span>
      </p>

      <form className=" bg-white shadow-md rounded-lg py-10 px-5">
        <div className="mb-5">
          <label htmlFor="mascota" className=" mb-5block text-gray-700">
            Nombre Mascota{" "}
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400"
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
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700">
            Alta{" "}
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
          />

          
          
        </div>
      </form>
    </div>
  );
};

export default Formulario;
