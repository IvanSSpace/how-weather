// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Чтобы настроить темную тему
    primary: {
      main: '#ffffff', // Цвет текста по умолчанию
    },
  },
});

export default theme;
