import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a className="navbar-brand" href="/">Sebastian</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>      
        </li>
        <li>
            <a className="nav-link active" aria-current="page" href='/'>About</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-danger" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
        </header>
    
    );
   }

   export default Header;

   