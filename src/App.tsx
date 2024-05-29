import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import PageNotFound from "./Page/PageNotFound";
import Homepage from "./Page/Home/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
