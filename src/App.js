import { Route, Routes } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home";
import Create from "./Pages/Create/Create";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />


          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
