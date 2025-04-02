import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Posts() {
  return (
    <>
      <main>
        <div className="container mt-5">
          <div className="row">
            <div className="col col-sm-2 col-md-3 col-lg-4 g-2 p-2">
              <div className="card">
                <div className="card-title">🐱 Il Gatto che Vide il Futuro</div>
                <div className="card-body">
                  {" "}
                  Un felino proveniente dall'anno 3056 si ritrova nel nostro
                  presente con una missione segreta. Cosa è venuto a dirci?
                </div>
              </div>
            </div>
            <div className="col col-sm-2 col-md-3 col-lg-4 g-2 p-2">
              <div className="card">
                <div className="card-title">👽 Il Gatto Extraterrestre</div>
                <div className="card-body">
                  {" "}
                  Una creatura con occhi luminescenti e poteri psichici è
                  atterrata nel nostro giardino. Da dove viene?
                </div>
              </div>
            </div>
            <div className="col col-sm-2 col-md-3 col-lg-4 g-2 p-2">
              <div className="card">
                <div className="card-title">🔮 Bastet e il Portale Segreto</div>
                <div className="card-body">
                  Una leggenda egizia racconta di un portale che collega la
                  Terra a una dimensione felina. Bastet potrebbe essere la
                  chiave per aprirlo.
                </div>
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
    </>
  );
}
