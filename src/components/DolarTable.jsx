// src/components/DolarTable.jsx
import { useDolar } from '../context/DolarContext';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Paper
} from '@mui/material';
import { useState } from 'react';

export default function DolarTable() {
  const { data, updateValor, deleteValor } = useDolar();
  const [editFecha, setEditFecha] = useState(null);
  const [nuevoValor, setNuevoValor] = useState('');

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: '#1e1e1e' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'white' }}>Fecha</TableCell>
            <TableCell sx={{ color: 'white' }}>Valor</TableCell>
            <TableCell sx={{ color: 'white' }}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.fecha}>
              <TableCell sx={{ color: 'white' }}>{row.fecha}</TableCell>
              <TableCell sx={{ color: 'white' }}>
                {editFecha === row.fecha ? (
                  <TextField
                    value={nuevoValor}
                    size="small"
                    onChange={e => setNuevoValor(e.target.value)}
                    inputProps={{ style: { color: 'white' } }}
                    sx={{ input: { color: 'white' } }}
                  />
                ) : (
                  row.valor
                )}
              </TableCell>
              <TableCell>
                {editFecha === row.fecha ? (
                  <>
                    <Button onClick={() => {
                      updateValor(row.fecha, parseFloat(nuevoValor));
                      setEditFecha(null);
                    }} sx={{ color: 'white' }}>
                      Guardar
                    </Button>
                    <Button onClick={() => setEditFecha(null)} sx={{ color: 'white' }}>
                      Cancelar
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => {
                        setEditFecha(row.fecha);
                        setNuevoValor(row.valor);
                      }}
                      sx={{ color: 'white' }}
                    >
                      Editar
                    </Button>
                    <Button color="error" onClick={() => deleteValor(row.fecha)}>
                      Eliminar
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
