/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Foto from "./Foto";

const ListaFotos = ({ fotos, setFotoAmpliada }) => {
  return (
    <div className="album">
      {fotos.map((foto) => (
        <Foto key={foto.id} dados={foto} setFotoAmpliada={setFotoAmpliada}/>
      ))}
    </div>
  );
};

export default ListaFotos;
