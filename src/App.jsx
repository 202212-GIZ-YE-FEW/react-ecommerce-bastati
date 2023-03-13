import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from './Pages/HomePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductPage from "./Pages/ProductPage";
function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <div classNameName="App">
    
      <QueryClientProvider client={queryClient}>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
      </Routes>
      </QueryClientProvider>
    </div>
  )
}

export default App
