import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark "    >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><span><img src='https://png.pngtree.com/png-vector/20190602/ourmid/pngtree-globe-logo-design-icon-vector-png-image_1296060.jpg' style={{height:"70px",width:"70px",marginRight:'11px',borderRadius:"70px"}} alt='Country Fetcher Logo'/></span>Country Selector</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" rel='noopener'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/continents" rel='noopener'>Continents</Link>
              </li>
              <li className='nav-item'>
                <Link to="/search" className='nav-link' rel='noopener'>Search Country Details</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}
