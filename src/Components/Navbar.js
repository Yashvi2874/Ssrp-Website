import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Somaiya_Vidyavihar from './Trust_logo/somaiya white.png';
import Somaiya_Vidyavihar_University from './Trust_logo/somaiya trust.png';

function App() {
  return (
    <div className='main2'>
      <div className="App" style={{ width: "100vw" }}>
   
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>


        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixnav">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src='https://i.imgur.com/miZ2Zyz.png' style={{maxHeight: "30px", width: "auto", objectFit: "contain", marginRight: "10px", padding: "3px"}}></img>
              <img src={Somaiya_Vidyavihar} style={{maxHeight: "30px", width: "auto", objectFit: "contain", marginRight: "10px", padding: "3px"}}></img>
              <img src={Somaiya_Vidyavihar_University} style={{maxHeight: "30px", width: "auto", objectFit: "contain", marginRight: "10px", padding: "3px"}}></img>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse bg-transparent" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mr-lg-6">
                <li class="nav-item mr-lg-6 px-3">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item mr-lg-6 px-3">
                  <a class="nav-link active" aria-current="page" href="/project">Projects</a>
                </li>
                <li class="nav-item mr-lg-6 px-3">
                  <a class="nav-link active" aria-current="page" href="/community">Community</a>
                </li>
                <li class="nav-item mr-lg-6 px-3">
                  <a class="nav-link active" aria-current="page" href="#">Events</a>
                </li>
                <li class="nav-item mr-lg-6 px-3">
                  <a class="nav-link active" aria-current="page" href="/contact">Contact US</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <style>
          {`
            .main2 {
              animation: fade-up 3s;
            }

            @keyframes fade-up {
              0% {
                opacity: 0;
                transform: translate(30px) scale(0.9);
              }
              100% {
                opacity: 1;
                transform: translateY(0px) scale(1);
              }
            }
          `}
        </style>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
      </div>
    </div>
  );
}

export default App;
