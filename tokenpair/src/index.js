import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar'
import Main from './Main'
import reportWebVitals from './reportWebVitals';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
    <div class="cont">
      <Navbar />
      <Main />
    </div>
    <ConnectButton />
    </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
