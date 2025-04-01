import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Posts() {
  return (
    <>
      <Header />
      <main>
        <div className="container mt-5">
          <div className="row">
            <div className="col col-sm-2 col-md-3 col-lg-4 g-2 p-2">
              <div className="card">
                <div className="card-title">Titolo</div>
                <div className="card-body">Contenuto</div>
              </div>
            </div>
            <div className="col col-sm-2 col-md-3 col-lg-4 g-2 p-2">
              <div className="card">
                <div className="card-title">Titolo</div>
                <div className="card-body">Contenuto</div>
              </div>
            </div>
            <div className="col col-sm-2 col-md-3 col-lg-4 g-2 p-2">
              <div className="card">
                <div className="card-title">Titolo</div>
                <div className="card-body">Contenuto</div>
              </div>
            </div>
            <div className="col col-sm-2 col-md-3 col-lg-4 g-2 p-2">
              <div className="card">
                <div className="card-title">Titolo</div>
                <div className="card-body">Contenuto</div>
              </div>
            </div>
            <div className="col col-sm-2 col-md-3 col-lg-4 g-2 p-2">
              <div className="card">
                <div className="card-title">Titolo</div>
                <div className="card-body">Contenuto</div>
              </div>
            </div>
            <div className="col col-sm-2 col-md-3 col-lg-4 g-2 p-2">
              <div className="card">
                <div className="card-title">Titolo</div>
                <div className="card-body">Contenuto</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
