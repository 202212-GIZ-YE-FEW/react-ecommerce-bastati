import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from './Pages/HomePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductPage from "./Pages/ProductPage";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutPage from "./Pages/AboutPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CartPage from "./Pages/CartPage";



function App() {
  // Create a client

  const queryClient = new QueryClient();

  return (
    <div className="App">
      <Navbar />
      <QueryClientProvider client={queryClient}>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products/:productId" element={<ProductDetailsPage />} />
        </Routes>
      </QueryClientProvider>
      <Footer />

    </div>

  )
}

export default App
