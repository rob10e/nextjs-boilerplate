import Document, { Head, Main, NextScript } from 'next/document';
import { TITLE } from '../contants';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  componentDidMount() {
    // eslint-disable-next-line global-require
    require('../styles/global.scss');
  }

  render() {
    return (
      /* eslint-disable jsx-a11y/html-has-lang */
      <html>
        <Head>
          {/* Material Design for Bootstrap fonts and icons */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
          />

          {/* Material Design for Bootstrap CSS */
          /* eslint-disable max-len */}
          <link
            rel="stylesheet"
            href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"
            integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX"
            crossOrigin="anonymous"
          />
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossOrigin="anonymous"
          />
          <script
            src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js"
            integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U"
            crossOrigin="anonymous"
          />
          <script
            src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js"
            integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9"
            crossOrigin="anonymous"
          />
          {/* eslint-enable max-len */}
          <link rel="stylesheet" href="/_next/static/style.css" />
          <title>
            {TITLE}
          </title>
        </Head>
        <body className="app">
          <Main />
          <NextScript />
        </body>
      </html>
      /* eslint-enable jsx-a11y/html-has-lang */
    );
  }
}
