import React, { useEffect, useState } from "react";
import { Sistemas } from "../utils/Data";
import { usePagination } from "../pagination/usePagination.js";
import DataTable from "react-data-table-component";

export default function Home() {
  //Paginado y searchbar  //
  const [search, setSearch] = useState("");
  const [tecno, setTecno] = useState([]);

  const data = Sistemas;

  const { paginationOptions, customStyles } = usePagination(data);

  useEffect(() => {
    filterByData(search);
  }, [search]);

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const filterByData = (value) => {
    if (!value) {
      setTecno(data);
    } else {
      const arrayCache = data.filter(
        (tecno) =>
          tecno.nombre.toLowerCase().includes(value.toLowerCase()) ||
          tecno.desarrolladores.toLowerCase().includes(value.toLowerCase())
      );
      setTecno(arrayCache);
    }
  };

  const columns = [
    { name: "NOMBRE", selector: (row) => row.nombre, sortable: true },
    {
      name: "DESARROLLADORES",
      selector: (row) => row.desarrolladores,
      sortable: true,
    },
  ];
  return (
    <div className="paginado">
      {/* <h2>Bienvenido a SISTEMAS Y DESARROLLADORES</h2> */}
      <div className="filtroBox">
        <input
          type="text"
          className="filtro"
          placeholder="Buscar por SISTEMA o DESARROLLADOR"
          onChange={handleOnChange}
          value={search}
          autoComplete="off"
        />
      </div>
      <br />
      <DataTable
        className="striped"
        columns={columns}
        data={tecno}
        pagination
        striped
        paginationComponentOptions={paginationOptions}
        customStyles={customStyles}
      />
    </div>
  );
}
