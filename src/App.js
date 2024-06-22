import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import Homepage from './pages/Homepage';
function App() {
  return (
    <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <Homepage/>
  </ThemeProvider>
  );
}

export default App;
