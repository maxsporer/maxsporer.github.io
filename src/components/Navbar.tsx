import React from 'react';
import { Link } from 'react-router-dom';
import useViewport from '.././utils/useViewport';

function Navbar() {
  var classNames = require('classnames');
  const { width } = useViewport();
  const isSmBp = width < 720;
  const liClass = "flex items-center";

  return (
    <div className={classNames({
      "font-josefin mb-8": true,
      "flex-col": isSmBp,
      "flex justify-between": !isSmBp})}
    >
      <div className={classNames({
        "text-4xl": true,
        "flex justify-center": isSmBp})}
      >
        <Link className="text-green-2 hover:text-orange" to="/">Maximilian Sporer</Link>
      </div>
      <ul className={classNames({
        "flex gap-x-4 text-2xl": true,
        "justify-center mt-8": isSmBp})}
      >
        <li className={liClass}><Link className="link-secondary" to="/resume">Resume</Link></li>
        <li className={liClass}><Link className="link-secondary" to="/projects">Projects</Link></li>
        <li className={liClass}><Link className="link-secondary" to="/fritz">Fritz</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;