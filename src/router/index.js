import {createBrowserRouter} from 'react-router-dom';
import AccordionPage from "../pages/AccordionPage";
import ButtonPage from "../pages/ButtonPage";

export const router = createBrowserRouter([
    {
      path:"/",
      element:<div>App</div>
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