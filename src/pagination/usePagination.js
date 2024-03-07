import { useState } from "react";

//PAGINACION DATATABLE

export const usePagination = (data) => {
  // Hook personalizado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  // Función para cambiar la página actual

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Función para cambiar la cantidad de filas por página
  const handlePerRowsChange = (perPage, page) => {
    setCurrentPage(page);
    setPerPage(perPage);
  };

  const customStyles = {
    cells: {
      style: {
        borderLeft: "1px solid var(--bs-gray-400)",
        borderRight: "1px solid var(--bs-gray-400)",
      },
    },
    headCells: {
      style: {
        border: "1px solid var(--bs-gray-400)",
      },
    },
    rows: {
      style: {
        backgroundColor: "rgba(0,0,0,.05)", // Color de fondo para filas impares
      },
    },
  };

  // Opciones de configuración de paginación
  const paginationOptions = {
    paginationServer: false,
    paginationTotalRows: data ? data.length : 0,
    paginationDefaultPage: currentPage,
    paginationPerPage: perPage,
    paginationRowsPerPageOptions: [10, 25, 50, 100],
    onChangePage: handlePageChange,
    onChangeRowsPerPage: handlePerRowsChange,
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItemText: "Todos",
  };

  return { paginationOptions, customStyles };
};
