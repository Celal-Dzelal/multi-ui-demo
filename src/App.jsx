import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import DemoChakra from "./pages/ChackraPage.jsx";
import DemoBootstrap from "./pages/BootstrapPage.jsx";
import DemoMaterial from "./pages/MaterialPage.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/demo/bootstrap" element={<DemoBootstrap />} />
      <Route path="/demo/mui" element={<DemoMaterial />} />
      <Route path="/demo/chakra" element={<DemoChakra />} />
    </Routes>
  );
};

export default App;
