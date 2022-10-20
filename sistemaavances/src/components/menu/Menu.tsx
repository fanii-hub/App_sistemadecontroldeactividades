import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';







export const Menu  =() =>{
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Archivos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Revisiones </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Avances</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )

}
