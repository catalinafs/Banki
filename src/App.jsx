import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/auth/login';
import NotFound from './pages/404';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';

function App() {
  // ! delete this later
  console.log(window.location.pathname);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={"/404"} element={<NotFound />} />
          <Route path={"*"} element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
