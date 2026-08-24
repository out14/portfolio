//import { useState } from 'react'
// import './App.css'
import MainRouter from '@package/router/MainRouter';
import { BrowserRouter } from 'react-router-dom';
import { Header,Footer, PageTransitionProvider } from '@package/component';
import '@package/asset/css/basic.scss'
import '@package/asset/css/common.scss'
import '@package/asset/css/style.scss'
import '@package/asset/css/wave.scss'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async';



const queryClient = new QueryClient()


function App() {
  

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/portfolio">
          <PageTransitionProvider>
              <Helmet>
                <meta name="description" content="디자이너가 말아주는 퍼블리싱" />
                <meta property="og:title" content="디말퍼" />
                <meta property="og:image" content="/image/web thumnail.png"></meta>
                <link rel="icon" type="image/svg+xml" href="/image/icon.png" />
                <meta property="og:description" content="디자이너가 말아주는 퍼블리싱"/>
                <title>디말퍼</title>
              </Helmet>
              <Header/>
              <div className="cnt">
                <MainRouter/>
              </div>
              <Footer/>
            
          </PageTransitionProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
