import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>
        <div className="container">
          <main class="px-3">
            <h1>Cover your page.</h1>
            <p class="lead">
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
            <p class="lead">
              <a
                href="#"
                class="btn btn-lg btn-light fw-bold border-white bg-white"
              >
                Learn more
              </a>
            </p>
          </main>
        </div>
      </main>
      <Footer />
    </>
  );
}
