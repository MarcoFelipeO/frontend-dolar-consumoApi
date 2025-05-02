// src/pages/Home.jsx
import { useEffect } from 'react';
import axios from 'axios';
import { useDolar } from '../context/DolarContext';
import DolarChart from '../components/DolarChart';
import DolarTable from '../components/DolarTable';
import { Container, Box, Typography } from '@mui/material';

export default function Home() {
  const { setData } = useDolar();

  useEffect(() => {
    const fetchData = async () => {
      const fin = new Date();
      const inicio = new Date();
      inicio.setDate(fin.getDate() - 30);

      const format = (date) => date.toISOString().split('T')[0];
      const url = `http://localhost:8000/api/dolares?fecha_inicio=${format(inicio)}&fecha_fin=${format(fin)}`;

      const response = await axios.get(url);
      setData(response.data);
    };

    fetchData();
  }, [setData]);

  return (
    <Container
      maxWidth={false}
      sx={{
        px: 4,
        mt: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Fluctuación del Dólar (últimos 30 días)
      </Typography>

      <Box sx={{ width: '200%', maxWidth: 1200, my: 6 }}>
        <DolarChart />
      </Box>

      <Box sx={{ width: '200%', maxWidth: 1200, my: 6 }}>
        <DolarTable />
      </Box>
    </Container>
  );
}
