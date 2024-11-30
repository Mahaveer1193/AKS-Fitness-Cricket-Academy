import React from 'react'

import {
    createBrowserRouter
  } from "react-router-dom";
import App from '../App';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
const router = createBrowserRouter([

        {

            path:"/",
            element:<App/>,

            children: [
                {
                  path: "header",
                  element: < Header/>,
                },

                {
                    path: "content",
                    element: < Content/>,
                  },
                  {
                    path: "footer",
                    element: < Footer/>,
                  },
              ],

        }

        

])

export default projectrouts
