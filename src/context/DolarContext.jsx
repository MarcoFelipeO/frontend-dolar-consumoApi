import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const DolarContext = createContext();

export const useDolar = () => useContext(DolarContext);

export const DolarProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const updateValor = async (fecha, nuevoValor) => {
    try {
      await axios.put(`http://localhost:8000/api/dolares/${fecha}`, {
        valor: nuevoValor,
      });

      setData(prev =>
        prev.map(item =>
          item.fecha === fecha ? { ...item, valor: nuevoValor } : item
        )
      );
    } catch (error) {
      console.error('Error al actualizar:', error);
    }
  };

  const deleteValor = async (fecha) => {
    try {
      await axios.delete(`http://localhost:8000/api/dolares/${fecha}`);

      setData(prev => prev.filter(item => item.fecha !== fecha));
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  return (
    <DolarContext.Provider value={{ data, setData, updateValor, deleteValor }}>
      {children}
    </DolarContext.Provider>
  );
};
