import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Products from './views/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <Link to="/" >Products</Link>
          </div>
        </header>
        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={Products} />
          </div>

        </main>
        <footer className="footer">
          All right reserved.
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
