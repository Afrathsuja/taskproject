import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './screens/LandingPage/LandingPage';
import SingleProduct from './screens/SingleProduct/SingleProduct';
import ComponentRenderer from './routes/ComponentRenderer';
 
function App() {
  return (
  // <LandingPage posts={undefined} />
  <Suspense fallback={<div>Loading...</div>}>
  <ComponentRenderer />
</Suspense>
  );
}

export default App;
