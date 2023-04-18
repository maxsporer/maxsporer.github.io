import React from 'react';
import maxSporer from '.././images/max-sporer.jpg';
import useViewport from '.././utils/useViewport';

function About() {
  var classNames = require('classnames');
  const { width } = useViewport();
  const isSmBp = width < 720;

  return (
    <div className="text-lg">
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
            <img className={classNames({"max-h-full w-auto object-contain": true})} src={maxSporer} alt="picture of Max Sporer" />
          </div>
        </div>
        <div className={classNames({
          "w-7/12 px-4 flex flex-col justify-center relative gap-y-4": !isSmBp,
          "pt-8 flex flex-col gap-y-4": isSmBp})}
        >
          <div className="font-josefin text-green-2 text-3xl">
            About
          </div>
          <div>
            Hello! I am a software engineer open to work. I am based in New York, NY and have experience with front end development in React. I'm also interested in working in ML and AI.
          </div>
        </div>
      </div>
      <div className="pt-8">
        I previously worked at <a className="link-primary" href="https://www.yext.com/">Yext</a> as a Software Engineer. Prior to that, I was a Data Analyst at <a className="link-primary" href="https://www.linkit.com/">LinkIt</a>. I graduated from Princeton in 2021 with a degree in Operations Research and Financial Engineering. I grew up in Morristown, NJ and my hobbies include running, kickboxing, and playing the guitar and piano.
      </div>
      <div className="pt-8">
        Thank you to <a className="link-primary" href="https://czye17.github.io/">Chris Ye</a> for letting me borrow his website layout.
      </div>
    </div>
  )
}

export default About;