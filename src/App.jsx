import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
// import About from './components/pages/About';
import Nav from './components/utils/Nav';
import './App.css';
import Profile from './components/pages/Profile';
import FallBack from './components/utils/FallBack';
import Category from './components/pages/Cats/Category';
import { Categories } from './components/pages/Cats/Categories';
import CreateCategory from './components/pages/Cats/CreateCategory';
import EditCategory from './components/pages/Cats/EditCategory';
import RouteGuard from './components/utils/RouteGuard';
import LoginContextProvider from './components/utils/LoginContext';
import Login from './components/pages/Login';
const LazyAbout = React.lazy(() => import('./components/pages/About'));

export default function App() {
  return (
    <div>
      <LoginContextProvider>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={
            <React.Suspense fallback="Please wait...">
              <LazyAbout  />
            </React.Suspense>
          } />
          <Route path='/profile' element={<Profile  />} />
          <Route path='/login' element={<Login  />} />
          <Route path='/category' element={<RouteGuard><Category /></RouteGuard>}>
            <Route index element={<Categories />} />
            <Route path='categories' element={<Categories />} />
            <Route path='create' element={<CreateCategory />} />
            <Route path='edit/:id' element={<EditCategory />} />
          </Route>
          <Route path='*' element={<FallBack />} />
        </Routes>
        </LoginContextProvider>
    </div>
  )
}
