import React from 'react';
import { useState } from 'react';
import useViewport from '.././utils/useViewport';

const Job = (props:any) => {
  var classNames = require('classnames');
  const {
    startOpen,
    title,
    company,
    start,
    end,
    bodyParts
  } = props;
  const [open, setOpen] = useState(startOpen);
  const { width } = useViewport();
  const isSmBp = width < 680;
  const isXsBp = width < 530;

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setOpen(!open)}
        className={classNames({
          "m-1": true,
          "flex justify-between hover:text-tertiary": !isSmBp,
          "flex flex-col": isSmBp
        })}
      >
        <div className={classNames({
          "font-medium text-lg flex": true,
          "gap-x-2": !isXsBp,
          "flex-col": isXsBp})}
        >
          <div className="flex justify-start">{title},</div>
          <div className="flex justify-start">
            {company}
          </div>
        </div>
        <div className={classNames({
          "flex gap-x-1": true,
          "pl-2": isXsBp})}
        >
          <div className="text-center min-w-[69px]">{start}</div> - <div className="text-center min-w-[69px]">{end}</div>
        </div>
      </button>
      <ul className={classNames({
        "hidden": !open,
        "flex flex-col gap-y-4 px-4 py-2": true,
        "p-3": isXsBp})}
      >
        {bodyParts.map((b:string) => <li>{b}</li>)}
      </ul>
    </div>
  )
}

export default Job;
