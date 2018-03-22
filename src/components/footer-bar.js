import React, { Component } from 'react';

function FooterBar() {
  return (
    <navigation className="footer">
      <button className="footer__home-btn">Home</button>
      <button className="footer__charts-btn">Charts</button>
      <button className="footer__home-btn">You</button>
      <button className="footer__settings-btn">Settings</button>
    </navigation>
  );
}

export default FooterBar;