import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { baza1 } from './components/SidebarRoutes/SidebarRoutesApp';
import Check from './components/check';
import Register from './pages/Register';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation()

  let roleStorage = localStorage.getItem('role');
  const roleData = {
    name: 'Behzod',
    tel: '+998 (94) 117-87-20',
    role: roleStorage,
  };

  const filteredRoutes = baza1?.filter((el) => el.role.includes(roleData.role));

  return (
    <>
      <Check />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Layout />}>
          {filteredRoutes?.map((el, index) => (
            <Route path={el.path} key={index} element={el.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default App;
