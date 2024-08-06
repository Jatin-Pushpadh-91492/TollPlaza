import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Dashboard/Main';
import Audit from './components/Audit_page/Audit';
import Reports from './components/Report/Reports';
import backgroundImage from './assets/background.jpg';
import ETCTransactions from './components/ETCTransaction/ETCTransactions';
import Transactions from './components/Transaction/Transactions';
import Settings from './components/Setting/Settings';

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn ? element : <Navigate to="/" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className='text-black h-screen flex flex-col items-center justify-center bg-cover' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Login/>
          </div>
        } />
        <Route path="/home" element={<ProtectedRoute element={<Main user="User" />} />} />
        <Route path="/Audit_page" element={<ProtectedRoute element={<Main user="User"><Audit /></Main>} />} />
        <Route path="/Report_page" element={<ProtectedRoute element={<Main user="User"><Reports /></Main>} />} />
        <Route path="/Transaction_page" element={<ProtectedRoute element={<Main user="User"><Transactions /></Main>} />} />
        <Route path="/ETCTransaction_page" element={<ProtectedRoute element={<Main user="User"><ETCTransactions /></Main>} />} />
        <Route path="/Setting_page" element={<ProtectedRoute element={<Main user="User"><Settings /></Main>} />} />
      </Routes>
    </BrowserRouter>
  );
};

// Ensure this part of the code is executed only once
const container = document.getElementById('root');
if (!container.__reactRoot) {
  const root = ReactDOM.createRoot(container);
  container.__reactRoot = root;
  root.render(<App />);
} else {
  container.__reactRoot.render(<App />);
}

export default App;