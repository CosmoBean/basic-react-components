import {createBrowserRouter} from 'react-router-dom';
import AccordionPage from "../pages/AccordionPage";
import ButtonPage from "../pages/ButtonPage";
import App from '../App';

export const router = createBrowserRouter([
    {
      path:"/",
      element:<App />
    },
    {
      path:"/button",
      element:<ButtonPage />
    },
    {
      path:'/accordion',
      element: <AccordionPage />
    },
  ])