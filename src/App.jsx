// Creiamo il frontend del nostro Blog e le sue pagine!
// Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post
// Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import DefaultLayout from "./layouts/DefaultLayout";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} />
          <Route path="/" element={<Home />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Posts/:slug" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
