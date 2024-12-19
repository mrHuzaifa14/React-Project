import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Image from './components/image';
import Phones from './components/phones';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Image />
      <Phones />
      <Footer />
    </div>
  );
}

export default App;
