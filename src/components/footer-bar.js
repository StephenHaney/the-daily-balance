import React, { } from 'react';
import { NavLink } from 'react-router-dom'

function FooterBar() {
  return (
    <nav className="footer">
      <NavLink to="/home" className="footer__link" activeClassName="footer__link--selected">Home</NavLink>
      <NavLink to="/charts" className="footer__link" activeClassName="footer__link--selected">Charts</NavLink>
      <NavLink to="/settings" className="footer__link" activeClassName="footer__link--selected">Settings</NavLink>
    </nav>
  );
}

export default FooterBar;