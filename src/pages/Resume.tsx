import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '.././components/Navbar';
import Footer from '.././components/Footer';
import Dropdown from '.././components/Dropdown';
import Job from '.././components/Job';
import useViewport from '.././utils/useViewport';
import resume from '.././files/Resume.pdf';

const downloadIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15 10h4l-7 8-7-8h4v-10h6v10zm3.213-8.246l-1.213 1.599c2.984 1.732 5 4.955 5 8.647 0 5.514-4.486 10-10 10s-10-4.486-10-10c0-3.692 2.016-6.915 5-8.647l-1.213-1.599c-3.465 2.103-5.787 5.897-5.787 10.246 0 6.627 5.373 12 12 12s12-5.373 12-12c0-4.349-2.322-8.143-5.787-10.246z"/>
  </svg>
)

const outlinkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/>
  </svg>
)

const headClass = "text-xl font-head"
const subHeadClass = "text-lg text-primary font-head"

const skillsBody = (
  <ul className="p-2 flex flex-col gap-y-2 min-w-[600px]">
    <li>React, Javascript, Typescript, CSS3, HTML5</li>
    <li>Python (Pandas, Scikit-Learn, TensorFlow/Keras, XLWings)</li>
    <li>C, Java, Git, Google Cloud CP</li>
    <li>Excel</li>
  </ul>
)

const profBody = (
  <div className="flex flex-col gap-y-4">
    <Job
      startOpen={true}
      title="Software Engineer"
      company="Yext"
      start="May 2022"
      end="Jan 2023"
      bodyParts={[
        "New York, NY",
        "Built and/or maintained websites using React and Closure with a combined view count of over 104,000,000+ page views for over 50+ clients in the financial services and restaurant industries among others",
        "Responsible for front-end mobile first web development with a focus on search engine optimization (SEO), page speed, and web accessibility across different devices and browsers"
      ]}
    />
    <Job
      startOpen={false}
      title="Data Analyst"
      company="LinkIt"
      start="July 2021"
      end="Apr 2022"
      bodyParts={[
        "New York, NY",
        "Developed Python and SQL scripts to automate Excel models in order to increase production of student analytics reports",
        "Compiled reports analyzing and capturing trends in student test performance"
      ]}
    />
    <Job
      startOpen={false}
      title="Tutor"
      company="AndyPrep"
      start="Aug 2020"
      end="Jan 2021"
      bodyParts={[
        "Seoul, South Korea",
        "Tutored high school students in Computer Science and Physics"
      ]}
    />
    <Job
      startOpen={false}
      title="Web Developer Intern"
      company="JoiKid Studios"
      start="June 2020"
      end="July 2020"
      bodyParts={[
        "Remote",
        "Transferred Firebase web application (educational computer games) to Ionic framework for simultaneous iOS and Android deployment"
      ]}
    />
    <Job
      startOpen={false}
      title="Data Science Intern"
      company="DMI Finance Pvt. Ltd."
      start="June 2020"
      end="July 2020"
      bodyParts={[
        "New Delhi, India",
        "Implemented scoring system using SQL and Python for DMI + Samsung Finance Plus in order to optimize lending policy"
      ]}
    />
  </div>
)

function Resume() {
  var classNames = require('classnames');
  const { width } = useViewport();
  const isSmBp = width < 720;

  const eduBody = (
    <>
      <div className={classNames({
        "flex": true,
        "justify-between": !isSmBp,
        "flex-col": isSmBp})}
      >
        <div className="font-medium text-lg">
          Princeton University
        </div>
        <div className="flex gap-x-1">
          <div className="text-center min-w-[69px]">Sep 2017</div><div className="text-center"> - </div><div className="text-center min-w-[69px]">June 2021</div>
        </div>
      </div>
      <ul className="flex flex-col p-2 gap-y-2">
        <li>Princeton, NJ</li>
        <li>Bachelor of Science in Engineering</li>
        <li>Operations Research and Financial Engineering (ORFE)</li>
        <li>GPA: 3.4 | Departmental GPA: 3.6</li>
        <li>
          <div>Coursework</div>
          <div className="p-2">
            Algorithms and Data Structures, Programming Systems, Computer Vision, Analysis of Big Data, Networks, FinTech, eCommerce, Econometrics, Stochastic Portfolio Optimization, Monte Carlo Simulations
          </div>
          </li>
      </ul>
    </>
  )

  return (
    <div>
      <Navbar />
      <div className="p-2">
        <div className="flex items-center gap-x-4">
          <div className="font-head text-3xl">
            resume
          </div>
          <a className="hover:text-secondary" href={resume}>
            {outlinkIcon}
          </a>
          <a className="hover:text-secondary" href={require(".././files/Resume.pdf")} download="max_sporer_resume">
            {downloadIcon}
          </a>
        </div>
        <div className="flex flex-col px-2 py-4 gap-y-6">
          <div>
            <Dropdown head={<>Skills</>} body={skillsBody} />
          </div>
          <div>
            <Dropdown head={<>Professional Experience</>} body={profBody} />
          </div>
          <div>
            <Dropdown head={<>Education</>} body={eduBody} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Resume;