export default function Posts() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              Home
            </a>
            <button
              class="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
              <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" href="#" aria-current="page">
                    About us
                    <span class="visually-hidden">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Posts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
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
      <footer>
        <div class="container">
          <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div class="col mb-3">
              <a
                href="/"
                class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
              >
                <svg class="bi me-2" width="40" height="32">
                  <use xlink:href="#bootstrap"></use>
                </svg>
              </a>
              <p class="text-body-secondary">© 2024</p>
            </div>

            <div class="col mb-3"></div>

            <div class="col mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </>
  );
}
