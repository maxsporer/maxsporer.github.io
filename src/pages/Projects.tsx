import React from 'react';
import Navbar from '.././components/Navbar';
import Footer from '../components/Footer';
import useViewport from '.././utils/useViewport';

function Projects() {
  var classNames = require('classnames');
  const { width } = useViewport();
  const isSmBp = width < 720;

  return (
    <div>
      <Navbar />
      <div className={classNames({"p-2 flex": true, "justify-center": isSmBp})}>
        working on it
      </div>
      <Footer />
    </div>
  )
}

export default Projects;