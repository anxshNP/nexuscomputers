import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';

import '../sass/main.scss';

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap'
            rel='stylesheet'
          ></link>
          <title>Nexus Computer &#124; Nexus Computer Clinic</title>
        </Head>

        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
