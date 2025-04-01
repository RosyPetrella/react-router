// Creiamo il frontend del nostro Blog e le sue pagine!
// Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post
// Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
