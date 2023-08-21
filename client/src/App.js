import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './pages/about';
import Checkin from './pages/checkin';
import Checkout from './pages/checkt';
import DelAcc from './pages/delacc';
import Login from './pages/forgotpw';
import Home from './pages/home';
import Register from './pages/register';
import ToS from './pages/tos';
import Worklog from './pages/worklog';
import Setting from './pages/settings';

function setTitle(title){
  document.title = title;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home setTitle={setTitle} />
  },
  {
    path: '/about',
    element: <About setTitle={setTitle} />
  },
  {
    path: '/tos',
    element: <ToS setTitle={setTitle} />
  },
  {
    path: '/checkin',
    element: <Checkin setTitle={setTitle} />
  },
  {
    path: '/checkout',
    element: <Checkout setTitle={setTitle} />
  },
  {
    path: '/delete',
    element: <DelAcc setTitle={setTitle} />
  },
  {
    path: '/login',
    element: <Home setTitle={setTitle} />
  },
  {
    path: '/newuser',
    element: <Register setTitle={setTitle} />
  },
  {
    path: '/worklog',
    element: <Worklog setTitle={setTitle} />
  },
  {
    path: '/reset-password',
    element: <Login setTitle={setTitle} />
  },
  {
    path: '/settings',
    element: <Setting setTitle={setTitle} />
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;