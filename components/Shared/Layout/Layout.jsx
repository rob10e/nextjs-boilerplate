import { Fragment } from 'react';
import PropType from 'prop-types';
import { Header, Footer } from '..';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <div className="container card main-content">
      {children}
    </div>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropType.node.isRequired,
};

export default Layout;
