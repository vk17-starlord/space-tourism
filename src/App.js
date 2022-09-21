import { Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import { DataProvider } from "./context/DataContext";
import Destination from "./pages/Destination";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
   <DataProvider>
     <div className="App ">
        <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
     </Routes>
     <Routes>
        <Route path="/Destination" element={<Destination />} />
     </Routes>
    </div>
   </DataProvider>
  );
}

export default App;
