import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <h2 className="navbar-brand" style={{ fontWeight:'bold'}} >Record Keeping</h2>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Header
