import { Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import { DataProvider } from "./context/DataContext";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import LandingPage from "./pages/LandingPage";
import Technology from "./pages/Technology";

function App() {
  return (
   <DataProvider>
     <div className="App ">
        <Header />
        <Routes>
        <Route path="/Technology" element={<Technology />} />
     </Routes>
      <Routes>
        <Route path="/" element={<LandingPage />} />
     </Routes>
     <Routes>
        <Route path="/Destination" element={<Destination />} />
     </Routes>
     <Routes>
        <Route path="/Crew" element={<Crew />} />
     </Routes>
    </div>
   </DataProvider>
  );
}

export default App;
