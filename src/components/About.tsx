import React from 'react';
import maxSporer from '.././images/max-sporer.jpg';
import useViewport from '.././utils/useViewport';

function About() {
  var classNames = require('classnames');
  const { width } = useViewport();
  const isSmBp = width < 720;

  return (
    <div className="text-lg p-2">
      <div className={classNames({
        "flex": !isSmBp,
        "flex-col": isSmBp})}
      >
        <div className={classNames({
          "w-5/12 px-4 max-h-[270px]": !isSmBp,
          "flex justify-center max-h-[300px]": isSmBp})}
        >
          <div className={classNames({
            "flex max-h-full w-auto": !isSmBp,
            "w-2/3 flex justify-center": isSmBp})}
          >
            <img className={classNames({"max-h-full w-auto object-contain": true})} src={maxSporer} alt="Max Sporer" />
          </div>
        </div>
        <div className={classNames({
          "w-7/12 px-4 flex flex-col justify-center relative gap-y-4": !isSmBp,
          "pt-8 flex flex-col gap-y-4": isSmBp})}
        >
          <div className="font-head text-primary text-3xl">
            about
          </div>
          <div>
            Hello! I am a software engineer at <a className="link-primary" href="https://www.boozallen.com/">Booz Allen</a>. I live in Brooklyn, NY and have experience with front end development as well as data science and analysis.
          </div>
        </div>
      </div>
      <div className="pt-8">
        I previously worked at <a className="link-primary" href="https://www.yext.com/">Yext</a> as a Software Engineer. Prior to that, I was a Data Analyst at <a className="link-primary" href="https://www.linkit.com/">LinkIt</a>. I graduated from Princeton in 2021 with a degree in Operations Research and Financial Engineering. I grew up in Morristown, NJ and my hobbies include running, kickboxing, and playing the guitar.
      </div>
      <div className="pt-4">
        You can contact me at maxsporer (at) gmail (dot) com
      </div>
      <div className="pt-4">
      Thanks to <a className="link-primary" href="https://czye17.github.io/">Chris Ye</a> for inspiring the design of this site.
      </div>
    </div>
  )
}

export default About;