import React, { Component } from 'react';

function MoodGrid() {
  return (
    <div className="mood-grid">
    <h3>And I am feeling ...</h3>
      <ul className="mood-grid__list">
        <li>
          <button className="mood-grid__btn-well">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.8208332 5.8208335"><defs><linearGradient id="0" x1="488.2" y1="547.74" x2="488.11" y2="537.68" gradientUnits="userSpaceOnUse"><stop stop-color="#ffeb96"/><stop offset="1" stop-color="#fff1b7"/></linearGradient></defs><g transform="translate(0-291.18)"><g transform="matrix(.43294 0 0 .43294-209.18 68.12)"><circle cx="488.27" cy="542.35" r="6.4" fill="url(#0)" transform="translate(1.612-20.413)"/><g transform="translate(-6.818-.4)"><path d="m499.05 523.96c0 .07.783.139.779.207-.11 1.575-1.461 2.821-3.116 2.827-1.648.006-3.01-1.222-3.135-2.788-.006-.074.305-.15.304-.225l2.82-.022z" fill="#f7aa86"/><path d="m493.66 523.64h6.077c.049 0 .088.039.088.088v.385c0 .049-.001.206-.001.206h-6.234c0 0-.001-.157-.001-.206v-.385c0-.049.039-.088.088-.088" fill="#f3f3f3"/></g></g><g transform="translate(-.017)" fill="none" fill-rule="evenodd" stroke="#414141" stroke-linejoin="round" stroke-linecap="round" stroke-width=".146"><path d="m1.177 294.07c.138-.384.719-.384.845 0"/><path d="m3.834 294.07c.138-.384.719-.384.845 0"/></g></g></svg>
          </button>
          Well
        </li>
        <li>
          <button className="mood-grid__btn-ok">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.8208332 5.8208335"><defs><linearGradient gradientUnits="userSpaceOnUse" y2="537.87" x2="481.51" y1="547.94" x1="481.6" id="0"><stop stop-color="#ffeb96"/><stop offset="1" stop-color="#fff1b7"/></linearGradient></defs><g transform="matrix(.43294 0 0 .43294-205.62-231.99)"><circle cx="481.66" cy="542.55" r="6.4" fill="url(#0)"/><g transform="translate(-7.44.975)"><g fill="#414141"><circle r=".6" cy="542.3" cx="485.13"/><circle r=".6" cy="542.3" cx="491.15"/></g><path d="m486.66 544.18h2.912" fill="none" fill-rule="evenodd" stroke="#414141" stroke-linecap="round" stroke-width=".275"/></g></g></svg>
          </button>
          Ok
        </li>
        <li>
          <button className="mood-grid__btn-poorly">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.8208332 5.8208335"><defs><linearGradient gradientUnits="userSpaceOnUse" y2="537.68" x2="488.11" y1="547.74" x1="488.2" id="0"><stop stop-color="#ffeb96"/><stop offset="1" stop-color="#fff1b7"/></linearGradient></defs><g transform="translate(0-291.18)"><g transform="matrix(.29032 0 0 .29032 2.065 208.71)"><g transform="matrix(1.49127 0 0 1.49127-725.23-514.71)"><circle cx="488.27" cy="542.35" r="6.4" fill="url(#0)"/><g fill="#414141"><circle r=".6" cy="542.3" cx="485.18"/><circle r=".6" cy="542.3" cx="491.35"/></g></g><path d="m1.455 298.59c.476-1.323 2.476-1.323 2.91 0" fill="none" fill-rule="evenodd" stroke="#414141" stroke-linejoin="round" stroke-linecap="round" stroke-width=".503"/></g><path d="m400.08 520.08l-6.589 11.492c-1.385 2.43-1.492 5.519 0 8.12 2.242 3.911 7.23 5.263 11.141 3.02 3.911-2.242 5.263-7.23 3.02-11.141l-6.589-11.492c-.218-.38-.765-.38-.983 0" transform="matrix(.05461 0 0 .05461-20.898 266.11)" fill="#8acbef"/></g></svg>
          </button>
          Poorly
        </li>
      </ul>
    </div>
  );
}

export default MoodGrid;