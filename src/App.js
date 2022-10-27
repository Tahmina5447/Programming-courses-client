
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Courses from './Components/Courses/Courses';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Faq from './Components/Faq/Faq.js';
import Home from './Components/Home/Home';
import Login from './Components/LogIn/Login';
import PremiumAccess from './Components/Checkout/Checkout';
import Registration from './Components/Registration/Registration';
import Main from './Main/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Checkout from './Components/Checkout/Checkout';





const router=createBrowserRouter([
  {
    path:'/',
    errorElement:<ErrorPage></ErrorPage>,
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/courses',
        element:<Courses></Courses>
      },
     
      {
        path:'/checkout/:id',
        loader:({params})=>fetch(`https://server-programming-courses-tahminakhatun99322-gmailcom.vercel.app/details/${params.id}`),
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
     
      {
        path:'/registration',
        element:<Registration></Registration>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/faq',
        element:<Faq></Faq>
      },
      {
        path:'/courses/:id',
        loader:({params})=>fetch(`https://server-programming-courses-tahminakhatun99322-gmailcom.vercel.app/details/${params.id}`),
        element:<CourseDetails></CourseDetails>
      }
    ]
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
