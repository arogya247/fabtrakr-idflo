import React from 'react'

const navstyles = {
    backgroundColor: 'white',
    color: '#334BFF'
}

export const Navbar = () => {
  return (
    <nav style = { navstyles} className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand fw-bold">Fabtrakr</a>
            <div className="justify-content-right" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active text-decoration-underline" aria-current="page" >Dashboard</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" >Barcodes</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" >A</a></li>
                    <li><a className="dropdown-item" >B</a></li>
                    <li><a className="dropdown-item" >C</a></li>
                    <li><a className="dropdown-item" >D</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link" >Logout</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
