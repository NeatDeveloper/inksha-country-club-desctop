import { domAnimation, LazyMotion } from 'framer-motion';
import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './fonts.css';
import './index.css';
import './fonts/Lato-Regular.ttf'
import './fonts/MontserratAlternates-Regular.ttf'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LazyMotion features={domAnimation} strict>
      <Suspense fallback={<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> <img src="/image/download.gif" alt="" /> </div>}>
        <AppWithDelay />
      </Suspense>
    </LazyMotion>
  </BrowserRouter>
);

function AppWithDelay() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4'> <p className='font-bold text-[22px] text-center'>Загрузка</p> <img className='rounded-[15px]' src="/image/download.gif" alt="" /> </div> : <App />;
}
