import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        py: 2,
        mt: 4,
        backgroundColor: '#1976d2',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" sx={{ color: 'white' }}>
        © {new Date().getFullYear()} Visualizador del Dólar - Todos los derechos reservadoss
      </Typography>
    </Box>
  );
}
