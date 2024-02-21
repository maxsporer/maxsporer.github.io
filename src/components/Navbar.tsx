import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useViewport from '.././utils/useViewport';
import resume from '.././files/Resume.pdf';

function Navbar() {
  var classNames = require('classnames');

  const { width } = useViewport();
  const isSmBp = width < 720;
  const liClass = "flex items-center";

  const loc = useLocation();

  return (
    <div className={classNames({
      "font-head mb-8": true,
      "flex-col": isSmBp,
      "flex justify-between": !isSmBp})}
    >
      <div className={classNames({
        "text-4xl": true,
        "flex justify-center": isSmBp})}
      >
        <Link className="text-primary" to="/">maximilian sporer</Link>
      </div>
      <ul className={classNames({
        "flex gap-x-4 text-2xl": true,
        "justify-center mt-8": isSmBp})}
      >
        <li className={liClass}>
          <a
            className={classNames({
            "link-secondary": loc.pathname !== '/resume',
            "text-secondary": loc.pathname === '/resume'
            })}
            href={resume}
          >
            resume
          </a>
        </li>
        {/* <li className={liClass}>
          <Link
            className={classNames({
            "link-secondary": loc.pathname != '/projects',
            "text-secondary": loc.pathname == '/projects'
            })}
            to="/projects">projects</Link>
        </li> */}
        {/* <li className={liClass}>
          <Link
            className={classNames({
            "link-secondary": loc.pathname !== '/fas',
            "text-secondary": loc.pathname === '/fas'
            })}
            to="/fas">fas</Link>
        </li> */}
      </ul>
    </div>
  )
}

export default Navbar;
