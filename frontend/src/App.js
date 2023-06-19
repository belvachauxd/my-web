import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import MyArticles from './pages/MyArticles'
// import Quiz from './pages/Quiz';

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
            <Route 
              path="/myarticles" 
              element={user ? <MyArticles /> : <Navigate to="/login" />} 
            />
                        {/* <Route 
              path="/quiz" 
              element={user ? <Quiz /> : <Navigate to="/login" />} // add the new Quiz route */}
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
