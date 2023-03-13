import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from './Pages/HomePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductPage from "./Pages/ProductPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faRocket } from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faRocket);
function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <div className="App">
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
