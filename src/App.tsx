import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import InventoryApi from "./components/portfolio/projects/InventoryAPI";
import InventoryManagerUI from "./components/portfolio/projects/InventoryManagerUI";
import Battleship from "./components/portfolio/projects/Battleship";
import ShowApp from "./components/portfolio/projects/ShowApp";
import MemoryCardGame from "./components/portfolio/projects/MemoryCard";
import OnlineStoreSimulator from "./components/portfolio/projects/ShoppingCart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="project/inventory-api" element={<InventoryApi />} />
        <Route path="project/inventory-ui" element={<InventoryManagerUI />} />
        <Route path="project/battleship" element={<Battleship />} />
        <Route path="project/show-app" element={<ShowApp />} />
        <Route path="project/memory-card" element={<MemoryCardGame />} />
        <Route
          path="project/shopping-cart"
          element={<OnlineStoreSimulator />}
        />
        <Route path="/*" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
