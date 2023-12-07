import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login';
import NotFound from './pages/404';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';
import Home from './pages/home';

function App() {
  // ! delete
  console.log(window.location.pathname);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={'/login'} element={<Login />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/transfers"} element={<h1>transferencias</h1>} />
          <Route path={"/404"} element={<NotFound />} />
          <Route path={"*"} element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
