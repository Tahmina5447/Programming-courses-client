
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Courses from './Components/Courses/Courses';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Login from './Components/LogIn/Login';
import PremiumAccess from './Components/PremiumAccess/PremiumAccess';
import Registration from './Components/Registration/Registration';
import Main from './Main/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';





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
        path:'/premium/:id',
        loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`),
        element:<PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>
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
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/courses/:id',
        loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`),
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
