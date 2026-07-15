import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store/store';

// Layout components (to be built in Phase 8)
// import MainLayout from '@components/layout/MainLayout';
// import AdminLayout from '@components/layout/AdminLayout';
// import VendorLayout from '@components/layout/VendorLayout';

// Pages (to be built in subsequent phases)
// import HomePage from '@pages/HomePage';
// import LoginPage from '@pages/auth/LoginPage';
// import RegisterPage from '@pages/auth/RegisterPage';
// import AdminDashboard from '@pages/admin/Dashboard';
// import VendorDashboard from '@pages/vendor/Dashboard';

/**
 * Root application component.
 * Wraps the app in Redux Provider and React Router.
 * Routes will be expanded as we build each phase.
 */
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          {/* Global components like Toast notifications, Navbar will go here */}
          
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<div className="p-8 text-center"><h1 className="text-3xl font-bold">Multivendor E-commerce Platform</h1><p className="mt-4 text-gray-600">Phase 1: Scaffolding Complete ✅</p></div>} />
            {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> */}
            
            {/* Customer Routes */}
            {/* <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="product/:id" element={<ProductDetailPage />} />
              <Route path="cart" element={<CartPage />} />
            </Route> */}
            
            {/* Vendor Routes */}
            {/* <Route path="/vendor/*" element={<VendorLayout />}>
              <Route path="dashboard" element={<VendorDashboard />} />
              <Route path="products" element={<VendorProducts />} />
              <Route path="orders" element={<VendorOrders />} />
            </Route> */}
            
            {/* Admin Routes */}
            {/* <Route path="/admin/*" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="vendors" element={<VendorManagement />} />
              <Route path="analytics" element={<AnalyticsPage />} />
            </Route> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;