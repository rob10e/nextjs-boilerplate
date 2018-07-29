import Nav from '../Nav';
import { TITLE } from '../../../contants';

export default () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      {TITLE}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <Nav />
  </nav>
);
