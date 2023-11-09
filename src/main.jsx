import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import ProtectedRoute from './admin/pages/ProtectedRoute.jsx';
import AppLayout from './admin/pages/AppLayout.jsx';
import { AuthProvider } from './contexts/AuthContext';


import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <ThemeProvider>
            <BrowserRouter>
              {/* Children routes are wrapped in a parent route */}
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                </Route>

                {/* Admin protected route. Cant do this in 6.0 as protected route doesnt exist yet. AppLayout is displayed when login is successful */}
                <Route
                  path="dashboard"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  } />


                {/* Admin protected route. Cant do this in 6.0 as protected route doesnt exist yet. AppLayout is displayed when login is successful
                <Route
                  path="profile"
                  element={
                    <ProtectedRoute>
                      <AppProfileLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route path="account" element={<AccountSettings />} />
                </Route> */}


                {/* Other routes that do not exist go to page not found */}
                <Route path="*" element={<Layout />}>
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
      </AuthProvider>
  </React.StrictMode>,
)
