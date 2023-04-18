import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import FAS from './pages/FAS';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "resume",
    element: <Resume />
  },
  {
    path: "projects",
    element: <Projects />
  },
  {
    path: "fritz",
    element: <FAS />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="w-10/12 mx-auto my-14 max-w-[750px] font-ptsans">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
