//import { useState } from 'react'
// import './App.css'
import MainRouter from '@package/router/MainRouter';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '@package/component';
import { Footer } from '@package/component';
import '@package/asset/css/basic.scss'
import '@package/asset/css/common.scss'
import '@package/asset/css/style.scss'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const queryClient = new QueryClient()


function App() {
  

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header/>
          <MainRouter/>
          <Footer/>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
