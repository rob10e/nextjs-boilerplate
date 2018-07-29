import ActiveLink from '../ActiveLink';

const routes = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/page1',
    name: 'Page 1',
  },
];

export default () => (
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {routes.map(item => (
        <ActiveLink key={item.url} activeClassName="active" href={item.url}>
          <li className="nav-item">
            <a className="nav-link home-link">
              {item.name}
            </a>
          </li>
        </ActiveLink>
      ))}
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
);
