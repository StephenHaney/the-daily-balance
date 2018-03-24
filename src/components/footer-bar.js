import React, { Component } from 'react';

function FooterBar() {
  return (
    <navigation className="footer">
      <button className="footer__btn-home footer__btn--selected">Home</button>
      <button className="footer__btn-charts">Charts</button>
      <button className="footer__btn-you">You</button>
      <button className="footer__btn-settings">Settings</button>
    </navigation>
  );
}

export default FooterBar;