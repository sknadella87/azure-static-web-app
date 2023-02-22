
import Layout from '../components/Layout'
import App from 'next/app'
import { AppProvider } from '../lib/context'
import React from 'react'
import '../styles/index.css'

class MyApp extends App {
  constructor(props) {
    super(props)
  }
  state={
    data: [],
    setData: this.setData,
  }
  render(){
    const { Component, pageProps } = this.props
    return(
    <AppProvider value={this.state}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <div
          data-cy="version"
          className="absolute bottom-0 right-0 px-4 text-white"
        >
        </div>
    </AppProvider>
    )
  }
}

export default MyApp