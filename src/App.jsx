import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './pages/404';
import Login from './pages/login';
import Home from './pages/home';
import Transfer from './pages/transfer';
import Movements from './pages/movements';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={'/login'} element={<Login />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/transfers"} element={<Transfer />} />
          <Route path={"/movements/:id"} element={<Movements />} />
          <Route path={"/404"} element={<NotFound />} />
          <Route path={"*"} element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
