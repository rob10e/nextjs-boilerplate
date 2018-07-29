import React from 'react';
import App, { Container } from 'next/app';
import { Layout } from '../components';

export default class MyApp extends App {
  // eslint-disable-next-line no-unused-vars
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    $('body').bootstrapMaterialDesign();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
